"use strict";
var switchMap_1 = require('./switchMap');
var identity_1 = require('../util/identity');
function switchAll() {
    return switchMap_1.switchMap(identity_1.identity);
}
exports.switchAll = switchAll;
//# sourceMappingURL=switchAll.js.map