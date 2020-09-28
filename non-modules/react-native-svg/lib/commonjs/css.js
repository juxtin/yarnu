"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.SvgCss=SvgCss;exports.SvgCssUri=SvgCssUri;exports.SvgWithCssUri=exports.SvgWithCss=exports.inlineStyles=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf4=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _assertThisInitialized2=_interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _xml=require("./xml");var _cssTree=_interopRequireWildcard(require("css-tree"));var _cssSelect=_interopRequireDefault(require("css-select"));var _jsxFileName="/Users/msand/WebstormProjects/react-native-svg/src/css.tsx";function isTag(node){return typeof node==='object';}function getParent(node){return typeof node==='object'&&node.parent||null;}function getChildren(node){return typeof node==='object'&&node.children||[];}function getName(elem){return elem.tag;}function getText(_node){return'';}function getAttributeValue(elem,name){return elem.props[name]||null;}function removeSubsets(nodes){var idx=nodes.length,node,ancestor,replace;while(--idx>-1){node=ancestor=nodes[idx];delete nodes[idx];replace=true;while(ancestor){if(nodes.includes(ancestor)){replace=false;nodes.splice(idx,1);break;}ancestor=typeof ancestor==='object'&&ancestor.parent||null;}if(replace){nodes[idx]=node;}}return nodes;}function existsOne(predicate,elems){return elems.some(function(elem){return typeof elem==='object'&&(predicate(elem)||existsOne(predicate,elem.children));});}function getSiblings(node){var parent=typeof node==='object'&&node.parent;return parent&&parent.children||[];}function hasAttrib(elem,name){return elem.props.hasOwnProperty(name);}function findOne(predicate,elems){var elem;for(var i=0,l=elems.length;i<l&&!elem;i++){var node=elems[i];if(typeof node==='string'){}else if(predicate(node)){elem=node;}else{var children=node.children;if(children.length!==0){elem=findOne(predicate,children);}}}return elem;}function findAll(predicate,nodes){var result=arguments.length>2&&arguments[2]!==undefined?arguments[2]:[];for(var i=0,j=nodes.length;i<j;i++){var node=nodes[i];if(typeof node!=='object'){continue;}if(predicate(node)){result.push(node);}var children=node.children;if(children.length!==0){findAll(predicate,children,result);}}return result;}var adapter={removeSubsets:removeSubsets,existsOne:existsOne,getSiblings:getSiblings,hasAttrib:hasAttrib,findOne:findOne,findAll:findAll,isTag:isTag,getParent:getParent,getChildren:getChildren,getName:getName,getText:getText,getAttributeValue:getAttributeValue};var cssSelectOpts={xmlMode:true,adapter:adapter};function querySelectorAll(query,elems){return(0,_cssSelect.default)(query,elems,cssSelectOpts);}function flattenToSelectors(cssAst,selectors){_cssTree.default.walk(cssAst,{visit:'Rule',enter:function enter(rule){var _ref=rule,type=_ref.type,prelude=_ref.prelude;if(type!=='Rule'){return;}var atrule=this.atrule;prelude.children.each(function(node,item){var _ref2=node,children=_ref2.children;var pseudos=[];selectors.push({item:item,atrule:atrule,rule:rule,pseudos:pseudos});children.each(function(_ref3,pseudoItem,list){var childType=_ref3.type;if(childType==='PseudoClassSelector'||childType==='PseudoElementSelector'){pseudos.push({item:pseudoItem,list:list});}});});}});}function filterByMqs(selectors){return selectors.filter(function(_ref4){var atrule=_ref4.atrule;if(atrule===null){return true;}var name=atrule.name,prelude=atrule.prelude;var atPrelude=prelude;var first=atPrelude&&atPrelude.children.first();var mq=first&&first.type==='MediaQueryList';var query=mq?_cssTree.default.generate(atPrelude):name;return useMqs.includes(query);});}var useMqs=['','screen'];function filterByPseudos(selectors){return selectors.filter(function(_ref5){var pseudos=_ref5.pseudos;return usePseudos.includes(_cssTree.default.generate({type:'Selector',children:new _cssTree.List().fromArray(pseudos.map(function(pseudo){return pseudo.item.data;}))}));});}var usePseudos=[''];function cleanPseudos(selectors){selectors.forEach(function(_ref6){var pseudos=_ref6.pseudos;return pseudos.forEach(function(pseudo){return pseudo.list.remove(pseudo.item);});});}function specificity(selector){var A=0;var B=0;var C=0;selector.children.each(function walk(node){switch(node.type){case'SelectorList':case'Selector':node.children.each(walk);break;case'IdSelector':A++;break;case'ClassSelector':case'AttributeSelector':B++;break;case'PseudoClassSelector':switch(node.name.toLowerCase()){case'not':var children=node.children;children&&children.each(walk);break;case'before':case'after':case'first-line':case'first-letter':C++;break;default:B++;}break;case'PseudoElementSelector':C++;break;case'TypeSelector':var name=node.name;if(name.charAt(name.length-1)!=='*'){C++;}break;}});return[A,B,C];}function compareSpecificity(aSpecificity,bSpecificity){for(var i=0;i<4;i+=1){if(aSpecificity[i]<bSpecificity[i]){return-1;}else if(aSpecificity[i]>bSpecificity[i]){return 1;}}return 0;}function selectorWithSpecificity(selector){return{selector:selector,specificity:specificity(selector.item.data)};}function bySelectorSpecificity(a,b){return compareSpecificity(a.specificity,b.specificity);}function pass(arr,len,chk,result){var dbl=chk*2;var l,r,e;var li,ri;var i=0;for(l=0;l<len;l+=dbl){r=l+chk;e=r+chk;if(r>len){r=len;}if(e>len){e=len;}li=l;ri=r;while(true){if(li<r&&ri<e){if(bySelectorSpecificity(arr[li],arr[ri])<=0){result[i++]=arr[li++];}else{result[i++]=arr[ri++];}}else if(li<r){result[i++]=arr[li++];}else if(ri<e){result[i++]=arr[ri++];}else{break;}}}}function exec(arr,len){var buffer=new Array(len);for(var chk=1;chk<len;chk*=2){pass(arr,len,chk,buffer);var tmp=arr;arr=buffer;buffer=tmp;}return arr;}function sortSelectors(selectors){var len=selectors.length;if(len<=1){return selectors;}var specs=selectors.map(selectorWithSpecificity);return exec(specs,len).map(function(s){return s.selector;});}var declarationParseProps={context:'declarationList',parseValue:false};function CSSStyleDeclaration(ast){var props=ast.props,styles=ast.styles;if(!props.style){props.style={};}var style=props.style;var priority=new Map();ast.style=style;ast.priority=priority;if(!styles||styles.length===0){return;}try{var declarations=_cssTree.default.parse(styles,declarationParseProps);declarations.children.each(function(node){try{var _ref7=node,property=_ref7.property,value=_ref7.value,important=_ref7.important;var name=property.trim();priority.set(name,important);style[(0,_xml.camelCase)(name)]=_cssTree.default.generate(value).trim();}catch(styleError){if(styleError.message!=='Unknown node type: undefined'){console.warn("Warning: Parse error when parsing inline styles, style properties of this element cannot be used. The raw styles can still be get/set using .attr('style').value. Error details: "+styleError);}}});}catch(parseError){console.warn("Warning: Parse error when parsing inline styles, style properties of this element cannot be used. The raw styles can still be get/set using .attr('style').value. Error details: "+parseError);}}function initStyle(selectedEl){if(!selectedEl.style){CSSStyleDeclaration(selectedEl);}return selectedEl;}function closestElem(node,elemName){var elem=node;while((elem=elem.parent)&&elem.tag!==elemName){}return elem;}var parseProps={parseValue:false,parseCustomProperty:false};var inlineStyles=function inlineStyles(document){var styleElements=querySelectorAll('style',document);if(styleElements.length===0){return document;}var selectors=[];for(var _iterator=styleElements,_isArray=Array.isArray(_iterator),_i=0,_iterator=_isArray?_iterator:_iterator[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var _ref8;if(_isArray){if(_i>=_iterator.length)break;_ref8=_iterator[_i++];}else{_i=_iterator.next();if(_i.done)break;_ref8=_i.value;}var _element=_ref8;var _children=_element.children;if(!_children.length||closestElem(_element,'foreignObject')){continue;}try{var styleString=_children.join('');flattenToSelectors(_cssTree.default.parse(styleString,parseProps),selectors);}catch(parseError){console.warn('Warning: Parse error of styles of <style/> element, skipped. Error details: '+parseError);}}var selectorsMq=filterByMqs(selectors);var selectorsPseudo=filterByPseudos(selectorsMq);cleanPseudos(selectorsPseudo);var sortedSelectors=sortSelectors(selectorsPseudo).reverse();for(var _iterator2=sortedSelectors,_isArray2=Array.isArray(_iterator2),_i2=0,_iterator2=_isArray2?_iterator2:_iterator2[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var _ref10;if(_isArray2){if(_i2>=_iterator2.length)break;_ref10=_iterator2[_i2++];}else{_i2=_iterator2.next();if(_i2.done)break;_ref10=_i2.value;}var _ref11=_ref10;var _rule=_ref11.rule;var _item=_ref11.item;if(_rule===null){continue;}var _selectorStr=_cssTree.default.generate(_item.data);try{var _ret=function(){var matched=querySelectorAll(_selectorStr,document).map(initStyle);if(matched.length===0){return"continue";}_cssTree.default.walk(_rule,{visit:'Declaration',enter:function enter(node){var _ref12=node,property=_ref12.property,value=_ref12.value,important=_ref12.important;var name=property.trim();var camel=(0,_xml.camelCase)(name);var val=_cssTree.default.generate(value).trim();for(var _iterator3=matched,_isArray3=Array.isArray(_iterator3),_i3=0,_iterator3=_isArray3?_iterator3:_iterator3[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var _ref13;if(_isArray3){if(_i3>=_iterator3.length)break;_ref13=_iterator3[_i3++];}else{_i3=_iterator3.next();if(_i3.done)break;_ref13=_i3.value;}var _element3=_ref13;var _style=_element3.style,_priority=_element3.priority;var _current=_priority.get(name);if(_current===undefined||_current<important){_priority.set(name,important);_style[camel]=val;}}}});}();if(_ret==="continue")continue;}catch(selectError){if(selectError.constructor===SyntaxError){console.warn('Warning: Syntax error when trying to select \n\n'+_selectorStr+'\n\n, skipped. Error details: '+selectError);continue;}throw selectError;}}return document;};exports.inlineStyles=inlineStyles;function SvgCss(props){var xml=props.xml,override=props.override;var ast=(0,_react.useMemo)(function(){return xml!==null?(0,_xml.parse)(xml,inlineStyles):null;},[xml]);return _react.default.createElement(_xml.SvgAst,{ast:ast,override:override||props,__source:{fileName:_jsxFileName,lineNumber:701}});}function SvgCssUri(props){var uri=props.uri;var _useState=(0,_react.useState)(null),_useState2=(0,_slicedToArray2.default)(_useState,2),xml=_useState2[0],setXml=_useState2[1];(0,_react.useEffect)(function(){uri?(0,_xml.fetchText)(uri).then(setXml).catch(_xml.err):setXml(null);},[uri]);return _react.default.createElement(SvgCss,{xml:xml,override:props,__source:{fileName:_jsxFileName,lineNumber:714}});}var SvgWithCss=function(_Component){(0,_inherits2.default)(SvgWithCss,_Component);function SvgWithCss(){var _getPrototypeOf2;var _this;(0,_classCallCheck2.default)(this,SvgWithCss);for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf2=(0,_getPrototypeOf4.default)(SvgWithCss)).call.apply(_getPrototypeOf2,[this].concat(args)));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this),"state",{ast:null});return _this;}(0,_createClass2.default)(SvgWithCss,[{key:"componentDidMount",value:function componentDidMount(){this.parse(this.props.xml);}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var xml=this.props.xml;if(xml!==prevProps.xml){this.parse(xml);}}},{key:"parse",value:function parse(xml){try{this.setState({ast:xml?(0,_xml.parse)(xml,inlineStyles):null});}catch(e){console.error(e);}}},{key:"render",value:function render(){var props=this.props,ast=this.state.ast;return _react.default.createElement(_xml.SvgAst,{ast:ast,override:props.override||props,__source:{fileName:_jsxFileName,lineNumber:742}});}}]);return SvgWithCss;}(_react.Component);exports.SvgWithCss=SvgWithCss;var SvgWithCssUri=function(_Component2){(0,_inherits2.default)(SvgWithCssUri,_Component2);function SvgWithCssUri(){var _getPrototypeOf3;var _this2;(0,_classCallCheck2.default)(this,SvgWithCssUri);for(var _len3=arguments.length,args=new Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3];}_this2=(0,_possibleConstructorReturn2.default)(this,(_getPrototypeOf3=(0,_getPrototypeOf4.default)(SvgWithCssUri)).call.apply(_getPrototypeOf3,[this].concat(args)));(0,_defineProperty2.default)((0,_assertThisInitialized2.default)(_this2),"state",{xml:null});return _this2;}(0,_createClass2.default)(SvgWithCssUri,[{key:"componentDidMount",value:function componentDidMount(){this.fetch(this.props.uri);}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){var uri=this.props.uri;if(uri!==prevProps.uri){this.fetch(uri);}}},{key:"fetch",value:function fetch(uri){return _regenerator.default.async(function fetch$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.prev=0;_context.t0=this;if(!uri){_context.next=8;break;}_context.next=5;return _regenerator.default.awrap((0,_xml.fetchText)(uri));case 5:_context.t1=_context.sent;_context.next=9;break;case 8:_context.t1=null;case 9:_context.t2=_context.t1;_context.t3={xml:_context.t2};_context.t0.setState.call(_context.t0,_context.t3);_context.next=17;break;case 14:_context.prev=14;_context.t4=_context["catch"](0);console.error(_context.t4);case 17:case"end":return _context.stop();}}},null,this,[[0,14]],Promise);}},{key:"render",value:function render(){var props=this.props,xml=this.state.xml;return _react.default.createElement(SvgWithCss,{xml:xml,override:props,__source:{fileName:_jsxFileName,lineNumber:769}});}}]);return SvgWithCssUri;}(_react.Component);exports.SvgWithCssUri=SvgWithCssUri;
//# sourceMappingURL=css.js.map