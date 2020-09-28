"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=extractFill;var _extractBrush=_interopRequireDefault(require("./extractBrush"));var _extractOpacity=_interopRequireDefault(require("./extractOpacity"));var _extractColor=require("./extractColor");var fillRules={evenodd:0,nonzero:1};var defaultFill=_extractColor.colorNames.black;function extractFill(o,props,inherited){var fill=props.fill,fillRule=props.fillRule,fillOpacity=props.fillOpacity;if(fill!=null){inherited.push('fill');o.fill=!fill&&typeof fill!=='number'?defaultFill:(0,_extractBrush.default)(fill);}if(fillOpacity!=null){inherited.push('fillOpacity');o.fillOpacity=(0,_extractOpacity.default)(fillOpacity);}if(fillRule!=null){inherited.push('fillRule');o.fillRule=fillRule&&fillRules[fillRule]===0?0:1;}}
//# sourceMappingURL=extractFill.js.map