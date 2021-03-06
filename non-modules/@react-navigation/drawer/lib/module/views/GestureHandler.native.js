import * as React from 'react';
import { PanGestureHandler as PanGestureHandlerNative } from 'react-native-gesture-handler';
import DrawerGestureContext from '../utils/DrawerGestureContext';
export function PanGestureHandler(props) {
  const gestureRef = React.useRef(null);
  return /*#__PURE__*/React.createElement(DrawerGestureContext.Provider, {
    value: gestureRef
  }, /*#__PURE__*/React.createElement(PanGestureHandlerNative, props));
}
export { GestureHandlerRootView, TapGestureHandler, State as GestureState, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
//# sourceMappingURL=GestureHandler.native.js.map