/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * <p>This source code is licensed under the MIT license found in the LICENSE file in the root
 * directory of this source tree.
 *
 * <p>Generated by an internal genrule from Flow types.
 *
 * @generated
 * @nolint
 */

package com.facebook.fbreact.specs;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReactModuleWithSpec;
import com.facebook.react.common.build.ReactBuildConfig;
import com.facebook.react.turbomodule.core.interfaces.TurboModule;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
import javax.annotation.Nullable;

public abstract class NativeStatusBarManagerSpec extends ReactContextBaseJavaModule implements ReactModuleWithSpec, TurboModule {
  public NativeStatusBarManagerSpec(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @ReactMethod
  public abstract void setNetworkActivityIndicatorVisible(boolean visible);

  @ReactMethod
  public abstract void setTranslucent(boolean translucent);

  @ReactMethod
  public abstract void getHeight(Callback callback);

  @ReactMethod
  public abstract void removeListeners(double count);

  @ReactMethod
  public abstract void setColor(double color, boolean animated);

  @ReactMethod
  public abstract void setHidden(boolean hidden, @Nullable String withAnimation);

  @ReactMethod
  public abstract void setStyle(@Nullable String statusBarStyle, Boolean animated);

  @ReactMethod
  public abstract void addListener(String eventType);

  protected abstract Map<String, Object> getTypedExportedConstants();

  @Override
  public final @Nullable Map<String, Object> getConstants() {
    Map<String, Object> constants = getTypedExportedConstants();
    if (ReactBuildConfig.DEBUG || ReactBuildConfig.IS_INTERNAL_BUILD) {
      Set<String> obligatoryFlowConstants = new HashSet<>(Arrays.asList(
          "DEFAULT_BACKGROUND_COLOR",
          "HEIGHT"
      ));
      Set<String> optionalFlowConstants = new HashSet<>();
      Set<String> undeclaredConstants = new HashSet<>(constants.keySet());
      undeclaredConstants.removeAll(obligatoryFlowConstants);
      undeclaredConstants.removeAll(optionalFlowConstants);
      if (!undeclaredConstants.isEmpty()) {
        throw new IllegalStateException(String.format("Native Module Flow doesn't declare constants: %s", undeclaredConstants));
      }
      undeclaredConstants = obligatoryFlowConstants;
      undeclaredConstants.removeAll(constants.keySet());
      if (!undeclaredConstants.isEmpty()) {
        throw new IllegalStateException(String.format("Native Module doesn't fill in constants: %s", undeclaredConstants));
      }
    }
    return constants;
  }
}
