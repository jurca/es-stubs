/**
 * @deprecated Use {@linkcode #getPrototypeOf} {@linkcode #setPrototypeOf}
 *             methods.
 * @type {Object}
 */
Object.prototype.__proto__ = {};

/**
 * @param {Object} target
 * @param {...Object} sources
 * @return {Object}
 */
Object.assign = function(target, sources) {};

/**
 * @param {Object} obj
 * @return {Array<symbol>}
 */
Object.getOwnPropertySymbols = function (obj) {};

/**
 * @param {*} value1
 * @param {*} value2
 * @return {boolean} <code>true</code> if the provided values are same.
 */
Object.is = function (value1, value2) {};

/**
 * @param {Object} obj
 * @param {?Object} prototype
 * @return {Object} The <code>obj</code> object with modified prototype.
 */
Object.setPrototypeOf = function (obj, prototype) {};

/**
 * @type {string}
 */
Function.name = "";

/**
 * @param {string=} description
 * @return {symbol}
 */
function Symbol(description) {}

/**
 * This is a representation of the primitive type of symbol.
 *
 * @return {symbol}
 */
function symbol() {}

/**
 * @type {symbol}
 */
Symbol.hasInstance = Symbol();

/**
 * @type {symbol}
 */
Symbol.isConcatSpreadable = Symbol();

/**
 * @type {symbol}
 */
Symbol.iterator = Symbol();

/**
 * @type {symbol}
 */
Symbol.match = Symbol();

/**
 * @type {Object}
 */
Symbol.prototype = {};

/**
 * @type {symbol}
 */
Symbol.replace = Symbol();

/**
 * @type {symbol}
 */
Symbol.search = Symbol();

/**
 * @type {symbol}
 */
Symbol.species = Symbol();

/**
 * @type {symbol}
 */
Symbol.split = Symbol();

/**
 * @type {symbol}
 */
Symbol.toPrimitive = Symbol();

/**
 * @type {symbol}
 */
Symbol.toStringTag = Symbol();

/**
 * @type {symbol}
 */
Symbol.unscopables = Symbol();

/**
 * @param {string} key
 * @return {symbol}
 */
Symbol.for = function (key) {};

/**
 * @param {symbol} sym
 */
Symbol.keyFor = function (sym) {};

/**
 * @return {string}
 */
Symbol.prototype.toString = function () {};

/**
 * @return {*}
 */
Symbol.prototype.valueOf = function () {};

/**
 * @type {number}
 */
Number.EPSILON = 2.220446049250313e-16;

/**
 * @type {number}
 */
Number.MAX_SAFE_INTEGER = 9007199254740991;

/**
 * @type {number}
 */
Number.MIN_SAFE_INTEGER = -9007199254740991;

/**
 * @param {number} testValue
 * @return {boolean} <code>true</code> if this number is finite.
 */
Number.isFinite = function (testValue) {};

/**
 * @param {number} value
 * @return {boolean}
 */
Number.isInteger = function (value) {};

/**
 * @param {*} value
 * @return {boolean}
 */
Number.isNaN = function (value) {};

/**
 * @param {number} testValue
 * @return {boolean}
 */
Number.isSafeInteger = function (testValue) {};

/**
 * @param {string} string
 */
Number.parseFloat = function (string) {};

/**
 * @param {string} string
 * @param {number=} radix
 */
Number.parseInt = function (string, radix) {};

/**
 * @param {number} x
 * @return {number}
 */
Math.acosh = function (x) {};

/**
 * @param {number} x
 * @return {number}
 */
Math.asinh = function (x) {};

/**
 * @param {number} x
 * @return {number} Hyperbolic arctangent of <code>x</code>.
 */
Math.atanh = function (x) {};

/**
 * @param {number} x
 * @return {number}
 */
Math.cbrt = function (x) {};

/**
 * @param {number} x
 * @return {number}
 */
Math.clz32 = function (x) {};

