"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DrawerView;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeScreens = require("react-native-screens");

var _native = require("@react-navigation/native");

var _GestureHandler = require("./GestureHandler");

var _SafeAreaProviderCompat = _interopRequireDefault(require("./SafeAreaProviderCompat"));

var _ResourceSavingScene = _interopRequireDefault(require("./ResourceSavingScene"));

var _DrawerContent = _interopRequireDefault(require("./DrawerContent"));

var _Drawer = _interopRequireDefault(require("./Drawer"));

var _DrawerOpenContext = _interopRequireDefault(require("../utils/DrawerOpenContext"));

var _DrawerPositionContext = _interopRequireDefault(require("../utils/DrawerPositionContext"));

var _useWindowDimensions = _interopRequireDefault(require("../utils/useWindowDimensions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const getDefaultDrawerWidth = ({
  height,
  width
}) => {
  /*
   * Default drawer width is screen width - header height
   * with a max width of 280 on mobile and 320 on tablet
   * https://material.io/guidelines/patterns/navigation-drawer.html
   */
  const smallerAxisSize = Math.min(height, width);
  const isLandscape = width > height;
  const isTablet = smallerAxisSize >= 600;
  const appBarHeight = _reactNative.Platform.OS === 'ios' ? isLandscape ? 32 : 44 : 56;
  const maxWidth = isTablet ? 320 : 280;
  return Math.min(smallerAxisSize - appBarHeight, maxWidth);
};

const GestureHandlerWrapper = _GestureHandler.GestureHandlerRootView !== null && _GestureHandler.GestureHandlerRootView !== void 0 ? _GestureHandler.GestureHandlerRootView : _reactNative.View;
/**
 * Component that renders the drawer.
 */

function DrawerView({
  state,
  navigation,
  descriptors,
  lazy = true,
  drawerContent = props => /*#__PURE__*/React.createElement(_DrawerContent.default, props),
  drawerPosition = _reactNative.I18nManager.isRTL ? 'right' : 'left',
  keyboardDismissMode = 'on-drag',
  overlayColor = 'rgba(0, 0, 0, 0.5)',
  drawerType = 'front',
  hideStatusBar = false,
  statusBarAnimation = 'slide',
  drawerContentOptions,
  drawerStyle,
  edgeWidth,
  gestureHandlerProps,
  minSwipeDistance,
  sceneContainerStyle
}) {
  const [loaded, setLoaded] = React.useState([state.index]);
  const dimensions = (0, _useWindowDimensions.default)();
  const {
    colors
  } = (0, _native.useTheme)();
  const isDrawerOpen = state.history.some(it => it.type === 'drawer');
  const handleDrawerOpen = React.useCallback(() => {
    navigation.dispatch(_objectSpread(_objectSpread({}, _native.DrawerActions.openDrawer()), {}, {
      target: state.key
    }));
  }, [navigation, state.key]);
  const handleDrawerClose = React.useCallback(() => {
    navigation.dispatch(_objectSpread(_objectSpread({}, _native.DrawerActions.closeDrawer()), {}, {
      target: state.key
    }));
  }, [navigation, state.key]);
  React.useEffect(() => {
    if (isDrawerOpen) {
      navigation.emit({
        type: 'drawerOpen'
      });
    } else {
      navigation.emit({
        type: 'drawerClose'
      });
    }
  }, [isDrawerOpen, navigation]);
  React.useEffect(() => {
    let subscription;

    if (isDrawerOpen) {
      // We only add the subscription when drawer opens
      // This way we can make sure that the subscription is added as late as possible
      // This will make sure that our handler will run first when back button is pressed
      subscription = _reactNative.BackHandler.addEventListener('hardwareBackPress', () => {
        handleDrawerClose();
        return true;
      });
    }

    return () => {
      var _subscription;

      return (_subscription = subscription) === null || _subscription === void 0 ? void 0 : _subscription.remove();
    };
  }, [handleDrawerClose, isDrawerOpen, navigation, state.key]);

  if (!loaded.includes(state.index)) {
    setLoaded([...loaded, state.index]);
  }

  const renderNavigationView = ({
    progress
  }) => {
    return /*#__PURE__*/React.createElement(_DrawerPositionContext.default.Provider, {
      value: drawerPosition
    }, drawerContent(_objectSpread(_objectSpread({}, drawerContentOptions), {}, {
      progress: progress,
      state: state,
      navigation: navigation,
      descriptors: descriptors
    })));
  };

  const renderContent = () => {
    return /*#__PURE__*/React.createElement(_reactNativeScreens.ScreenContainer, {
      style: styles.content
    }, state.routes.map((route, index) => {
      const descriptor = descriptors[route.key];
      const {
        unmountOnBlur
      } = descriptor.options;
      const isFocused = state.index === index;

      if (unmountOnBlur && !isFocused) {
        return null;
      }

      if (lazy && !loaded.includes(index) && !isFocused) {
        // Don't render a screen if we've never navigated to it
        return null;
      }

      return /*#__PURE__*/React.createElement(_ResourceSavingScene.default, {
        key: route.key,
        style: [_reactNative.StyleSheet.absoluteFill, {
          opacity: isFocused ? 1 : 0
        }],
        isVisible: isFocused
      }, descriptor.render());
    }));
  };

  const activeKey = state.routes[state.index].key;
  const {
    gestureEnabled,
    swipeEnabled
  } = descriptors[activeKey].options;
  return /*#__PURE__*/React.createElement(_native.NavigationHelpersContext.Provider, {
    value: navigation
  }, /*#__PURE__*/React.createElement(GestureHandlerWrapper, {
    style: styles.content
  }, /*#__PURE__*/React.createElement(_SafeAreaProviderCompat.default, null, /*#__PURE__*/React.createElement(_DrawerOpenContext.default.Provider, {
    value: isDrawerOpen
  }, /*#__PURE__*/React.createElement(_Drawer.default, {
    open: isDrawerOpen,
    gestureEnabled: gestureEnabled,
    swipeEnabled: swipeEnabled,
    onOpen: handleDrawerOpen,
    onClose: handleDrawerClose,
    gestureHandlerProps: gestureHandlerProps,
    drawerType: drawerType,
    drawerPosition: drawerPosition,
    sceneContainerStyle: [{
      backgroundColor: colors.background
    }, sceneContainerStyle],
    drawerStyle: [{
      width: getDefaultDrawerWidth(dimensions),
      backgroundColor: colors.card
    }, drawerType === 'permanent' && (drawerPosition === 'left' ? {
      borderRightColor: colors.border,
      borderRightWidth: _reactNative.StyleSheet.hairlineWidth
    } : {
      borderLeftColor: colors.border,
      borderLeftWidth: _reactNative.StyleSheet.hairlineWidth
    }), drawerStyle],
    overlayStyle: {
      backgroundColor: overlayColor
    },
    swipeEdgeWidth: edgeWidth,
    swipeDistanceThreshold: minSwipeDistance,
    hideStatusBar: hideStatusBar,
    statusBarAnimation: statusBarAnimation,
    renderDrawerContent: renderNavigationView,
    renderSceneContent: renderContent,
    keyboardDismissMode: keyboardDismissMode,
    dimensions: dimensions
  })))));
}

const styles = _reactNative.StyleSheet.create({
  content: {
    flex: 1
  }
});
//# sourceMappingURL=DrawerView.js.map