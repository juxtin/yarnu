var { Platform, NativeModules, findNodeHandle } = require('react-native');
var SmartlookBridge = NativeModules.RNSmartlook;


class Smartlook {

    // SETUP

    static setup(API_KEY, FPS) {
        SmartlookBridge.setup(API_KEY, FPS || 2);
    }

    static setupAndStartRecording(API_KEY, FPS) {
        SmartlookBridge.setupAndStartRecording(API_KEY, FPS || 2);
    }

    static setUserIdentifier(idKey, map) {
        SmartlookBridge.setUserIdentifier(idKey, (map == null) ? {} : map);
    }

    // START & STOP

    static startRecording() {
        SmartlookBridge.startRecording();
    }

    static stopRecording() {
        SmartlookBridge.stopRecording();
    }

    static isRecording() {
        return SmartlookBridge.isRecording();
    }

    // EVENTS

    static startTimedCustomEvent(key, map) {
        return SmartlookBridge.startTimedCustomEvent(key, (map == null) ? {} : map);
    }

    static stopTimedCustomEvent(key, map) {
        return SmartlookBridge.stopTimedCustomEvent(key, (map == null) ? {} : map);
    }

    static cancelTimedCustomEvent(key, reason, map) {
        return SmartlookBridge.cancelTimedCustomEvent(key, reason, (map == null) ? {} : map);
    }

    static trackCustomEvent(key, map) {
        SmartlookBridge.trackCustomEvent(key, (map == null) ? {} : map);
    }

    static trackNavigationEvent(screenName, direction) {
        SmartlookBridge.trackNavigationEvent(screenName, direction);
    }

    // SENSITIVE 

    static startFullscreenSensitiveMode() {
        SmartlookBridge.startFullscreenSensitiveMode();
    }

    static stopFullscreenSensitiveMode() {
        SmartlookBridge.stopFullscreenSensitiveMode();
    }

    static isFullscreenSensitiveModeActive() {
        return SmartlookBridge.isFullscreenSensitiveModeActive();
    }

    static registerBlacklistedView(ref) {

        if (ref == null) {
            return;
        }

        SmartlookBridge.registerBlacklistedView(findNodeHandle(ref));
    }

    static unregisterBlacklistedView(ref) {

        if (ref == null) {
            return;
        }
        
        SmartlookBridge.unregisterBlacklistedView(findNodeHandle(ref));
    }

    // GLOBAL EVENT PROPERTIES

    static removeAllGlobalEventProperties() {
        SmartlookBridge.removeAllGlobalEventProperties();
    }

    static removeGlobalEventProperty(key) {
        SmartlookBridge.removeGlobalEventProperty(key);
    }

    static setGlobalEventProperties(map, immutable) {
        SmartlookBridge.setGlobalEventProperties(map, immutable || false);
    }

    static setGlobalEventProperty(key, value, immutable) {
        SmartlookBridge.setGlobalEventProperty(key, value, immutable || false);
    }

    // OTHERS

    static getDashboardSessionUrl() {
        return SmartlookBridge.getDashboardSessionUrl();
    }

    static setReferrer(referrer, source) {
        SmartlookBridge.setReferrer(referrer, source);
    }

    static enableCrashlytics(enabled) {
        SmartlookBridge.enableCrashlytics(enabled);
    }

}

module.exports = Smartlook;