/**
 * @param {Object} obj
 * @return {Array<Array<(string|symbol|*)>>}
 */
Object.entries = function (obj) {};

/**
 * @param {Object} obj
 * @return {Object<(string|symbol), ({configurable: boolean=, enumerable: boolean=, value: *=, writable: boolean=}|{configurable: boolean=, enumerable: boolean=, get: function(): *=, set: function(*): undefined=})>}
 */
Object.getOwnPropertyDescriptors = function (obj) {};

/**
 * @param {Object} obj
 * @return {Array<*>}
 */
Object.values = function (obj) {};

/**
 * @param {number} targetLength
 * @param {string} padString
 * @return {string}
 */
String.prototype.padEnd = function (targetLength, padString) {};

/**
 * @param {number} targetLength
 * @param {string} padString
 * @return {string}
 */
String.prototype.padStart = function (targetLength, padString) {};

/**
 * @param {number} length
 */
function SharedArrayBuffer(length) {}

/**
 * @type {Object}
 */
SharedArrayBuffer.prototype = {};

/**
 * @type {number}
 */
SharedArrayBuffer.prototype.byteLength = 0;

/**
 * @param {number=} begin
 * @param {number=} end
 */
SharedArrayBuffer.prototype.slice = function (begin, end) {};

/**
 * @type {Object}
 */
var Atomics = {};

/**
 * @param {TypedArray} typedArray
 * @param {number} index
 * @param {number} value
 * @return {number}
 */
Atomics.add = function (typedArray, index, value) {};

/**
 * @param {TypedArray} typedArray
 * @param {index} index
 * @param {index} value
 * @return {number}
 */
Atomics.and = function (typedArray, index, value) {};

/**
 * @param {TypedArray} typedArray
 * @param {number} index
 * @param {number} expectedValue
 * @param {number} replacementValue
 * @return {number}
 */
Atomics.compareExchange = function (typedArray, index, expectedValue, replacementValue) {};

/**
 * @param {TypedArray} typedArray
 * @param {number} index
 * @param {number} value
 * @return {number}
 */
Atomics.exchange = function (typedArray, index, value) {};

/**
 * @param {number} size
 * @return {boolean}
 */
Atomics.isLockFree = function (size) {};

/**
 * @param {TypedArray} typedArray
 * @param {number} index
 * @return {number}
 */
Atomics.load = function (typedArray, index) {};

/**
 * @param {TypedArray} typedArray
 * @param {number} index
 * @param {number} value
 * @return {number}
 */
Atomics.or = function (typedArray, index, value) {};

/**
 * @param {TypedArray} typedArray
 * @param {number} index
 * @param {number} value
 * @return {number}
 */
Atomics.store = function (typedArray, index, value) {};

/**
 * @param {TypedArray} typedArray
 * @param {number} index
 * @param {number} value
 * @return {number}
 */
Atomics.sub = function (typedArray, index, value) {};

/**
 * @param {TypedArray} typedArray
 * @param {number} index
 * @param {number} value
 * @param {number} timeout
 * @return {string}
 */
Atomics.wait = function (typedArray, index, value, timeout) {};

/**
 * @param {TypedArray} typedArray
 * @param {number} index
 * @param {number} count
 * @return {number}
 */
Atomics.wake = function (typedArray, index, count) {};

/**
 * @param {TypedArray} typedArray
 * @param {number} index
 * @param {number} value
 * @return {number}
 */
Atomics.xor = function (typedArray, index, value) {};
