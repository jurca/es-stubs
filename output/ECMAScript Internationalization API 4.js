/**
 * 
 *
 * @summary 
 * @param {(string|Array<string>)} locales A list of <code>String</code> values
 * for which to get the canonical locale names.
 * @return {Array<string>} <p>An array containing the canonical locale
 * names.</p>
 * @see Intl.NumberFormat.supportedLocalesOf()
 * @see Intl.DateTimeFormat.supportedLocalesOf()
 * @see Intl.Collator.supportedLocalesOf()
 */
Intl.getCanonicalLocales = function (locales) {};

/**
 * <p>The <code>formatToParts()</code> method is useful for custom formatting
 * of date strings. It returns an <code>Array</code> of objects containing the
 * locale-specific tokens from which it possible to build custom strings while
 * preserving the locale-specific parts. The structure the
 * <code>formatToParts()</code> method returns, looks like this:</p> <pre
 * class="brush: js">[ { type: 'day', value: '17' }, { type: 'weekday', value
 * 'Monday' } ]</pre> <p>Possible types are the following:</p> <dl>
 * <dt>day</dt> <dd>The string used for the day, for example "17".</dd>
 * <dt>dayPeriod</dt> <dd>The string used for the day period, for example, "AM"
 * or "PM".</dd> <dt>era</dt> <dd>The string used for the era, for example "BC"
 * or "AD".</dd> <dt>hour</dt> <dd>The string used for the hour, for example
 * "3" or "03".</dd> <dt>literal</dt> <dd>The string used for separating date
 * and time values, for example "/", <code>","</code>, <code>"o'clock"</code>,
 * <code>"de"</code>, etc.</dd> <dt>minute</dt> <dd>The string used for the
 * minute, for example "00".</dd> <dt>month</dt> <dd>The string used for the
 * month, for example "12".</dd> <dt>second</dt> <dd>The string used for the
 * second, for example "07" or "42".</dd> <dt>timeZoneName</dt> <dd>The string
 * used for the name of the time zone, for example "UTC".</dd> <dt>weekday</dt>
 * <dd>The string used for the weekday, for example "M", "Monday", or
 * "Montag".</dd> <dt>year</dt> <dd>The string used for the year, for example
 * "2012" or "96".</dd> </dl>
 *
 * @summary 
 * @param {Date} date
 * @return {Array<{type: string, value: string}>} <p>An <code>Array</code> of
 * objects containing the formatted date in parts.</p>
 * @see Intl.DateTimeFormat
 * @see Intl.DateTimeFormat.prototype.format
 * @see Date.prototype.toLocaleString()
 * @see Date.prototype.toLocaleDateString()
 * @see Date.prototype.toLocaleTimeString()
 */
Intl.DateTimeFormat.prototype.formatToParts = function (date) {};