/**
 * @param {number} x
 * @return {number}
 */
Math.cosh = function (x) {};

/**
 * @param {number} x
 * @return {number}
 */
Math.expm1 = function (x) {};

/**
 * @param {number} x
 * @return {number}
 */
Math.fround = function (x) {};

/**
 * @param {...number} value1_value2
 * @return {number}
 */
Math.hypot = function (value1_value2) {};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
Math.imul = function (a, b) {};

/**
 * @param {number} x
 * @return {number}
 */
Math.log1p = function (x) {};

/**
 * @param {number} x
 * @return {number}
 */
Math.log10 = function (x) {};

/**
 * @param {number} x
 * @return {number}
 */
Math.log2 = function (x) {};

/**
 * @param {number} x
 * @return {number}
 */
Math.sign = function (x) {};

/**
 * @param {number} x
 * @return {number}
 */
Math.sinh = function (x) {};

/**
 * @param {number} x
 * @return {number}
 */
Math.tanh = function (x) {};

/**
 * @param {number} x
 * @return {number}
 */
Math.trunc = function (x) {};

/**
 * @param {number} num1_numN
 * @return {string}
 */
String.fromCodePoint = function (num1_numN) {};

/**
 * @param {{raw: string}} callSite
 * @param {...*} _substitutions
 */
String.raw = function (callSite, _substitutions) {};

/**
 * @param {number} pos
 * @return {number}
 */
String.prototype.codePointAt = function (pos) {};

/**
 * @param {string} searchString
 * @param {number=} position
 * @return {boolean}
 */
String.prototype.includes = function (searchString, position) {};

/**
 * @param {string} searchString
 * @param {number=} position
 * @return {boolean}
 */
String.prototype.endsWith = function (searchString, position) {};

/**
 * @param {string} form
 * @return {string}
 */
String.prototype.normalize = function (form) {};

/**
 * @param {number} count
 * @return {string}
 */
String.prototype.repeat = function (count) {};

/**
 * @param {string} searchString
 * @param {number=} position
 * @return {boolean}
 */
String.prototype.startsWith = function (searchString, position) {};

/**
 * @param {type} name
 * @return {HTMLAnchorElement}
 */
String.prototype.anchor = function (name) {};

/**
 * @deprecated Do not use this method because it relies on deprecated HTML
 *             elements.
 * @return {HTMLElement}
 */
String.prototype.big = function () {};

/**
 * @deprecated Blinking text is frowned upon by several accessibility
 *             standards. The &lt;blink&gt; element itself is non-standard and
 *             deprecated.
 * @return {HTMLElement}
 */
String.prototype.blink = function () {};

/**
 * @deprecated Do not use this method because it relies on deprecated HTML
 *             elements.
 * @return {HTMLElement}
 */
String.prototype.bold = function () {};

/**
 * @deprecated Do not use this method because it relies on deprecated HTML
 *             elements.
 * @return {HTMLElement}
 */
String.prototype.fixed = function () {};

/**
 * @deprecated Do not use this method because it relies on deprecated HTML
 *             elements.
 * @param {string} color
 * @return {HTMLElement}
 */
String.prototype.fontcolor = function (color) {};

/**
 * @deprecated Do not use this method because it relies on deprecated HTML
 *             elements.
 * @param {number} size
 * @return {HTMLElement}
 */
String.prototype.fontsize = function (size) {};

/**
 * @deprecated Do not use this method because it relies on deprecated HTML
 *             elements.
 * @return {HTMLElement}
 */
String.prototype.italics = function () {};

/**
 * @param {string} url
 * @return {HTMLAnchorElement}
 */
String.prototype.link = function (url) {};

/**
 * @deprecated Do not use this method because it relies on deprecated HTML
 *             elements.
 * @return {HTMLElement}
 */
String.prototype.small = function () {};

/**
 * @deprecated Do not use this method because it relies on deprecated HTML
 *             elements.
 * @return {HTMLElement}
 */
