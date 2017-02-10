/**
 * @type {number}
 */
var Infinity;

/**
 * @type {number}
 */
var NaN;

/**
 * @type {undefined}
 */
var undefined;

/**
 * @param {string} string
 * @return {*} The balue created by evaluating the last expression in the
 *          provided <code>string</code>.
 */
function eval(string) {}

/**
 * @param {(number|string)} testValue
 * @return {boolean} <code>true</code> if the <code>testValue</code>
 *          represents a final number.
 */
function isFinite(testValue) {}

/**
 * @param {(number|string)} testValue
 * @return {boolean} <code>true</code> if the <code>testValue</code> is the
 *          <code>NaN</code> value.
 */
function isNaN(testValue) {}

/**
 * @param {string} string
 * @return {number} The parsed floating-point number or <code>NaN</code>.
 */
function parseFloat(string) {}

/**
 * @param {string} string
 * @param {number=} radix
 * @return {number} The parsed integral number or <code>NaN</code>.
 */
function parseInt(string, radix) {}

/**
 * @param {string} encodedURI
 * @return {string} The decoded URI.
 */
function decodeURI(encodedURI) {}

/**
 * @param {string} encodedURI
 * @return {string} The decoded URI component.
 */
function decodeURIComponent(encodedURI) {}

/**
 * @param {string} URI
 * @return {string} Encoded URI.
 */
function encodeURI(URI) {}

/**
 * @param {string} str
 * @return {string} Encoded URI component.
 */
function encodeURIComponent(str) {}

/**
 * @deprecated Use {@linkcode encodeURI} or {@linkcode encodeURIComponent}
 *             instead.
 * @param {string} str
 * @return {string} Escaped string.
 */
function escape(str) {}

/**
 * @deprecated Use {@linkcode encodeURI} or {@linkcode encodeURIComponent}
 *             instead.
 * @param {string} str
 * @return {string} Unescaped string.
 */
function unescape(str) {}

/**
 * @constructor
 * @param {*} value
 */
function Object(value) {}

/**
 * @type {Object}
 */
Object.prototype;

/**
 * @type {Function}
 */
Object.prototype.constructor;

/**
 * @param {string} prop
 * @return {boolean} <code>true</code> if this object has the
 *          <code>prop</code> property defined directly upon itself.
 */
Object.prototype.hasOwnProperty = function (prop) {};

/**
 * @param {Object} object
 * @return {boolean} <code>true</code> if this object is in the prototype
 *          chain of the <code>obj</code> object.
 */
Object.prototype.isPrototypeOf = function (object) {};

/**
 * @param {string} prop
 * @return {boolean} <code>true</code> if the <code>prop</code> property of
 *          this object is enumerable.
 */
Object.prototype.propertyIsEnumerable = function (prop) {};

/**
 * @return {string} A string representing this object.
 */
Object.prototype.toLocaleString = function () {};

/**
 * @return {string} A string representing this object.
 */
Object.prototype.toString = function () {};

/**
 * @return {(boolean|number|string|Object)} A primitive value representing
 *          this object, or this object if the conversion is not possible.
 */
Object.prototype.valueOf = function () {};

/**
 * @constructor
 * @extends Object
 * @param {...string} arg1_argN
 * @param {string} functionBody
 */
function Function(arg1_argN, functionBody) {}

/**
 * @type {Object}
 */
Function.prototype;

/**
 * @deprecated Use the {@linkcode arguments} local variable instead.
 * @type Object
 */
Function.prototype.arguments;

/**
 * @type {number}
 */
Function.prototype.length;

/**
 * @param {(null|Object)} thisArg
 * @param {Array<*>=} argsArray
 * @return {*} The result of this function.
 */
Function.prototype.apply = function (thisArg, argsArray) {};

/**
 * @param {(null|Object)} thisArg
 * @param {...*} arg1_
 * @return {*} The result of this function.
 */
Function.prototype.call = function (thisArg, arg1_) {};

/**
 * @return {string} A string representing the source code of this function.
 */
Function.prototype.toString = function () {};

/**
 * @constructor
 * @extends Object
 * @param {boolean} value
 */
function Boolean(value) {}

/**
 * @type {Object}
 */
Boolean.prototype;

/**
 * @return {string} A string representing the value of this boolean.
 */
Boolean.prototype.toString = function () {};

/**
 * @return {boolean} The primitive value of this boolean.
 */
Boolean.prototype.valueOf = function () {};

