/**
 * 
 *
 * @summary 
 * @type {Object}
 * @see Intl.Collator
 * @see Intl.DateTimeFormat
 * @see Intl.NumberFormat
 * @see String.prototype.localeCompare()
 * @see Number.prototype.toLocaleString()
 * @see Date.prototype.toLocaleString()
 * @see Date.prototype.toLocaleDateString()
 * @see Date.prototype.toLocaleTimeString()
 */
var Intl;

/**
 * <p>The <code>Intl.Collator</code> object has the following properties and
 * methods:</p> <h3 id="Properties">Properties</h3> <dl>
 * <dt><code>Intl.Collator.prototype</code></dt> <dd>Allows the addition of
 * properties to all objects.</dd> </dl> <h3 id="Methods">Methods</h3> <dl>
 * <dt><code>Intl.Collator.supportedLocalesOf()</code></dt> <dd>Returns an
 * array containing those of the provided locales that are supported without
 * having to fall back to the runtime's default locale.</dd> </dl>
 *
 * @summary 
 * @constructor
 * @extends Object
 * @param {(string|Array<string>)=} locales <p>Optional. A string with a BCP 47
 * language tag, or an array of such strings. For the general form and
 * interpretation of the <code>locales</code> argument, see the Intl page. The
 * following Unicode extension keys are allowed:</p> <dl>
 * <dt><code>co</code></dt> <dd>Variant collations for certain locales.
 * Possible values include: <code>"big5han"</code>, <code>"dict"</code>,
 * <code>"direct"</code>, <code>"ducet"</code>, <code>"gb2312"</code>,
 * <code>"phonebk"</code>, <code>"phonetic"</code>, <code>"pinyin"</code>,
 * <code>"reformed"</code>, <code>"searchjl"</code>, <code>"stroke"</code>,
 * <code>"trad"</code>, <code>"unihan"</code>. The <code>"standard"</code> and
 * <code>"search"</code> values are ignored; they are replaced by the
 * <code>options</code> property <code>usage</code> (see below).</dd>
 * <dt><code>kn</code></dt> <dd>Whether numeric collation should be used, such
 * that "1" &lt; "2" &lt; "10". Possible values are <code>"true"</code> and
 * <code>"false"</code>. This option can be set through an <code>options</code>
 * property or through a Unicode extension key; if both are provided, the
 * <code>options</code> property takes precedence.</dd>
 * <dt><code>kf</code></dt> <dd>Whether upper case or lower case should sort
 * first. Possible values are <code>"upper"</code>, <code>"lower"</code>, or
 * <code>"false"</code> (use the locale's default). This option can be set
 * through an <code>options</code> property or through a Unicode extension key;
 * if both are provided, the <code>options</code> property takes precedence.
 * @param {{localeMatcher: string=, usage: string=, sensitivity: string=, ignorePunctuation: boolean=, numeric: boolean=, caseFirst: boolean=}=} options <p>Optional. An object with some or all of the following
 * properties:</p> <dl> <dt><code>localeMatcher</code></dt> <dd>The locale
 * matching algorithm to use. Possible values are <code>"lookup"</code> and
 * <code>"best fit"</code>; the default is <code>"best fit"</code>. For
 * information about this option, see the Intl page.</dd>
 * <dt><code>usage</code></dt> <dd>Whether the comparison is for sorting or for
 * searching for matching strings. Possible values are <code>"sort"</code> and
 * <code>"search"</code>; the default is <code>"sort"</code>.</dd>
 * <dt><code>sensitivity</code></dt> <dd> <p>Which differences in the strings
 * should lead to non-zero result values. Possible values are:</p> <ul>
 * <li><code>"base"</code>: Only strings that differ in base letters compare as
 * unequal. Examples: <code>a ≠ b</code>, <code>a = á</code>, <code>a =
 * A</code>.</li> <li><code>"accent"</code>: Only strings that differ in base
 * letters or accents and other diacritic marks compare as unequal. Examples:
 * <code>a ≠ b</code>, <code>a ≠ á</code>, <code>a = A</code>.</li>
 * <li><code>"case"</code>: Only strings that differ in base letters or case
 * compare as unequal. Examples: <code>a ≠ b</code>, <code>a = á</code>,
 * <code>a ≠ A</code>.</li> <li><code>"variant"</code>: Strings that differ in
 * base letters, accents and other diacritic marks, or case compare as unequal.
 * Other differences may also be taken into consideration. Examples: <code>a ≠
 * b</code>, <code>a ≠ á</code>, <code>a ≠ A</code>.</li> </ul> <p>The default
 * is <code>"variant"</code> for usage <code>"sort"</code>; it's locale
 * dependent for usage <code>"search"</code>.</p> </dd>
 * <dt><code>ignore­Punctua­tion</code></dt> <dd>Whether punctuation should be
 * ignored. Possible values are <code>true</code> and <code>false</code>; the
 * default is <code>false</code>.</dd> <dt><code>numeric</code></dt>
 * <dd>Whether numeric collation should be used, such that "1" &lt; "2" &lt;
 * "10". Possible values are <code>true</code> and <code>false</code>; the
 * default is <code>false</code>. This option can be set through an
 * <code>options</code> property or through a Unicode extension key; if both
 * are provided, the <code>options</code> property takes precedence.
 * Implementations are not required to support this property.</dd>
 * <dt><code>caseFirst</code></dt> <dd>Whether upper case or lower case should
 * sort first. Possible values are <code>"upper"</code>, <code>"lower"</code>,
 * or <code>"false"</code> (use the locale's default); the default is
 * <code>"false"</code>. This option can be set through an <code>options</code>
 * property or through a Unicode extension key; if both are provided, the
 * <code>options</code> property takes precedence. Implementations are not
 * required to support this property.
 * @see Intl.Collator
 * @see Intl.DateTimeFormat
 * @see Intl.NumberFormat
 * @see String.prototype.localeCompare()
 * @see Number.prototype.toLocaleString()
 * @see Date.prototype.toLocaleString()
 * @see Date.prototype.toLocaleDateString()
 * @see Date.prototype.toLocaleTimeString()
 */
