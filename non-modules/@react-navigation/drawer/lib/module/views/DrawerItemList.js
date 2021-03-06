function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import * as React from 'react';
import { CommonActions, DrawerActions, useLinkBuilder } from '@react-navigation/native';
import DrawerItem from './DrawerItem';

/**
 * Component that renders the navigation list in the drawer.
 */
export default function DrawerItemList({
  state,
  navigation,
  descriptors,
  activeTintColor,
  inactiveTintColor,
  activeBackgroundColor,
  inactiveBackgroundColor,
  itemStyle,
  labelStyle
}) {
  const buildLink = useLinkBuilder();
  return state.routes.map((route, i) => {
    const focused = i === state.index;
    const {
      title,
      drawerLabel,
      drawerIcon
    } = descriptors[route.key].options;
    return /*#__PURE__*/React.createElement(DrawerItem, {
      key: route.key,
      label: drawerLabel !== undefined ? drawerLabel : title !== undefined ? title : route.name,
      icon: drawerIcon,
      focused: focused,
      activeTintColor: activeTintColor,
      inactiveTintColor: inactiveTintColor,
      activeBackgroundColor: activeBackgroundColor,
      inactiveBackgroundColor: inactiveBackgroundColor,
      labelStyle: labelStyle,
      style: itemStyle,
      to: buildLink(route.name, route.params),
      onPress: () => {
        navigation.dispatch(_objectSpread(_objectSpread({}, focused ? DrawerActions.closeDrawer() : CommonActions.navigate(route.name)), {}, {
          target: state.key
        }));
      }
    });
  });
}
//# sourceMappingURL=DrawerItemList.js.map