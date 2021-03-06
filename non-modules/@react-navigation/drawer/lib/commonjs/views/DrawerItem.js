"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DrawerItem;

var React = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _native = require("@react-navigation/native");

var _color = _interopRequireDefault(require("color"));

var _TouchableItem = _interopRequireDefault(require("./TouchableItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const Touchable = (_ref) => {
  let {
    children,
    style,
    onPress: _onPress,
    to,
    accessibilityRole,
    delayPressIn
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children", "style", "onPress", "to", "accessibilityRole", "delayPressIn"]);

  if (_reactNative.Platform.OS === 'web' && to) {
    // React Native Web doesn't forward `onClick` if we use `TouchableWithoutFeedback`.
    // We need to use `onClick` to be able to prevent default browser handling of links.
    return /*#__PURE__*/React.createElement(_native.Link, _extends({}, rest, {
      to: to,
      style: [styles.button, style],
      onPress: e => {
        if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && ( // ignore clicks with modifier keys
        e.button == null || e.button === 0) // ignore everything but left clicks
        ) {
            e.preventDefault();
            _onPress === null || _onPress === void 0 ? void 0 : _onPress(e);
          }
      }
    }), children);
  } else {
    return /*#__PURE__*/React.createElement(_TouchableItem.default, _extends({}, rest, {
      accessibilityRole: accessibilityRole,
      delayPressIn: delayPressIn,
      onPress: _onPress
    }), /*#__PURE__*/React.createElement(_reactNative.View, {
      style: style
    }, children));
  }
};
/**
 * A component used to show an action item with an icon and a label in a navigation drawer.
 */


function DrawerItem(props) {
  const {
    colors
  } = (0, _native.useTheme)();

  const {
    icon,
    label,
    labelStyle,
    to,
    focused = false,
    activeTintColor = colors.primary,
    inactiveTintColor = (0, _color.default)(colors.text).alpha(0.68).rgb().string(),
    activeBackgroundColor = (0, _color.default)(activeTintColor).alpha(0.12).rgb().string(),
    inactiveBackgroundColor = 'transparent',
    style,
    onPress
  } = props,
        rest = _objectWithoutProperties(props, ["icon", "label", "labelStyle", "to", "focused", "activeTintColor", "inactiveTintColor", "activeBackgroundColor", "inactiveBackgroundColor", "style", "onPress"]);

  const {
    borderRadius = 4
  } = _reactNative.StyleSheet.flatten(style || {});

  const color = focused ? activeTintColor : inactiveTintColor;
  const backgroundColor = focused ? activeBackgroundColor : inactiveBackgroundColor;
  const iconNode = icon ? icon({
    size: 24,
    focused,
    color
  }) : null;
  return /*#__PURE__*/React.createElement(_reactNative.View, _extends({
    collapsable: false
  }, rest, {
    style: [styles.container, {
      borderRadius,
      backgroundColor
    }, style]
  }), /*#__PURE__*/React.createElement(Touchable, {
    delayPressIn: 0,
    onPress: onPress,
    style: [styles.wrapper, {
      borderRadius
    }],
    accessibilityTraits: focused ? ['button', 'selected'] : 'button',
    accessibilityComponentType: "button",
    accessibilityRole: "button",
    accessibilityStates: focused ? ['selected'] : [],
    to: to
  }, /*#__PURE__*/React.createElement(React.Fragment, null, iconNode, /*#__PURE__*/React.createElement(_reactNative.View, {
    style: [styles.label, {
      marginLeft: iconNode ? 32 : 0,
      marginVertical: 5
    }]
  }, typeof label === 'string' ? /*#__PURE__*/React.createElement(_reactNative.Text, {
    numberOfLines: 1,
    style: [{
      color,
      fontWeight: '500'
    }, labelStyle]
  }, label) : label({
    color,
    focused
  })))));
}

const styles = _reactNative.StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 4,
    overflow: 'hidden'
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8
  },
  label: {
    marginRight: 32
  },
  button: {
    display: 'flex'
  }
});
//# sourceMappingURL=DrawerItem.js.map