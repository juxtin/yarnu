/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

import type {TurboModule} from '../../TurboModule/RCTExport';
import * as TurboModuleRegistry from '../../TurboModule/TurboModuleRegistry';

export interface Spec extends TurboModule {
  +fetchSegment: (
    segmentId: number,
    options: Object, // flowlint-line unclear-type: off
    callback: (error: ?Object) => void, // flowlint-line unclear-type: off
  ) => void;
  +getSegment?: (
    segmentId: number,
    options: Object, // flowlint-line unclear-type: off
    callback: (error: ?Object, path: ?string) => void, // flowlint-line unclear-type: off
  ) => void;
}

export default (TurboModuleRegistry.getEnforcing<Spec>('SegmentFetcher'): Spec);
