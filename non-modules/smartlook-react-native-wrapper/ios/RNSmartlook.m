
#import "RNSmartlook.h"
#import "Smartlook.h"

@implementation RNSmartlook

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE()

// MARK: - Setup and Run

RCT_EXPORT_METHOD(setup:(NSString *)key framerate:(nonnull NSNumber*)framerate)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        // NSLog(@"Smartlook: '%@'", @"setup");
        [Smartlook setupWithKey:key options:@{ SLSetupOptionFramerateKey : framerate, @"$$bridge$$": @"react-native"}];
    });
}

RCT_EXPORT_METHOD(setupAndStartRecording:(NSString *)key framerate:(nonnull NSNumber*)framerate)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        // NSLog(@"Smartlook: '%@'", @"setupAndStartRecording");
        [Smartlook setupWithKey:key options:@{ SLSetupOptionFramerateKey : framerate, @"$$bridge$$": @"react-native"}];
        [Smartlook startRecording];
    });
}

RCT_EXPORT_METHOD(setUserIdentifier:(NSString*)idKey map:(NSDictionary*)map)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        // NSLog(@"Smartlook: '%@'", @"setUserIdentifier");
        if (idKey) {
            [Smartlook setUserIdentifier:idKey];
        }
        if (map) {
            [map enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull key, id  _Nonnull obj, BOOL * _Nonnull stop) {
                NSString *keyString = [NSString stringWithFormat:@"%@", key];
                NSString *valueString = [NSString stringWithFormat:@"%@", obj];
                [Smartlook setSessionPropertyValue:valueString forName:keyString];
            }];
        };
    });
}

//MARK: - START & STOP

RCT_EXPORT_METHOD(startRecording)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        // NSLog(@"Smartlook: '%@'", @"startRecording");
        [Smartlook startRecording];
    });
}

RCT_EXPORT_METHOD(stopRecording)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        // NSLog(@"Smartlook: '%@'", @"stopRecording");
        [Smartlook stopRecording];
    });
}

RCT_EXPORT_METHOD(isRecording:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    // NSLog(@"Smartlook: '%@'", @"isRecording");
    BOOL isRecording = [Smartlook isRecording];
    NSNumber *boolNumber = [NSNumber numberWithBool:isRecording];
    resolve(boolNumber);
}

//MARK: - EVENTS

RCT_EXPORT_METHOD(startTimedCustomEvent:(NSString*)name map:(NSDictionary*)map resolve:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    // NSLog(@"Smartlook: '%@'", @"startTimedCustomEvent");
    NSUUID * key = [Smartlook startTimedCustomEventWithName:name props:map];
    NSString *keyString = [key UUIDString];
    resolve(keyString);
}

RCT_EXPORT_METHOD(stopTimedCustomEvent:(NSString*)key map:(NSDictionary*)map)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        // NSLog(@"Smartlook: '%@'", @"stopTimedCustomEvent");
        NSUUID *uuidKey = [[NSUUID alloc] initWithUUIDString:key];
        [Smartlook trackTimedCustomEventWithEventId:uuidKey props:map];
    });
}

RCT_EXPORT_METHOD(cancelTimedCustomEvent:(NSString*)key reason:(NSString *)reason map:(NSDictionary*)map)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        // NSLog(@"Smartlook: '%@'", @"cancelTimedCustomEvent");
        NSUUID *uuidKey = [[NSUUID alloc] initWithUUIDString:key];
        [Smartlook trackTimedCustomEventCancelWithEventId:uuidKey reason:reason props:map];
    });
}

RCT_EXPORT_METHOD(trackCustomEvent:(NSString*)key map:(NSDictionary*)map)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        // NSLog(@"Smartlook: '%@'", @"trackCustomEvent");
        [Smartlook trackCustomEventWithName:key props:map];
    });
}

RCT_EXPORT_METHOD(trackNavigationEvent:(nonnull NSString*)controllerId direction:(NSString *)direction)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        // NSLog(@"Smartlook: '%@'", @"trackNavigationEvent");
        NSString *cid = [NSString stringWithFormat:@"%@", controllerId];
        NSString *dir = [[NSString stringWithFormat:@"%@", direction] lowercaseString];
        BOOL isExit = [dir isEqualToString:@"exit"] || [dir isEqualToString:@"stop"];
        SLNavigationType navType = isExit ? SLNavigationTypeExit: SLNavigationTypeEnter;
        [Smartlook trackNavigationEventWithControllerId:cid type:navType];
    });
}

// MARK: - FULL SCREEN SENSITIVE

