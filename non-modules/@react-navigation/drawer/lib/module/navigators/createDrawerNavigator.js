function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { createNavigatorFactory, useNavigationBuilder, DrawerRouter } from '@react-navigation/native';
import DrawerView from '../views/DrawerView';

function DrawerNavigator(_ref) {
  let {
    initialRouteName,
    openByDefault,
    backBehavior,
    children,
    screenOptions
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["initialRouteName", "openByDefault", "backBehavior", "children", "screenOptions"]);

  const {
    state,
    descriptors,
    navigation
  } = useNavigationBuilder(DrawerRouter, {
    initialRouteName,
    openByDefault,
    backBehavior,
    children,
    screenOptions
  });
  return /*#__PURE__*/React.createElement(DrawerView, _extends({}, rest, {
    state: state,
    descriptors: descriptors,
    navigation: navigation
  }));
}

export default createNavigatorFactory(DrawerNavigator);
//# sourceMappingURL=createDrawerNavigator.js.map