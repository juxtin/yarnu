function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import objectValues from '../polyfills/objectValues';
import inspect from '../jsutils/inspect';
import invariant from '../jsutils/invariant';
import keyValMap from '../jsutils/keyValMap';
import { GraphQLSchema } from '../type/schema';
import { GraphQLDirective } from '../type/directives';
import { isIntrospectionType } from '../type/introspection';
import { GraphQLObjectType, GraphQLInterfaceType, GraphQLUnionType, GraphQLEnumType, GraphQLInputObjectType, GraphQLList, GraphQLNonNull, isListType, isNonNullType, isScalarType, isObjectType, isInterfaceType, isUnionType, isEnumType, isInputObjectType } from '../type/definition';
/**
 * Sort GraphQLSchema.
 */

export function lexicographicSortSchema(schema) {
  var schemaConfig = schema.toConfig();
  var typeMap = keyValMap(sortByName(schemaConfig.types), function (type) {
    return type.name;
  }, sortNamedType);
  return new GraphQLSchema(_objectSpread({}, schemaConfig, {
    types: objectValues(typeMap),
    directives: sortByName(schemaConfig.directives).map(sortDirective),
    query: replaceMaybeType(schemaConfig.query),
    mutation: replaceMaybeType(schemaConfig.mutation),
    subscription: replaceMaybeType(schemaConfig.subscription)
  }));

  function replaceType(type) {
    if (isListType(type)) {
      return new GraphQLList(replaceType(type.ofType));
    } else if (isNonNullType(type)) {
      return new GraphQLNonNull(replaceType(type.ofType));
    }

    return replaceNamedType(type);
  }

  function replaceNamedType(type) {
    return typeMap[type.name];
  }

  function replaceMaybeType(maybeType) {
    return maybeType && replaceNamedType(maybeType);
  }

  function sortDirective(directive) {
    var config = directive.toConfig();
    return new GraphQLDirective(_objectSpread({}, config, {
      locations: sortBy(config.locations, function (x) {
        return x;
      }),
      args: sortArgs(config.args)
    }));
  }

  function sortArgs(args) {
    return sortObjMap(args, function (arg) {
      return _objectSpread({}, arg, {
        type: replaceType(arg.type)
      });
    });
  }

  function sortFields(fieldsMap) {
    return sortObjMap(fieldsMap, function (field) {
      return _objectSpread({}, field, {
        type: replaceType(field.type),
        args: sortArgs(field.args)
      });
    });
  }

  function sortInputFields(fieldsMap) {
    return sortObjMap(fieldsMap, function (field) {
      return _objectSpread({}, field, {
        type: replaceType(field.type)
      });
    });
  }

  function sortTypes(arr) {
    return sortByName(arr).map(replaceNamedType);
  }

  function sortNamedType(type) {
    if (isScalarType(type) || isIntrospectionType(type)) {
      return type;
    } else if (isObjectType(type)) {
      var config = type.toConfig();
      return new GraphQLObjectType(_objectSpread({}, config, {
        interfaces: function interfaces() {
          return sortTypes(config.interfaces);
        },
        fields: function fields() {
          return sortFields(config.fields);
        }
      }));
    } else if (isInterfaceType(type)) {
      var _config = type.toConfig();

      return new GraphQLInterfaceType(_objectSpread({}, _config, {
        fields: function fields() {
          return sortFields(_config.fields);
        }
      }));
    } else if (isUnionType(type)) {
      var _config2 = type.toConfig();

      return new GraphQLUnionType(_objectSpread({}, _config2, {
        types: function types() {
          return sortTypes(_config2.types);
        }
      }));
    } else if (isEnumType(type)) {
      var _config3 = type.toConfig();

      return new GraphQLEnumType(_objectSpread({}, _config3, {
        values: sortObjMap(_config3.values)
      }));
    } else if (isInputObjectType(type)) {
      var _config4 = type.toConfig();

      return new GraphQLInputObjectType(_objectSpread({}, _config4, {
        fields: function fields() {
          return sortInputFields(_config4.fields);
        }
      }));
    } // Not reachable. All possible types have been considered.


    /* istanbul ignore next */
    invariant(false, 'Unexpected type: ' + inspect(type));
  }
}

function sortObjMap(map, sortValueFn) {
  var sortedMap = Object.create(null);
  var sortedKeys = sortBy(Object.keys(map), function (x) {
    return x;
  });

  for (var _i2 = 0; _i2 < sortedKeys.length; _i2++) {
    var key = sortedKeys[_i2];
    var value = map[key];
    sortedMap[key] = sortValueFn ? sortValueFn(value) : value;
  }

  return sortedMap;
}

function sortByName(array) {
  return sortBy(array, function (obj) {
    return obj.name;
  });
}

function sortBy(array, mapToKey) {
  return array.slice().sort(function (obj1, obj2) {
    var key1 = mapToKey(obj1);
    var key2 = mapToKey(obj2);
    return key1.localeCompare(key2);
  });
}