/**
 * @constructor
 * @extends Object
 * @param {string=} message
 * @param {string=} fileName
 * @param {number=} lineNumber
 */
function Error(message, fileName, lineNumber) {}

/**
 * @type {Object}
 */
Error.prototype;

/**
 * @type {string}
 */
Error.prototype.message;

/**
 * @type {string}
 */
Error.prototype.name;

/**
 * @return {string} A string representing this error.
 */
Error.prototype.toString = function () {};

/**
 * @constructor
 * @extends Error
 * @param {string=} message
 * @param {string=} fileName
 * @param {number=} lineNumber
 */
function EvalError(message, fileName,lineNumber) {}

/**
 * @constructor
 * @extends Error
 * @param {string=} message
 * @param {string=} fileName
 * @param {number=} lineNumber
 */
function RangeError(message, fileName,lineNumber) {}

/**
 * @constructor
 * @extends Error
 * @param {string=} message
 * @param {string=} fileName
 * @param {number=} lineNumber
 */
function ReferenceError(message, fileName,lineNumber) {}

/**
 * @constructor
 * @extends Error
 * @param {string=} message
 * @param {string=} fileName
 * @param {number=} lineNumber
 */
function SyntaxError(message, fileName,lineNumber) {}

/**
 * @constructor
 * @extends Error
 * @param {string=} message
 * @param {string=} fileName
 * @param {number=} lineNumber
 */
function TypeError(message, fileName,lineNumber) {}

/**
 * @constructor
 * @extends Error
 * @param {string=} message
 * @param {string=} fileName
 * @param {number=} lineNumber
 */
function URIError(message, fileName,lineNumber) {}

/**
 * @constructor
 * @extends Object
 * @param {number} value
 */
function Number(value) {}

/**
 * @type {number}
 */
Number.MAX_VALUE;

/**
 * @type {number}
 */
Number.MIN_VALUE;

/**
 * @type {number}
 */
Number.NEGATIVE_INFINITY;

/**
 * @type {number}
 */
Number.NaN;

/**
 * @type {number}
 */
Number.POSITIVE_INFINITY;

/**
 * @type {Object}
 */
Number.prototype;

/**
 * @param {number=} fractionDigits
 * @return {string} A string representing this number in exponential notation.
 */
Number.prototype.toExponential = function (fractionDigits) {};

/**
 * @param {number=} digits
 * @return {string} A string representing this number in fixed-point notation.
 */
Number.prototype.toFixed = function (digits) {};

/**
 * @param {string=} locales
 * @param {Object=} options
 * @return {string} A string representing a language sensitive representation
 *          of this number.
 */
Number.prototype.toLocaleString = function (locales, options) {};

/**
 * @param {number=} precision
 * @return {string} A string representing this number to the specified
 *          precision.
 */
Number.prototype.toPrecision = function (precision) {};

/**
 * @param {number} radix
 * @return {string} A string representing this number.
 */
Number.prototype.toString = function (radix) {};

/**
 * @return {number} This number as a primitive value.
 */
Number.prototype.valueOf = function () {};

/**
 * @type {Object}
 */
var Math = {};

/**
 * @type {number}
 */
Math.E;

/**
 * @type {number}
 */
Math.LN10;

/**
 * @type {number}
 */
Math.LN2;

/**
 * @type {number}
 */
Math.LOG10E;

/**
 * @type {number}
 */
Math.LOG2E;

/**
 * @type {number}
 */
Math.PI;

/**
 * @type {number}
 */
Math.SQRT1_2;

/**
 * @type {number}
 */
Math.SQRT2;

/**
 * @param {number} x
 * @return {number} Absolute value of <code>x</code>.
 */
Math.abs = function (x) {};

/**
 * @param {number} x
 * @return {number} Arccosine (in radians) of <code>x</code>.
 */
Math.acos = function (x) {};

/**
 * @param {number} x
 * @return {number} Arcsine (in radians) of <code>x</code>.
 */
Math.asin = function (x) {};

/**
 * @param {number} x
 * @return {number} Arctangent (in radians) of <code>x</code>.
 */
Math.atan = function (x) {};

/**
 * @param {number} y
 * @param {number} x
 * @return {number} Arctangent of the quotient of <code>y</code> and
 *          <code>x</code>.
 */
Math.atan2 = function (y, x) {};

/**
 * @param {number} x
 * @return {number} Smallest integer greater of equal to <code>x</code>.
 */
