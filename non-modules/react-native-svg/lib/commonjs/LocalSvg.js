"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.getUriFromSource=getUriFromSource;exports.loadLocalRawResourceDefault=loadLocalRawResourceDefault;exports.isUriAnAndroidResourceIdentifier=isUriAnAndroidResourceIdentifier;exports.loadAndroidRawResource=loadAndroidRawResource;exports.loadLocalRawResourceAndroid=loadLocalRawResourceAndroid;exports.LocalSvg=LocalSvg;exports.default=exports.WithLocalSvg=exports.loadLocalRawResource=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf3=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _resolveAssetSource=_interopRequireDefault(require("react-native/Libraries/Image/resolveAssetSource"));var _xml=require("./xml");var _css=require("./css");var _jsxFileName="/Users/msand/WebstormProjects/react-native-svg/src/LocalSvg.tsx";var _ref=_reactNative.NativeModules.RNSVGRenderableManager||{},getRawResource=_ref.getRawResource;function getUriFromSource(source){var resolvedAssetSource=(0,_resolveAssetSource.default)(source);return resolvedAssetSource.uri;}function loadLocalRawResourceDefault(source){var uri=getUriFromSource(source);return(0,_xml.fetchText)(uri);}function isUriAnAndroidResourceIdentifier(uri){return typeof uri==='string'&&uri.indexOf('/')<=-1;}function loadAndroidRawResource(uri){return _regenerator.default.async(function loadAndroidRawResource$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.next=3;return _regenerator.default.awrap(getRawResource(uri));case 3:return _context.abrupt("return",_context.sent);case 6:_context.prev=6;_context.t0=_context["catch"](0);console.error('Error in RawResourceUtils while trying to natively load an Android raw resource: ',_context.t0);return _context.abrupt("return",null);case 10:case"end":return _context.stop();}}},null,null,[[0,6]],Promise);}function loadLocalRawResourceAndroid(source){var uri=getUriFromSource(source);if(isUriAnAndroidResourceIdentifier(uri)){return loadAndroidRawResource(uri);}else{return(0,_xml.fetchText)(uri);}}var loadLocalRawResource=_reactNative.Platform.OS!=='android'?loadLocalRawResourceDefault:loadLocalRawResourceAndroid;exports.loadLocalRawResource=loadLocalRawResource;function LocalSvg(props){var asset=props.asset,rest=(0,_objectWithoutProperties2.default)(props,["asset"]);var _useState=(0,_react.useState)(null),_useState2=(0,_slicedToArray2.default)(_useState,2),xml=_useState2[0],setXml=_useState2[1];(0,_react.useEffect)(function(){loadLocalRawResource(asset).then(setXml);},[asset]);return _react.default.createElement(_css.SvgCss,(0,_extends2.default)({xml:xml},rest,{__source:{fileName:_jsxFileName,lineNumber:60}}));}var WithLocalSvg=function(_Component){(0,_inherits2.default)(WithLocalSvg,_Component);function WithLocalSvg(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,WithLocalSvg);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf3.default)(WithLocalSvg)).call.apply(_getPrototypeOf2,[this].concat(args)));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{xml:null});return _this;}(0,_createClass2.default)(WithLocalSvg,[{key:"componentDidMount",value:function componentDidMount(){this.load(this.props.asset);}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var asset=this.props.asset;if(asset!==prevProps.asset){this.load(asset);}}},{key:"load",value:function load(asset){return _regenerator.default.async(function load$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;_context2.t0=this;if(!asset){_context2.next=8;break;}_context2.next=5;return _regenerator.default.awrap(loadLocalRawResource(asset));case 5:_context2.t1=_context2.sent;_context2.next=9;break;case 8:_context2.t1=null;case 9:_context2.t2=_context2.t1;_context2.t3={xml:_context2.t2};_context2.t0.setState.call(_context2.t0,_context2.t3);_context2.next=17;break;case 14:_context2.prev=14;_context2.t4=_context2["catch"](0);console.error(_context2.t4);case 17:case"end":return _context2.stop();}}},null,this,[[0,14]],Promise);}},{key:"render",value:function render(){var props=this.props,xml=this.state.xml;return _react.default.createElement(_css.SvgWithCss,{xml:xml,override:props,__source:{fileName:_jsxFileName,lineNumber:86}});}}]);return WithLocalSvg;}(_react.Component);exports.WithLocalSvg=WithLocalSvg;var _default=LocalSvg;exports.default=_default;
//# sourceMappingURL=LocalSvg.js.map