String.prototype.strike = function () {};

/**
 * @deprecated Do not use this method because it relies on deprecated HTML
 *             elements.
 * @return {HTMLElement}
 */
String.prototype.sub = function () {};

/**
 * @deprecated Do not use this method because it relies on deprecated HTML
 *             elements.
 * @return {HTMLElement}
 */
String.prototype.sup = function () {};

/**
 * @type {string}
 */
RegExp.prototype.flags = "";

/**
 * @type {boolean}
 */
RegExp.prototype.sticky = false;

/**
 * @type {boolean}
 */
RegExp.prototype.unicode = false;

/**
 * @deprecated This feature is being removed from the standard and browsers.
 *             Use the <code>RegExp</code> constructor to achieve the same.
 * @param {string} pattern
 * @param {string} flags
 */
RegExp.prototype.compile = function(pattern, flags) {};

/**
 * @template T
 * @template E
 * @param {({length: number}|Iterator<E>)} arrayLike
 * @param {function(this: T, E): E=} mapFn
 * @param {T=} thisArg
 * @return {Array<E>}
 */
Array.from = function (arrayLike, mapFn, thisArg) {};

/**
 * @template E
 * @param {...E} _element
 * @return {Array<E>}
 */
Array.of = function (_element) {};

/**
 * @template E
 * @param {number} target
 * @param {number=} start
 * @param {number=} end
 * @return {Array<E>}
 */
Array.prototype.copyWithin = function (target, start, end) {};

/**
 * @template E
 * @param {E} value
 * @param {number=} start
 * @param {number=} end
 * @return {Array<E>}
 */
Array.prototype.fill = function (value, start, end) {};

/**
 * @template E
 * @return {Iterator<E>} Iterator of the elements of this array.
 */
Array.prototype.entries = function () {};

/**
 * @template E
 * @template T
 * @param {function(this:T, E, number, Array<E>): boolean} callback
 * @param {T=} thisArg
 * @return {E}
 */
Array.prototype.find = function (callback, thisArg) {};

/**
 * @template T
 * @template E
 * @param {function(this:T, E, number, Array<E>): boolean} callback
 * @param {T=} thisArg
 * @return {number}
 */
Array.prototype.findIndex = function (callback, thisArg) {};

/**
 * @return {Iterator<number>}
 */
Array.prototype.keys = function () {};

/**
 * @param {number} length
 */
function ArrayBuffer(length) {}

/**
 * @type {Object}
 */
ArrayBuffer.prototype = {};

/**
 * @type {number}
 */
ArrayBuffer.prototype.byteLength = 0;

/**
 * @param {(*|ArrayBuffer|DataView|TypedArray)} arg
 * @return {boolean}
 */
ArrayBuffer.isView = function (arg) {};

/**
 * @param {number=} start
 * @param {number=} end
 * @return {ArrayBuffer}
 */
ArrayBuffer.prototype.slice = function (start, end) {};

/**
 * @param {ArrayBuffer} buffer
 * @param {number=} byteOffset
 * @param {number=} byteLength
 */
function DataView(buffer, byteOffset, byteLength) {}

/**
 * @type {Object}
 */
DataView.prototype = {};

/**
 * @type {ArrayBuffer}
 */
DataView.prototype.buffer = new ArrayBuffer(0);

/**
 * @type {number}
 */
DataView.prototype.byteLength = 0;

/**
 * @type {number}
 */
DataView.prototype.byteOffset = 0;

/**
 * @param {number} byteOffset
 * @param {boolean=} littleEndian
 * @return {number}
 */
DataView.prototype.getFloat32 = function (byteOffset, littleEndian) {};

/**
 * @param {number} byteOffset
 * @param {boolean=} littleEndian
 * @return {number}
 */
DataView.prototype.getFloat64 = function (byteOffset, littleEndian) {};