Math.ceil = function (x) {};

/**
 * @param {number} x
 * @return {number} Cosine of <code>x</code>.
 */
Math.cos = function (x) {};

/**
 * @param {number} x
 * @return {number} <code>Math.E</code> to the power <code>x</code>.
 */
Math.exp = function (x) {};

/**
 * @param {number} x
 * @return {number} Largest integer less than or equal to <code>x</code>.
 */
Math.floor = function (x) {};

/**
 * @param {number} x
 * @return {number} Natural logarithm of <code>x</code>.
 */
Math.log = function (x) {};

/**
 * @param {...number} value1_
 * @return {number} The largest of all provided numbers or
 *          <code>-Infinity</code> if no arguments are provided.
 */
Math.max = function (value1_) {};

/**
 * @param {...number} value1_
 * @return {number} The smallest of all provided numbers or
 *          <code>Infinity</code> if no arguments are provided.
 */
Math.min = function(value1_) {};

/**
 * @param {number} base
 * @param {number} exponent
 * @return {number} <code>base</code> to the <code>exponent</code> power.
 */
Math.pow = function (base, exponent) {};

/**
 * @return {number} Floating-point pseudo-random number in the range
 *          <code>[0, 1)</code>.
 */
Math.random = function () {};

/**
 * @param {number} x
 * @return {number} <code>x</code> rounded to the nearest integer.
 */
Math.round = function (x) {};

/**
 * @param {number} x
 * @return {number} Sine of <code>x</code>.
 */
Math.sin = function (x) {};

/**
 * @param {number} x
 * @return {number} Square root of <code>x</code>.
 */
Math.sqrt = function (x) {};

/**
 * @param {number} x
 * @return {number} Tangent of <code>x</code>.
 */
Math.tan = function (x) {};

/**
 * @constructor
 * @extends Object
 * @param {(number|string)=} value_dateString_year
 * @param {number=} month
 * @param {number=} day
 * @param {number=} hour
 * @param {number=} minute
 * @param {number=} second
 * @param {number=} millisecond
 */
function Date(value_dateString_year, month, day, hour, minute, second,
        millisecond) {}

/**
 * @type {Object}
 */
Date.prototype;

/**
 * @param {number} year
 * @param {number} month
 * @param {number=} date
 * @param {number=} hrs
 * @param {number=} min
 * @param {number=} sec
 * @param {number=} ms
 * @return {Date} A <code>Date</code> object since January 1, 1970, 00:00:00,
 *          universal time.
 */
Date.UTC = function (year, month, date, hrs, min, sec, ms) {};

/**
 * @param {string} dateString
 * @return {number} Number of milliseconds since January 1, 1970, 00:00:00 UTC
 *          representing the provided <code>dateString</code>.
 */
Date.parse = function (dateString) {};

/**
 * @return {number} Day of the month for this date according to local time.
 */
Date.prototype.getDate = function () {};

/**
 * @return {number} Day of the week for this date according to local time,
 *          where 0 represents Sunday.
 */
Date.prototype.getDay = function () {};

/**
 * @return {number} The year of this date according to local time.
 */
Date.prototype.getFullYear = function () {};

/**
 * @return {number} Hour for this date, according to local time.
 */
Date.prototype.getHours = function () {};

/**
 * @return {number} Milliseconds in this date according to local time.
 */
Date.prototype.getMilliseconds = function () {};

/**
 * @return {number} Minutes in this date according to local time.
 */
Date.prototype.getMinutes = function () {};

/**
 * @return {number} Month in this date according to local time, as a
 *         zero-based value (where zero indicates the first month of the
 *         year).
 */
Date.prototype.getMonth = function () {};

/**
 * @return {number} Seconds in this date according to local time.
 */
Date.prototype.getSeconds = function () {};

/**
 * @return {number} Number of milliseconds since 1 January 1970 00:00:00 UTC.
 */
Date.prototype.getTime = function () {};

/**
 * @return {number} Time-zone offset from UTC, in minutes, for the current
 *          locale.
 */
Date.prototype.getTimezoneOffset = function () {};

/**
 * @return {number} Day (date) of the month in this date according to
 *          universal time.
 */
Date.prototype.getUTCDate = function () {};

/**
 * @return {number} Day of the week in this date according to universal time,
 *          where 0 represents Sunday.
 */
Date.prototype.getUTCDay = function () {};