Intl.Collator = function (locales, options) {};

/**
 * <p>The function returned by the <code>compare</code> getter returns a number
 * indicating how <code>string1</code> and <code>string2</code> compare to each
 * other according to the sort order of this <code>Collator</code> object: a
 * negative value if <code>string1</code> comes before <code>string2</code>; a
 * positive value if <code>string1</code> comes after <code>string2</code>; 0
 * if they are considered equal.</p>
 *
 * @summary 
 * @param {string} string1 The strings to compare against each other.
 * @param {string} string2 The strings to compare against each other.
 * @return {number} A negative value if <code>string1</code> comes before
 * <code>string2</code>; a positive value if <code>string1</code> comes after
 * <code>string2</code>; 0 if they are considered equal.
 * @see Intl.Collator
 * @see String.prototype.localeCompare()
 */
Intl.Collator.prototype.compare = function (string1, string2) {};

/**
 * <p>The resulting object has the following properties:</p> <dl>
 * <dt><code>locale</code></dt> <dd>The BCP 47 language tag for the locale
 * actually used. If any Unicode extension values were requested in the input
 * BCP 47 language tag that led to this locale, the key-value pairs that were
 * requested and are supported for this locale are included in
 * <code>locale</code>.</dd> <dt><code>usage</code></dt>
 * <dt><code>sensitivity</code></dt> <dt><code>ignorePunctuation</code></dt>
 * <dd>The values provided for these properties in the <code>options</code>
 * argument or filled in as defaults.</dd> <dt><code>collation</code></dt>
 * <dd>The value requested using the Unicode extension key <code>"co"</code>,
 * if it is supported for <code>locale</code>, or <code>"default"</code>.</dd>
 * <dt><code>numeric</code></dt> <dt><code>caseFirst</code></dt> <dd>The values
 * requested for these properties in the <code>options</code> argument or using
 * the Unicode extension keys <code>"kn"</code> and <code>"kf"</code> or filled
 * in as defaults. If the implementation does not support these properties,
 * they are omitted.</dd> </dl>
 *
 * @summary 
 * @return {{locale: string, usage: string, sensitivity: string,
 * ignorePunctuation: boolean, collation: string, numeric: boolean, caseFirst:
 * boolean}} <p>A new object with properties reflecting the locale and
 * collation options computed during the initialization of the given
 * <code>Collator</code> object.</p>
 * @see Intl.Collator
 */
Intl.Collator.prototype.resolvedOptions = function () {};

