(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Tail"] = factory();
	else
		root["Tail"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "0a49":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("9b43");
var IObject = __webpack_require__("626a");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var asc = __webpack_require__("cd1c");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "1169":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("2d95");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "454f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("46a7");
var $Object = __webpack_require__("584a").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "46a7":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("8e60"), 'Object', { defineProperty: __webpack_require__("d9f6").f });


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7514":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "85f2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("454f");

/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "aebd":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "cd1c":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("e853");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e853":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var isArray = __webpack_require__("1169");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "f1de":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Dom7 2.1.3
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * http://framework7.io/docs/dom.html
 *
 * Copyright 2019, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: February 11, 2019
 */!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var h="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,y="undefined"==typeof window?{document:h,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,l=function(t){for(var e=0;e<t.length;e+=1)this[e]=t[e];return this.length=t.length,this};function p(t,e){var n=[],i=0;if(t&&!e&&t instanceof l)return t;if(t)if("string"==typeof t){var r,o,s=t.trim();if(0<=s.indexOf("<")&&0<=s.indexOf(">")){var a="div";for(0===s.indexOf("<li")&&(a="ul"),0===s.indexOf("<tr")&&(a="tbody"),0!==s.indexOf("<td")&&0!==s.indexOf("<th")||(a="tr"),0===s.indexOf("<tbody")&&(a="table"),0===s.indexOf("<option")&&(a="select"),(o=h.createElement(a)).innerHTML=s,i=0;i<o.childNodes.length;i+=1)n.push(o.childNodes[i])}else for(r=e||"#"!==t[0]||t.match(/[ .<>:~]/)?(e||h).querySelectorAll(t.trim()):[h.getElementById(t.trim().split("#")[1])],i=0;i<r.length;i+=1)r[i]&&n.push(r[i])}else if(t.nodeType||t===y||t===h)n.push(t);else if(0<t.length&&t[0].nodeType)for(i=0;i<t.length;i+=1)n.push(t[i]);return new l(n)}function o(t){for(var e=[],n=0;n<t.length;n+=1)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function b(t){return y.requestAnimationFrame?y.requestAnimationFrame(t):y.webkitRequestAnimationFrame?y.webkitRequestAnimationFrame(t):y.setTimeout(t,1e3/60)}p.fn=l.prototype,p.Class=l,p.Dom7=l;var t=Object.freeze({addClass:function(t){if(void 0===t)return this;for(var e=t.split(" "),n=0;n<e.length;n+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.add(e[n]);return this},removeClass:function(t){for(var e=t.split(" "),n=0;n<e.length;n+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.remove(e[n]);return this},hasClass:function(t){return!!this[0]&&this[0].classList.contains(t)},toggleClass:function(t){for(var e=t.split(" "),n=0;n<e.length;n+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.toggle(e[n]);return this},attr:function(t,e){var n=arguments;if(1===arguments.length&&"string"==typeof t)return this[0]?this[0].getAttribute(t):void 0;for(var i=0;i<this.length;i+=1)if(2===n.length)this[i].setAttribute(t,e);else for(var r in t)this[i][r]=t[r],this[i].setAttribute(r,t[r]);return this},removeAttr:function(t){for(var e=0;e<this.length;e+=1)this[e].removeAttribute(t);return this},prop:function(t,e){var n=arguments;if(1!==arguments.length||"string"!=typeof t){for(var i=0;i<this.length;i+=1)if(2===n.length)this[i][t]=e;else for(var r in t)this[i][r]=t[r];return this}if(this[0])return this[0][t]},data:function(t,e){var n;if(void 0!==e){for(var i=0;i<this.length;i+=1)(n=this[i]).dom7ElementDataStorage||(n.dom7ElementDataStorage={}),n.dom7ElementDataStorage[t]=e;return this}if(n=this[0]){if(n.dom7ElementDataStorage&&t in n.dom7ElementDataStorage)return n.dom7ElementDataStorage[t];var r=n.getAttribute("data-"+t);return r||void 0}},removeData:function(t){for(var e=0;e<this.length;e+=1){var n=this[e];n.dom7ElementDataStorage&&n.dom7ElementDataStorage[t]&&(n.dom7ElementDataStorage[t]=null,delete n.dom7ElementDataStorage[t])}},dataset:function(){var t=this[0];if(t){var e,n={};if(t.dataset)for(var i in t.dataset)n[i]=t.dataset[i];else for(var r=0;r<t.attributes.length;r+=1){var o=t.attributes[r];0<=o.name.indexOf("data-")&&(n[(e=o.name.split("data-")[1],e.toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()}))]=o.value)}for(var s in n)"false"===n[s]?n[s]=!1:"true"===n[s]?n[s]=!0:parseFloat(n[s])===1*n[s]&&(n[s]*=1);return n}},val:function(t){var e=this;if(void 0!==t){for(var n=0;n<e.length;n+=1){var i=e[n];if(Array.isArray(t)&&i.multiple&&"select"===i.nodeName.toLowerCase())for(var r=0;r<i.options.length;r+=1)i.options[r].selected=0<=t.indexOf(i.options[r].value);else i.value=t}return e}if(e[0]){if(e[0].multiple&&"select"===e[0].nodeName.toLowerCase()){for(var o=[],s=0;s<e[0].selectedOptions.length;s+=1)o.push(e[0].selectedOptions[s].value);return o}return e[0].value}},transform:function(t){for(var e=0;e<this.length;e+=1){var n=this[e].style;n.webkitTransform=t,n.transform=t}return this},transition:function(t){"string"!=typeof t&&(t+="ms");for(var e=0;e<this.length;e+=1){var n=this[e].style;n.webkitTransitionDuration=t,n.transitionDuration=t}return this},on:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=e[0],o=e[1],s=e[2],r=e[3];function a(t){var e=t.target;if(e){var n=t.target.dom7EventData||[];if(n.indexOf(t)<0&&n.unshift(t),p(e).is(o))s.apply(e,n);else for(var i=p(e).parents(),r=0;r<i.length;r+=1)p(i[r]).is(o)&&s.apply(i[r],n)}}function l(t){var e=t&&t.target&&t.target.dom7EventData||[];e.indexOf(t)<0&&e.unshift(t),s.apply(this,e)}"function"==typeof e[1]&&(i=(t=e)[0],s=t[1],r=t[2],o=void 0),r||(r=!1);for(var h,u=i.split(" "),f=0;f<this.length;f+=1){var c=this[f];if(o)for(h=0;h<u.length;h+=1){var d=u[h];c.dom7LiveListeners||(c.dom7LiveListeners={}),c.dom7LiveListeners[d]||(c.dom7LiveListeners[d]=[]),c.dom7LiveListeners[d].push({listener:s,proxyListener:a}),c.addEventListener(d,a,r)}else for(h=0;h<u.length;h+=1){var v=u[h];c.dom7Listeners||(c.dom7Listeners={}),c.dom7Listeners[v]||(c.dom7Listeners[v]=[]),c.dom7Listeners[v].push({listener:s,proxyListener:l}),c.addEventListener(v,l,r)}}return this},off:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=e[0],r=e[1],o=e[2],s=e[3];"function"==typeof e[1]&&(i=(t=e)[0],o=t[1],s=t[2],r=void 0),s||(s=!1);for(var a=i.split(" "),l=0;l<a.length;l+=1)for(var h=a[l],u=0;u<this.length;u+=1){var f=this[u],c=void 0;if(!r&&f.dom7Listeners?c=f.dom7Listeners[h]:r&&f.dom7LiveListeners&&(c=f.dom7LiveListeners[h]),c&&c.length)for(var d=c.length-1;0<=d;d-=1){var v=c[d];o&&v.listener===o?(f.removeEventListener(h,v.proxyListener,s),c.splice(d,1)):o&&v.listener&&v.listener.dom7proxy&&v.listener.dom7proxy===o?(f.removeEventListener(h,v.proxyListener,s),c.splice(d,1)):o||(f.removeEventListener(h,v.proxyListener,s),c.splice(d,1))}}return this},once:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=this,r=e[0],o=e[1],s=e[2],a=e[3];function l(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];s.apply(this,t),i.off(r,o,l,a),l.dom7proxy&&delete l.dom7proxy}return"function"==typeof e[1]&&(r=(t=e)[0],s=t[1],a=t[2],o=void 0),l.dom7proxy=s,i.on(r,o,l,a)},trigger:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];for(var n=t[0].split(" "),i=t[1],r=0;r<n.length;r+=1)for(var o=n[r],s=0;s<this.length;s+=1){var a=this[s],l=void 0;try{l=new y.CustomEvent(o,{detail:i,bubbles:!0,cancelable:!0})}catch(t){(l=h.createEvent("Event")).initEvent(o,!0,!0),l.detail=i}a.dom7EventData=t.filter(function(t,e){return 0<e}),a.dispatchEvent(l),a.dom7EventData=[],delete a.dom7EventData}return this},transitionEnd:function(e){var n,i=["webkitTransitionEnd","transitionend"],r=this;function o(t){if(t.target===this)for(e.call(this,t),n=0;n<i.length;n+=1)r.off(i[n],o)}if(e)for(n=0;n<i.length;n+=1)r.on(i[n],o);return this},animationEnd:function(e){var n,i=["webkitAnimationEnd","animationend"],r=this;function o(t){if(t.target===this)for(e.call(this,t),n=0;n<i.length;n+=1)r.off(i[n],o)}if(e)for(n=0;n<i.length;n+=1)r.on(i[n],o);return this},width:function(){return this[0]===y?y.innerWidth:0<this.length?parseFloat(this.css("width")):null},outerWidth:function(t){if(0<this.length){if(t){var e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},height:function(){return this[0]===y?y.innerHeight:0<this.length?parseFloat(this.css("height")):null},outerHeight:function(t){if(0<this.length){if(t){var e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(0<this.length){var t=this[0],e=t.getBoundingClientRect(),n=h.body,i=t.clientTop||n.clientTop||0,r=t.clientLeft||n.clientLeft||0,o=t===y?y.scrollY:t.scrollTop,s=t===y?y.scrollX:t.scrollLeft;return{top:e.top+o-i,left:e.left+s-r}}return null},hide:function(){for(var t=0;t<this.length;t+=1)this[t].style.display="none";return this},show:function(){for(var t=0;t<this.length;t+=1){var e=this[t];"none"===e.style.display&&(e.style.display=""),"none"===y.getComputedStyle(e,null).getPropertyValue("display")&&(e.style.display="block")}return this},styles:function(){return this[0]?y.getComputedStyle(this[0],null):{}},css:function(t,e){var n;if(1===arguments.length){if("string"!=typeof t){for(n=0;n<this.length;n+=1)for(var i in t)this[n].style[i]=t[i];return this}if(this[0])return y.getComputedStyle(this[0],null).getPropertyValue(t)}if(2!==arguments.length||"string"!=typeof t)return this;for(n=0;n<this.length;n+=1)this[n].style[t]=e;return this},toArray:function(){for(var t=[],e=0;e<this.length;e+=1)t.push(this[e]);return t},each:function(t){if(!t)return this;for(var e=0;e<this.length;e+=1)if(!1===t.call(this[e],e,this[e]))return this;return this},forEach:function(t){if(!t)return this;for(var e=0;e<this.length;e+=1)if(!1===t.call(this[e],this[e],e))return this;return this},filter:function(t){for(var e=[],n=0;n<this.length;n+=1)t.call(this[n],n,this[n])&&e.push(this[n]);return new l(e)},map:function(t){for(var e=[],n=0;n<this.length;n+=1)e.push(t.call(this[n],n,this[n]));return new l(e)},html:function(t){if(void 0===t)return this[0]?this[0].innerHTML:void 0;for(var e=0;e<this.length;e+=1)this[e].innerHTML=t;return this},text:function(t){if(void 0===t)return this[0]?this[0].textContent.trim():null;for(var e=0;e<this.length;e+=1)this[e].textContent=t;return this},is:function(t){var e,n,i=this[0];if(!i||void 0===t)return!1;if("string"==typeof t){if(i.matches)return i.matches(t);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(t);if(i.msMatchesSelector)return i.msMatchesSelector(t);for(e=p(t),n=0;n<e.length;n+=1)if(e[n]===i)return!0;return!1}if(t===h)return i===h;if(t===y)return i===y;if(t.nodeType||t instanceof l){for(e=t.nodeType?[t]:t,n=0;n<e.length;n+=1)if(e[n]===i)return!0;return!1}return!1},indexOf:function(t){for(var e=0;e<this.length;e+=1)if(this[e]===t)return e;return-1},index:function(){var t,e=this[0];if(e){for(t=0;null!==(e=e.previousSibling);)1===e.nodeType&&(t+=1);return t}},eq:function(t){if(void 0===t)return this;var e,n=this.length;return new l(n-1<t?[]:t<0?(e=n+t)<0?[]:[this[e]]:[this[t]])},append:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];for(var i=0;i<e.length;i+=1){t=e[i];for(var r=0;r<this.length;r+=1)if("string"==typeof t){var o=h.createElement("div");for(o.innerHTML=t;o.firstChild;)this[r].appendChild(o.firstChild)}else if(t instanceof l)for(var s=0;s<t.length;s+=1)this[r].appendChild(t[s]);else this[r].appendChild(t)}return this},appendTo:function(t){return p(t).append(this),this},prepend:function(t){var e,n;for(e=0;e<this.length;e+=1)if("string"==typeof t){var i=h.createElement("div");for(i.innerHTML=t,n=i.childNodes.length-1;0<=n;n-=1)this[e].insertBefore(i.childNodes[n],this[e].childNodes[0])}else if(t instanceof l)for(n=0;n<t.length;n+=1)this[e].insertBefore(t[n],this[e].childNodes[0]);else this[e].insertBefore(t,this[e].childNodes[0]);return this},prependTo:function(t){return p(t).prepend(this),this},insertBefore:function(t){for(var e=p(t),n=0;n<this.length;n+=1)if(1===e.length)e[0].parentNode.insertBefore(this[n],e[0]);else if(1<e.length)for(var i=0;i<e.length;i+=1)e[i].parentNode.insertBefore(this[n].cloneNode(!0),e[i])},insertAfter:function(t){for(var e=p(t),n=0;n<this.length;n+=1)if(1===e.length)e[0].parentNode.insertBefore(this[n],e[0].nextSibling);else if(1<e.length)for(var i=0;i<e.length;i+=1)e[i].parentNode.insertBefore(this[n].cloneNode(!0),e[i].nextSibling)},next:function(t){return 0<this.length?t?this[0].nextElementSibling&&p(this[0].nextElementSibling).is(t)?new l([this[0].nextElementSibling]):new l([]):this[0].nextElementSibling?new l([this[0].nextElementSibling]):new l([]):new l([])},nextAll:function(t){var e=[],n=this[0];if(!n)return new l([]);for(;n.nextElementSibling;){var i=n.nextElementSibling;t?p(i).is(t)&&e.push(i):e.push(i),n=i}return new l(e)},prev:function(t){if(0<this.length){var e=this[0];return t?e.previousElementSibling&&p(e.previousElementSibling).is(t)?new l([e.previousElementSibling]):new l([]):e.previousElementSibling?new l([e.previousElementSibling]):new l([])}return new l([])},prevAll:function(t){var e=[],n=this[0];if(!n)return new l([]);for(;n.previousElementSibling;){var i=n.previousElementSibling;t?p(i).is(t)&&e.push(i):e.push(i),n=i}return new l(e)},siblings:function(t){return this.nextAll(t).add(this.prevAll(t))},parent:function(t){for(var e=[],n=0;n<this.length;n+=1)null!==this[n].parentNode&&(t?p(this[n].parentNode).is(t)&&e.push(this[n].parentNode):e.push(this[n].parentNode));return p(o(e))},parents:function(t){for(var e=[],n=0;n<this.length;n+=1)for(var i=this[n].parentNode;i;)t?p(i).is(t)&&e.push(i):e.push(i),i=i.parentNode;return p(o(e))},closest:function(t){var e=this;return void 0===t?new l([]):(e.is(t)||(e=e.parents(t).eq(0)),e)},find:function(t){for(var e=[],n=0;n<this.length;n+=1)for(var i=this[n].querySelectorAll(t),r=0;r<i.length;r+=1)e.push(i[r]);return new l(e)},children:function(t){for(var e=[],n=0;n<this.length;n+=1)for(var i=this[n].childNodes,r=0;r<i.length;r+=1)t?1===i[r].nodeType&&p(i[r]).is(t)&&e.push(i[r]):1===i[r].nodeType&&e.push(i[r]);return new l(o(e))},remove:function(){for(var t=0;t<this.length;t+=1)this[t].parentNode&&this[t].parentNode.removeChild(this[t]);return this},detach:function(){return this.remove()},add:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];var n,i;for(n=0;n<t.length;n+=1){var r=p(t[n]);for(i=0;i<r.length;i+=1)this[this.length]=r[i],this.length+=1}return this},empty:function(){for(var t=0;t<this.length;t+=1){var e=this[t];if(1===e.nodeType){for(var n=0;n<e.childNodes.length;n+=1)e.childNodes[n].parentNode&&e.childNodes[n].parentNode.removeChild(e.childNodes[n]);e.textContent=""}}return this}});var e=Object.freeze({scrollTo:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=e[0],r=e[1],p=e[2],g=e[3],m=e[4];return 4===e.length&&"function"==typeof g&&(m=g,i=(t=e)[0],r=t[1],p=t[2],m=t[3],g=t[4]),void 0===g&&(g="swing"),this.each(function(){var o,s,t,e,a,l,h,u,f=this,c=0<r||0===r,d=0<i||0===i;if(void 0===g&&(g="swing"),c&&(o=f.scrollTop,p||(f.scrollTop=r)),d&&(s=f.scrollLeft,p||(f.scrollLeft=i)),p){c&&(t=f.scrollHeight-f.offsetHeight,a=Math.max(Math.min(r,t),0)),d&&(e=f.scrollWidth-f.offsetWidth,l=Math.max(Math.min(i,e),0));var v=null;c&&a===o&&(c=!1),d&&l===s&&(d=!1),b(function t(e){void 0===e&&(e=(new Date).getTime()),null===v&&(v=e);var n,i=Math.max(Math.min((e-v)/p,1),0),r="linear"===g?i:.5-Math.cos(i*Math.PI)/2;c&&(h=o+r*(a-o)),d&&(u=s+r*(l-s)),c&&o<a&&a<=h&&(f.scrollTop=a,n=!0),c&&a<o&&h<=a&&(f.scrollTop=a,n=!0),d&&s<l&&l<=u&&(f.scrollLeft=l,n=!0),d&&l<s&&u<=l&&(f.scrollLeft=l,n=!0),n?m&&m():(c&&(f.scrollTop=h),d&&(f.scrollLeft=u),b(t))})}})},scrollTop:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=e[0],r=e[1],o=e[2],s=e[3];return 3===e.length&&"function"==typeof o&&(i=(t=e)[0],r=t[1],s=t[2],o=t[3]),void 0===i?0<this.length?this[0].scrollTop:null:this.scrollTo(void 0,i,r,o,s)},scrollLeft:function(){for(var t,e=[],n=arguments.length;n--;)e[n]=arguments[n];var i=e[0],r=e[1],o=e[2],s=e[3];return 3===e.length&&"function"==typeof o&&(i=(t=e)[0],r=t[1],s=t[2],o=t[3]),void 0===i?0<this.length?this[0].scrollLeft:null:this.scrollTo(i,void 0,r,o,s)}});var n=Object.freeze({animate:function(t,e){var n,i=this,m={props:Object.assign({},t),params:Object.assign({duration:300,easing:"swing"},e),elements:i,animating:!1,que:[],easingProgress:function(t,e){return"swing"===t?.5-Math.cos(e*Math.PI)/2:"function"==typeof t?t(e):e},stop:function(){var t;m.frameId&&(t=m.frameId,y.cancelAnimationFrame?y.cancelAnimationFrame(t):y.webkitCancelAnimationFrame?y.webkitCancelAnimationFrame(t):y.clearTimeout(t)),m.animating=!1,m.elements.each(function(t,e){delete e.dom7AnimateInstance}),m.que=[]},done:function(t){if(m.animating=!1,m.elements.each(function(t,e){delete e.dom7AnimateInstance}),t&&t(i),0<m.que.length){var e=m.que.shift();m.animate(e[0],e[1])}},animate:function(h,u){if(m.animating)return m.que.push([h,u]),m;var f=[];m.elements.each(function(e,n){var i,r,o,s,a;n.dom7AnimateInstance||(m.elements[e].dom7AnimateInstance=m),f[e]={container:n},Object.keys(h).forEach(function(t){i=y.getComputedStyle(n,null).getPropertyValue(t).replace(",","."),r=parseFloat(i),o=i.replace(r,""),s=parseFloat(h[t]),a=h[t]+o,f[e][t]={initialFullValue:i,initialValue:r,unit:o,finalValue:s,finalFullValue:a,currentValue:r}})});var c,d,v=null,p=0,g=0,e=!1;return m.animating=!0,m.frameId=b(function t(){var a,l;c=(new Date).getTime(),e||(e=!0,u.begin&&u.begin(i)),null===v&&(v=c),u.progress&&u.progress(i,Math.max(Math.min((c-v)/u.duration,1),0),v+u.duration-c<0?0:v+u.duration-c,v),f.forEach(function(t){var s=t;d||s.done||Object.keys(h).forEach(function(t){if(!d&&!s.done){a=Math.max(Math.min((c-v)/u.duration,1),0),l=m.easingProgress(u.easing,a);var e=s[t],n=e.initialValue,i=e.finalValue,r=e.unit;s[t].currentValue=n+l*(i-n);var o=s[t].currentValue;(n<i&&i<=o||i<n&&o<=i)&&(s.container.style[t]=i+r,(g+=1)===Object.keys(h).length&&(s.done=!0,p+=1),p===f.length&&(d=!0)),d?m.done(u.complete):s.container.style[t]=o+r}})}),d||(m.frameId=b(t))}),m}};if(0===m.elements.length)return i;for(var r=0;r<m.elements.length;r+=1)m.elements[r].dom7AnimateInstance?n=m.elements[r].dom7AnimateInstance:m.elements[r].dom7AnimateInstance=m;return n||(n=m),"stop"===t?n.stop():n.animate(m.props,m.params),i},stop:function(){for(var t=0;t<this.length;t+=1)this[t].dom7AnimateInstance&&this[t].dom7AnimateInstance.stop()}}),s="resize scroll".split(" ");function i(t){for(var e,n=[],i=arguments.length-1;0<i--;)n[i]=arguments[i+1];if(void 0!==n[0])return(e=this).on.apply(e,[t].concat(n));for(var r=0;r<this.length;r+=1)s.indexOf(t)<0&&(t in this[r]?this[r][t]():p(this[r]).trigger(t));return this}return[t,e,n,Object.freeze({click:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["click"].concat(t))},blur:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["blur"].concat(t))},focus:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["focus"].concat(t))},focusin:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["focusin"].concat(t))},focusout:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["focusout"].concat(t))},keyup:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["keyup"].concat(t))},keydown:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["keydown"].concat(t))},keypress:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["keypress"].concat(t))},submit:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["submit"].concat(t))},change:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["change"].concat(t))},mousedown:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["mousedown"].concat(t))},mousemove:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["mousemove"].concat(t))},mouseup:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["mouseup"].concat(t))},mouseenter:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["mouseenter"].concat(t))},mouseleave:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["mouseleave"].concat(t))},mouseout:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["mouseout"].concat(t))},mouseover:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["mouseover"].concat(t))},touchstart:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["touchstart"].concat(t))},touchend:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["touchend"].concat(t))},touchmove:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["touchmove"].concat(t))},resize:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["resize"].concat(t))},scroll:function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e];return i.bind(this).apply(void 0,["scroll"].concat(t))}})].forEach(function(e){Object.keys(e).forEach(function(t){p.fn[t]=e[t]})}),p});
//# sourceMappingURL=dom7.min.js.map


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("85f2");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    define_property_default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: ./node_modules/dom7/dist/dom7.min.js
var dom7_min = __webpack_require__("f1de");
var dom7_min_default = /*#__PURE__*/__webpack_require__.n(dom7_min);

// CONCATENATED MODULE: ./src/index.js




var TAIL_DEFAULT = {
  color: '#000',
  height: '2px',
  duration: 255,
  className: ''
};

var src_Tail =
/*#__PURE__*/
function () {
  /**
   *  @param { Object }       options
   *  @param { String | DOM } options.relativeEl            - 统一相对位置的父元素
   *  @param { String | DOM } options.itemEl                - 导航元素
   *  @param { String }       [options.event=click]         - 触发跟随事件名
   *  @param { Boolean }      [options.interesting=false]   - 有趣的模式
   *  @param { Number }       [options.defaultI=0]          - 默认下标
   *  @param { Object }       [options.tail]                - 尾巴属性
   *  @param { String }       [options.tail.className = ''] - tail 元素的 class
   *  @param { String }       [options.tail.color = #000]   - 尾巴颜色
   *  @param { String }       [options.tail.height = '2px'] - 尾巴高度
   *  @param { String }       [options.tail.duration = 255] - 尾巴高度
   **/
  function Tail(_ref) {
    var relativeEl = _ref.relativeEl,
        itemEl = _ref.itemEl,
        _ref$event = _ref.event,
        event = _ref$event === void 0 ? 'click' : _ref$event,
        _ref$interesting = _ref.interesting,
        interesting = _ref$interesting === void 0 ? false : _ref$interesting,
        _ref$defaultI = _ref.defaultI,
        defaultI = _ref$defaultI === void 0 ? 0 : _ref$defaultI,
        _ref$tail = _ref.tail,
        tail = _ref$tail === void 0 ? {} : _ref$tail;

    _classCallCheck(this, Tail);

    var my = this;
    var $relativeEl = dom7_min_default()(relativeEl);
    var $itemEl = $relativeEl.find(itemEl); // 判断相对父元素是否已有定位属性
    // 若无则设置上

    if ($relativeEl.css('position') === 'static') {
      $relativeEl.css({
        position: 'relative'
      });
    } // create tail dom


    var $tailEl = dom7_min_default()("<i class=\"".concat(tail.className || TAIL_DEFAULT.className, "\">")).css({
      position: 'absolute',
      bottom: 0,
      backgroundColor: tail.color || TAIL_DEFAULT.color,
      height: tail.height || TAIL_DEFAULT.height,
      transition: "all ".concat(tail.duration || TAIL_DEFAULT.duration, "ms")
    }); // append

    $relativeEl.append($tailEl); // 绑定导航触发事件

    $itemEl.on(event, function () {
      my.slideTo($itemEl.indexOf(this));
    }); // this attr

    this.$relativeEl = $relativeEl;
    this.$itemEl = $itemEl;
    this.$tailEl = $tailEl;
    this.interesting = interesting;
    this.currentI = defaultI;
    this.duration = tail.duration || TAIL_DEFAULT.duration; // 移动默认位置

    this.slideTo(defaultI);
  }

  _createClass(Tail, [{
    key: "slideTo",
    // 移动
    value: function slideTo(currentI) {
      var $relativeEl = this.$relativeEl,
          $tailEl = this.$tailEl,
          $itemEl = this.$itemEl,
          interesting = this.interesting,
          duration = this.duration,
          prevI = this.currentI;
      var $prevItemEl = this.$itemEl.eq(prevI);
      var $currentItemEl = this.$itemEl.eq(currentI);
      var relativeWidth = $relativeEl[0].offsetWidth;
      var _$prevItemEl$ = $prevItemEl[0],
          prevLeft = _$prevItemEl$.offsetLeft,
          prevWidth = _$prevItemEl$.offsetWidth;
      var _$currentItemEl$ = $currentItemEl[0],
          currentLeft = _$currentItemEl$.offsetLeft,
          currentWidth = _$currentItemEl$.offsetWidth; // 初始化时 和 重复点击同一导航时触发
      // 设置 left 和 width

      if (currentI === prevI) {
        $tailEl.css({
          left: "".concat(currentLeft, "px"),
          width: "".concat(currentWidth, "px")
        });
        return false;
      } // 有趣的模式


      if (interesting) {
        // 过渡方向
        var dir = currentI > prevI ? 'right' : 'left'; // 需要过渡的距离（宽度）

        var transformWidth = Math.abs(currentLeft - prevLeft) + (dir === 'left' ? prevWidth : currentWidth); // 执行伸展过渡

        $tailEl.css({
          left: dir === 'right' ? "".concat(prevLeft, "px") : 'auto',
          right: dir === 'left' ? "".concat(relativeWidth - prevLeft - prevWidth, "px") : 'auto',
          width: "".concat(transformWidth, "px")
        }); // 伸展过渡结束后收回伸展

        clearTimeout(this.transformTimer);
        this.transformTimer = setTimeout(function () {
          $tailEl.css({
            left: dir === 'right' ? "".concat(currentLeft, "px") : 'auto',
            right: dir === 'left' ? "".concat(relativeWidth - currentLeft - currentWidth, "px") : 'auto',
            width: "".concat(currentWidth, "px")
          });
        }, duration);
      } // 常规模式
      else {
          $tailEl.css({
            left: "".concat(currentLeft, "px"),
            width: "".concat(currentWidth, "px")
          });
        } // 赋值下标


      this.currentI = currentI;
    }
  }]);

  return Tail;
}();


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_Tail);



/***/ })

/******/ })["default"];
});
//# sourceMappingURL=Tail.umd.js.map