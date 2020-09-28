/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.facebook.react.modules.debug;

import com.facebook.fbreact.specs.NativeSourceCodeSpec;
import com.facebook.infer.annotation.Assertions;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;
import java.util.HashMap;
import java.util.Map;

/**
 * Module that exposes the URL to the source code map (used for exception stack trace parsing) to JS
 */
@ReactModule(name = SourceCodeModule.NAME)
public class SourceCodeModule extends NativeSourceCodeSpec {

  public static final String NAME = "SourceCode";

  public SourceCodeModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return NAME;
  }

  @Override
  protected Map<String, Object> getTypedExportedConstants() {
    HashMap<String, Object> constants = new HashMap<>();

    String sourceURL =
        Assertions.assertNotNull(
            getReactApplicationContext().getCatalystInstance().getSourceURL(),
            "No source URL loaded, have you initialised the instance?");

    constants.put("scriptURL", sourceURL);
    return constants;
  }
}
