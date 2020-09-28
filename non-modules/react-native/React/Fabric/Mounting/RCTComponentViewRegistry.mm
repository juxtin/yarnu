/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "RCTComponentViewRegistry.h"

#import <Foundation/NSMapTable.h>
#import <React/RCTAssert.h>

#import "RCTImageComponentView.h"
#import "RCTParagraphComponentView.h"
#import "RCTViewComponentView.h"

#import <better/map.h>

using namespace facebook::react;

#define LEGACY_UIMANAGER_INTEGRATION_ENABLED 1

#ifdef LEGACY_UIMANAGER_INTEGRATION_ENABLED

#import <React/RCTBridge+Private.h>
#import <React/RCTUIManager.h>

/**
 * Warning: This is a total hack and temporary solution.
 * Unless we have a pure Fabric-based implementation of UIManager commands
 * delivery pipeline, we have to leverage existing infra. This code tricks
 * legacy UIManager by registering all Fabric-managed views in it,
 * hence existing command-delivery infra can reach "foreign" views using
 * the old pipeline.
 */
@interface RCTUIManager ()
- (NSMutableDictionary<NSNumber *, UIView *> *)viewRegistry;
@end

@interface RCTUIManager (Hack)

+ (void)registerView:(UIView *)view;
+ (void)unregisterView:(UIView *)view;

@end

@implementation RCTUIManager (Hack)

+ (void)registerView:(UIView *)view
{
  if (!view) {
    return;
  }

  RCTUIManager *uiManager = [[RCTBridge currentBridge] uiManager];
  view.reactTag = @(view.tag);
  [uiManager.viewRegistry setObject:view forKey:@(view.tag)];
}

+ (void)unregisterView:(UIView *)view
{
  if (!view) {
    return;
  }

  RCTUIManager *uiManager = [[RCTBridge currentBridge] uiManager];
  view.reactTag = nil;
  [uiManager.viewRegistry removeObjectForKey:@(view.tag)];
}

@end

#endif

const NSInteger RCTComponentViewRegistryRecyclePoolMaxSize = 1024;

@implementation RCTComponentViewRegistry {
  better::map<Tag, RCTComponentViewDescriptor> _registry;
  better::map<ComponentHandle, std::vector<RCTComponentViewDescriptor>> _recyclePool;
}

- (instancetype)init
{
  if (self = [super init]) {
    _componentViewFactory = [RCTComponentViewFactory standardComponentViewFactory];

    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(handleApplicationDidReceiveMemoryWarningNotification)
                                                 name:UIApplicationDidReceiveMemoryWarningNotification
                                               object:nil];

    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(0.1 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
      // Calling this a bit later, when the main thread is probably idle while JavaScript thread is busy.
      [self preallocateViewComponents];
    });
  }

  return self;
}

- (void)preallocateViewComponents
{
  // This data is based on empirical evidence which should represent the reality pretty well.
  // Regular `<View>` has magnitude equals to `1` by definition.
  std::vector<std::pair<ComponentHandle, float>> componentMagnitudes = {
      {[RCTViewComponentView componentDescriptorProvider].handle, 1},
      {[RCTImageComponentView componentDescriptorProvider].handle, 0.3},
      {[RCTParagraphComponentView componentDescriptorProvider].handle, 0.3},
  };

  // `complexity` represents the complexity of a typical surface in a number of `<View>` components (with Flattening
  // enabled).
  float complexity = 100;

  // The whole process should not take more than 10ms in the worst case, so there is no need to split it up.
  for (const auto &componentMagnitude : componentMagnitudes) {
    for (int i = 0; i < complexity * componentMagnitude.second; i++) {
      [self optimisticallyCreateComponentViewWithComponentHandle:componentMagnitude.first];
    }
  }
}

- (RCTComponentViewDescriptor)dequeueComponentViewWithComponentHandle:(ComponentHandle)componentHandle tag:(Tag)tag
{
  RCTAssertMainQueue();

  RCTAssert(
      _registry.find(tag) == _registry.end(),
      @"RCTComponentViewRegistry: Attempt to dequeue already registered component.");

  auto componentViewDescriptor = [self _dequeueComponentViewWithComponentHandle:componentHandle];
  componentViewDescriptor.view.tag = tag;

  _registry.insert({tag, componentViewDescriptor});

#ifdef LEGACY_UIMANAGER_INTEGRATION_ENABLED
  [RCTUIManager registerView:componentViewDescriptor.view];
#endif

  return componentViewDescriptor;
}

- (void)enqueueComponentViewWithComponentHandle:(ComponentHandle)componentHandle
                                            tag:(Tag)tag
                        componentViewDescriptor:(RCTComponentViewDescriptor)componentViewDescriptor
{
  RCTAssertMainQueue();

  RCTAssert(
      _registry.find(tag) != _registry.end(), @"RCTComponentViewRegistry: Attempt to enqueue unregistered component.");

#ifdef LEGACY_UIMANAGER_INTEGRATION_ENABLED
  [RCTUIManager unregisterView:componentViewDescriptor.view];
#endif

  _registry.erase(tag);
  componentViewDescriptor.view.tag = 0;
  [self _enqueueComponentViewWithComponentHandle:componentHandle componentViewDescriptor:componentViewDescriptor];
}

- (void)optimisticallyCreateComponentViewWithComponentHandle:(ComponentHandle)componentHandle
{
  RCTAssertMainQueue();
  [self _enqueueComponentViewWithComponentHandle:componentHandle
                         componentViewDescriptor:[self.componentViewFactory
                                                     createComponentViewWithComponentHandle:componentHandle]];
}

- (RCTComponentViewDescriptor const &)componentViewDescriptorWithTag:(Tag)tag
{
  RCTAssertMainQueue();
  auto iterator = _registry.find(tag);
  RCTAssert(iterator != _registry.end(), @"RCTComponentViewRegistry: Attempt to query unregistered component.");
  return iterator->second;
}

- (nullable UIView<RCTComponentViewProtocol> *)findComponentViewWithTag:(Tag)tag
{
  RCTAssertMainQueue();
  auto iterator = _registry.find(tag);
  if (iterator == _registry.end()) {
    return nil;
  }
  return iterator->second.view;
}

- (RCTComponentViewDescriptor)_dequeueComponentViewWithComponentHandle:(ComponentHandle)componentHandle
{
  RCTAssertMainQueue();
  auto &recycledViews = _recyclePool[componentHandle];

  if (recycledViews.size() == 0) {
    return [self.componentViewFactory createComponentViewWithComponentHandle:componentHandle];
  }

  auto componentViewDescriptor = recycledViews.back();
  recycledViews.pop_back();
  return componentViewDescriptor;
}

- (void)_enqueueComponentViewWithComponentHandle:(ComponentHandle)componentHandle
                         componentViewDescriptor:(RCTComponentViewDescriptor)componentViewDescriptor
{
  RCTAssertMainQueue();
  auto &recycledViews = _recyclePool[componentHandle];

  if (recycledViews.size() > RCTComponentViewRegistryRecyclePoolMaxSize) {
    return;
  }

  [componentViewDescriptor.view prepareForRecycle];

  recycledViews.push_back(componentViewDescriptor);
}

- (void)handleApplicationDidReceiveMemoryWarningNotification
{
  _recyclePool.clear();
}

@end