/**
 * <p>Returns an array with a subset of the language tags provided in
 * <code>locales</code>. The language tags returned are those for which the
 * runtime supports a locale in collation that the locale matching algorithm
 * used considers a match, so that it wouldn't have to fall back to the default
 * locale.</p>
 *
 * @summary 
 * @param {(string|Array<string>)} locales A string with a BCP 47 language tag,
 * or an array of such strings. For the general form of the
 * <code>locales</code> argument, see the Intl page.
 * @param {{localeMatcher: string}=} options <p>Optional. An object that may
 * have the following property:</p> <dl> <dt><code>localeMatcher</code></dt>
 * <dd>The locale matching algorithm to use. Possible values are
 * <code>"lookup"</code> and <code>"best fit"</code>; the default is
 * <code>"best fit"</code>. For information about this option, see the Intl
 * page.
 * @return {Array<string>} <p>An array of strings representing a subset of the
 * given locale tags that are supported in collation without having to fall
 * back to the runtime's default locale.</p>
 * @see Intl.Collator
 */
Intl.Collator.supportedLocalesOf = function (locales, options) {};

/**
 * <h3 id="Properties">Properties</h3> <dl>
 * <dt><code>Intl.DateTimeFormat.prototype</code></dt> <dd>Allows the addition
 * of properties to all objects.</dd> </dl> <h3 id="Methods">Methods</h3> <dl>
 * <dt><code>Intl.DateTimeFormat.supportedLocalesOf()</code></dt> <dd>Returns
 * an array containing those of the provided locales that are supported without
 * having to fall back to the runtime's default locale.</dd> </dl>
 *
 * @summary 
 * @constructor
 * @extends Object
 * @param {(string|Array<string>)=} locales <p>Optional. A string with a BCP 47
 * language tag, or an array of such strings. For the general form and
 * interpretation of the <code>locales</code> argument, see the Intl page. The
 * following Unicode extension keys are allowed:</p> <dl>
 * <dt><code>nu</code></dt> <dd>Numbering system. Possible values include:
 * <code>"arab"</code>, <code>"arabext"</code>, <code>"bali"</code>,
 * <code>"beng"</code>, <code>"deva"</code>, <code>"fullwide"</code>,
 * <code>"gujr"</code>, <code>"guru"</code>, <code>"hanidec"</code>,
 * <code>"khmr"</code>, <code>"knda"</code>, <code>"laoo"</code>,
 * <code>"latn"</code>, <code>"limb"</code>, <code>"mlym"</code>,
 * <code>"mong"</code>, <code>"mymr"</code>, <code>"orya"</code>,
 * <code>"tamldec"</code>, <code>"telu"</code>, <code>"thai"</code>,
 * <code>"tibt"</code>.</dd> <dt><code>ca</code></dt> <dd>Calendar. Possible
 * values include: <code>"buddhist"</code>, <code>"chinese"</code>,
 * <code>"coptic"</code>, <code>"ethioaa"</code>, <code>"ethiopic"</code>,
 * <code>"gregory"</code>, <code>"hebrew"</code>, <code>"indian"</code>,
 * <code>"islamic"</code>, <code>"islamicc"</code>, <code>"iso8601"</code>,
 * <code>"japanese"</code>, <code>"persian"</code>, <code>"roc"</code>.
 * @param {{localeMatcher: string=, timeZone: string=, hour12: boolean=, formatMatcher: string=}=} options <p>Optional. An object with some or all of the following
 * properties:</p> <dl> <dt><code>localeMatcher</code></dt> <dd>The locale
 * matching algorithm to use. Possible values are <code>"lookup"</code> and
 * <code>"best fit"</code>; the default is <code>"best fit"</code>. For
 * information about this option, see the Intl page.</dd>
 * <dt><code>timeZone</code></dt> <dd>The time zone to use. The only value
 * implementations must recognize is <code>"UTC"</code>; the default is the
 * runtime's default time zone. Implementations may also recognize the time
 * zone names of the IANA time zone database, such as
 * <code>"Asia/Shanghai"</code>, <code>"Asia/Kolkata"</code>,
 * <code>"America/New_York"</code>.</dd> <dt><code>hour12</code></dt>
 * <dd>Whether to use 12-hour time (as opposed to 24-hour time). Possible
 * values are <code>true</code> and <code>false</code>; the default is locale
 * dependent.</dd> <dt><code>formatMatcher</code></dt> <dd>The format matching
 * algorithm to use. Possible values are <code>"basic"</code> and <code>"best
 * fit"</code>; the default is <code>"best fit"</code>. See the following
 * paragraphs for information about the use of this property.</dd> </dl> <p>The
 * following properties describe the date-time components to use in formatted
 * output, and their desired representations. Implementations are required to
 * support at least the following subsets:</p> <ul> <li><code>weekday</code>,
 * <code>year</code>, <code>month</code>, <code>day</code>, <code>hour</code>,
 * <code>minute</code>, <code>second</code></li> <li><code>weekday</code>,
 * <code>year</code>, <code>month</code>, <code>day</code></li>
 * <li><code>year</code>, <code>month</code>, <code>day</code></li>
 * <li><code>year</code>, <code>month</code></li> <li><code>month</code>,
 * <code>day</code></li> <li><code>hour</code>, <code>minute</code>,
 * <code>second</code></li> <li><code>hour</code>, <code>minute</code></li>
 * </ul> <p>Implementations may support other subsets, and requests will be
 * negotiated against all available subset-representation combinations to find
 * the best match. Two algorithms are available for this negotiation and
 * selected by the <code>formatMatcher</code> property: A fully specified
 * <code>"basic"</code> algorithm and an implementation dependent <code>"best
 * fit"</code> algorithm.</p> <dl> <dt><code>weekday</code></dt> <dd>The
 * representation of the weekday. Possible values are <code>"narrow"</code>,
 * <code>"short"</code>, <code>"long"</code>.</dd> <dt><code>era</code></dt>
 * <dd>The representation of the era. Possible values are
 * <code>"narrow"</code>, <code>"short"</code>, <code>"long"</code>.</dd>
 * <dt><code>year</code></dt> <dd>The representation of the year. Possible
 * values are <code>"numeric"</code>, <code>"2-digit"</code>.</dd>
 * <dt><code>month</code></dt> <dd>The representation of the month. Possible
 * values are <code>"numeric"</code>, <code>"2-digit"</code>,
 * <code>"narrow"</code>, <code>"short"</code>, <code>"long"</code>.</dd>
 * <dt><code>day</code></dt> <dd>The representation of the day. Possible values
 * are <code>"numeric"</code>, <code>"2-digit"</code>.</dd>
 * <dt><code>hour</code></dt> <dd>The representation of the hour. Possible
 * values are <code>"numeric"</code>, <code>"2-digit"</code>.</dd>
 * <dt><code>minute</code></dt> <dd>The representation of the minute. Possible
 * values are <code>"numeric"</code>, <code>"2-digit"</code>.</dd>
 * <dt><code>second</code></dt> <dd>The representation of the second. Possible
 * values are <code>"numeric"</code>, <code>"2-digit"</code>.</dd>
 * <dt><code>timeZoneName</code></dt> <dd>The representation of the time zone
 * name. Possible values are <code>"short"</code>, <code>"long"</code>.
 * @see Intl.Collator
 * @see Intl.DateTimeFormat
 * @see Intl.NumberFormat
 * @see String.prototype.localeCompare()
 * @see Number.prototype.toLocaleString()
 * @see Date.prototype.toLocaleString()
 * @see Date.prototype.toLocaleDateString()
 * @see Date.prototype.toLocaleTimeString()
 */
