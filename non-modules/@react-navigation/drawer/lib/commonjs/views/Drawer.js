"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeReanimated = _interopRequireDefault(require("react-native-reanimated"));

var _GestureHandler = require("./GestureHandler");

var _Overlay = _interopRequireDefault(require("./Overlay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const {
  Clock,
  Value,
  onChange,
  clockRunning,
  startClock,
  stopClock,
  spring,
  abs,
  add,
  and,
  block,
  call,
  cond,
  divide,
  eq,
  event,
  greaterThan,
  lessThan,
  max,
  min,
  multiply,
  neq,
  or,
  set,
  sub
} = _reactNativeReanimated.default;
const TRUE = 1;
const FALSE = 0;
const NOOP = 0;
const UNSET = -1;
const DIRECTION_LEFT = 1;
const DIRECTION_RIGHT = -1;
const SWIPE_DISTANCE_THRESHOLD_DEFAULT = 60;
const SWIPE_DISTANCE_MINIMUM = 5;
const SPRING_CONFIG = {
  stiffness: 1000,
  damping: 500,
  mass: 3,
  overshootClamping: true,
  restDisplacementThreshold: 0.01,
  restSpeedThreshold: 0.01
};
const ANIMATED_ONE = new _reactNativeReanimated.default.Value(1);

class DrawerView extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleEscape", e => {
      const {
        open,
        onClose
      } = this.props;

      if (e.key === 'Escape') {
        if (open) {
          onClose();
        }
      }
    });

    _defineProperty(this, "handleEndInteraction", () => {
      if (this.interactionHandle !== undefined) {
        _reactNative.InteractionManager.clearInteractionHandle(this.interactionHandle);

        this.interactionHandle = undefined;
      }
    });

    _defineProperty(this, "handleStartInteraction", () => {
      if (this.interactionHandle === undefined) {
        this.interactionHandle = _reactNative.InteractionManager.createInteractionHandle();
      }
    });

    _defineProperty(this, "getDrawerWidth", () => {
      const {
        drawerStyle,
        dimensions
      } = this.props;

      const {
        width
      } = _reactNative.StyleSheet.flatten(drawerStyle);

      if (typeof width === 'string' && width.endsWith('%')) {
        // Try to calculate width if a percentage is given
        const percentage = Number(width.replace(/%$/, ''));

        if (Number.isFinite(percentage)) {
          return dimensions.width * (percentage / 100);
        }
      }

      return typeof width === 'number' ? width : 0;
    });

    _defineProperty(this, "clock", new Clock());

    _defineProperty(this, "interactionHandle", void 0);

    _defineProperty(this, "isDrawerTypeFront", new Value(this.props.drawerType === 'front' ? TRUE : FALSE));

    _defineProperty(this, "isOpen", new Value(this.props.open ? TRUE : FALSE));

    _defineProperty(this, "nextIsOpen", new Value(UNSET));

    _defineProperty(this, "isSwiping", new Value(FALSE));

    _defineProperty(this, "initialDrawerWidth", this.getDrawerWidth());

    _defineProperty(this, "gestureState", new Value(_GestureHandler.GestureState.UNDETERMINED));

    _defineProperty(this, "touchX", new Value(0));

    _defineProperty(this, "velocityX", new Value(0));

    _defineProperty(this, "gestureX", new Value(0));

    _defineProperty(this, "offsetX", new Value(0));

    _defineProperty(this, "position", new Value(this.props.open ? this.initialDrawerWidth * (this.props.drawerPosition === 'right' ? DIRECTION_RIGHT : DIRECTION_LEFT) : 0));

    _defineProperty(this, "containerWidth", new Value(this.props.dimensions.width));

    _defineProperty(this, "drawerWidth", new Value(this.initialDrawerWidth));

    _defineProperty(this, "drawerOpacity", new Value(this.initialDrawerWidth || this.props.drawerType === 'permanent' ? 1 : 0));

    _defineProperty(this, "drawerPosition", new Value(this.props.drawerPosition === 'right' ? DIRECTION_RIGHT : DIRECTION_LEFT));

    _defineProperty(this, "touchDistanceFromDrawer", cond(this.isDrawerTypeFront, cond(eq(this.drawerPosition, DIRECTION_LEFT), max( // Distance of touch start from left screen edge - Drawer width
    sub(sub(this.touchX, this.gestureX), this.drawerWidth), 0), min(multiply( // Distance of drawer from left screen edge - Touch start point
    sub(sub(this.containerWidth, this.drawerWidth), sub(this.touchX, this.gestureX)), DIRECTION_RIGHT), 0)), 0));

    _defineProperty(this, "swipeDistanceThreshold", new Value(this.props.swipeDistanceThreshold !== undefined ? this.props.swipeDistanceThreshold : SWIPE_DISTANCE_THRESHOLD_DEFAULT));

    _defineProperty(this, "swipeVelocityThreshold", new Value(this.props.swipeVelocityThreshold));

    _defineProperty(this, "currentOpenValue", this.props.open);

    _defineProperty(this, "pendingOpenValue", void 0);

    _defineProperty(this, "isStatusBarHidden", false);

    _defineProperty(this, "manuallyTriggerSpring", new Value(FALSE));

    _defineProperty(this, "transitionTo", isOpen => {
      const toValue = new Value(0);
      const frameTime = new Value(0);
      const state = {
        position: this.position,
        time: new Value(0),
        finished: new Value(FALSE),
        velocity: new Value(0)
      };
      return block([cond(clockRunning(this.clock), NOOP, [// Animation wasn't running before
      // Set the initial values and start the clock
      set(toValue, multiply(isOpen, this.drawerWidth, this.drawerPosition)), set(frameTime, 0), set(state.time, 0), set(state.finished, FALSE), set(state.velocity, this.velocityX), set(this.isOpen, isOpen), startClock(this.clock), call([], this.handleStartInteraction), set(this.manuallyTriggerSpring, FALSE)]), spring(this.clock, state, _objectSpread(_objectSpread({}, SPRING_CONFIG), {}, {
        toValue
      })), cond(state.finished, [// Reset gesture and velocity from previous gesture
      set(this.touchX, 0), set(this.gestureX, 0), set(this.velocityX, 0), set(this.offsetX, 0), // When the animation finishes, stop the clock
      stopClock(this.clock), call([this.isOpen], ([value]) => {
        const open = Boolean(value);
        this.handleEndInteraction();

        if (open !== this.props.open) {
          // Sync drawer's state after animation finished
          // This shouldn't be necessary, but there seems to be an issue on iOS
          this.toggleDrawer(this.props.open);
        }
      })])]);
    });

    _defineProperty(this, "dragX", block([onChange(this.isOpen, call([this.isOpen], ([value]) => {
      const open = Boolean(value);
      this.currentOpenValue = open; // Without this check, the drawer can go to an infinite update <-> animate loop for sync updates

      if (open !== this.props.open) {
        // If the mode changed, update state
        if (open) {
          this.props.onOpen();
        } else {
          this.props.onClose();
        }

        this.pendingOpenValue = open; // Force componentDidUpdate to fire, whether user does a setState or not
        // This allows us to detect when the user drops the update and revert back
        // It's necessary to make sure that the state stays in sync

        this.forceUpdate();
      }
    })), onChange(this.nextIsOpen, cond(neq(this.nextIsOpen, UNSET), [// Stop any running animations
    cond(clockRunning(this.clock), stopClock(this.clock)), // Update the open value to trigger the transition
    set(this.isOpen, this.nextIsOpen), set(this.gestureX, 0), set(this.nextIsOpen, UNSET)])), // This block must be after the this.isOpen listener since we check for current value
    onChange(this.isSwiping, // Listen to updates for this value only when it changes
    // Without `onChange`, this will fire even if the value didn't change
    // We don't want to call the listeners if the value didn't change
    call([this.isSwiping], ([value]) => {
      const {
        keyboardDismissMode
      } = this.props;

      if (value === TRUE) {
        if (keyboardDismissMode === 'on-drag') {
          _reactNative.Keyboard.dismiss();
        }

        this.toggleStatusBar(true);
      } else {
        this.toggleStatusBar(this.currentOpenValue);
      }
    })), onChange(this.gestureState, cond(eq(this.gestureState, _GestureHandler.GestureState.ACTIVE), call([], this.handleStartInteraction))), cond(eq(this.gestureState, _GestureHandler.GestureState.ACTIVE), [cond(this.isSwiping, NOOP, [// We weren't dragging before, set it to true
    set(this.isSwiping, TRUE), // Also update the drag offset to the last position
    set(this.offsetX, this.position)]), // Update position with previous offset + gesture distance
    set(this.position, add(this.offsetX, this.gestureX, this.touchDistanceFromDrawer)), // Stop animations while we're dragging
    stopClock(this.clock)], [set(this.isSwiping, FALSE), set(this.touchX, 0), this.transitionTo(cond(this.manuallyTriggerSpring, this.isOpen, cond(or(and(greaterThan(abs(this.gestureX), SWIPE_DISTANCE_MINIMUM), greaterThan(abs(this.velocityX), this.swipeVelocityThreshold)), greaterThan(abs(this.gestureX), this.swipeDistanceThreshold)), cond(eq(this.drawerPosition, DIRECTION_LEFT), // If swiped to right, open the drawer, otherwise close it
    greaterThan(cond(eq(this.velocityX, 0), this.gestureX, this.velocityX), 0), // If swiped to left, open the drawer, otherwise close it
    lessThan(cond(eq(this.velocityX, 0), this.gestureX, this.velocityX), 0)), this.isOpen)))]), this.position]));

    _defineProperty(this, "translateX", cond(eq(this.drawerPosition, DIRECTION_RIGHT), min(max(multiply(this.drawerWidth, -1), this.dragX), 0), max(min(this.drawerWidth, this.dragX), 0)));

    _defineProperty(this, "progress", cond( // Check if the drawer width is available to avoid division by zero
    eq(this.drawerWidth, 0), 0, abs(divide(this.translateX, this.drawerWidth))));

    _defineProperty(this, "handleGestureEvent", event([{
      nativeEvent: {
        x: this.touchX,
        translationX: this.gestureX,
        velocityX: this.velocityX
      }
    }]));

    _defineProperty(this, "handleGestureStateChange", event([{
      nativeEvent: {
        state: s => set(this.gestureState, s)
      }
    }]));

    _defineProperty(this, "handleTapStateChange", event([{
      nativeEvent: {
        oldState: s => cond(eq(s, _GestureHandler.GestureState.ACTIVE), set(this.manuallyTriggerSpring, TRUE))
      }
    }]));

    _defineProperty(this, "handleContainerLayout", e => this.containerWidth.setValue(e.nativeEvent.layout.width));

    _defineProperty(this, "handleDrawerLayout", e => {
      this.drawerWidth.setValue(e.nativeEvent.layout.width);
      this.toggleDrawer(this.props.open); // Until layout is available, drawer is hidden with opacity: 0 by default
      // Show it in the next frame when layout is available
      // If we don't delay it until the next frame, there's a visible flicker

      requestAnimationFrame(() => requestAnimationFrame(() => this.drawerOpacity.setValue(1)));
    });

    _defineProperty(this, "toggleDrawer", open => {
      if (this.currentOpenValue !== open) {
        this.nextIsOpen.setValue(open ? TRUE : FALSE); // This value will also be set shortly after as changing this.nextIsOpen changes this.isOpen
        // However, there's a race condition on Android, so we need to set a bit earlier

        this.currentOpenValue = open;
      }
    });

    _defineProperty(this, "toggleStatusBar", hidden => {
      const {
        hideStatusBar,
        statusBarAnimation
      } = this.props;

      if (hideStatusBar && this.isStatusBarHidden !== hidden) {
        this.isStatusBarHidden = hidden;

        _reactNative.StatusBar.setHidden(hidden, statusBarAnimation);
      }
    });
  }

  componentDidMount() {
    if (_reactNative.Platform.OS === 'web') {
      var _document, _document$body, _document$body$addEve;

      (_document = document) === null || _document === void 0 ? void 0 : (_document$body = _document.body) === null || _document$body === void 0 ? void 0 : (_document$body$addEve = _document$body.addEventListener) === null || _document$body$addEve === void 0 ? void 0 : _document$body$addEve.call(_document$body, 'keyup', this.handleEscape);
    }
  }

  componentDidUpdate(prevProps) {
    const {
      open,
      drawerPosition,
      drawerType,
      swipeDistanceThreshold,
      swipeVelocityThreshold,
      hideStatusBar
    } = this.props;

    if ( // If we're not in the middle of a transition, sync the drawer's open state
    typeof this.pendingOpenValue !== 'boolean' || open !== this.pendingOpenValue) {
      this.toggleDrawer(open);
    }

    this.pendingOpenValue = undefined;

    if (open !== prevProps.open && hideStatusBar) {
      this.toggleStatusBar(open);
    }

    if (prevProps.drawerPosition !== drawerPosition) {
      this.drawerPosition.setValue(drawerPosition === 'right' ? DIRECTION_RIGHT : DIRECTION_LEFT);
    }

    if (prevProps.drawerType !== drawerType) {
      this.isDrawerTypeFront.setValue(drawerType === 'front' ? TRUE : FALSE);
    }

    if (prevProps.swipeDistanceThreshold !== swipeDistanceThreshold) {
      this.swipeDistanceThreshold.setValue(swipeDistanceThreshold !== undefined ? swipeDistanceThreshold : SWIPE_DISTANCE_THRESHOLD_DEFAULT);
    }

    if (prevProps.swipeVelocityThreshold !== swipeVelocityThreshold) {
      this.swipeVelocityThreshold.setValue(swipeVelocityThreshold);
    }
  }

  componentWillUnmount() {
    this.toggleStatusBar(false);
    this.handleEndInteraction();

    if (_reactNative.Platform.OS === 'web') {
      var _document2, _document2$body, _document2$body$remov;

      (_document2 = document) === null || _document2 === void 0 ? void 0 : (_document2$body = _document2.body) === null || _document2$body === void 0 ? void 0 : (_document2$body$remov = _document2$body.removeEventListener) === null || _document2$body$remov === void 0 ? void 0 : _document2$body$remov.call(_document2$body, 'keyup', this.handleEscape);
    }
  }

  render() {
    const {
      open,
      gestureEnabled,
      swipeEnabled,
      drawerPosition,
      drawerType,
      swipeEdgeWidth,
      sceneContainerStyle,
      drawerStyle,
      overlayStyle,
      renderDrawerContent,
      renderSceneContent,
      gestureHandlerProps
    } = this.props;
    const isOpen = drawerType === 'permanent' ? true : open;
    const isRight = drawerPosition === 'right';
    const contentTranslateX = drawerType === 'front' || drawerType === 'permanent' ? 0 : this.translateX;
    const drawerTranslateX = drawerType === 'permanent' ? 0 : drawerType === 'back' ? _reactNative.I18nManager.isRTL ? multiply(sub(this.containerWidth, this.drawerWidth), isRight ? 1 : -1) : 0 : this.translateX;
    const offset = drawerType === 'back' ? 0 : _reactNative.I18nManager.isRTL ? '100%' : multiply(this.drawerWidth, -1); // FIXME: Currently hitSlop is broken when on Android when drawer is on right
    // https://github.com/kmagiera/react-native-gesture-handler/issues/569

    const hitSlop = isRight ? // Extend hitSlop to the side of the screen when drawer is closed
    // This lets the user drag the drawer from the side of the screen
    {
      right: 0,
      width: isOpen ? undefined : swipeEdgeWidth
    } : {
      left: 0,
      width: isOpen ? undefined : swipeEdgeWidth
    };
    const progress = drawerType === 'permanent' ? ANIMATED_ONE : this.progress;
    return /*#__PURE__*/React.createElement(_GestureHandler.PanGestureHandler, _extends({
      activeOffsetX: [-SWIPE_DISTANCE_MINIMUM, SWIPE_DISTANCE_MINIMUM],
      failOffsetY: [-SWIPE_DISTANCE_MINIMUM, SWIPE_DISTANCE_MINIMUM],
      onGestureEvent: this.handleGestureEvent,
      onHandlerStateChange: this.handleGestureStateChange,
      hitSlop: hitSlop,
      enabled: drawerType !== 'permanent' && gestureEnabled && swipeEnabled
    }, gestureHandlerProps), /*#__PURE__*/React.createElement(_reactNativeReanimated.default.View, {
      onLayout: this.handleContainerLayout,
      style: [styles.main, {
        flexDirection: drawerType === 'permanent' && !isRight ? 'row-reverse' : 'row'
      }]
    }, /*#__PURE__*/React.createElement(_reactNativeReanimated.default.View, {
      style: [styles.content, {
        transform: [{
          translateX: contentTranslateX
        }]
      }, sceneContainerStyle]
    }, /*#__PURE__*/React.createElement(_reactNative.View, {
      accessibilityElementsHidden: isOpen && drawerType !== 'permanent',
      importantForAccessibility: isOpen && drawerType !== 'permanent' ? 'no-hide-descendants' : 'auto',
      style: styles.content
    }, renderSceneContent({
      progress
    })), // Disable overlay if sidebar is permanent
    drawerType === 'permanent' ? null : _reactNative.Platform.OS === 'web' ? /*#__PURE__*/React.createElement(_reactNative.TouchableWithoutFeedback, {
      onPress: gestureEnabled ? () => this.toggleDrawer(false) : undefined
    }, /*#__PURE__*/React.createElement(_Overlay.default, {
      progress: progress,
      style: overlayStyle
    })) : /*#__PURE__*/React.createElement(_GestureHandler.TapGestureHandler, {
      enabled: gestureEnabled,
      onHandlerStateChange: this.handleTapStateChange
    }, /*#__PURE__*/React.createElement(_Overlay.default, {
      progress: progress,
      style: overlayStyle
    }))), /*#__PURE__*/React.createElement(_reactNativeReanimated.default.Code, {
      // This is needed to make sure that container width updates with `setValue`
      // Without this, it won't update when not used in styles
      exec: this.containerWidth
    }), drawerType === 'permanent' ? null : /*#__PURE__*/React.createElement(_reactNativeReanimated.default.Code, {
      exec: block([onChange(this.manuallyTriggerSpring, [cond(eq(this.manuallyTriggerSpring, TRUE), [set(this.nextIsOpen, FALSE), call([], () => this.currentOpenValue = false)])])])
    }), /*#__PURE__*/React.createElement(_reactNativeReanimated.default.View, {
      accessibilityViewIsModal: isOpen && drawerType !== 'permanent',
      removeClippedSubviews: _reactNative.Platform.OS !== 'ios',
      onLayout: this.handleDrawerLayout,
      style: [styles.container, {
        transform: [{
          translateX: drawerTranslateX
        }],
        opacity: this.drawerOpacity
      }, drawerType === 'permanent' ? // Without this, the `left`/`right` values don't get reset
      isRight ? {
        right: 0
      } : {
        left: 0
      } : [styles.nonPermanent, isRight ? {
        right: offset
      } : {
        left: offset
      }, {
        zIndex: drawerType === 'back' ? -1 : 0
      }], drawerStyle]
    }, renderDrawerContent({
      progress
    }))));
  }

}

exports.default = DrawerView;

_defineProperty(DrawerView, "defaultProps", {
  drawerPosition: _reactNative.I18nManager.isRTL ? 'left' : 'right',
  drawerType: 'front',
  gestureEnabled: true,
  swipeEnabled: _reactNative.Platform.OS !== 'web',
  swipeEdgeWidth: 32,
  swipeVelocityThreshold: 500,
  keyboardDismissMode: 'on-drag',
  hideStatusBar: false,
  statusBarAnimation: 'slide'
});

const styles = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: 'white',
    maxWidth: '100%'
  },
  nonPermanent: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '80%'
  },
  content: {
    flex: 1
  },
  main: _objectSpread({
    flex: 1
  }, _reactNative.Platform.select({
    // FIXME: We need to hide `overflowX` on Web so the translated content doesn't show offscreen.
    // But adding `overflowX: 'hidden'` prevents content from collapsing the URL bar.
    web: null,
    default: {
      overflow: 'hidden'
    }
  }))
});
//# sourceMappingURL=Drawer.js.map