"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _useCode = _interopRequireDefault(require("../derived/useCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Code({
  exec,
  children,
  dependencies = []
}) {
  (0, _useCode.default)(children || exec, dependencies);
  return null;
}

var _default = Code;
exports.default = _default;
//# sourceMappingURL=AnimatedCode.js.map