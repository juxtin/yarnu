"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.default=extractPolyPoints;function extractPolyPoints(points){var polyPoints=Array.isArray(points)?points.join(','):points;return polyPoints.replace(/[^e]-/,' -').split(/(?:\s+|\s*,\s*)/g).join(' ');}
//# sourceMappingURL=extractPolyPoints.js.map