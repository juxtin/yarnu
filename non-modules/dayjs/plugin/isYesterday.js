!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.dayjs_plugin_isYesterday=e()}(this,function(){"use strict";return function(t,e,n){e.prototype.isYesterday=function(){var t=n().subtract(1,"day");return this.format("YYYY-MM-DD")===t.format("YYYY-MM-DD")}}});
