"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Animation = _interopRequireDefault(require("./Animation"));

var _decay = _interopRequireDefault(require("./decay"));

var _base = require("../base");

var _AnimatedClock = _interopRequireDefault(require("../core/AnimatedClock"));

var _InternalAnimatedValue = _interopRequireDefault(require("../core/InternalAnimatedValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DecayAnimation extends _Animation.default {
  constructor(config) {
    super();
    this._deceleration = config.deceleration !== undefined ? config.deceleration : 0.998;
    this._velocity = config.velocity;
  }

  start(value) {
    this._clock = new _AnimatedClock.default();
    const state = {
      finished: new _InternalAnimatedValue.default(0),
      velocity: new _InternalAnimatedValue.default(this._velocity),
      position: value,
      time: new _InternalAnimatedValue.default(0)
    };
    const config = {
      deceleration: this._deceleration
    };
    return (0, _base.block)([(0, _base.cond)((0, _base.clockRunning)(this._clock), 0, [(0, _base.startClock)(this._clock)]), (0, _decay.default)(this._clock, state, config), (0, _base.cond)(state.finished, (0, _base.stopClock)(this._clock))]);
  }

  stop() {// not implemented yet
  }

  static getDefaultState() {
    return {
      position: new _InternalAnimatedValue.default(0),
      finished: new _InternalAnimatedValue.default(0),
      time: new _InternalAnimatedValue.default(0),
      velocity: new _InternalAnimatedValue.default(0)
    };
  }

}

var _default = DecayAnimation;
exports.default = _default;
//# sourceMappingURL=DecayAnimation.js.map