/**
 * @return {number} Year in this date according to universal time.
 */
Date.prototype.getUTCFullYear = function () {};

/**
 * @return {number} Hours in this date according to universal time.
 */
Date.prototype.getUTCHours = function () {};

/**
 * @return {number} Milliseconds in this date according to universal time.
 */
Date.prototype.getUTCMilliseconds = function () {};

/**
 * @return {number} Minutes in this date according to universal time.
 */
Date.prototype.getUTCMinutes = function () {};

/**
 * @return {number} Month of this according to universal time as an integer
 *         between 0 and 11 corresponding to the month. 0 for January, 1 for
 *         February, 2 for March, and so on.
 */
Date.prototype.getUTCMonth = function () {};

/**
 * @return {number} Seconds in the specified date according to universal time.
 */
Date.prototype.getUTCSeconds = function () {};

/**
 * @deprecated Use {@linkcode #getFullYear()} instead.
 * @return {number} The year in this date according to local time.
 */
Date.prototype.getYear = function () {};

/**
 * @param {number} dayValue
 */
Date.prototype.setDate = function (dayValue) {};

/**
 * @param {number} yearValue
 * @param {number=} monthValue
 * @param {number=} dayValue
 */
Date.prototype.setFullYear = function (yearValue, monthValue, dayValue) {};

/**
 * @param {number} hoursValue
 * @param {number=} minutesValue
 * @param {number=} secondsValue
 * @param {number=} msValue
 */
Date.prototype.setHours = function (hoursValue, minutesValue, secondsValue,
        msValue) {};

/**
 * @param {number} millisecondsValue
 */
Date.prototype.setMilliseconds = function (millisecondsValue) {};

/**
 * @param {number} minutesValue
 * @param {number=} secondsValue
 * @param {number=} msValue
 */
Date.prototype.setMinutes = function (minutesValue, secondsValue, msValue) {};

/**
 * @param {number} monthValue
 * @param {number=} dayValue
 */
Date.prototype.setMonth = function (monthValue, dayValue) {};

/**
 * @param {number} secondsValue
 * @param {number=} msValue
 */
Date.prototype.setSeconds = function (secondsValue, msValue) {};

/**
 * @param {number} timeValue
 */
Date.prototype.setTime = function (timeValue) {};

/**
 * @param {number} dayValue
 */
Date.prototype.setUTCDate = function (dayValue) {};

/**
 * @param {number} yearValue
 * @param {number=} monthValue
 * @param {number=} dayValue
 */
Date.prototype.setUTCFullYear = function (yearValue, monthValue, dayValue) {};

/**
 * @param {number} hoursValue
 * @param {number=} minutesValue
 * @param {number=} secondsValue
 * @param {number=} msValue
 */
Date.prototype.setUTCHours = function (hoursValue, minutesValue, secondsValue,
        msValue) {};

/**
 * @param {number} millisecondsValue
 */
Date.prototype.setUTCMilliseconds = function (millisecondsValue) {};

/**
 * @param {number} minutesValue
 * @param {number=} secondsValue
 * @param {number=} msValue
 */
Date.prototype.setUTCMinutes = function (minutesValue, secondsValue, msValue) {};

/**
 * @param {number} monthValue
 * @param {number=} dayValue
 */
Date.prototype.setUTCMonth = function (monthValue, dayValue) {};

/**
 * @param {number} secondsValue
 * @param {number=} msValue
 */
Date.prototype.setUTCSeconds = function (secondsValue, msValue) {};

/**
 * @deprecated Use {@linkcode #setFullYear()} instead.
 * @param {number} yearValue
 */
Date.prototype.setYear = function (yearValue) {};

/**
 * @return {string} The date portion of this date object in human readable
 *         form in American English.
 */
Date.prototype.toDateString = function () {};

/**
 * @deprecated Use {@linkcode #toUTCString()} instead.
 * @return {string} A string representing this date, using Internet GMT
 *         conventions.
 */
Date.prototype.toGMTString = function () {};

/**
 * @param {string=} locales
 * @param {{localeMatcher: string, timeZone: string, hour12: boolean, formatMatcher: string, weekday: string, era: string, year: string, month: string, day: string, hour: string, minute: string, second: string, timeZoneName: string}=} options
 * @return {string} A language sensitive representation of this date.
 */
Date.prototype.toLocaleDateString = function (locales, options) {};