Intl.DateTimeFormat = function (locales, options) {};

/**
 * <p>The function returned by the <code>format</code> getter formats a date
 * into a string according to the locale and formatting options of this
 * <code>Intl.DateTimeFormat</code> object.</p>
 *
 * @summary 
 * @param {Date} date The date to format.
 * @return {string} Formatted date.
 * @see Intl.DateTimeFormat
 * @see Date.prototype.toLocaleString()
 * @see Date.prototype.toLocaleDateString()
 * @see Date.prototype.toLocaleTimeString()
 */
Intl.DateTimeFormat.prototype.format = function (date) {};

/**
 * <p>The resulting object has the following properties:</p> <dl>
 * <dt><code>locale</code></dt> <dd>The BCP 47 language tag for the locale
 * actually used. If any Unicode extension values were requested in the input
 * BCP 47 language tag that led to this locale, the key-value pairs that were
 * requested and are supported for this locale are included in
 * <code>locale</code>.</dd> <dt><code>calendar</code></dt>
 * <dt><code>numberingSystem</code></dt> <dd>The values requested using the
 * Unicode extension keys <code>"ca"</code> and <code>"nu"</code> or filled in
 * as default values.</dd> <dt><code>timeZone</code></dt> <dd>The value
 * provided for this property in the <code>options</code> argument;
 * <code>undefined</code> (representing the runtime's default time zone) if
 * none was provided. Warning: Applications should not rely on
 * <code>undefined</code> being returned, as future versions may return a
 * <code>String</code> value identifying the runtime’s default time zone
 * instead.</dd> <dt><code>hour12</code></dt> <dd>The value provided for this
 * property in the <code>options</code> argument or filled in as a
 * default.</dd> <dt><code>weekday</code></dt> <dt><code>era</code></dt>
 * <dt><code>year</code></dt> <dt><code>month</code></dt>
 * <dt><code>day</code></dt> <dt><code>hour</code></dt>
 * <dt><code>minute</code></dt> <dt><code>second</code></dt>
 * <dt><code>timeZoneName</code></dt> <dd>The values resulting from format
 * matching between the corresponding properties in the <code>options</code>
 * argument and the available combinations and representations for date-time
 * formatting in the selected locale. Some of these properties may not be
 * present, indicating that the corresponding components will not be
 * represented in formatted output.</dd> </dl>
 *
 * @summary 
 * @return {{locale: string, calendar: string, numberingSystem: string, timeZone: string, hour12: boolean, weekday: string=, era: string=, year: string=, month: string=, day: string=, hour: string=, minute: string=, second: string=, timeZoneName: string=}} <p>A
 * new object with properties reflecting the locale and date and time
 * formatting options computed during the initialization of the given
 * <code>DateTimeFormat</code> object.</p>
 * @see Intl.DateTimeFormat
 */