/**
 * @param {number} byteOffset
 * @param {boolean=} littleEndian
 * @return {number}
 */
DataView.prototype.getInt16 = function (byteOffset, littleEndian) {};

/**
 * @param {number} byteOffset
 * @param {boolean=} littleEndian
 * @return {number}
 */
DataView.prototype.getInt32 = function (byteOffset, littleEndian) {};

/**
 * @param {number} byteOffset
 * @return {number}
 */
DataView.prototype.getInt8 = function (byteOffset) {};

/**
 * @param {number} byteOffset
 * @param {boolean=} littleEndian
 * @return {number}
 */
DataView.prototype.getUint16 = function (byteOffset, littleEndian) {};

/**
 * @param {number} byteOffset
 * @param {boolean=} littleEndian
 * @return {number}
 */
DataView.prototype.getUint32 = function (byteOffset, littleEndian) {};

/**
 * @param {number} byteOffset
 * @return {number}
 */
DataView.prototype.getUint8 = function (byteOffset) {};

/**
 * @param {number} byteOffset
 * @param {number} value
 * @param {boolean=} littleEndian
 */
DataView.prototype.setFloat32 = function (byteOffset, value, littleEndian) {};

/**
 * @param {number} byteOffset
 * @param {number} value
 * @param {boolean=} littleEndian
 */
DataView.prototype.setFloat64 = function (byteOffset, value, littleEndian) {};

/**
 * @param {number} byteOffset
 * @param {number} value
 * @param {boolean=} littleEndian
 */
DataView.prototype.setInt16 = function (byteOffset, value, littleEndian) {};

/**
 * @param {number} byteOffset
 * @param {number} value
 * @param {boolean=} littleEndian
 */
DataView.prototype.setInt32 = function (byteOffset, value, littleEndian) {};

/**
 * @param {number} byteOffset
 * @param {number} value
 */
DataView.prototype.setInt8 = function (byteOffset, value) {};

/**
 * @param {number} byteOffset
 * @param {number} value
 * @param {boolean=} littleEndian
 */
DataView.prototype.setUint16 = function (byteOffset, value, littleEndian) {};

/**
 * @param {number} byteOffset
 * @param {number} value
 * @param {boolean=} littleEndian
 */
DataView.prototype.setUint32 = function (byteOffset, value, littleEndian) {};

/**
 * @param {number} byteOffset
 * @param {number} value
 */
DataView.prototype.setUint8 = function (byteOffset, value) {};

/**
 * @interface
 * @implements Iterable<number>
 * @param {(number|TypedArray|{length: number}|Iterable<number>|ArrayBuffer)} length_typedArray_object_buffer
 * @param {number=} _byteOffset
 * @param {number=} _length
 * @constructor
 */
function TypedArray(length_typedArray_object_buffer, _byteOffset, _length) {}

/**
 * @type {number}
 */
TypedArray.BYTES_PER_ELEMENT = 0;

/**
 * @type {string}
 */
TypedArray.name = "";

/**
 * @type {Object}
 */
TypedArray.prototype = {};

/**
 * @template T
 * @param {({length: number}|Iterable<E>)} source
 * @param {function(this: T, *): number=} mapFn
 * @param {T=} thisArg
 * @return {TypedArray}
 */
TypedArray.from = function (source, mapFn, thisArg) {};

/**
 * @param {...number} _element
 * @return {TypedArray}
 */
TypedArray.of = function (_element) {};

/**
 * @param {number} target
 * @param {number} start
 * @param {number} end
 */
TypedArray.prototype.copyWithin = function (target, start, end) {};

/**
 * @return {Iterator<number>}
 */
TypedArray.prototype.entries = function () {};

/**
 * @template T
 * @param {function(this: T, number, number, TypedArray): boolean} callback
 * @param {T=} thisArg
 * @return {boolean}
 */
TypedArray.prototype.every = function (callback, thisArg) {};

/**
 * @param {number} value
 * @param {number=} start
 * @param {number=} end
 */