/**
 * @param {string=} locales
 * @param {{localeMatcher: string, timeZone: string, hour12: boolean, formatMatcher: string, weekday: string, era: string, year: string, month: string, day: string, hour: string, minute: string, second: string, timeZoneName: string}=} options
 * @return {string} A language sensitive representation of this date.
 */
Date.prototype.toLocaleString = function (locales, options) {};

/**
 * @param {string=} locales
 * @param {{localeMatcher: string, timeZone: string, hour12: boolean, formatMatcher: string, weekday: string, era: string, year: string, month: string, day: string, hour: string, minute: string, second: string, timeZoneName: string}=} options
 * @return {string} A language sensitive representation of the time portion of
 *         this date.
 */
Date.prototype.toLocaleTimeString = function (locales, options) {};

/**
 * @return {string} A string representation of this date.
 */
Date.prototype.toString = function () {};

/**
 * @return {string} The time portion of this date object in human readable
 *          form in American English.
 */
Date.prototype.toTimeString = function () {};

/**
 * @return {string} This date to a string, using the UTC time zone.
 */
Date.prototype.toUTCString = function () {};

/**
 * @return {number} The number of milliseconds since midnight 01 January, 1970
 *          UTC.
 */
Date.prototype.valueOf = function () {};

/**
 * @constructor
 * @extends Object
 * @param {*=} thing
 */
function String(thing) {}

/**
 * @type {Object}
 */
String.prototype;

/**
 * @type {number}
 */
String.prototype.length;

/**
 * @param {...number} num1_numN
 * @return {string} A string created by using the specified sequence of
 *          Unicode values.
 */
String.fromCharCode = function (num1_numN) {};

/**
 * @param {number} index
 * @return {string} The character at the specified position in this string.
 */
String.prototype.charAt = function (index) {};

/**
 * @param {number} index
 * @return {number} Numeric Unicode value of the character at the given index.
 */
String.prototype.charCodeAt = function (index) {};

/**
 * @param {...string} string2_stringN
 * @return {string} This string with the provided strings concatenated
 *          together.
 */
String.prototype.concat = function (string2_stringN) {};

/**
 * @param {string} searchValue
 * @param {number=} fromIndex
 * @return {number} The index of <code>searchValue</code> within this string
 *          or <code>-1</code> if <code>searchValue</code> is not found.
 */
String.prototype.indexOf = function (searchValue, fromIndex) {};

/**
 * @param {string} searchValue
 * @param {number=} fromIndex
 * @return {number} The index of <code>searchValue</code> within this string
 *          or <code>-1</code> if <code>searchValue</code> is not found.
 */
String.prototype.lastIndexOf = function (searchValue, fromIndex) {};

/**
 * @param {string} compareString
 * @param {string=} locales
 * @param {{localeMatcher: string, usage: string, sensitivity: string, ignorePunctuation: boolean, numeric: boolean, caseFirst: boolean}=} options
 * @return {number} A negative number if the string occurs earlier in a sort
 *         than compareString, returns a positive number if the string occurs
 *         afterwards in such a sort, and returns 0 if they occur at the same
 *         level.
 */
String.prototype.localeCompare = function (compareString, locales, options) {};

/**
 * @param {(RegExp|string|String)} regexp
 * @return {?(Array<string>|Array<Array<string>>)} Matches of the provided
 *         regular expression on this string.
 */
String.prototype.match = function (regexp) {};

/**
 * @param {(RegExp|string)} regexp_substr
 * @param {(string|Function)} newSubStr_function
 * @return {string} A new string created by replacing the string matched by
 *         <code>regexp_substr</code> with text provided by
 *         <code>newSubStr_function</code>.
 */
String.prototype.replace = function (regexp_substr, newSubStr_function) {};

/**
 * @param {RegExp} regexp
 * @return {number} Index of the first match of <code>regexp</code> on this
 *          string or <code>-1</code> if there is no match.
 */
String.prototype.search = function (regexp) {};

/**
 * @param {number} beginSlice
 * @param {number=} endSlice
 * @return {string} Extracted section of this string.
 */
String.prototype.slice = function (beginSlice, endSlice) {};

/**
 * @param {(string|RegExp)=} separator
 * @param {number=} limit
 * @return {Array<string>} String created by separating this string using the
 *         provided separator.
 */
String.prototype.split = function (separator, limit) {};

/**
 * @param {number} start
 * @param {number=} length
 * @return {string} A subset of this string beginning at the specified
 *         location through the specified number of characters.
 */
