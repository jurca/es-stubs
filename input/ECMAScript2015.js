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

// TODO: everything below this line needs to be updated

/**
 * @param {number} x
 * @return {number} Cube root of <code>x</code>.
 */
Math.cbrt = function (x) {};

/**
 * @param {number} x
 * @return {number} Number of leading zero bits in 32-bit unsigned integer
 *          representation of <code>x</code>.
 */
Math.clz32 = function (x) {};

/**
 * @param {number} x
 * @return {number} Hyperbolic cosine of <code>x</code>.
 */
Math.cosh = function (x) {};

/**
 * @param {number} x
 * @return {number} <code>Math.exp(x) - 1</code>.
 */
Math.expm1 = function (x) {};

/**
 * @param {number} x
 * @return {number} Nearest single precision float representation of
 *          <code>x</code>.
 */
Math.fround = function (x) {};

/**
 * @param {...number} value1_
 * @return {number} Square root of sum of squares of the numbers passed as
 *          arguments.
 */
Math.hypot = function (value1_) {};

/**
 * @param {number} a
 * @param {number} b
 * @return {number} result of the C-like 32-bit multiplication of
 *          <code>a</code> and <code>b</code>.
 */
Math.imul = function (a, b) {};

/**
 * @param {number} x
 * @return {number} Base 10 logarithm of <code>x</code>.
 */
Math.log10 = function (x) {};

/**
 * @param {number} x
 * @return {number} Natural logarithm of <code>1 + x</code>.
 */
Math.log1p = function (x) {};

/**
 * @param {number} x
 * @return {number} Base 2 logarithm of <code>x</code>.
 */
Math.log2 = function (x) {};

/**
 * @param {number} x
 * @return {number} Sign of <code>x</code> represented as <code>-1</code>,
 *          <code>0</code>, <code>-0</code>, <code>1</code> or
 *          <code>NaN</code>.
 */
Math.sign = function (x) {};

/**
 * @param {number} x
 * @return {number} Hyperbolic sine of <code>x</code>.
 */
Math.sinh = function (x) {};

/**
 * @param {number} x
 * @return {number} Hyperbolic tangent of <code>x</code>.
 */
Math.tanh = function (x) {};

/**
 * @param {number} x
 * @return {number} Integral part of <code>x</code> stripped of fractional
 *          digits.
 */
Math.trunc = function (x) {};

/**
 * @param {number} num1_numN
 * @return {string} a string created by using the specified sequence of code
 *          points.
 */
String.fromCodePoint = function (num1_numN) {};

/**
 * @param {type} name
 * @return {HTMLAnchorElement} HTML anchor element that is used as a hypertext
 *          target.
 */
String.prototype.anchor = function (name) {};

/**
 * @deprecated Do not use this method because it relies on deprecated HTML
 *             elements.
 * @return {HTMLElement} HTML element that causes a string to be displayed in
 *          a big font.
 */
String.prototype.big = function () {};

/**
 * @deprecated Blinking text is frowned upon by several accessibility
 *             standards. The &lt;blink&gt; element itself is non-standard and
 *             deprecated.
 * @return {HTMLElement} HTML element that causes a string to be displayed in
 *          a blinking fashion.
 */
String.prototype.blink = function () {};

/**
 * @deprecated Do not use this method because it relies on deprecated HTML
 *             elements.
 * @return {HTMLElement} HTML element that causes a string to be displayed as
 *          bold.
 */
String.prototype.bold = function () {};

/**
 * @param {number} pos
 * @return {number} Non-negative integer that is the UTF-16 encoded code point
 *          value.
 */
String.prototype.codePointAt = function (pos) {};

/**
 * @param {string} searchString
 * @param {number=} position
 * @return {boolean} <code>true</code> if this string contains the
 *          <code>searchString</code> from the <code>position</code> index.
 */
String.prototype.contains = function (searchString, position) {};

/**
 * @param {string} searchString
 * @param {number=} position
 * @return {boolean} <code>true</code> if this string ends with
 *          <code>searchString</code>.
 */
String.prototype.endsWith = function (searchString, position) {};

/**
 * @deprecated Do not use this method because it relies on deprecated HTML
 *             elements.
 * @return {HTMLElement} HTML element that causes a string to be displayed in
 *          fixed-pitch font.
 */
String.prototype.fixed = function () {};

/**
 * @deprecated Do not use this method because it relies on deprecated HTML
 *             elements.
 * @param {string} color
 * @return {HTMLElement} HTML element that causes a string to be displayed in
 *          the specified font color.
 */