TypedArray.prototype.fill = function (value, start, end) {};

/**
 * @template T
 * @param {function(this: T, number, number, TypedArray): number} callback
 * @param {T=} thisArg
 * @return {TypedArray}
 */
TypedArray.prototype.filter = function (callback, thisArg) {};

/**
 * @template T
 * @param {function(this: T, number, number, TypedArray): number} callback
 * @param {T=} thisArg
 * @return {(undefined|number)}
 */
TypedArray.prototype.find = function (callback, thisArg) {};

/**
 * @template T
 * @param {function(this: T, number, number, TypedArray): number} callback
 * @param {T=} thisArg
 * @return {number}
 */
TypedArray.prototype.findIndex = function (callback, thisArg) {};

/**
 * @template T
 * @param {function(this: T, number, number, TypedArray)} callback
 * @param {T=} thisArg
 */
TypedArray.prototype.forEach = function (callback, thisArg) {};

/**
 * @template E
 * @param {E} searchElement
 * @param {number=} fromIndex
 * @return {number}
 */
TypedArray.prototype.indexOf = function (searchElement, fromIndex) {};

/**
 * @param {string} separator
 * @return {string}
 */
TypedArray.prototype.join = function (separator) {};

/**
 * @return {Iterator<number>}
 */
TypedArray.prototype.keys = function () {};

/**
 * @template E
 * @param {E} searchElement
 * @param {number=} fromIndex
 * @return {number}
 */
TypedArray.prototype.lastIndexOf = function (searchElement, fromIndex) {};

/**
 * @template T
 * @param {function(this: T, number, number, TypedArray): number} callback
 * @param {T=} thisArg
 * @return {TypedArray}
 */
TypedArray.prototype.map = function (callback, thisArg) {};

/**
 * @param {function(number, number, number, TypedArray): number} callback
 * @param {number=} initialValue
 * @return {number}
 */
TypedArray.prototype.reduce = function (callback, initialValue) {};

/**
 * @param {function(number, number, number, TypedArray)} callback
 * @param {number=} initialValue
 * @return {number}
 */
TypedArray.prototype.reduceRight = function (callback, initialValue) {};

/**
 * @return {TypedArray}
 */
TypedArray.prototype.reverse = function () {};

/**
 * @param {(Array<number>|TypedArray)} array
 * @param {number=} offset
 */
TypedArray.prototype.set = function (array, offset) {};

/**
 * @param {number=} begin
 * @param {number=} end
 * @return {TypedArray}
 */
TypedArray.prototype.slice = function (begin, end) {};

/**
 * @template T
 * @param {function(this: T, number, number, TypedArray)} callback
 * @param {T=} thisArg
 * @return {boolean}
 */
TypedArray.prototype.some = function (callback, thisArg) {};

/**
 * @param {function(number, number): number} compareFunction
 * @return {TypedArray}
 */
TypedArray.prototype.sort = function (compareFunction) {};

/**
 * @param {number=} begin
 * @param {number=} end
 * @return {TypedArray}
 */
TypedArray.prototype.subarray = function (begin, end) {};

/**
 * @param {(string|Array<string>)=} locales
 * @param {{localeMatcher: string=, style: string=, currency: string=, currencyDisplay: string=, useGrouping: boolean=, minimumIntegerDigits: number=, minimumFractionDigits: number=, maximumFractionDigits: number=, minimumSignificantDigits: number=, maximumSignificantDigits: number=}=} options
 * @return {string}
 */
TypedArray.prototype.toLocaleString = function (locales, options) {};

/**
 * @return {string}
 */
TypedArray.prototype.toString = function () {};

/**
 * @return {Iterator<number>}
 */
TypedArray.prototype.values = function () {};

/**
 * @implements TypedArray
 */
function Int8Array() {}

/**
 * @implements TypedArray
 */
function Uint8Array() {}

/**
 * @implements TypedArray
 */
