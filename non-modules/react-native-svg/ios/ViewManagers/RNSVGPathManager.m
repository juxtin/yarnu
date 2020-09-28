/**
 * Copyright (c) 2015-present, Horcrux.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "RNSVGPathManager.h"

#import "RNSVGPath.h"
#import "RCTConvert+RNSVG.h"

@implementation RNSVGPathManager

RCT_EXPORT_MODULE()

- (RNSVGRenderable *)node
{
  return [RNSVGPath new];
}

RCT_EXPORT_VIEW_PROPERTY(d, RNSVGCGPath)

@end