RCT_EXPORT_METHOD(startFullscreenSensitiveMode)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        // NSLog(@"Smartlook: '%@'", @"startFullscreenSensitiveMode");
        [Smartlook beginFullscreenSensitiveMode];
    });
}

RCT_EXPORT_METHOD(stopFullscreenSensitiveMode)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        // NSLog(@"Smartlook: '%@'", @"stopFullscreenSensitiveMode");
        [Smartlook endFullscreenSensitiveMode];
    });
}

RCT_EXPORT_METHOD(isFullscreenSensitiveModeActive:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
{
    // NSLog(@"Smartlook: '%@'", @"isFullscreenSensitiveModeActive");
    BOOL isFullscreenSensitiveActive = [Smartlook isFullscreenSensitiveModeActive];
    NSNumber *boolNumber = [NSNumber numberWithBool:isFullscreenSensitiveActive];
    resolve(boolNumber);
}

// MARK: - BLACKLIST VIEWS

void markViewWithSubviewsAsSensitive(UIView *view)
{
    view.slSensitive = YES;
    for (UIView *subview in view.subviews) {
        markViewWithSubviewsAsSensitive(subview);
    };
}


RCT_EXPORT_METHOD(registerBlacklistedView:(nonnull NSNumber*)tag)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        // NSLog(@"Smartlook: '%@'", @"registerBlacklistedView");
        UIView* view = [self.bridge.uiManager viewForReactTag:tag];
        markViewWithSubviewsAsSensitive(view);
    });
}

void unmarkViewWithSubviewsAsSensitive(UIView *view)
{
    view.slSensitive = NO;
    for (UIView *subview in view.subviews) {
        unmarkViewWithSubviewsAsSensitive(subview);
    };
}

RCT_EXPORT_METHOD(unregisterBlacklistedView:(nonnull NSNumber*)tag)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        // NSLog(@"Smartlook: '%@'", @"unregisterBlacklistedView");
        UIView* view = [self.bridge.uiManager viewForReactTag:tag];
        unmarkViewWithSubviewsAsSensitive(view);
    });
}

// MARK: - GLOBAL EVENT PROPERTIES

RCT_EXPORT_METHOD(removeAllGlobalEventProperties)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        // NSLog(@"Smartlook: '%@'", @"removeAllGlobalEventProperties");
        [Smartlook clearGlobalEventProperties];
    });
}

RCT_EXPORT_METHOD(removeGlobalEventProperty:(NSString*)key)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        // NSLog(@"Smartlook: '%@'", @"removeGlobalEventProperty");
        [Smartlook removeGlobalEventPropertyForName:key];
    });
}

RCT_EXPORT_METHOD(setGlobalEventProperties:(NSDictionary*)map immutable:(BOOL)immutable)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        // NSLog(@"Smartlook: '%@'", @"setGlobalEventProperties");
        SLPropertyOption options = immutable ? SLPropertyOptionImmutable : SLPropertyOptionDefaults;
        [map enumerateKeysAndObjectsUsingBlock:^(id  _Nonnull key, id  _Nonnull obj, BOOL * _Nonnull stop) {
            NSString *keyString = [NSString stringWithFormat:@"%@", key];
            NSString *valueString = [NSString stringWithFormat:@"%@", obj];
            [Smartlook setGlobalEventPropertyValue:valueString forName:keyString withOptions:options];
        }];
    });
}

RCT_EXPORT_METHOD(setGlobalEventProperty:(NSString*)key value:(NSString*)value immutable:(BOOL)immutable)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        // NSLog(@"Smartlook: '%@'", @"setGlobalEventProperty");
        SLPropertyOption options = immutable ? SLPropertyOptionImmutable : SLPropertyOptionDefaults;
        NSString *keyString = [NSString stringWithFormat:@"%@", key];
        NSString *valueString = [NSString stringWithFormat:@"%@", value];
        [Smartlook setGlobalEventPropertyValue:valueString forName:keyString withOptions:options];
    });
}

// MARK: - OTHERS

RCT_EXPORT_METHOD(getDashboardSessionUrl:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    // NSLog(@"Smartlook: '%@'", @"getDashboardSessionUrl");
    resolve([Smartlook getDashboardSessionURL].absoluteString);
}

RCT_EXPORT_METHOD(setReferrer:(NSString *)referrer source:(NSString*)source)
{
    // NSLog(@"Smartlook: '%@'", @"setReferrer");
    // not supported yet
}

RCT_EXPORT_METHOD(enableCrashlytics:(BOOL*)enabled)
{
    // NSLog(@"Smartlook: '%@'", @"enableCrashlytics");
    // not supported in the current Smartlook version
}

@end