Intl.DateTimeFormat.prototype.resolvedOptions = function () {};

/**
 * <p>Returns an array with a subset of the language tags provided in
 * <code>locales</code>. The language tags returned are those for which the
 * runtime supports a locale in date and time formatting that the locale
 * matching algorithm used considers a match, so that it wouldn't have to fall
 * back to the default locale.</p>
 *
 * @summary 
 * @param {(string|Array<string>)} locales A string with a BCP 47 language tag,
 * or an array of such strings. For the general form of the
 * <code>locales</code> argument, see the Intl page.
 * @param {{localeMatcher: string}=} options <p>Optional. An object that may
 * have the following property:</p> <dl> <dt><code>localeMatcher</code></dt>
 * <dd>The locale matching algorithm to use. Possible values are
 * <code>"lookup"</code> and <code>"best fit"</code>; the default is
 * <code>"best fit"</code>. For information about this option, see the Intl
 * page.
 * @return {Array<string>} <p>An array of strings representing a subset of the
 * given locale tags that are supported in date and time formatting without
 * having to fall back to the runtime's default locale.</p>
 * @see Intl.DateTimeFormat
 */
Intl.DateTimeFormat.supportedLocalesOf = function (locales, options) {};

/**
 * <h3 id="Properties">Properties</h3> <dl>
 * <dt><code>Intl.NumberFormat.prototype</code></dt> <dd>Allows the addition of
 * properties to all objects.</dd> </dl> <h3 id="Methods">Methods</h3> <dl>
 * <dt><code>Intl.NumberFormat.supportedLocalesOf()</code></dt> <dd>Returns an
 * array containing those of the provided locales that are supported without
 * having to fall back to the runtime's default locale.</dd> </dl>
 *
 * @summary 
 * @constructor
 * @param {(string|Array<string>)=} locales <p>Optional. A string with a BCP 47
 * language tag, or an array of such strings. For the general form and
 * interpretation of the <code>locales</code> argument, see the Intl page. The
 * following Unicode extension key is allowed:</p> <dl>
 * <dt><code>nu</code></dt> <dd>The numbering system to be used. Possible
 * values include: <code>"arab"</code>, <code>"arabext"</code>,
 * <code>"bali"</code>, <code>"beng"</code>, <code>"deva"</code>,
 * <code>"fullwide"</code>, <code>"gujr"</code>, <code>"guru"</code>,
 * <code>"hanidec"</code>, <code>"khmr"</code>, <code>"knda"</code>,
 * <code>"laoo"</code>, <code>"latn"</code>, <code>"limb"</code>,
 * <code>"mlym"</code>, <code>"mong"</code>, <code>"mymr"</code>,
 * <code>"orya"</code>, <code>"tamldec"</code>, <code>"telu"</code>,
 * <code>"thai"</code>, <code>"tibt"</code>.
 * @param {{localeMatcher: string, style: string, currency: string,
 * currencyDisplay: string, useGrouping: boolean, minimumIntegerDigits: number,
 * minimumFractionDigits: number, maximumFractionDigits: number,
 * minimumSignificantDigits: number, maximumSignificantDigits: number}=}
 * options <p>Optional. An object with some or all of the following
 * properties:</p> <dl> <dt><code>localeMatcher</code></dt> <dd>The locale
 * matching algorithm to use. Possible values are <code>"lookup"</code> and
 * <code>"best fit"</code>; the default is <code>"best fit"</code>. For
 * information about this option, see the Intl page.</dd>
 * <dt><code>style</code></dt> <dd>The formatting style to use. Possible values
 * are <code>"decimal"</code> for plain number formatting,
 * <code>"currency"</code> for currency formatting, and <code>"percent"</code>
 * for percent formatting; the default is <code>"decimal"</code>.</dd>
 * <dt><code>currency</code></dt> <dd>The currency to use in currency
 * formatting. Possible values are the ISO 4217 currency codes, such as
 * <code>"USD"</code> for the US dollar, <code>"EUR"</code> for the euro, or
 * <code>"CNY"</code> for the Chinese RMB — see the Current currency &amp;
 * funds code list. There is no default value; if the <code>style</code> is
 * <code>"currency"</code>, the <code>currency</code> property must be
 * provided.</dd> <dt><code>currencyDisplay</code></dt> <dd>How to display the
 * currency in currency formatting. Possible values are <code>"symbol"</code>
 * to use a localized currency symbol such as €, <code>"code"</code> to use the
 * ISO currency code, <code>"name"</code> to use a localized currency name such
 * as <code>"dollar"</code>; the default is <code>"symbol"</code>.</dd>
 * <dt><code>useGrouping</code></dt> <dd>Whether to use grouping separators,
 * such as thousands separators or thousand/lakh/crore separators. Possible
 * values are <code>true</code> and <code>false</code>; the default is
 * <code>true</code>.</dd> </dl> <p>The following properties fall into two
 * groups: <code>minimumIntegerDigits</code>,
 * <code>minimumFractionDigits</code>, and <code>maximumFractionDigits</code>
 * in one group, <code>minimumSignificantDigits</code> and
 * <code>maximumSignificantDigits</code> in the other. If at least one property
 * from the second group is defined, then the first group is ignored.</p> <dl>
 * <dt><code>minimumIntegerDigits</code></dt> <dd>The minimum number of integer
 * digits to use. Possible values are from 1 to 21; the default is 1.</dd>
 * <dt><code>minimumFractionDigits</code></dt> <dd>The minimum number of
 * fraction digits to use. Possible values are from 0 to 20; the default for
 * plain number and percent formatting is 0; the default for currency
 * formatting is the number of minor unit digits provided by the ISO 4217
 * currency code list (2 if the list doesn't provide that information).</dd>
 * <dt><code>maximumFractionDigits</code></dt> <dd>The maximum number of
 * fraction digits to use. Possible values are from 0 to 20; the default for
 * plain number formatting is the larger of <code>minimumFractionDigits</code>
 * and 3; the default for currency formatting is the larger of
 * <code>minimumFractionDigits</code> and the number of minor unit digits
 * provided by the ISO 4217 currency code list (2 if the list doesn't provide
 * that information); the default for percent formatting is the larger of
 * <code>minimumFractionDigits</code> and 0.</dd>
 * <dt><code>minimumSignificantDigits</code></dt> <dd>The minimum number of
 * significant digits to use. Possible values are from 1 to 21; the default is
 * 1.</dd> <dt><code>maximumSignificantDigits</code></dt> <dd>The maximum
 * number of significant digits to use. Possible values are from 1 to 21; the
 * default is <code>minimumSignificantDigits</code>.
 * @see Intl.Collator
 * @see Intl.DateTimeFormat
 * @see Intl.NumberFormat
 * @see String.prototype.localeCompare()
 * @see Number.prototype.toLocaleString()
 * @see Date.prototype.toLocaleString()
 * @see Date.prototype.toLocaleDateString()
 * @see Date.prototype.toLocaleTimeString()
 */