function Uint8ClampedArray() {}

/**
 * @implements TypedArray
 */
function Int16Array() {}

/**
 * @implements TypedArray
 */
function Uint16Array() {}

/**
 * @implements TypedArray
 */
function Int32Array() {}

/**
 * @implements TypedArray
 */
function Uint32Array() {}

/**
 * @implements TypedArray
 */
function Float32Array() {}

/**
 * @implements TypedArray
 */
function Float64Array() {}

/**
 * @template K
 * @template V
 * @implements Iterable<Array<(K|V)>>
 * @param {Iterable<Array<(K|V)>>=} iterable
 */
function Map(iterable) {}

/**
 * @type {Object}
 */
Map.prototype = {};

/**
 * @type {number}
 */
Map.prototype.size = 0;

/**
 */
Map.prototype.clear = function () {};

/**
 * @param {K} key
 * @return {boolean}
 */
Map.prototype.delete = function (key) {};

/**
 * @return {Iterator<Array<(K|V)>>}
 */
Map.prototype.entries = function () {};

/**
 * @template T
 * @template V
 * @template K
 * @param {function(this: T, V, K, Map<K, V>)} callback
 * @param {T=} thisArg
 */
Map.prototype.forEach = function (callback, thisArg) {};

/**
 * @param {K} key
 * @return {(undefined|V)}
 */
Map.prototype.get = function (key) {};

/**
 * @param {K} key
 * @return {boolean}
 */
Map.prototype.has = function (key) {};

/**
 * @return {Iterator<K>}
 */
Map.prototype.keys = function () {};

/**
 * @param {K} key
 * @param {V} value
 * @return {Map<K, V>}
 */
Map.prototype.set = function (key, value) {};

/**
 * @return {Iterator<V>}
 */
Map.prototype.values = function () {};

/**
 * @template E
 * @implements Iterable<E>
 * @param {Iterable<E>=} iterable
 */
function Set(iterable) {}

/**
 * @type {Object}
 */
Set.prototype = {};

/**
 * @type {number}
 */
Set.prototype.size = 0;

/**
 * @param {E} value
 * @return {Set<E>}
 */
Set.prototype.add = function (value) {};

/**
 */
Set.prototype.clear = function () {};

/**
 * @param {E} value
 * @return {boolean}
 */
Set.prototype.delete = function (value) {};

/**
 * @return {Iterator<Array<E>>}
 */
Set.prototype.entries = function () {};

/**
 * @template T
 * @param {function(this: T, E, E, Set<E>)} callback
 * @param {T=} thisArg
 */
Set.prototype.forEach = function (callback, thisArg) {};

/**
 * @param {E} value
 * @return {boolean}
 */
Set.prototype.has = function (value) {};

/**
 * @return {Iterator<E>}
 */
Set.prototype.values = function () {};

/**
 * @template K
 * @template V
 * @param {Iterable<Array<(K|V)>>=} iterable
 */
function WeakMap(iterable) {}

/**
 * @type {Object}
 */
WeakMap.prototype = {};

/**
 * @param {K} key
 * @return {boolean}
 */
WeakMap.prototype.delete = function (key) {};

/**
 * @param {K} key
 * @return {(undefined|V)}
 */
WeakMap.prototype.get = function (key) {};

/**
 * @param {K} key
 * @return {boolean}
 */
WeakMap.prototype.has = function (key) {};

/**
 * @param {K} key
 * @param {V} value
 * @return {WeakMap<K, V>}
 */
WeakMap.prototype.set = function (key, value) {};

/**
 * @template E
 * @param {Iterable<E>=} iterable
 */
function WeakSet(iterable) {}

/**
 * @type {Object}
 */
WeakSet.prototype = {};

/**
 * @param {E} value
 * @return {WeakSet<E>}
 */
WeakSet.prototype.add = function (value) {};

/**
 * @param {E} value
 * @return {boolean}
 */
