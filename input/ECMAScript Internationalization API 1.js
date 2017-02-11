/**
 * @type {Object}
 */
var Intl = {};

/**
 * @constructor
 * @extends Object
 * @param {(string|Array<string>)=} locales
 * @param {{localeMatcher: string=, usage: string=, sensitivity: string=, ignorePunctuation: boolean=, numeric: boolean=, caseFirst: boolean=}=} options
 */
Intl.Collator = function (locales, options) {};

/**
 * @type {Object}
 */
Intl.Collator.prototype = {};

/**
 * @param {string} string1
 * @param {string} string2
 * @return {number} A negative value if <code>string1</code> comes before
 *          <code>string2</code>; a positive value if <code>string1</code>
 *          comes after <code>string2</code>; 0 if they are considered equal.
 */
Intl.Collator.prototype.compare = function (string1, string2) {};

/**
 * @return {{locale: string, usage: string, sensitivity: string, ignorePunctuation: boolean, collation: string, numeric: boolean, caseFirst: boolean}} An
 *          object with properties reflecting the locale and collation options
 *          computed during initialization of this {@linkcode Collator} object.
 */
Intl.Collator.prototype.resolvedOptions = function () {};

/**
 * @param {(string|Array<string>)} locales
 * @param {{localeMatcher: string}=} options
 * @return {Array<string>} Those of the provided locales that are supported in
 *          collation without having to fall back to the runtime's default
 *          locale.
 */
Intl.Collator.supportedLocalesOf = function (locales, options) {};

/**
 * @constructor
 * @extends Object
 * @param {(string|Array<string>)=} locales
 * @param {{localeMatcher: string=, timeZone: string=, hour12: boolean=, formatMatcher: string=}=} options
 */
Intl.DateTimeFormat = function (locales, options) {};

/**
 * @type {Object}
 */
Intl.DateTimeFormat.prototype = {};

/**
 * @param {Date} date
 * @return {string} Formatted date.
 */
Intl.DateTimeFormat.prototype.format = function (date) {};

/**
 * @return {{locale: string, calendar: string, numberingSystem: string, timeZone: string, hour12: boolean, weekday: string=, era: string=, year: string=, month: string=, day: string=, hour: string=, minute: string=, second: string=, timeZoneName: string=}} An
 *         object with properties reflecting the locale and date and time
 *         formatting options computed during initialization of this
 *         {@linkcode DateTimeFormat} object.
 */
Intl.DateTimeFormat.prototype.resolvedOptions = function () {};

/**
 * @param {(string|Array<string>)} locales
 * @param {{localeMatcher: string}=} options
 * @return {Array<string>} An array containing those of the provided locales
 *          that are supported in date and time formatting without having to
 *          fall back to the runtime's default locale.
 */
Intl.DateTimeFormat.supportedLocalesOf = function (locales, options) {};

/**
 * @constructor
 * @param {(string|Array<string>)=} locales
 * @param {{localeMatcher: string, style: string, currency: string, currencyDisplay: string, useGrouping: boolean, minimumIntegerDigits: number, minimumFractionDigits: number, maximumFractionDigits: number, minimumSignificantDigits: number, maximumSignificantDigits: number}=} options
 */
Intl.NumberFormat = function (locales, options) {};

/**
 * @type {Object}
 */
Intl.NumberFormat.prototype = {};

/**
 * @param {number} number
 * @return {string} Formatted number.
 */
Intl.NumberFormat.prototype.format = function (number) {};

/**
 * @return {{locale: string, numberingSystem: string, style: string, useGrouping: boolean, currency: string, currencyDisplay: string, minimumIntegerDigits: number, minimumFractionDigits: number, maximumFractionDigits: number, minimumSignificantDigits: number, maximumSignificantDigits: number}} An
 *          object with properties reflecting the locale and number
 *          formatting options computed during initialization of this
 *          {@linkcode NumberFormat} object.
 */
Intl.NumberFormat.prototype.resolvedOptions = function () {};

/**
 * @param {(string|Array<string>)} locales
 * @param {{localeMatcher: string}=} options
 * @return {Array<string>} An array containing those of the provided locales
 *          that are supported in number formatting without having to fall back
 *          to the runtime's default locale.
 */
Intl.NumberFormat.supportedLocalesOf = function (locales, options) {};