Intl.NumberFormat = function (locales, options) {};

/**
 * <p>The function returned by the <code>format</code> getter formats a number
 * into a string according to the locale and formatting options of this
 * <code>NumberFormat</code> object.</p>
 *
 * @summary 
 * @param {number} number The number to format.
 * @return {string} Formatted number.
 * @see Intl.NumberFormat
 * @see Number.prototype.toLocaleString()
 */
Intl.NumberFormat.prototype.format = function (number) {};

/**
 * <p>The resulting object has the following properties:</p> <dl>
 * <dt><code>locale</code></dt> <dd>The BCP 47 language tag for the locale
 * actually used. If any Unicode extension values were requested in the input
 * BCP 47 language tag that led to this locale, the key-value pairs that were
 * requested and are supported for this locale are included in
 * <code>locale</code>.</dd> <dt><code>numberingSystem</code></dt> <dd>The
 * value requested using the Unicode extension key <code>"nu"</code> or filled
 * in as a default.</dd> <dt><code>style</code></dt>
 * <dt><code>useGrouping</code></dt> <dd>The values provided for these
 * properties in the <code>options</code> argument or filled in as
 * defaults.</dd> <dt><code>currency</code></dt>
 * <dt><code>currencyDisplay</code></dt> <dd>The values provided for these
 * properties in the <code>options</code> argument or filled in as defaults.
 * These properties are only present if <code>style</code> is
 * <code>"currency"</code>.</dd> </dl> <p>Only one of the following two groups
 * of properties is included:</p> <dl>
 * <dt><code>minimumIntegerDigits</code></dt>
 * <dt><code>minimumFractionDigits</code></dt>
 * <dt><code>maximumFractionDigits</code></dt> <dd>The values provided for
 * these properties in the <code>options</code> argument or filled in as
 * defaults. These properties are present only if neither
 * <code>minimumSignificantDigits</code> nor
 * <code>maximumSignificantDigits</code> was provided in the
 * <code>options</code> argument.</dd>
 * <dt><code>minimumSignificantDigits</code></dt>
 * <dt><code>maximumSignificantDigits</code></dt> <dd>The values provided for
 * these properties in the <code>options</code> argument or filled in as
 * defaults. These properties are present only if at least one of them was
 * provided in the <code>options</code> argument.</dd> </dl>
 *
 * @summary 
 * @return {{locale: string, numberingSystem: string, style: string,
 * useGrouping: boolean, currency: string, currencyDisplay: string,
 * minimumIntegerDigits: number, minimumFractionDigits: number,
 * maximumFractionDigits: number, minimumSignificantDigits: number,
 * maximumSignificantDigits: number}} <p>A new object with properties
 * reflecting the locale and number formatting options computed during the
 * initialization of the given <code>NumberFormat</code> object.</p>
 * @see Intl.NumberFormat
 */
Intl.NumberFormat.prototype.resolvedOptions = function () {};

/**
 * <p>Returns an array with a subset of the language tags provided in
 * <code>locales</code>. The language tags returned are those for which the
 * runtime supports a locale in number formatting that the locale matching
 * algorithm used considers a match, so that it wouldn't have to fall back to
 * the default locale.</p>
 *
 * @summary 
 * @param {(string|Array<string>)} locales A string with a BCP 47 language tag,
 * or an array of such strings. For the general form of the
 * <code>locales</code> argument, see the Intl page.
 * @param {{localeMatcher: string}=} options <p>Optional. An object that may
 * have the following property:</p> <dl> <dt><code>localeMatcher</code></dt>
 * <dd>The locale matching algorithm to use. Possible values are
 * <code>"lookup"</code> and <code>"best fit"</code>; the default is
 * <code>"best fit"</code>. For information about this option, see the Intl
 * page.
 * @return {Array<string>} <p>An array of strings representing a subset of the
 * given locale tags that are supported in number formatting without having to
 * fall back to the runtime's default locale.</p>
 * @see Intl.NumberFormat
 */
Intl.NumberFormat.supportedLocalesOf = function (locales, options) {};
