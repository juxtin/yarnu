/**
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*
* @generated by codegen project: GeneratePropsJavaDelegate.js
*/

package com.facebook.react.viewmanagers;

import android.view.View;
import androidx.annotation.Nullable;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.BaseViewManagerDelegate;
import com.facebook.react.uimanager.BaseViewManagerInterface;
import com.facebook.react.uimanager.LayoutShadowNode;

public class PullToRefreshViewManagerDelegate<T extends View, U extends BaseViewManagerInterface<T> & PullToRefreshViewManagerInterface<T>> extends BaseViewManagerDelegate<T, U> {
  public PullToRefreshViewManagerDelegate(U viewManager) {
    super(viewManager);
  }
  @Override
  public void setProperty(T view, String propName, @Nullable Object value) {
    switch (propName) {
      case "tintColor":
        mViewManager.setTintColor(view, value == null ? null : ((Double) value).intValue());
        break;
      case "titleColor":
        mViewManager.setTitleColor(view, value == null ? null : ((Double) value).intValue());
        break;
      case "title":
        mViewManager.setTitle(view, value == null ? null : (String) value);
        break;
      case "refreshing":
        mViewManager.setRefreshing(view, value == null ? false : (boolean) value);
        break;
      default:
        super.setProperty(view, propName, value);
    }
  }

  public void receiveCommand(PullToRefreshViewManagerInterface<T> viewManager, T view, String commandName, ReadableArray args) {
    switch (commandName) {
      case "setNativeRefreshing":
        viewManager.setNativeRefreshing(view, args.getBoolean(0));
        break;
    }
  }
}
