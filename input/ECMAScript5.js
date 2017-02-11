/**
 * @param {?Object} proto
 * @param {Object<string, {configurable: boolean=, enumerable: boolean=, value: *=, writable: boolean=, get: function(): *=, set: function(*): undefined=}>=} propertiesObject
 * @return {Object} New object with the specified prototype and properties.
 */
Object.create = function (proto, propertiesObject) {};

/**
 * @param {Object} obj
 * @param {Object<(string|symbol), ({configurable: boolean=, enumerable: boolean=, value: *=, writable: boolean=}|{configurable: boolean=, enumerable: boolean=, get: function(): *=, set: function(*): undefined=})>} props
 * @return {Object} The <code>obj</code> object extended with the specified
 *         properties.
 */
Object.defineProperties = function (obj, props) {};

/**
 * @param {Object} obj
 * @param {(string|symbol)} prop
 * @param {{configurable: boolean=, enumerable: boolean=, value: *=, writable: boolean=}|{configurable: boolean=, enumerable: boolean=, get: function(): *=, set: function(*): undefined=}} descriptor
 * @return {Object} The <code>obj</code> object extended with the specified
 *         property.
 */
Object.defineProperty = function (obj, prop, descriptor) {};

/**
 * @param {Object} obj
 * @return {Object} The now-frozen <code>obj</code> object.
 */
Object.freeze = function (obj) {};

/**
 * @param {Object} obj
 * @param {(string|symbol)} prop
 * @return {({configurable: boolean=, enumerable: boolean=, value: *=, writable: boolean=}|{configurable: boolean=, enumerable: boolean=, get: function(): *=, set: function(*): undefined=})}
 *         Descriptor of the <code>obj</code> object's
 *         <code>prop</code> property.
 */
Object.getOwnPropertyDescriptor = function (obj, prop) {};

/**
 * @param {Object} obj
 * @return {Array<string>} Names of all properties found directly upon the
 *         <code>obj</code> object.
 */
Object.getOwnPropertyNames = function (obj) {};

/**
 * @param {Object} obj
 * @return {?Object} The prototype of the <code>obj</code> object.
 */
Object.getPrototypeOf = function (obj) {};

/**
 * @param {Object} obj
 * @return {boolean} <code>true</code> if new properties may be defined on the
 *         <code>obj</code> object.
 */
Object.isExtensible = function (obj) {};

/**
 * @param {Object} obj
 * @return {boolean} <code>true</code> if the <code>obj</code> object is
 *         frozen.
 */
Object.isFrozen = function (obj) {};

/**
 * @param {Object} obj
 * @return {boolean} <code>true</code> if the <code>obj</code> object is
 *         sealed.
 */
Object.isSealed = function (obj) {};

/**
 * @param {Object} obj
 * @return {Array<string>} Names of properties of the <code>obj</code> object
 *         that are enumerable.
 */
Object.keys = function (obj) {};

/**
 * @param {Object} obj
 * @return {Object} The now non-extendable <code>obj</code> object.
 */
Object.preventExtensions = function (obj) {};

/**
 * @param {Object} obj
 * @return {Object} The now-sealed <code>obj</code> object.
 */
Object.seal = function (obj) {};

/**
 * @param {?Object} thisArg
 * @param {...*} arg1_
 * @return {Function} A function that, when called, has its <code>this</code>
 *         keyword set to the provided value, with a given sequence of
 *         arguments preceding any provided when the new function is called.
 */
Function.prototype.bind = function (thisArg, arg1_) {};

/**
 * @return {number} Number of milliseconds since January 1, 1970, 00:00:00.
 */
Date.now = function () {};

/**
 * @return {string} This date in ISO format (ISO 8601 Extended Format), which
 *         can be described as follows: YYYY-MM-DDTHH:mm:ss.sssZ. The timezone
 *         is always UTC as denoted by the suffix "Z".
 */
Date.prototype.toISOString = function () {};

/**
 * @return {string} JSON representation of this date.
 */
Date.prototype.toJSON = function () {};

/**
 * @return {string} This string with both leading and trailing whitespace
 *         removed.
 */
String.prototype.trim = function () {};

/**
 * @param {Object} obj
 * @return {boolean} <code>true</code> if <code>obj</code> is an array.
 */
Array.isArray = function (obj) {};

/**
 * @template E
 * @template T
 * @param {function(this: T, E, number, Array<E>): boolean} callback
 * @param {T=} thisArg
 * @return {boolean} <code>true</code> if <code>callback</code> returned
 *         <code>true</code> for every element of this array.
 */
Array.prototype.every = function (callback, thisArg) {};

/**
 * @template E
 * @template T
 * @param {function(this: T, E, number, Array<E>): boolean} callback
 * @param {T=} thisArg
 * @return {Array<E>} New array containing the elements of this array that
 *         passed the filtering callback.
 */
Array.prototype.filter = function (callback, thisArg) {};

/**
 * @template E
 * @template T
 * @param {function(this: T, E, number, Array<E>)} callback
 * @param {T=} thisArg
 */
Array.prototype.forEach = function (callback, thisArg) {};

/**
 * @param {*} searchElement
 * @param {number=} fromIndex
 * @return {number} The index of the <code>searchElement</code> element in
 *         this array or <code>-1</code> if the element was not found.
 */
Array.prototype.indexOf = function (searchElement, fromIndex) {};

/**
 * @param {*} searchElement
 * @param {number=} fromIndex
 * @return {number} The index of the <code>searchElement</code> element in
 *          this array or <code>-1</code> if the element was not found.
 */
Array.prototype.lastIndexOf = function (searchElement, fromIndex) {};

/**
 * @template E
 * @template R
 * @template T
 * @param {function(this: T, E, number, Array<E>): R} callback
 * @param {T=} thisArg
 * @return {Array<R>} The result of applying the provided <code>callback</code>
 *         to the elements of this array.
 */
Array.prototype.map = function (callback, thisArg) {};

/**
 * @template I
 * @template E
 * @template R
 * @param {function((I|E|R), (E), number, Array<E>): R} callback
 * @param {I} initialValue
 * @return {R} Result of left reduction of this array using the provided
 *         <code>callback</code> and <code>initialValue</code>.
 */
Array.prototype.reduce = function (callback, initialValue) {};

/**
 * @template I
 * @template E
 * @template R
 * @param {function((I|E|R), (E), number, Array<E>): R} callback
 * @param {I} initialValue
 * @return {R} Result of right reduction of this array using the provided
 *         <code>callback</code> and <code>initialValue</code>.
 */
Array.prototype.reduceRight = function (callback, initialValue) {};

/**
 * @template E
 * @template T
 * @param {function(this: T, E, number, Array<E>): boolean} callback
 * @param {T=} thisArg
 * @return {boolean} <code>true</code> if the <code>callback</code> returns
 *         <code>true</code> for at least a single element of this array.
 */
Array.prototype.some = function (callback, thisArg) {};

/**
 * @type {Object}
 */
var JSON = {};

/**
 * @param {string} text
 * @param {function(string, (undefined|null|boolean|number|string|Object)): (undefined|null|boolean|number|string|Object)=} reviver
 * @return {(undefined|null|boolean|number|string|Object)} Parsed data.
 */
JSON.parse = function (text, reviver) {};

/**
 * @param {(null|boolean|number|string|Object)} value
 * @param {?(function(string, (undefined|null|boolean|number|string|Object)): (undefined|boolean|number|string|Object)|Array<string>)} replacer
 * @param {(number|string)} space
 * @return {string} Serialized <code>value</code>.
 */
JSON.stringify = function (value, replacer, space) {};