String.prototype.substr = function (start, length) {};

/**
 * @param {number} indexA
 * @param {number=} indexB
 * @return {string} A subset of this string between one index and another, or
 *         through the end of the string.
 */
String.prototype.substring = function (indexA, indexB) {};

/**
 * @return {string} This string converted to lower case, according to any
 *         locale-specific case mappings.
 */
String.prototype.toLocaleLowerCase = function () {};

/**
 * @return {string} This string converted to upper case, according to any
 *         locale-specific case mappings.
 */
String.prototype.toLocaleUpperCase = function () {};

/**
 * @return {string} This string converted to lower case.
 */
String.prototype.toLowerCase = function () {};

/**
 * @return {string} This string as a primitive value.
 */
String.prototype.toString = function () {};

/**
 * @return {string} This string converted to upper case.
 */
String.prototype.toUpperCase = function () {};

/**
 * @return {string} This string as a primitive value.
 */
String.prototype.valueOf = function () {};

/**
 * @constructor
 * @extends Object
 * @param {string} pattern
 * @param {string=} flags
 */
function RegExp(pattern, flags) {}

/**
 * @type {Object}
 */
RegExp.prototype;

/**
 * @type {number}
 */
RegExp.prototype.lastIndex;

/**
 * @type {boolean}
 */
RegExp.prototype.global;

/**
 * @type {boolean}
 */
RegExp.prototype.ignoreCase;

/**
 * @type {boolean}
 */
RegExp.prototype.multiline;

/**
 * @type {string}
 */
RegExp.prototype.source;

/**
 * @param {string} str
 * @return {?(Array<string>)} The matched text as the first item, and then one
 *         item for each capturing parenthesis that matched containing the text
 *         that was captured; or <code>null</code> if matching fails.
 */
RegExp.prototype.exec = function (str) {};

/**
 * @param {string} str
 * @return {boolean} <code>true</code> if this regular expression matches the
 *          provided <code>str</code> string.
 */
RegExp.prototype.test = function (str) {};

/**
 * @return {string} A string representing this regular expression.
 */
RegExp.prototype.toString = function () {};

/**
 * @constructor
 * @extends Object
 * @template E
 * @param {...E} element0_elementN_arrayLength
 */
function Array(element0_elementN_arrayLength) {}

/**
 * @type {Object}
 */
Array.prototype;

/**
 * @type {number}
 */
Array.length;

/**
 * @template O
 * @param {...O} valueN
 * @return {Array<(E|O)>} New array of this array's elements and the provided
 *         values or elements of the provided arrays.
 */
Array.prototype.concat = function (valueN) {};

/**
 * @param {string=} separator
 * @return {string} Elements of this array as string joined by the provided
 *         <code>separator</code>.
 */
Array.prototype.join = function (separator) {};

/**
 * @return {E} The last element of this array.
 */
Array.prototype.pop = function () {};

/**
 * @param {...E} element1_elementN
 * @return {number} The new length of this array.
 */
Array.prototype.push = function (element1_elementN) {};

/**
 * @return {Array<E>} This array with its elements in reverse order.
 */
Array.prototype.reverse = function () {};

/**
 * @return {E} The first element of this array.
 */
Array.prototype.shift = function () {};

/**
 * @param {number} begin
 * @param {number=} end
 * @return {Array<E>} Portion of this array.
 */
Array.prototype.slice = function (begin, end) {};

/**
 * @param {function(E, E): number=} compareFunction
 * @return {Array<E>} This array with its elements sorted using the provided
 *          <code>compareFunction</code> comparator.
 */
Array.prototype.sort = function (compareFunction) {};

/**
 * @param {number} index
 * @param {number} howMany
 * @param {...E} element1_elementN
 * @return {Array<E>} The removed elements.
 */
Array.prototype.splice = function (index, howMany, element1_elementN) {};

/**
 * @return {string} A string representing the elements of this array.
 */
Array.prototype.toLocaleString = function () {};

/**
 * @return {string} A string representing the elements of this array.
 */
Array.prototype.toString = function () {};

/**
 * @param {...E} element1_elementN
 * @return {number} The new length of this array.
 */
Array.prototype.unshift = function (element1_elementN) {};

/**
 * @type {Object}
 */
var arguments = {};

/**
 * @deprecated This property cannot be accessed in the strict mode.
 * @type {function}
 */
arguments.callee;

/**
 * @type {number}
 */
arguments.length;
