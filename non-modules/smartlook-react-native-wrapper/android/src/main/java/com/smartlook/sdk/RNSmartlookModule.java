
package com.smartlook.sdk;

import android.view.View;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableMapKeySetIterator;
import com.facebook.react.uimanager.NativeViewHierarchyManager;
import com.facebook.react.uimanager.UIBlock;
import com.facebook.react.uimanager.UIManagerModule;
import com.smartlook.sdk.smartlook.Smartlook;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class RNSmartlookModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNSmartlookModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNSmartlook";
  }

  @ReactMethod
  public void setupAndStartRecording(String smartLookAPIKey, int fps) {
    Smartlook.setupAndStartRecording(smartLookAPIKey, fps);
  }

  @ReactMethod
  public void setup(String smartLookAPIKey, int fps) {
    Smartlook.setup(smartLookAPIKey, fps);
  }

  @ReactMethod
  public void isRecording(Promise promise) {
    promise.resolve(Smartlook.isRecording());
  }

  @ReactMethod
  public void getDashboardSessionUrl(Promise promise) {
    promise.resolve(Smartlook.getDashboardSessionUrl());
  }

  @ReactMethod
  public void setUserIdentifier(String s, ReadableMap o) {
      try {
          if (o == null) {
              Smartlook.setUserIdentifier(s);
          } else {
              Smartlook.setUserIdentifier(s, convertMapToJson(o));
          }
      } catch (JSONException e) {}
  }

  @ReactMethod
  public void removeAllGlobalEventProperties() {
    Smartlook.removeAllGlobalEventProperties();
  }

  @ReactMethod
  public void removeGlobalEventProperty(String s) {
    Smartlook.removeGlobalEventProperty(s);
  }

  @ReactMethod
  public void setGlobalEventProperties(ReadableMap o, boolean immutable) {
      try {
          Smartlook.setGlobalEventProperties(convertMapToJson(o), immutable);
      } catch (JSONException e) {}
  }

  @ReactMethod
  public void setGlobalEventProperty(String key, String value, boolean immutable) {
      Smartlook.setGlobalEventProperty(key, value, immutable);
  }

  @ReactMethod
  public void startTimedCustomEvent(String s, ReadableMap o, Promise promise) {
    if (s == null) {
        promise.reject("Smartlook : Event name cannot be null!");
    } else {
        try {
            if (o == null) {
                promise.resolve(Smartlook.startTimedCustomEvent(s));
            } else {
                promise.resolve(Smartlook.startTimedCustomEvent(s, convertMapToJson(o)));
            }
        } catch (JSONException e) {}
    }
  }

  @ReactMethod
  public void stopTimedCustomEvent(String s, ReadableMap o) {
    if (s != null) {
        if (o == null) {
            Smartlook.stopTimedCustomEvent(s);
        } else {
            try {
                Smartlook.stopTimedCustomEvent(s, convertMapToJson(o));
            } catch (JSONException e) {}
        }
    }
  }

  @ReactMethod
  public void cancelTimedCustomEvent(String s, String reason, ReadableMap o) {
    if (s != null) {
        if (o == null) {
            Smartlook.cancelTimedCustomEvent(s, reason);
        } else {
            try {
                Smartlook.cancelTimedCustomEvent(s, reason, convertMapToJson(o));
            } catch (JSONException e) {}
        }
    }
  }

  @ReactMethod
  public void trackCustomEvent(String s, ReadableMap o) {
      try {
          if (o == null) {
              Smartlook.trackCustomEvent(s);
          } else {
              Smartlook.trackCustomEvent(s, convertMapToJson(o));
          }
      } catch (JSONException e) {}
  }

    @ReactMethod
    public void registerBlacklistedView(final int id) {
        UIManagerModule uiManager = getReactApplicationContext().getNativeModule(UIManagerModule.class);
        uiManager.addUIBlock(new UIBlock()
        {
            @Override
            public void execute(NativeViewHierarchyManager nativeViewHierarchyManager)
            {
                try
                {
                    View view = nativeViewHierarchyManager.resolveView(id);

                    if (view != null)
                        Smartlook.registerBlacklistedView(view);
                }
                catch(Exception e)
                {
                }
            }
        });
    }

    @ReactMethod
    public void unregisterBlacklistedView(final int id) {
      UIManagerModule uiManager = getReactApplicationContext().getNativeModule(UIManagerModule.class);
        uiManager.addUIBlock(new UIBlock()
        {
            @Override
            public void execute(NativeViewHierarchyManager nativeViewHierarchyManager)
            {
                try
                {
                    View view = nativeViewHierarchyManager.resolveView(id);

                    if (view != null)
                        Smartlook.unregisterBlacklistedView(view);
                }
                catch(Exception e)
                {
                }
            }
        });
    }

    @ReactMethod
    public void setReferrer(String referrer, String source) {
      Smartlook.setReferrer(referrer, source);
    }

    @ReactMethod
    public void trackNavigationEvent(String screenName, String direction) {
      if (screenName != null && direction != null) {
        if (direction.equals("start") || direction.equals("enter")) {
          direction = "start";
        } else {
          direction = "stop";
        }
        Smartlook.trackNavigationEvent(screenName, direction);
      }
    }

    @ReactMethod
    public void isFullscreenSensitiveModeActive(Promise promise) {
      promise.resolve(Smartlook.isFullscreenSensitiveModeActive());
    }

    @ReactMethod
    public void startFullscreenSensitiveMode() {
      Smartlook.startFullscreenSensitiveMode();
    }

    @ReactMethod
    public void stopFullscreenSensitiveMode() {
      Smartlook.stopFullscreenSensitiveMode();
    }

    @ReactMethod
    public void startRecording() {
      Smartlook.startRecording();
    }

    @ReactMethod
    public void stopRecording() {
      Smartlook.stopRecording();
    }

    @ReactMethod
    public void enableCrashlytics(boolean enabled) {
      Smartlook.enableCrashlytics(enabled);
    }

    private static JSONObject convertMapToJson(ReadableMap readableMap) throws JSONException {
        JSONObject object = new JSONObject();
        ReadableMapKeySetIterator iterator = readableMap.keySetIterator();
        while (iterator.hasNextKey()) {
            String key = iterator.nextKey();
            switch (readableMap.getType(key)) {
                case Null:
                    object.put(key, JSONObject.NULL);
                    break;
                case Boolean:
                    object.put(key, readableMap.getBoolean(key));
                    break;
                case Number:
                    object.put(key, readableMap.getDouble(key));
                    break;
                case String:
                    object.put(key, readableMap.getString(key));
                    break;
                case Map:
                    object.put(key, convertMapToJson(readableMap.getMap(key)));
                    break;
                case Array:
                    object.put(key, convertArrayToJson(readableMap.getArray(key)));
                    break;
            }
        }
        return object;
    }

    private static JSONArray convertArrayToJson(ReadableArray readableArray) throws JSONException {
        JSONArray array = new JSONArray();
        for (int i = 0; i < readableArray.size(); i++) {
            switch (readableArray.getType(i)) {
                case Null:
                    break;
                case Boolean:
                    array.put(readableArray.getBoolean(i));
                    break;
                case Number:
                    array.put(readableArray.getDouble(i));
                    break;
                case String:
                    array.put(readableArray.getString(i));
                    break;
                case Map:
                    array.put(convertMapToJson(readableArray.getMap(i)));
                    break;
                case Array:
                    array.put(convertArrayToJson(readableArray.getArray(i)));
                    break;
            }
        }
        return array;
    }
}