WeakSet.prototype.delete = function (value) {};

/**
 * @param {E} value
 * @return {boolean}
 */
WeakSet.prototype.has = function (value) {};

/**
 * @template R
 * @param {function(function(R), function(Error))} executor
 */
function Promise(executor) {}

/**
 * @type {Object}
 */
Promise.prototype = {};

/**
 * @template R
 * @param {Iterable<(R|Promise<R>|{then: function(function(R), function(Error))})>} iterable
 * @return {Promise<Array<R>>}
 */
Promise.all = function (iterable) {};

/**
 * @template O
 * @param {function(Error): (O|Promise<O>|{then: function(function(O), function(Error))})} onRejected
 * @return {Promise<O>}
 */
Promise.prototype.catch = function (onRejected) {};

/**
 * @template R
 * @template O
 * @param {function(R): (O|Promise<O>|{then: function(function(O), function(Error))})} onFulfilled
 * @param {function(Error): (O|Promise<O>|{then: function(function(O), function(Error))})=} onRejected
 * @return {Promise<O>}
 */
Promise.prototype.then = function (onFulfilled, onRejected) {};

/**
 * @param {Iterable<(R|Promise<R>|{then: function(function(R), function(Error))})>} iterable
 */
Promise.race = function (iterable) {};

/**
 * @param {Error} reason
 * @return {Promise<undefined>}
 */
Promise.reject = function (reason) {};

/**
 * @template R
 * @param {(R|Promise<R>|{then: function(function(R), function(Error))})=} value
 * @return {Promise<R>}
 */
Promise.resolve = function (value) {};

/**
 * @type {Object}
 */
var Reflect = {};

/**
 * @template R
 * @template T
 * @template A
 * @param {function(this: T, ...A): R} target
 * @param {T} thisArgument
 * @param {(Array<A>|{length: number})} argumentsList
 * @return {R}
 */
Reflect.apply = function (target, thisArgument, argumentsList) {};

/**
 * @template T
 * @template A
 * @param {function(new: T, ...A)} target
 * @param {(Array<A>|{length: number})} argumentsList
 * @param {function(new: T, ...*)=} newTarget
 * @return {T}
 */
Reflect.construct = function (target, argumentsList, newTarget) {};

/**
 * @param {Object} target
 * @param {(string|symbol)} propertyKey
 * @param {({configurable: boolean=, enumerable: boolean=, value: *=, writable: boolean=}|{configurable: boolean=, enumerable: boolean=, get: function(): *=, set: function(*): undefined=})} attributes
 * @return {boolean}
 */
Reflect.defineProperty = function (target, propertyKey, attributes) {};

/**
 * @param {Object} target
 * @param {(string|symbol)} propertyKey
 * @return {boolean}
 */
Reflect.deleteProperty = function (target, propertyKey) {};

/**
 * @param {Object} target
 * @param {(string|symbol)} propertyKey
 * @param {Object=} receiver
 * @return {*}
 */
Reflect.get = function (target, propertyKey, receiver) {};

/**
 * @param {Object} target
 * @param {(string|symbol)} propertyKey
 * @return {(undefined|{configurable: boolean=, enumerable: boolean=, value: *=, writable: boolean=}|{configurable: boolean=, enumerable: boolean=, get: function(): *=, set: function(*): undefined=})}
 */
Reflect.getOwnPropertyDescriptor = function (target, propertyKey) {};

/**
 * @param {Object} target
 * @return {?Object}
 */
Reflect.getPrototypeOf = function (target) {};

/**
 * @param {Object} target
 * @param {(string|symbol)} propertyKey
 * @return {boolean}
 */
Reflect.has = function (target, propertyKey) {};

/**
 * @param {Object} target
 * @return {boolean}
 */
Reflect.isExtensible = function (target) {};

/**
 * @param {Object} target
 * @return {Array<(string|symbol)>}
 */
Reflect.ownKeys = function (target) {};

