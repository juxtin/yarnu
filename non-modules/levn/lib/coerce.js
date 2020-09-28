// Generated by LiveScript 1.2.0
(function(){
  var parsedTypeCheck, types, toString$ = {}.toString;
  parsedTypeCheck = require('type-check').parsedTypeCheck;
  types = {
    '*': function(it){
      switch (toString$.call(it).slice(8, -1)) {
      case 'Array':
        return coerceType(it, {
          type: 'Array'
        });
      case 'Object':
        return coerceType(it, {
          type: 'Object'
        });
      default:
        return {
          type: 'Just',
          value: coerceTypes(it, [
            {
              type: 'Undefined'
            }, {
              type: 'Null'
            }, {
              type: 'NaN'
            }, {
              type: 'Boolean'
            }, {
              type: 'Number'
            }, {
              type: 'Date'
            }, {
              type: 'RegExp'
            }, {
              type: 'Array'
            }, {
              type: 'Object'
            }, {
              type: 'String'
            }
          ], {
            explicit: true
          })
        };
      }
    },
    Undefined: function(it){
      if (it === 'undefined' || it === void 8) {
        return {
          type: 'Just',
          value: void 8
        };
      } else {
        return {
          type: 'Nothing'
        };
      }
    },
    Null: function(it){
      if (it === 'null') {
        return {
          type: 'Just',
          value: null
        };
      } else {
        return {
          type: 'Nothing'
        };
      }
    },
    NaN: function(it){
      if (it === 'NaN') {
        return {
          type: 'Just',
          value: NaN
        };
      } else {
        return {
          type: 'Nothing'
        };
      }
    },
    Boolean: function(it){
      if (it === 'true') {
        return {
          type: 'Just',
          value: true
        };
      } else if (it === 'false') {
        return {
          type: 'Just',
          value: false
        };
      } else {
        return {
          type: 'Nothing'
        };
      }
    },
    Number: function(it){
      return {
        type: 'Just',
        value: +it
      };
    },
    Int: function(it){
      return {
        type: 'Just',
        value: parseInt(it)
      };
    },
    Float: function(it){
      return {
        type: 'Just',
        value: parseFloat(it)
      };
    },
    Date: function(value, options){
      var that;
      if (that = /^\#(.*)\#$/.exec(value)) {
        return {
          type: 'Just',
          value: new Date(+that[1] || that[1])
        };
      } else if (options.explicit) {
        return {
          type: 'Nothing'
        };
      } else {
        return {
          type: 'Just',
          value: new Date(+value || value)
        };
      }
    },
    RegExp: function(value, options){
      var that;
      if (that = /^\/(.*)\/([gimy]*)$/.exec(value)) {
        return {
          type: 'Just',
          value: new RegExp(that[1], that[2])
        };
      } else if (options.explicit) {
        return {
          type: 'Nothing'
        };
      } else {
        return {
          type: 'Just',
          value: new RegExp(value)
        };
      }
    },
    Array: function(it){
      return coerceArray(it, {
        of: [{
          type: '*'
        }]
      });
    },
    Object: function(it){
      return coerceFields(it, {
        of: {}
      });
    },
    String: function(it){
      var that;
      if (toString$.call(it).slice(8, -1) !== 'String') {
        return {
          type: 'Nothing'
        };
      }
      if (that = it.match(/^'(.*)'$/)) {
        return {
          type: 'Just',
          value: that[1]
        };
      } else if (that = it.match(/^"(.*)"$/)) {
        return {
          type: 'Just',
          value: that[1]
        };
      } else {
        return {
          type: 'Just',
          value: it
        };
      }
    }
  };
  function coerceArray(node, type){
    var typeOf, element;
    if (toString$.call(node).slice(8, -1) !== 'Array') {
      return {
        type: 'Nothing'
      };
    }
    typeOf = type.of;
    return {
      type: 'Just',
      value: (function(){
        var i$, ref$, len$, results$ = [];
        for (i$ = 0, len$ = (ref$ = node).length; i$ < len$; ++i$) {
          element = ref$[i$];
          results$.push(coerceTypes(element, typeOf));
        }
        return results$;
      }())
    };
  }
  function coerceTuple(node, type){
    var result, i$, ref$, len$, i, types, that;
    if (toString$.call(node).slice(8, -1) !== 'Array') {
      return {
        type: 'Nothing'
      };
    }
    result = [];
    for (i$ = 0, len$ = (ref$ = type.of).length; i$ < len$; ++i$) {
      i = i$;
      types = ref$[i$];
      if (that = coerceTypes(node[i], types)) {
        result.push(that);
      }
    }
    return {
      type: 'Just',
      value: result
    };
  }
  function coerceFields(node, type){
    var typeOf, key, value;
    if (toString$.call(node).slice(8, -1) !== 'Object') {
      return {
        type: 'Nothing'
      };
    }
    typeOf = type.of;
    return {
      type: 'Just',
      value: (function(){
        var ref$, results$ = {};
        for (key in ref$ = node) {
          value = ref$[key];
          results$[key] = coerceTypes(value, typeOf[key] || [{
            type: '*'
          }]);
        }
        return results$;
      }())
    };
  }
  function coerceType(node, typeObj, options){
    var type, structure, coerceFunc;
    type = typeObj.type, structure = typeObj.structure;
    if (type) {
      coerceFunc = types[type];
      return coerceFunc(node, options);
    } else {
      switch (structure) {
      case 'array':
        return coerceArray(node, typeObj);
      case 'tuple':
        return coerceTuple(node, typeObj);
      case 'fields':
        return coerceFields(node, typeObj);
      }
    }
  }
  function coerceTypes(node, types, options){
    var i$, len$, type, ref$, valueType, value;
    for (i$ = 0, len$ = types.length; i$ < len$; ++i$) {
      type = types[i$];
      ref$ = coerceType(node, type, options), valueType = ref$.type, value = ref$.value;
      if (valueType === 'Nothing') {
        continue;
      }
      if (parsedTypeCheck([type], value)) {
        return value;
      }
    }
    throw new Error("Value " + JSON.stringify(node) + " does not type check against " + JSON.stringify(types) + ".");
  }
  module.exports = coerceTypes;
}).call(this);
