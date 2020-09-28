var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _jsxFileName="/Users/michalchudziak/Projects/react-native/react-native-slider/src/js/RNCSliderNativeComponent.web.js";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(source,true).forEach(function(key){(0,_defineProperty2.default)(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(source).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var RCTSliderWebComponent=_react.default.forwardRef(function(_ref,forwardedRef){var initialValue=_ref.value,_ref$minimumValue=_ref.minimumValue,minimumValue=_ref$minimumValue===void 0?0:_ref$minimumValue,_ref$maximumValue=_ref.maximumValue,maximumValue=_ref$maximumValue===void 0?0:_ref$maximumValue,_ref$step=_ref.step,step=_ref$step===void 0?1:_ref$step,_ref$minimumTrackTint=_ref.minimumTrackTintColor,minimumTrackTintColor=_ref$minimumTrackTint===void 0?'#009688':_ref$minimumTrackTint,_ref$maximumTrackTint=_ref.maximumTrackTintColor,maximumTrackTintColor=_ref$maximumTrackTint===void 0?'#939393':_ref$maximumTrackTint,_ref$thumbTintColor=_ref.thumbTintColor,thumbTintColor=_ref$thumbTintColor===void 0?'#009688':_ref$thumbTintColor,_ref$thumbStyle=_ref.thumbStyle,thumbStyle=_ref$thumbStyle===void 0?{}:_ref$thumbStyle,_ref$style=_ref.style,style=_ref$style===void 0?[]:_ref$style,_ref$inverted=_ref.inverted,inverted=_ref$inverted===void 0?false:_ref$inverted,_ref$enabled=_ref.enabled,enabled=_ref$enabled===void 0?true:_ref$enabled,_ref$trackHeight=_ref.trackHeight,trackHeight=_ref$trackHeight===void 0?4:_ref$trackHeight,_ref$thumbSize=_ref.thumbSize,thumbSize=_ref$thumbSize===void 0?20:_ref$thumbSize,_ref$onRNCSliderSlidi=_ref.onRNCSliderSlidingStart,onRNCSliderSlidingStart=_ref$onRNCSliderSlidi===void 0?function(){}:_ref$onRNCSliderSlidi,_ref$onRNCSliderSlidi2=_ref.onRNCSliderSlidingComplete,onRNCSliderSlidingComplete=_ref$onRNCSliderSlidi2===void 0?function(){}:_ref$onRNCSliderSlidi2,_ref$onRNCSliderValue=_ref.onRNCSliderValueChange,onRNCSliderValueChange=_ref$onRNCSliderValue===void 0?function(){}:_ref$onRNCSliderValue,others=(0,_objectWithoutProperties2.default)(_ref,["value","minimumValue","maximumValue","step","minimumTrackTintColor","maximumTrackTintColor","thumbTintColor","thumbStyle","style","inverted","enabled","trackHeight","thumbSize","onRNCSliderSlidingStart","onRNCSliderSlidingComplete","onRNCSliderValueChange"]);var onValueChange=(0,_react.useCallback)(function(value){onRNCSliderValueChange&&onRNCSliderValueChange({nativeEvent:{fromUser:true,value:value}});},[onRNCSliderValueChange]);var onSlidingStart=(0,_react.useCallback)(function(value){onRNCSliderSlidingStart&&onRNCSliderSlidingStart({nativeEvent:{fromUser:true,value:value}});},[onRNCSliderSlidingStart]);var onSlidingComplete=(0,_react.useCallback)(function(value){onRNCSliderSlidingComplete&&onRNCSliderSlidingComplete({nativeEvent:{fromUser:true,value:value}});},[onRNCSliderSlidingComplete]);var containerSize=_react.default.useRef({width:0,height:0});var containerRef=forwardedRef||_react.default.createRef();var _React$useState=_react.default.useState(initialValue||minimumValue),_React$useState2=(0,_slicedToArray2.default)(_React$useState,2),value=_React$useState2[0],setValue=_React$useState2[1];_react.default.useLayoutEffect(function(){return _updateValue(initialValue);},[initialValue,_updateValue]);var percentageValue=(value-minimumValue)/(maximumValue-minimumValue);var minPercent=percentageValue;var maxPercent=1-percentageValue;var containerStyle=_reactNative.StyleSheet.compose({flexGrow:1,flexShrink:1,flexBasis:'auto',flexDirection:'row',userSelect:'none',alignItems:'center',cursor:'pointer'},style);var trackStyle={height:trackHeight,borderRadius:trackHeight/2,userSelect:'none'};var minimumTrackStyle=_objectSpread({},trackStyle,{backgroundColor:minimumTrackTintColor,flexGrow:minPercent*100});var maximumTrackStyle=_objectSpread({},trackStyle,{backgroundColor:maximumTrackTintColor,flexGrow:maxPercent*100});var thumbViewStyle=_reactNative.StyleSheet.compose({width:thumbSize,height:thumbSize,backgroundColor:thumbTintColor,zIndex:1,borderRadius:thumbSize/2,overflow:'hidden',userSelect:'none'},thumbStyle);var decimalPrecision=_react.default.useRef(calculatePrecision(minimumValue,maximumValue,step));_react.default.useEffect(function(){decimalPrecision.current=calculatePrecision(minimumValue,maximumValue,step);},[maximumValue,minimumValue,step]);var _updateValue=(0,_react.useCallback)(function(newValue){var hardRounded=decimalPrecision.current<20?Number.parseFloat(newValue.toFixed(decimalPrecision.current)):newValue;var withinBounds=Math.max(minimumValue,Math.min(hardRounded,maximumValue));if(value!==withinBounds){setValue(withinBounds);onValueChange(withinBounds);}},[minimumValue,maximumValue,value,onValueChange]);var onTouchEnd=function onTouchEnd(){onSlidingComplete(value);};var onMove=function onMove(event){var x=event.nativeEvent.locationX;var width=containerSize.current?containerSize.current.width:1;var newValue=inverted?maximumValue-(maximumValue-minimumValue)*x/width:minimumValue+(maximumValue-minimumValue)*x/width;var roundedValue=step?Math.round(newValue/step)*step:newValue;_updateValue(roundedValue);};var accessibilityActions=function accessibilityActions(event){var tenth=(maximumValue-minimumValue)/10;switch(event.nativeEvent.actionName){case'increment':_updateValue(value+(step||tenth));break;case'decrement':_updateValue(value-(step||tenth));break;}};var handleAccessibilityKeys=function handleAccessibilityKeys(key){switch(key){case'ArrowUp':case'ArrowRight':accessibilityActions({nativeEvent:{actionName:'increment'}});break;case'ArrowDown':case'ArrowLeft':accessibilityActions({nativeEvent:{actionName:'decrement'}});break;}};_react.default.useImperativeHandle(forwardedRef,function(){return{updateValue:function updateValue(val){_updateValue(val);}};},[_updateValue]);return _react.default.createElement(_reactNative.View,(0,_extends2.default)({ref:containerRef,onLayout:function onLayout(_ref2){var nativeEvent=_ref2.nativeEvent;return containerSize.current=nativeEvent.layout;},accessibilityActions:[{name:'increment',label:'increment'},{name:'decrement',label:'decrement'}],onAccessibilityAction:accessibilityActions,accessible:true,accessibleValue:value,accessibilityRole:'adjustable',style:containerStyle,onStartShouldSetResponder:function onStartShouldSetResponder(){return enabled;},onMoveShouldSetResponder:function onMoveShouldSetResponder(){return enabled;},onResponderGrant:function onResponderGrant(){return onSlidingStart(value);},onResponderRelease:onTouchEnd,onResponderMove:onMove,onKeyDown:function onKeyDown(_ref3){var key=_ref3.nativeEvent.key;return handleAccessibilityKeys(key);}},others,{__source:{fileName:_jsxFileName,lineNumber:324}}),_react.default.createElement(_reactNative.View,{pointerEvents:"none",style:minimumTrackStyle,__source:{fileName:_jsxFileName,lineNumber:345}}),_react.default.createElement(_reactNative.View,{pointerEvents:"none",style:thumbViewStyle,__source:{fileName:_jsxFileName,lineNumber:346}}),_react.default.createElement(_reactNative.View,{pointerEvents:"none",style:maximumTrackStyle,__source:{fileName:_jsxFileName,lineNumber:347}}));});function calculatePrecision(minimumValue,maximumValue,step){if(!step){return Infinity;}else{var decimals=[minimumValue,maximumValue,step].map(function(value){return((value+'').split('.').pop()||'').length;});return Math.max.apply(Math,(0,_toConsumableArray2.default)(decimals));}}RCTSliderWebComponent.displayName='RTCSliderWebComponent';var _default=RCTSliderWebComponent;exports.default=_default;