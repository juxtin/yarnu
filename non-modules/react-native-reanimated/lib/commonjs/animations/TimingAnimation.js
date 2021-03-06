"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _InternalAnimatedValue = _interopRequireDefault(require("../core/InternalAnimatedValue"));

var _timing = _interopRequireDefault(require("./timing"));

var _base = require("../base");

var _AnimatedClock = _interopRequireDefault(require("../core/AnimatedClock"));

var _Easing = _interopRequireDefault(require("../Easing"));

var _Animation = _interopRequireDefault(require("./Animation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const easeInOut = _Easing.default.inOut(_Easing.default.ease);

class TimingAnimation extends _Animation.default {
  constructor(config) {
    super();

    _defineProperty(this, "_toValue", void 0);

    _defineProperty(this, "_duration", void 0);

    _defineProperty(this, "_easing", void 0);

    _defineProperty(this, "_clock", void 0);

    this._toValue = config.toValue;
    this._easing = config.easing !== undefined ? config.easing : easeInOut;
    this._duration = config.duration !== undefined ? config.duration : 500;
  }

  start(value) {
    this._clock = new _AnimatedClock.default();
    const state = {
      finished: new _InternalAnimatedValue.default(0),
      position: value,
      time: new _InternalAnimatedValue.default(0),
      frameTime: new _InternalAnimatedValue.default(0)
    };
    const config = {
      duration: this._duration,
      toValue: this._toValue,
      easing: this._easing
    };
    return (0, _base.block)([(0, _base.cond)((0, _base.clockRunning)(this._clock), 0, [(0, _base.startClock)(this._clock)]), (0, _timing.default)(this._clock, state, config), (0, _base.cond)(state.finished, (0, _base.stopClock)(this._clock))]);
  }

  stop() {// this._finished && this._finished.setValue(1);
  }

  static getDefaultState() {
    return {
      position: new _InternalAnimatedValue.default(0),
      finished: new _InternalAnimatedValue.default(0),
      time: new _InternalAnimatedValue.default(0),
      frameTime: new _InternalAnimatedValue.default(0)
    };
  }

}

exports.default = TimingAnimation;
//# sourceMappingURL=TimingAnimation.js.map