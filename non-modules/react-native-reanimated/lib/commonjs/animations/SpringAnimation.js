"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _InternalAnimatedValue = _interopRequireDefault(require("../core/InternalAnimatedValue"));

var _Animation = _interopRequireDefault(require("./Animation"));

var _SpringConfig = _interopRequireDefault(require("../SpringConfig"));

var _spring = _interopRequireDefault(require("./spring"));

var _base = require("../base");

var _AnimatedClock = _interopRequireDefault(require("../core/AnimatedClock"));

var _invariant = _interopRequireDefault(require("fbjs/lib/invariant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function withDefault(value, defaultValue) {
  if (value === undefined || value === null) {
    return defaultValue;
  }

  return value;
}

class SpringAnimation extends _Animation.default {
  constructor(config) {
    super();
    this._overshootClamping = withDefault(config.overshootClamping, false);
    this._restDisplacementThreshold = withDefault(config.restDisplacementThreshold, 0.001);
    this._restSpeedThreshold = withDefault(config.restSpeedThreshold, 0.001);
    this._initialVelocity = withDefault(config.velocity, 0);
    this._lastVelocity = withDefault(config.velocity, 0);
    this._toValue = config.toValue;
    this._delay = withDefault(config.delay, 0);

    if (config.stiffness !== undefined || config.damping !== undefined || config.mass !== undefined) {
      (0, _invariant.default)(config.bounciness === undefined && config.speed === undefined && config.tension === undefined && config.friction === undefined, 'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one');
      this._stiffness = withDefault(config.stiffness, 100);
      this._damping = withDefault(config.damping, 10);
      this._mass = withDefault(config.mass, 1);
    } else if (config.bounciness !== undefined || config.speed !== undefined) {
      // Convert the origami bounciness/speed values to stiffness/damping
      // We assume mass is 1.
      (0, _invariant.default)(config.tension === undefined && config.friction === undefined && config.stiffness === undefined && config.damping === undefined && config.mass === undefined, 'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one');

      const springConfig = _SpringConfig.default.fromBouncinessAndSpeed(withDefault(config.bounciness, 8), withDefault(config.speed, 12));

      this._stiffness = springConfig.stiffness;
      this._damping = springConfig.damping;
      this._mass = 1;
    } else {
      // Convert the origami tension/friction values to stiffness/damping
      // We assume mass is 1.
      const springConfig = _SpringConfig.default.fromOrigamiTensionAndFriction(withDefault(config.tension, 40), withDefault(config.friction, 7));

      this._stiffness = springConfig.stiffness;
      this._damping = springConfig.damping;
      this._mass = 1;
    }

    (0, _invariant.default)(this._stiffness > 0, 'Stiffness value must be greater than 0');
    (0, _invariant.default)(this._damping > 0, 'Damping value must be greater than 0');
    (0, _invariant.default)(this._mass > 0, 'Mass value must be greater than 0');
  }

  start(value) {
    this._clock = new _AnimatedClock.default();
    const state = {
      finished: new _InternalAnimatedValue.default(0),
      velocity: new _InternalAnimatedValue.default(this._initialVelocity),
      position: value,
      time: new _InternalAnimatedValue.default(0)
    };
    const config = {
      damping: this._damping,
      mass: this._mass,
      stiffness: this._stiffness,
      toValue: this._toValue,
      overshootClamping: this._overshootClamping,
      restSpeedThreshold: this._restSpeedThreshold,
      restDisplacementThreshold: this._restDisplacementThreshold
    };
    return (0, _base.block)([(0, _base.cond)((0, _base.clockRunning)(this._clock), 0, [(0, _base.startClock)(this._clock)]), (0, _spring.default)(this._clock, state, config), (0, _base.cond)(state.finished, (0, _base.stopClock)(this._clock))]);
  }

  stop() {// this._finished && this._finished.setValue(1);
  }

  static getDefaultState() {
    return {
      position: new _InternalAnimatedValue.default(0),
      finished: new _InternalAnimatedValue.default(0),
      velocity: new _InternalAnimatedValue.default(0),
      time: new _InternalAnimatedValue.default(0)
    };
  }

}

exports.default = SpringAnimation;
//# sourceMappingURL=SpringAnimation.js.map