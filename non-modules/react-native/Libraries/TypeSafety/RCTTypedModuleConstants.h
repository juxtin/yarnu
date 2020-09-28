/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#include <utility>

#import <Foundation/Foundation.h>

#import <React/RCTBridgeModule.h>
#import <React/RCTDefines.h>

/**
 * Interop type layer for RN's exportedConstants and the C++ structs generated by our typesafety codegen.
 *
 * The NativeModuleSpec will define a constantsToExport method which you can implement as follows:
 *
 * - (nonnull ModuleConstants<JS::Constants>)constantsToExport
 * {
 *   return typedConstants<JS::Constants>({ ... });
 * }
 */

// Internal container for module constants. Do not use yourself directly, instead use the typedConstants helpers below.
@interface _RCTTypedModuleConstants<StructType> : NSDictionary<NSString *, id>

+ (instancetype)newWithUnsafeDictionary:(NSDictionary<NSString *, id> *)dictionary;

@end

namespace facebook {
namespace react {

// Objective-C doesn't allow arbitrary types in its lightweight generics, only object and block types. We can work
// around that by having the struct type we care about be a block-argument. The block never exists at runtime.
template<typename T>
using ModuleConstants = _RCTTypedModuleConstants<void (^)(T)> *;

template<typename T>
ModuleConstants<T> typedConstants(typename T::Builder::Input &&value) {
  typename T::Builder builder(std::move(value));
  return [_RCTTypedModuleConstants newWithUnsafeDictionary:builder.buildUnsafeRawValue()];
}

} }
