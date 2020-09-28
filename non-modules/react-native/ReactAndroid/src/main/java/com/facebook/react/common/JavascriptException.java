/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.facebook.react.common;

import javax.annotation.Nullable;

/**
 * A JS exception that was propagated to native. In debug mode, these exceptions are normally shown
 * to developers in a redbox.
 */
public class JavascriptException extends RuntimeException
    implements HasJavascriptExceptionMetadata {

  private @Nullable String extraDataAsJson;

  public JavascriptException(String jsStackTrace) {
    super(jsStackTrace);
  }

  public @Nullable String getExtraDataAsJson() {
    return this.extraDataAsJson;
  }

  public JavascriptException setExtraDataAsJson(@Nullable String extraDataAsJson) {
    this.extraDataAsJson = extraDataAsJson;
    return this;
  }
}
