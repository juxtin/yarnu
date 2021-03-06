function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import DrawerPositionContext from '../utils/DrawerPositionContext';
export default function DrawerContentScrollView(_ref) {
  let {
    contentContainerStyle,
    style,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["contentContainerStyle", "style", "children"]);

  const drawerPosition = React.useContext(DrawerPositionContext);
  const insets = useSafeArea();
  return /*#__PURE__*/React.createElement(ScrollView, _extends({}, rest, {
    contentContainerStyle: [{
      paddingTop: insets.top + 4,
      paddingLeft: drawerPosition === 'left' ? insets.left : 0,
      paddingRight: drawerPosition === 'right' ? insets.right : 0
    }, contentContainerStyle],
    style: [styles.container, style]
  }), children);
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
//# sourceMappingURL=DrawerContentScrollView.js.map