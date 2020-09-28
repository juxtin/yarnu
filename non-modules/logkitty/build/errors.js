"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ERR_IOS_CANNOT_START_SYSLOG = exports.ERR_IOS_NO_SIMULATORS_BOOTED = exports.ERR_IOS_CANNOT_LIST_SIMULATORS = exports.ERR_ANDROID_CANNOT_START_LOGCAT = exports.ERR_ANDROID_CANNOT_CLEAN_LOGCAT_BUFFER = exports.ERR_ANDROID_CANNOT_GET_APP_PID = exports.ERR_ANDROID_UNPROCESSABLE_PID = exports.CodeError = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class CodeError extends Error {
  constructor(code, message) {
    super(message);

    _defineProperty(this, "code", void 0);

    this.code = code;
  }

}

exports.CodeError = CodeError;
const ERR_ANDROID_UNPROCESSABLE_PID = 'ERR_ANDROID_UNPROCESSABLE_PID';
exports.ERR_ANDROID_UNPROCESSABLE_PID = ERR_ANDROID_UNPROCESSABLE_PID;
const ERR_ANDROID_CANNOT_GET_APP_PID = 'ERR_ANDROID_CANNOT_GET_APP_PID';
exports.ERR_ANDROID_CANNOT_GET_APP_PID = ERR_ANDROID_CANNOT_GET_APP_PID;
const ERR_ANDROID_CANNOT_CLEAN_LOGCAT_BUFFER = 'ERR_ANDROID_CANNOT_CLEAN_LOGCAT_BUFFER';
exports.ERR_ANDROID_CANNOT_CLEAN_LOGCAT_BUFFER = ERR_ANDROID_CANNOT_CLEAN_LOGCAT_BUFFER;
const ERR_ANDROID_CANNOT_START_LOGCAT = 'ERR_ANDROID_CANNOT_START_LOGCAT';
exports.ERR_ANDROID_CANNOT_START_LOGCAT = ERR_ANDROID_CANNOT_START_LOGCAT;
const ERR_IOS_CANNOT_LIST_SIMULATORS = 'ERR_IOS_CANNOT_LIST_SIMULATORS';
exports.ERR_IOS_CANNOT_LIST_SIMULATORS = ERR_IOS_CANNOT_LIST_SIMULATORS;
const ERR_IOS_NO_SIMULATORS_BOOTED = 'ERR_IOS_NO_SIMULATORS_BOOTED';
exports.ERR_IOS_NO_SIMULATORS_BOOTED = ERR_IOS_NO_SIMULATORS_BOOTED;
const ERR_IOS_CANNOT_START_SYSLOG = 'ERR_IOS_CANNOT_START_SYSLOG';
exports.ERR_IOS_CANNOT_START_SYSLOG = ERR_IOS_CANNOT_START_SYSLOG;
//# sourceMappingURL=errors.js.map