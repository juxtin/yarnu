export default (function (o, c) {
  var proto = c.prototype;

  var isObject = function isObject(obj) {
    return !(obj instanceof Date) && !(obj instanceof Array) && obj instanceof Object;
  };

  var prettyUnit = function prettyUnit(u) {
    var unit = proto.$utils().p(u);
    return unit === 'date' ? 'day' : unit;
  };

  var parseDate = function parseDate(cfg) {
    var date = cfg.date,
        utc = cfg.utc;
    var $d = {};

    if (isObject(date)) {
      Object.keys(date).forEach(function (k) {
        $d[prettyUnit(k)] = date[k];
      });
      var y = $d.year || 1970;
      var M = $d.month - 1 || 0;
      var d = $d.day || 1;
      var h = $d.hour || 0;
      var m = $d.minute || 0;
      var s = $d.second || 0;
      var ms = $d.millisecond || 0;

      if (utc) {
        return new Date(Date.UTC(y, M, d, h, m, s, ms));
      }

      return new Date(y, M, d, h, m, s, ms);
    }

    return date;
  };

  var oldParse = proto.parse;

  proto.parse = function (cfg) {
    cfg.date = parseDate.bind(this)(cfg);
    oldParse.bind(this)(cfg);
  };

  var oldSet = proto.set;
  var oldAdd = proto.add;

  var callObject = function callObject(call, argument, string, offset) {
    if (offset === void 0) {
      offset = 1;
    }

    if (argument instanceof Object) {
      var keys = Object.keys(argument);
      var chain = this;
      keys.forEach(function (key) {
        chain = call.bind(chain)(argument[key] * offset, key);
      });
      return chain;
    }

    return call.bind(this)(argument * offset, string);
  };

  proto.set = function (string, _int) {
    _int = _int === undefined ? string : _int;
    return callObject.bind(this)(function (i, s) {
      return oldSet.bind(this)(s, i);
    }, _int, string);
  };

  proto.add = function (number, string) {
    return callObject.bind(this)(oldAdd, number, string);
  };

  proto.subtract = function (number, string) {
    return callObject.bind(this)(oldAdd, number, string, -1);
  };
});