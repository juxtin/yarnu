function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { View, StyleSheet, I18nManager, Platform, BackHandler } from 'react-native'; // eslint-disable-next-line import/no-unresolved

import { ScreenContainer } from 'react-native-screens';
import { NavigationHelpersContext, DrawerActions, useTheme } from '@react-navigation/native';
import { GestureHandlerRootView } from './GestureHandler';
import SafeAreaProviderCompat from './SafeAreaProviderCompat';
import ResourceSavingScene from './ResourceSavingScene';
import DrawerContent from './DrawerContent';
import Drawer from './Drawer';
import DrawerOpenContext from '../utils/DrawerOpenContext';
import DrawerPositionContext from '../utils/DrawerPositionContext';
import useWindowDimensions from '../utils/useWindowDimensions';

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
  const appBarHeight = Platform.OS === 'ios' ? isLandscape ? 32 : 44 : 56;
  const maxWidth = isTablet ? 320 : 280;
  return Math.min(smallerAxisSize - appBarHeight, maxWidth);
};

const GestureHandlerWrapper = GestureHandlerRootView !== null && GestureHandlerRootView !== void 0 ? GestureHandlerRootView : View;
/**
 * Component that renders the drawer.
 */

export default function DrawerView({
  state,
  navigation,
  descriptors,
  lazy = true,
  drawerContent = props => /*#__PURE__*/React.createElement(DrawerContent, props),
  drawerPosition = I18nManager.isRTL ? 'right' : 'left',
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
  const dimensions = useWindowDimensions();
  const {
    colors
  } = useTheme();
  const isDrawerOpen = state.history.some(it => it.type === 'drawer');
  const handleDrawerOpen = React.useCallback(() => {
    navigation.dispatch(_objectSpread(_objectSpread({}, DrawerActions.openDrawer()), {}, {
      target: state.key
    }));
  }, [navigation, state.key]);
  const handleDrawerClose = React.useCallback(() => {
    navigation.dispatch(_objectSpread(_objectSpread({}, DrawerActions.closeDrawer()), {}, {
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
      subscription = BackHandler.addEventListener('hardwareBackPress', () => {
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
    return /*#__PURE__*/React.createElement(DrawerPositionContext.Provider, {
      value: drawerPosition
    }, drawerContent(_objectSpread(_objectSpread({}, drawerContentOptions), {}, {
      progress: progress,
      state: state,
      navigation: navigation,
      descriptors: descriptors
    })));
  };

  const renderContent = () => {
    return /*#__PURE__*/React.createElement(ScreenContainer, {
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

      return /*#__PURE__*/React.createElement(ResourceSavingScene, {
        key: route.key,
        style: [StyleSheet.absoluteFill, {
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
  return /*#__PURE__*/React.createElement(NavigationHelpersContext.Provider, {
    value: navigation
  }, /*#__PURE__*/React.createElement(GestureHandlerWrapper, {
    style: styles.content
  }, /*#__PURE__*/React.createElement(SafeAreaProviderCompat, null, /*#__PURE__*/React.createElement(DrawerOpenContext.Provider, {
    value: isDrawerOpen
  }, /*#__PURE__*/React.createElement(Drawer, {
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
      borderRightWidth: StyleSheet.hairlineWidth
    } : {
      borderLeftColor: colors.border,
      borderLeftWidth: StyleSheet.hairlineWidth
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
const styles = StyleSheet.create({
  content: {
    flex: 1
  }
});
//# sourceMappingURL=DrawerView.js.map