/**
 * @param {Object} target
 * @return {boolean}
 */
Reflect.preventExtensions = function (target) {};

/**
 * @param {Object} target
 * @param {(string|symbol)} propertyKey
 * @param {*} value
 * @param {Object=} receiver
 * @return {boolean}
 */
Reflect.set = function (target, propertyKey, value, receiver) {};

/**
 * @param {Object} target
 * @param {?Object} prototype
 * @return {boolean}
 */
Reflect.setPrototypeOf = function (target, prototype) {};

/**
 * @param {Object} target
 * @param {{apply: function(Object, Object, Array<*>): *=, construct: function(Object, Array<*>, Function): Object=, defineProperty: function(Object, (string|symbol), ({configurable: boolean=, enumerable: boolean=, value: *=, writable: boolean=}|{configurable: boolean=, enumerable: boolean=, get: function(): *=, set: function(*): undefined=})): boolean=, deleteProperty: function(Object, (string|symbol)): boolean=, get: function(Object, (string|symbol), Object): *=, getOwnPropertyDescriptor: function(Object, (string|symbol)): (undefined|{configurable: boolean=, enumerable: boolean=, value: *=, writable: boolean=}|{configurable: boolean=, enumerable: boolean=, get: function(): *=, set: function(*): undefined=})=, getPrototypeOf: function(Object): ?Object=, has: function(Object, (string|symbol)): boolean=, isExtensible: function(Object): boolean=, ownKeys: function(Object): Array<(string|symbol)>=, preventExtensions: function(Object): boolean=, set: function(Object, (string|symbol), *, Object): boolean=, setPrototypeOf: function(Object, ?Object): boolean=}} handler
 */
function Proxy(target, handler) {}

/**
 * @param {Object} target
 * @param {{apply: function(Object, Object, Array<*>): *=, construct: function(Object, Array<*>, Function): Object=, defineProperty: function(Object, (string|symbol), ({configurable: boolean=, enumerable: boolean=, value: *=, writable: boolean=}|{configurable: boolean=, enumerable: boolean=, get: function(): *=, set: function(*): undefined=})): boolean=, deleteProperty: function(Object, (string|symbol)): boolean=, get: function(Object, (string|symbol), Object): *=, getOwnPropertyDescriptor: function(Object, (string|symbol)): (undefined|{configurable: boolean=, enumerable: boolean=, value: *=, writable: boolean=}|{configurable: boolean=, enumerable: boolean=, get: function(): *=, set: function(*): undefined=})=, getPrototypeOf: function(Object): ?Object=, has: function(Object, (string|symbol)): boolean=, isExtensible: function(Object): boolean=, ownKeys: function(Object): Array<(string|symbol)>=, preventExtensions: function(Object): boolean=, set: function(Object, (string|symbol), *, Object): boolean=, setPrototypeOf: function(Object, ?Object): boolean=}} handler
 * @return {{proxy: Proxy, revoke: function()}}
 */
Proxy.revocable = function (target, handler) {};

/**
 * The iterable protocol allows JavaScript objects to define or customize their
 * iteration behavior, such as what values are looped over in a
 * <code>for..of</code> construct. Some built-in types are built-in iterables
 * with a default iteration behavior, such as <code>Array</code> or
 * <code>Map</code>, while other types (such as <code>Object</code>) are not.
 *
 * In order to be iterable, an object must implement the
 * <code>@@iterator</code> method, meaning that the object (or one of the
 * objects up its prototype chain) must have a property with a
 * <code>@@iterator</code> key which is available via constant
 * <code>Symbol.iterator</code>.
 *
 * @template E
 * @interface
 */
function Iterable() {}

/**
 * A zero arguments function that returns an object, conforming to the iterator
 * protocol.
 *
 * @return {Iterator<E>} The iterator object for iterating through the contents
 *         of this object.
 */
Iterable.prototype[Symbol.iterator] = function () {};