String.prototype.fontcolor = function (color) {};

/**
 * @deprecated Do not use this method because it relies on deprecated HTML
 *             elements.
 * @param {number} size
 * @return {HTMLElement} HTML element that causes a string to be displayed in
 *          the specified font size.
 */
String.prototype.fontsize = function (size) {};

/**
 * @deprecated Do not use this method because it relies on deprecated HTML
 *             elements.
 * @return {HTMLElement} HTML element that causes a string to be italic.
 */
String.prototype.italics = function () {};

/**
 * @param {string} url
 * @return {HTMLAnchorElement} HTML element that causes a string to be
 *          displayed as a hypertext link to another URL.
 */
String.prototype.link = function (url) {};

/**
 * @param {string} form
 * @return {string} Unicode Normalization Form of this string.
 */
String.prototype.normalize = function (form) {};

/**
 * @param {number} count
 * @return {string} This string repeated <code>count</code> times.
 */
String.prototype.repeat = function (count) {};

/**
 * @deprecated Do not use this method because it relies on deprecated HTML
 *             elements.
 * @return {HTMLElement} HTML element that causes a string to be displayed in
 *          a small font.
 */
String.prototype.small = function () {};

/**
 * @param {string} searchString
 * @param {number=} position
 * @return {boolean} <code>true</code> if this string starts with
 *          <code>searchString</code>.
 */
String.prototype.startsWith = function (searchString, position) {};

/**
 * @deprecated Do not use this method because it relies on deprecated HTML
 *             elements.
 * @return {HTMLElement} HTML element that causes a string to be displayed as
 *          struck-out text.
 */
String.prototype.strike = function () {};

/**
 * @deprecated Do not use this method because it relies on deprecated HTML
 *             elements.
 * @return {HTMLElement} HTML element that causes a string to be displayed as
 *          subscript.
 */
String.prototype.sub = function () {};

/**
 * @deprecated Do not use this method because it relies on deprecated HTML
 *             elements.
 * @return {HTMLElement} HTML element that causes a string to be displayed as
 *          superscript.
 */
String.prototype.sup = function () {};

/**
 * @type {boolean}
 */
RegExp.prototype.sticky;

/**
 * @param {...(undefined|null|boolean|number|string|Object)} element0_elementN
 * @return {Array} An array of the provided arguments.
 */
Array.of = function (element0_elementN) {};

/**
 * @return {Iterator<number, (undefined|null|boolean|number|string|Object)>}
 *          Iterator of the entries of this array.
 */
Array.prototype.entries = function () {};

/**
 * @param {(undefined|null|boolean|number|string|Object)} value
 * @param {number=} start
 * @param {number=} end
 */
Array.prototype.fill = function (value, start, end) {};

/**
 * @param {function((undefined|null|boolean|number|string|Object), number, Array): boolean}
 *        callback
 * @param {Object=} thisArg
 * @return {(undefined|null|boolean|number|string|Object)} The first element
 *          that passed the testing callback; <code>undefined</code> otherwise.
 */
Array.prototype.find = function (callback, thisArg) {};

/**
 * @param {function((undefined|null|boolean|number|string|Object), number, Array): boolean}
 *        callback
 * @param {Object=} thisArg
 * @return {number} The index of the first element that passed the testing
 *          callback or <code>-1</code> if no such element is found.
 */
Array.prototype.findIndex = function (callback, thisArg) {};

/**
 * @return {Iterator<number>} Iterator of the array's keys.
 */
Array.prototype.keys = function () {};

/**
 * The {@linkcode Iterator} interface defines the API for iterators - objects
 * implementing the ECMAScript 6 iterator protocol.
 * 
 * @interface
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol
 */
function Iterator() {}

/**
 * Returns the next element from the elements this iterator iterates through.
 * 
 * @return {IteratorElement} The next element.
 */
Iterator.prototype.next = function () {};

/**
 * The {@linkcode IteratorElement} interface defines the API of objects
 * returned by the {@linkcode Iterator#next()} method.
 * 
 * @interface
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/The_Iterator_protocol
 */
function IteratorElement() {};

/**
 * Definitions of shared properties of all iterator elements.
 * 
 * @type {Object}
 */
IteratorElement.prototype;

/**
 * The value of this iterated element.
 * 
 * @type {(undefined|null|boolean|number|string|Object)}
 */
IteratorElement.prototype.value;

/**
 * <code>true</code> if this is the last element returned by the iterator.
 * 
 * @type {boolean}
 */
IteratorElement.prototype.done;
