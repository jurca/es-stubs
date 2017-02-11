/**
 * <p><code>Infinity</code> is a property of the <em>global object</em>, i.e.
 * it is a variable in global scope.</p> <p>The initial value of
 * <code>Infinity</code> is <code>Number.POSITIVE_INFINITY</code>. The value
 * <code>Infinity</code> (positive infinity) is greater than any other number.
 * This value behaves mathematically like infinity; for example, any positive
 * number multiplied by <code>Infinity</code> is <code>Infinity</code>, and
 * anything divided by <code>Infinity</code> is 0.</p> <p>Per the ECMAScript 5
 * specification, <code>Infinity</code> is read only (implemented in JavaScript
 * 1.8.5 / Firefox 4).</p>
 *
 * @summary 
 * @type {number}
 * @see Number.NEGATIVE_INFINITY
 * @see Number.POSITIVE_INFINITY
 * @see Number.isFinite
 */
var Infinity;

/**
 * <p><code>NaN</code> is a property of the <em>global object</em>.</p> <p>The
 * initial value of <code>NaN</code> is Not-A-Number — the same as the value of
 * <code>Number.NaN</code>. In modern browsers, <code>NaN</code> is a
 * non-configurable, non-writable property. Even when this is not the case,
 * avoid overriding it.</p> <p>It is rather rare to use <code>NaN</code> in a
 * program. It is the returned value when <code>Math</code> functions fail
 * (<code>Math.sqrt(-1)</code>) or when a function trying to parse a number
 * fails (<code>parseInt("blabla")</code>).</p> <h3
 * id="Testing_against_NaN">Testing against <code>NaN</code></h3>
 * <p><code>NaN</code> compares unequal (via <code>==</code>, <code>!=</code>,
 * <code>===</code>, and <code>!==</code>) to any other value -- including to
 * another NaN value. Use <code>Number.isNaN()</code> or <code>isNaN()</code>
 * to most clearly determine whether a value is NaN. Or perform a
 * self-comparison: NaN, and only NaN, will compare unequal to itself.</p> <pre
 * class="brush: js">NaN === NaN; // false Number.NaN === NaN; // false
 * isNaN(NaN); // true isNaN(Number.NaN); // true function valueIsNaN(v) {
 * return v !== v; } valueIsNaN(1); // false valueIsNaN(NaN); // true
 * valueIsNaN(Number.NaN); // true </pre>
 *
 * @summary 
 * @type {number}
 * @see Number.NaN
 * @see Number.isNaN()
 * @see isNaN()
 */
var NaN;

/**
 * <p><code>undefined</code> is a property of the <em>global object</em>, i.e.
 * it is a variable in global scope. The initial value of
 * <code>undefined</code> is the primitive value <code>undefined</code>.</p>
 * <p>In modern browsers (JavaScript 1.8.5 / Firefox 4+),
 * <code>undefined</code> is a non-configurable, non-writable property per the
 * ECMAScript 5 specification. Even when this is not the case, avoid overriding
 * it.</p> <p>A variable that has not been assigned a value is of type
 * undefined. A method or statement also returns <code>undefined</code> if the
 * variable that is being evaluated does not have an assigned value. A function
 * returns <code>undefined</code> if a value was not <code>returned</code>.</p>
 * <div class="warning"> <p>While it is possible to use it as an identifier
 * (variable name) in any scope other than the global scope (because
 * <code>undefined</code> is not a <code>reserved word</code>), doing so is a
 * very bad idea that will make your code difficult to maintain and debug.</p>
 * <pre class="brush: js">//DON'T DO THIS // logs "foo string" (function() {
 * var undefined = 'foo'; console.log(undefined, typeof undefined); })(); //
 * logs "foo string" (function(undefined) { console.log(undefined, typeof
 * undefined); })('foo'); </pre> </div>
 *
 * @summary 
 * @type {undefined}
 */
var undefined;

/**
 * <p><code>eval()</code> is a function property of the global object.</p>
 * <p>The argument of the <code>eval()</code> function is a string. If the
 * string represents an expression, <code>eval()</code> evaluates the
 * expression. If the argument represents one or more JavaScript statements,
 * <code>eval()</code> evaluates the statements. Do not call
 * <code>eval()</code> to evaluate an arithmetic expression; JavaScript
 * evaluates arithmetic expressions automatically.</p> <p>If you construct an
 * arithmetic expression as a string, you can use <code>eval()</code> to
 * evaluate it at a later time. For example, suppose you have a variable
 * <code>x</code>. You can postpone evaluation of an expression involving
 * <code>x</code> by assigning the string value of the expression, say "<code>3
 * x + 2</code>", to a variable, and then calling <code>eval()</code> at a
 * later point in your script.</p> <p>If the argument of <code>eval()</code> is
 * not a string, <code>eval()</code> returns the argument unchanged. In the
 * following example, the <code>String</code> constructor is specified, and
 * <code>eval()</code> returns a <code>String</code> object rather than
 * evaluating the string.</p> <pre class="brush:js">eval(new String('2 + 2'));
 * // returns a String object containing "2 + 2" eval('2 + 2'); // returns 4
 * </pre> <p>You can work around this limitation in a generic fashion by using
 * <code>toString()</code>.</p> <pre class="brush:js">var expression = new
 * String('2 + 2'); eval(expression.toString()); </pre> <p>If you use the
 * <code>eval</code> function <em>indirectly,</em> by invoking it via a
 * reference other than <code>eval</code>, as of ECMAScript 5 it works at
 * global scope rather than local scope; this means, for instance, that
 * function declarations create global functions, and that the code being
 * evaluated doesn't have access to local variables within the scope where it's
 * being called.</p> <pre class="brush:js">function test() { var x = 2, y = 4;
 * console.log(eval('x + y')); // Direct call, uses local scope, result is 6
 * var geval = eval; console.log(geval('x + y')); // Indirect call, uses global
 * scope, throws ReferenceError because `x` is undefined } </pre>
 *
 * @summary 
 * @param {string} string A string representing a JavaScript expression,
 * statement, or sequence of statements. The expression can include variables
 * and properties of existing objects.
 * @return {*} <p>The completion value of evaluating the given code. If the
 * completion value is empty, <code>undefined</code> is returned.</p>
 * @see uneval()
 */
function eval(string) {}

/**
 * <p><code>isFinite</code> is a top-level function and is not associated with
 * any object.</p> <p>You can use this function to determine whether a number
 * is a finite number. The <code>isFinite</code> function examines the number
 * in its argument. If the argument is <code>NaN</code>, positive infinity, or
 * negative infinity, this method returns <code>false</code>; otherwise, it
 * returns <code>true</code>.</p>
 *
 * @summary 
 * @param {(number|string)} testValue The value to be tested for finiteness.
 * @return {boolean} <p><strong><code>false</code></strong> if the argument is
 * positive or negative <code>Infinity</code> or <code>NaN</code>; otherwise,
 * <strong><code>true</code></strong>.</p>
 * @see Number.isFinite()
 * @see Number.NaN
 * @see Number.POSITIVE_INFINITY
 * @see Number.NEGATIVE_INFINITY
 */
function isFinite(testValue) {}

/**
 * <h3 id="The_necessity_of_an_isNaN_function">The necessity of an
 * <code>isNaN</code> function</h3> <p>Unlike all other possible values in
 * JavaScript, it is not possible to rely on the equality operators (== and
 * ===) to determine whether a value <em>is</em> <code>NaN</code> or not,
 * because both <code>NaN == NaN</code> and <code>NaN === NaN</code> evaluate
 * to <code>false</code>. Hence, the necessity of an <code>isNaN</code>
 * function.</p> <h3 id="Origin_of_NaN_values">Origin of <code>NaN</code>
 * values</h3> <p><code>NaN</code> values are generated when arithmetic
 * operations result in <em>undefined</em> or <em>unrepresentable</em> values.
 * Such values do not necessarily represent overflow conditions. A
 * <code>NaN</code> also results from attempted coercion to numeric values of
 * non-numeric values for which no primitive numeric value is available.</p>
 * <p>For example, dividing zero by zero results in a <code>NaN</code> — but
 * dividing other numbers by zero does not.</p> <h3
 * id="Confusing_special-case_behavior">Confusing special-case behavior</h3>
 * <p>Since the very earliest versions of the <code>isNaN</code> function
 * specification, its behavior for non-numeric arguments has been confusing.
 * When the argument to the <code>isNaN</code> function is not of type Number,
 * the value is first coerced to a Number. The resulting value is then tested
 * to determine whether it is <code>NaN</code>. Thus for non-numbers that when
 * coerced to numeric type result in a valid non-NaN numeric value (notably the
 * empty string and boolean primitives, which when coerced give numeric values
 * zero or one), the "false" returned value may be unexpected; the empty
 * string, for example, is surely "not a number." The confusion stems from the
 * fact that the term, "not a number", has a specific meaning for numbers
 * represented as IEEE-754 floating-point values. The function should be
 * interpreted as answering the question, "is this value, when coerced to a
 * numeric value, an IEEE-754 'Not A Number' value?"</p> <p>The latest version
 * of ECMAScript (ES2015) contains the <code>Number.isNaN()</code> function.
 * <code>Number.isNaN(x)</code> will be a reliable way to test whether
 * <code>x</code> is <code>NaN</code> or not. Even with
 * <code>Number.isNaN</code>, however, the meaning of <code>NaN</code> remains
 * the precise numeric meaning, and not simply, "not a number". Alternatively,
 * in absense of <code>Number.isNaN</code>, the expression <code>(x !=
 * x)</code> is a more reliable way to test whether variable <code>x</code> is
 * <code>NaN</code> or not, as the result is not subject to the false positives
 * that make <code>isNaN</code> unreliable.</p> <p>You could think of isNaN
 * as:</p> <pre class="brush: js">var isNaN = function(value) { return
 * Number.isNaN(Number(value)); }</pre>
 *
 * @summary 
 * @param {(number|string)} testValue
 * @return {boolean} <p><strong><code>true</code></strong> if the given value
 * is <code>NaN</code>; otherwise, <strong><code>false</code></strong>.</p>
 * @see NaN
 * @see Number.isNaN()
 */
function isNaN(testValue) {}

/**
 * <p><code>parseFloat</code> is a top-level function and is not associated
 * with any object.</p> <p><code>parseFloat</code> parses its argument, a
 * string, and returns a floating point number. If it encounters a character
 * other than a sign (+ or -), numeral (0-9), a decimal point, or an exponent,
 * it returns the value up to that point and ignores that character and all
 * succeeding characters. Leading and trailing spaces are allowed.</p> <p>If
 * the first character cannot be converted to a number, <code>parseFloat</code>
 * returns <code>NaN</code>.</p> <p>For arithmetic purposes, the
 * <code>NaN</code> value is not a number in any radix. You can call the
 * <code>isNaN</code> function to determine if the result of
 * <code>parseFloat</code> is <code>NaN</code>. If <code>NaN</code> is passed
 * on to arithmetic operations, the operation results will also be
 * <code>NaN</code>.</p> <p><code>parseFloat</code> can also parse and return
 * the value <code>Infinity</code>. You can use the <code>isFinite</code>
 * function to determine if the result is a finite number (not
 * <code>Infinity</code>, <code>-Infinity</code>, or <code>NaN</code>).</p>
 *
 * @summary 
 * @param {string} string A string that represents the value you want to parse.
 * @return {number} <p>A floating point number parsed from the given string.
 * If the first character cannot be converted to a number, <code>NaN</code> is
 * returned.</p>
 * @see parseInt()
 * @see Number.parseFloat()
 * @see Number.parseInt()
 * @see isNaN()
 */
function parseFloat(string) {}

/**
 * <p>The <code>parseInt</code> function converts its first argument to a
 * string, parses it, and returns an integer or <code>NaN</code>. If not
 * <code>NaN</code>, the returned value will be the integer that is the first
 * argument taken as a number in the specified <var>radix</var> (base). For
 * example, a <var>radix</var> of 10 indicates to convert from a decimal
 * number, 8 octal, 16 hexadecimal, and so on. For radices above
 * <code>10</code>, the letters of the alphabet indicate numerals greater than
 * <code>9</code>. For example, for hexadecimal numbers (base 16),
 * <code>A</code> through <code>F</code> are used.</p> <p>If
 * <code>parseInt</code> encounters a character that is not a numeral in the
 * specified radix, it ignores it and all succeeding characters and returns the
 * integer value parsed up to that point. <code>parseInt</code> truncates
 * numbers to integer values. Leading and trailing spaces are allowed.</p>
 * <p>If <var>radix</var> is <code>undefined</code> or 0 (or absent),
 * JavaScript assumes the following:</p> <ul> <li>If the input
 * <code>string</code> begins with "0x" or "0X", <var>radix</var> is 16
 * (hexadecimal) and the remainder of the string is parsed.</li> <li>If the
 * input <code>string</code> begins with "0", <var>radix</var> is eight (octal)
 * or 10 (decimal). Exactly which radix is chosen is implementation-dependent.
 * ECMAScript 5 specifies that 10 (decimal) is used, but not all browsers
 * support this yet. For this reason <strong>always specify a radix when using
 * <code>parseInt</code></strong>.</li> <li>If the input <code>string</code>
 * begins with any other value, the radix is 10 (decimal).</li> </ul> <p>If the
 * first character cannot be converted to a number, <code>parseInt</code>
 * returns <code>NaN</code>.</p> <p>For arithmetic purposes, the
 * <code>NaN</code> value is not a number in any radix. You can call the
 * <code>isNaN</code> function to determine if the result of
 * <code>parseInt</code> is <code>NaN</code>. If <code>NaN</code> is passed on
 * to arithmetic operations, the operation results will also be
 * <code>NaN</code>.</p> <p>To convert number to its string literal in a
 * particular radix use <code>intValue.toString(radix)</code>.</p>
 *
 * @summary 
 * @param {string} string The value to parse. If the <code>string</code>
 * argument is not a string, then it is converted to a string (using the
 * <code>ToString</code> abstract operation). Leading whitespace in the string
 * argument is ignored.
 * @param {number=} radix An integer between 2 and 36 that represents the
 * <var>radix</var> (the base in mathematical numeral systems) of the above
 * mentioned string. Specify <code>10</code> for the decimal numeral system
 * commonly used by humans. <strong>Always specify this parameter</strong> to
 * eliminate reader confusion and to guarantee predictable behavior. Different
 * implementations produce different results when a radix is not specified,
 * usually defaulting the value to 10.
 * @return {number} <p>An integer number parsed from the given string. If the
 * first character cannot be converted to a number, <code>NaN</code> is
 * returned.</p>
 * @see parseFloat()
 * @see Number.parseFloat()
 * @see Number.parseInt()
 * @see isNaN()
 * @see Number.toString()
 * @see Object.valueOf
 */
function parseInt(string, radix) {}

/**
 * <p>Replaces each escape sequence in the encoded URI with the character that
 * it represents, but does not decode escape sequences that could not have been
 * introduced by <code>encodeURI</code>. The character “<code>#</code>” is not
 * decoded from escape sequences.</p>
 *
 * @summary 
 * @param {string} encodedURI A complete, encoded Uniform Resource Identifier.
 * @return {string} <p>A new string representing the unencoded version of the
 * given encoded Uniform Resource Identifier (URI).</p>
 * @see decodeURIComponent
 * @see encodeURI
 * @see encodeURIComponent
 */
function decodeURI(encodedURI) {}

/**
 * <p>Replaces each escape sequence in the encoded URI component with the
 * character that it represents.</p>
 *
 * @summary 
 * @param {string} encodedURI An encoded component of a Uniform Resource
 * Identifier.
 * @return {string} <p>A new string representing the decoded version of the
 * given encoded Uniform Resource Identifier (URI) component.</p>
 * @see decodeURI
 * @see encodeURI
 * @see encodeURIComponent
 */
function decodeURIComponent(encodedURI) {}

/**
 * <p>Assumes that the URI is a complete URI, so does not encode reserved
 * characters that have special meaning in the URI.</p>
 * <p><code>encodeURI</code> replaces all characters <strong>except</strong>
 * the following with the appropriate UTF-8 escape sequences:</p> <table
 * class="standard-table"> <tbody> <tr> <td class="header">Type</td> <td
 * class="header">Includes</td> </tr> <tr> <td>Reserved characters</td>
 * <td><code>;</code> <code>,</code> <code>/</code> <code>?</code>
 * <code>:</code> <code>@</code> <code>&amp;</code> <code>=</code>
 * <code>+</code> <code>$</code></td> </tr> <tr> <td>Unescaped characters</td>
 * <td>alphabetic, decimal digits, <code>-</code> <code>_</code> <code>.</code>
 * <code>!</code> <code>~</code> <code>*</code> <code>'</code> <code>(</code>
 * <code>)</code></td> </tr> <tr> <td>Number sign</td> <td><code>#</code></td>
 * </tr> </tbody> </table> <p>Note that <code>encodeURI</code> by itself
 * <em>cannot</em> form proper HTTP GET and POST requests, such as for
 * XMLHTTPRequests, because "&amp;", "+", and "=" are not encoded, which are
 * treated as special characters in GET and POST requests.
 * <code>encodeURIComponent</code>, however, does encode these characters.</p>
 * <p>Note that an <code>URIError</code> will be thrown if one attempts to
 * encode a surrogate which is not part of a high-low pair, e.g.,</p> <pre
 * class="brush: js">// high-low pair ok
 * console.log(encodeURI('\uD800\uDFFF')); // lone high surrogate throws
 * "URIError: malformed URI sequence" console.log(encodeURI('\uD800')); // lone
 * low surrogate throws "URIError: malformed URI sequence"
 * console.log(encodeURI('\uDFFF')); </pre> <p>Also note that if one wishes to
 * follow the more recent RFC3986 for URLs, which makes square brackets
 * reserved (for IPv6) and thus not encoded when forming something which could
 * be part of a URL (such as a host), the following code snippet may help:</p>
 * <pre class="brush: js">function fixedEncodeURI(str) { return
 * encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']'); }</pre>
 *
 * @summary 
 * @param {string} URI A complete Uniform Resource Identifier.
 * @return {string} <p>A new string representing the provided string encoded
 * as a Uniform Resource Identifier (URI).</p>
 * @see decodeURI
 * @see encodeURIComponent
 * @see decodeURIComponent
 */
function encodeURI(URI) {}

/**
 * <p><code>encodeURIComponent</code> escapes all characters except the
 * following: alphabetic, decimal digits, <code>- _ . ! ~ ' ( )</code></p>
 * <p>Note that an <code>URIError</code> will be thrown if one attempts to
 * encode a surrogate which is not part of a high-low pair, e.g.,</p> <pre
 * class="brush: js">// high-low pair ok
 * console.log(encodeURIComponent('\uD800\uDFFF')); // lone high surrogate
 * throws "URIError: malformed URI sequence"
 * console.log(encodeURIComponent('\uD800')); // lone low surrogate throws
 * "URIError: malformed URI sequence"
 * console.log(encodeURIComponent('\uDFFF')); </pre> <p>To avoid unexpected
 * requests to the server, you should call <code>encodeURIComponent</code> on
 * any user-entered parameters that will be passed as part of a URI. For
 * example, a user could type "<code>Thyme &amp;time=again</code>" for a
 * variable <code>comment</code>. Not using <code>encodeURIComponent</code> on
 * this variable will give <code>comment=Thyme%20&amp;time=again</code>. Note
 * that the ampersand and the equal sign mark a new key and value pair. So
 * instead of having a POST <code>comment</code> key equal to "<code>Thyme
 * &amp;time=again</code>", you have two POST keys, one equal to "<code>Thyme
 * </code>" and another (<code>time</code>) equal to <code>again</code>.</p>
 * <p>For <code>application/x-www-form-urlencoded</code>, spaces are to be
 * replaced by '+', so one may wish to follow a <code>encodeURIComponent</code>
 * replacement with an additional replacement of "%20" with "+".</p> <p>To be
 * more stringent in adhering to RFC 3986 (which reserves !, ', (, ), and *),
 * even though these characters have no formalized URI delimiting uses, the
 * following can be safely used:</p> <pre class="brush: js">function
 * fixedEncodeURIComponent(str) { return
 * encodeURIComponent(str).replace(/[!'()*]/g, function(c) { return '%' +
 * c.charCodeAt(0).toString(16); }); } </pre>
 *
 * @summary 
 * @param {string} str String. A component of a URI.
 * @return {string} <p>A new string representing the provided string encoded
 * as a Uniform Resource Identifier (URI) component.</p>
 * @see decodeURI
 * @see encodeURI
 * @see decodeURIComponent
 */
function encodeURIComponent(str) {}

/**
 * <p>The <code>escape</code> function is a property of the <em>global
 * object</em>. Special characters are encoded with the exception of:
 * @*_+-./</p> <p>The hexadecimal form for characters, whose code unit value is
 * 0xFF or less, is a two-digit escape sequence: %xx. For characters with a
 * greater code unit, the four-digit format %<strong>u</strong>xxxx is
 * used.</p>
 *
 * @summary 
 * @deprecated Use {@linkcode encodeURI} or {@linkcode encodeURIComponent}
 * instead.
 * @param {string} str A string to be encoded.
 * @return {string} <p>A new string in which certain characters have been
 * escaped.</p>
 * @see encodeURI
 * @see encodeURIComponent
 */
function escape(str) {}

/**
 * <p>The <code>unescape</code> function is a property of the <em>global
 * object</em>.</p>
 *
 * @summary 
 * @deprecated Use {@linkcode encodeURI} or {@linkcode encodeURIComponent}
 * instead.
 * @param {string} str A string to be decoded.
 * @return {string} <p>A new string in which certain characters have been
 * unescaped.</p>
 * @see decodeURI
 * @see decodeURIComponent
 */
function unescape(str) {}

/**
 * <p>The <code>Object</code> constructor creates an object wrapper for the
 * given value. If the value is <code>null</code> or <code>undefined</code>, it
 * will create and return an empty object, otherwise, it will return an object
 * of a Type that corresponds to the given value. If the value is an object
 * already, it will return the value.</p> <p>When called in a non-constructor
 * context, <code>Object</code> behaves identically to <code>new
 * Object()</code>.</p> <p>See also the object initializer / literal
 * syntax.</p>
 *
 * @summary 
 * @constructor
 * @param {*} value Any value.
 */
function Object(value) {}

/**
 * <p>Nearly all objects in JavaScript are instances of <code>Object</code>; a
 * typical object inherits properties (including methods) from
 * <code>Object.prototype</code>, although these properties may be shadowed
 * (a.k.a. overridden). However, an <code>Object</code> may be deliberately
 * created for which this is not true (e.g. by
 * <code>Object.create(null)</code>), or it may be altered so that this is no
 * longer true (e.g. with <code>Object.setPrototypeOf</code>).</p> <p>Changes
 * to the <code>Object</code> prototype object are seen by <strong>all</strong>
 * objects through prototype chaining, unless the properties and methods
 * subject to those changes are overridden further along the prototype chain.
 * This provides a very powerful although potentially dangerous mechanism to
 * override or extend object behavior.</p>
 *
 * @summary 
 * @type {Object}
 */
Object.prototype = null;

/**
 * <p>All objects will have a <code>constructor</code> property. Objects
 * created without the explicit use of a constructor function (i.e. the object
 * and array literals) will have a <code>constructor</code> property that
 * points to the Fundamental Object constructor type for that object.</p> <pre
 * class="brush: js">var o = {}; o.constructor === Object; // true var o = new
 * Object; o.constructor === Object; //true var a = []; a.constructor ===
 * Array; // true var a = new Array; a.constructor === Array //true var n = new
 * Number(3); n.constructor === Number; // true </pre>
 *
 * @summary 
 * @type {Function}
 */
Object.prototype.constructor = null;

/**
 * <p>Every object descended from <code>Object</code> inherits the
 * <code>hasOwnProperty</code> method. This method can be used to determine
 * whether an object has the specified property as a direct property of that
 * object; unlike the <code>in</code> operator, this method does not check down
 * the object's prototype chain.</p>
 *
 * @summary 
 * @param {string} prop The <code>String</code> name or symbol of the property
 * to test.
 * @return {boolean} <p>A <code>Boolean</code> indicating whether or not the
 * object has the specified property.</p>
 * @see Object.getOwnPropertyNames()
 * @see for...in
 * @see in
 */
Object.prototype.hasOwnProperty = function (prop) {};

/**
 * <p>The <code>isPrototypeOf()</code> method allows you to check whether or
 * not an object exists within another object's prototype chain.</p>
 *
 * @summary 
 * @param {Object} object The object whose prototype chain will be searched.
 * @return {boolean} <p>A <code>Boolean</code> indicating whether the calling
 * object has the specified object in its prototype chain.</p>
 * @see instanceof
 * @see Object.getPrototypeOf()
 * @see Object.setPrototypeOf()
 * @see Object.prototype.__proto__
 */
Object.prototype.isPrototypeOf = function (object) {};

/**
 * <p>Every object has a <code>propertyIsEnumerable</code> method. This method
 * can determine whether the specified property in an object can be enumerated
 * by a <code>for...in</code> loop, with the exception of properties inherited
 * through the prototype chain. If the object does not have the specified
 * property, this method returns <code>false</code>.</p>
 *
 * @summary 
 * @param {string} prop The name of the property to test.
 * @return {boolean} <p>A <code>Boolean</code> indicating whether the
 * specified property is enumerable.</p>
 * @see for...in
 * @see Object.keys()
 * @see Object.defineProperty()
 */
Object.prototype.propertyIsEnumerable = function (prop) {};

/**
 * <p><code>Object</code>'s <code>toLocaleString</code> returns the result of
 * calling <code>toString()</code>.</p> <p>This function is provided to give
 * objects a generic <code>toLocaleString</code> method, even though not all
 * may use it. See the list below.</p> <h3
 * id="Objects_overriding_toLocaleString">Objects overriding
 * <code>toLocaleString</code></h3> <ul> <li><code>Array</code>:
 * <code>Array.prototype.toLocaleString()</code></li> <li><code>Number</code>:
 * <code>Number.prototype.toLocaleString()</code></li> <li><code>Date</code>:
 * <code>Date.prototype.toLocaleString()</code></li> </ul>
 *
 * @summary 
 * @return {string} <p>A string representing the object.</p>
 * @see Object.prototype.toString()
 */
Object.prototype.toLocaleString = function () {};

/**
 * <p>Every object has a <code>toString()</code> method that is automatically
 * called when the object is to be represented as a text value or when an
 * object is referred to in a manner in which a string is expected. By default,
 * the <code>toString()</code> method is inherited by every object descended
 * from <code>Object</code>. If this method is not overridden in a custom
 * object, <code>toString()</code> returns "[object <em>type</em>]", where
 * <code><em>type</em></code> is the object type. The following code
 * illustrates this:</p> <pre class="brush: js">var o = new Object();
 * o.toString(); // returns [object Object] </pre> <div class="note">
 * <p><strong>Note:</strong> Starting in JavaScript 1.8.5
 * <code>toString()</code> called on <code>null</code> returns <code>[object
 * <em>Null</em>]</code>, and <code>undefined</code> returns <code>[object
 * <em>Undefined</em>]</code>, as defined in the 5th Edition of ECMAScript and
 * a subsequent Errata. See Using_toString()_to_detect_object_class.</p> </div>
 *
 * @summary 
 * @return {string} <p>A string representing the object.</p>
 * @see Object.prototype.toSource()
 * @see Object.prototype.valueOf()
 * @see Number.prototype.toString()
 */
Object.prototype.toString = function () {};

/**
 * <p>JavaScript calls the <code>valueOf</code> method to convert an object to
 * a primitive value. You rarely need to invoke the <code>valueOf</code> method
 * yourself; JavaScript automatically invokes it when encountering an object
 * where a primitive value is expected.</p> <p>By default, the
 * <code>valueOf</code> method is inherited by every object descended from
 * <code>Object</code>. Every built-in core object overrides this method to
 * return an appropriate value. If an object has no primitive value,
 * <code>valueOf</code> returns the object itself.</p> <p>You can use
 * <code>valueOf</code> within your own code to convert a built-in object into
 * a primitive value. When you create a custom object, you can override
 * <code>Object.prototype.valueOf()</code> to call a custom method instead of
 * the default <code>Object</code> method.</p> <h3
 * id="Overriding_valueOf_for_custom_objects">Overriding <code>valueOf</code>
 * for custom objects</h3> <p>You can create a function to be called in place
 * of the default <code>valueOf</code> method. Your function must take no
 * arguments.</p> <p>Suppose you have an object type <code>myNumberType</code>
 * and you want to create a <code>valueOf</code> method for it. The following
 * code assigns a user-defined function to the object's <code>valueOf</code>
 * method:</p> <pre class="brush: js">myNumberType.prototype.valueOf =
 * function() { return customPrimitiveValue; };</pre> <p>With the preceding
 * code in place, any time an object of type <code>myNumberType</code> is used
 * in a context where it is to be represented as a primitive value, JavaScript
 * automatically calls the function defined in the preceding code.</p> <p>An
 * object's <code>valueOf</code> method is usually invoked by JavaScript, but
 * you can invoke it yourself as follows:</p> <pre class="brush:
 * js">myNumber.valueOf()</pre> <div class="note"> <p><strong>Note:</strong>
 * Objects in string contexts convert via the <code>toString()</code> method,
 * which is different from <code>String</code> objects converting to string
 * primitives using <code>valueOf</code>. All objects have a string conversion,
 * if only "<code>[object <em>type</em>]</code>". But many objects do not
 * convert to number, boolean, or function.</p> </div>
 *
 * @summary 
 * @return {(boolean|number|string|Object)} <p>The primitive value of the
 * specified object.</p>
 * @see Object.prototype.toString()
 * @see parseInt()
 */
Object.prototype.valueOf = function () {};

/**
 * <p><code>Function</code> objects created with the <code>Function</code>
 * constructor are parsed when the function is created. This is less efficient
 * than declaring a function with a function expression or function statement
 * and calling it within your code, because such functions are parsed with the
 * rest of the code.</p> <p>All arguments passed to the function are treated as
 * the names of the identifiers of the parameters in the function to be
 * created, in the order in which they are passed.</p> <p>Invoking the
 * <code>Function</code> constructor as a function (without using the
 * <code>new</code> operator) has the same effect as invoking it as a
 * constructor.</p>
 *
 * @summary 
 * @constructor
 * @extends Object
 * @param {...string} arg1_argN Names to be used by the function as formal
 * argument names. Each must be a string that corresponds to a valid JavaScript
 * identifier or a list of such strings separated with a comma; for example
 * "<code>x</code>", "<code>theValue</code>", or "<code>a,b</code>".
 * @param {string} functionBody A string containing the JavaScript statements
 * comprising the function definition.
 * @see Functions and function scope
 * @see Function
 * @see function statement
 * @see function expression
 * @see function* statement
 * @see function* expression
 * @see GeneratorFunction
 */
function Function(arg1_argN, functionBody) {}

/**
 * <p><code>Function</code> objects inherit from
 * <code>Function.prototype</code>. <code>Function.prototype</code> cannot be
 * modified.</p>
 *
 * @summary 
 * @type {Object}
 * @see Function
 */
Function.prototype = null;

/**
 * <p>The syntax <code><em>function</em>.arguments</code> is deprecated. The
 * recommended way to access the <code>arguments</code> object available within
 * functions is simply to refer to the variable <code>arguments</code>.</p>
 * <p>In the case of recursion, i.e. if function <code>f</code> appears several
 * times on the call stack, the value of <code>f.arguments</code> represents
 * the arguments corresponding to the most recent invocation of the
 * function.</p> <p>The value of the arguments property is normally null if
 * there is no outstanding invocation of the function in progress (that is, the
 * function has been called but has not yet returned.</p>
 *
 * @summary 
 * @deprecated Use the {@linkcode arguments} local variable instead.
 * @type Object
 * @see arguments
 */
Function.prototype.arguments = null;

/**
 * <p><code>length</code> is a property of a function object, and indicates how
 * many arguments the function expects, i.e. the number of formal parameters.
 * This number excludes the rest parameter and only includes parameters before
 * the first one with a default value. By contrast,
 * <code>arguments.length</code> is local to a function and provides the number
 * of arguments actually passed to the function.</p> <h3
 * id="Data_property_of_the_Function_constructor">Data property of the
 * <code>Function</code> constructor</h3> <p>The <code>Function</code>
 * constructor is itself a <code>Function</code> object. Its
 * <code>length</code> data property has a value of 1. The property attributes
 * are: Writable: <code>false</code>, Enumerable: <code>false</code>,
 * Configurable: <code>true</code>.</p> <h3
 * id="Property_of_the_Function_prototype_object">Property of the
 * <code>Function</code> prototype object</h3> <p>The length property of the
 * <code>Function</code> prototype object has a value of 0.</p>
 *
 * @summary 
 * @type {number}
 * @see Function
 */
Function.prototype.length = null;

/**
 * <p>You can assign a different <code>this</code> object when calling an
 * existing function. <code>this</code> refers to the current object, the
 * calling object. With <code>apply</code>, you can write a method once and
 * then inherit it in another object, without having to rewrite the method for
 * the new object.</p> <p><code>apply</code> is very similar to
 * <code>call()</code>, except for the type of arguments it supports. You can
 * use an arguments array instead of a named set of parameters. With
 * <code>apply</code>, you can use an array literal, for example,
 * <code><em>fun</em>.apply(this, ['eat', 'bananas'])</code>, or an
 * <code>Array</code> object, for example, <code><em>fun</em>.apply(this, new
 * Array('eat', 'bananas'))</code>.</p> <p>You can also use
 * <code>arguments</code> for the <code>argsArray</code> parameter.
 * <code>arguments</code> is a local variable of a function. It can be used for
 * all unspecified arguments of the called object. Thus, you do not have to
 * know the arguments of the called object when you use the <code>apply</code>
 * method. You can use <code>arguments</code> to pass all the arguments to the
 * called object. The called object is then responsible for handling the
 * arguments.</p> <p>Since ECMAScript 5th Edition you can also use any kind of
 * object which is array-like, so in practice this means it's going to have a
 * property <code>length</code> and integer properties in the range
 * <code>(0...length-1)</code>. As an example you can now use a
 * <code>NodeList</code> or a custom object like <code>{ 'length': 2, '0':
 * 'eat', '1': 'bananas' }</code>.</p> <div class="note"> <p>Most browsers,
 * including Chrome 14 and Internet Explorer 9, still do not accept array-like
 * objects and will throw an exception.</p> </div>
 *
 * @summary 
 * @param {(null|Object)} thisArg The value of <code>this</code> provided for
 * the call to <em><code>fun</code></em>. Note that <code>this</code> may not
 * be the actual value seen by the method: if the method is a function in
 * non-strict mode code, <code>null</code> and <code>undefined</code> will be
 * replaced with the global object, and primitive values will be boxed.
 * @param {Array<*>=} argsArray An array-like object, specifying the arguments
 * with which <em><code>fun</code></em> should be called, or <code>null</code>
 * or <code>undefined</code> if no arguments should be provided to the
 * function. Starting with ECMAScript 5 these arguments can be a generic
 * array-like object instead of an array. See below for browser compatibility
 * information.
 * @return {*} <p>The result of calling the function with the specified
 * <code><strong>this</strong></code> value and arguments.</p>
 * @see arguments
 * @see Function.prototype.bind()
 * @see Function.prototype.call()
 * @see Reflect.apply()
 */
Function.prototype.apply = function (thisArg, argsArray) {};

/**
 * <p>A different <code>this</code> object can be assigned when calling an
 * existing function. <code>this</code> refers to the current object, the
 * calling object. With <code>call</code>, you can write a method once and then
 * inherit it in another object, without having to rewrite the method for the
 * new object.</p>
 *
 * @summary 
 * @param {(null|Object)} thisArg The value of <code>this</code> provided for
 * the call to <em><code>fun</code></em>. Note that <code>this</code> may not
 * be the actual value seen by the method: if the method is a function in
 * non-strict mode code, <code>null</code> and <code>undefined</code> will be
 * replaced with the global object and primitive values will be converted to
 * objects.
 * @param {...*} arg1_ The value of <code>this</code> provided for the call to
 * <em><code>fun</code></em>. Note that <code>this</code> may not be the actual
 * value seen by the method: if the method is a function in non-strict mode
 * code, <code>null</code> and <code>undefined</code> will be replaced with the
 * global object and primitive values will be converted to objects. Arguments
 * for the object.
 * @return {*} <p>The result of calling the function with the specified
 * <code><strong>this</strong></code> value and arguments.</p>
 * @see Function.prototype.bind()
 * @see Function.prototype.apply()
 */
Function.prototype.call = function (thisArg, arg1_) {};

/**
 * <p>The <code>Function</code> object overrides the <code>toString</code>
 * method inherited from <code>Object</code>; it does not inherit
 * <code>Object.prototype.toString</code>. For <code>Function</code> objects,
 * the <code>toString</code> method returns a string representation of the
 * object in the form of a function declaration. That is, <code>toString</code>
 * decompiles the function, and the string returned includes the
 * <code>function</code> keyword, the argument list, curly braces, and the
 * source of the function body.</p> <p>JavaScript calls the
 * <code>toString</code> method automatically when a <code>Function</code> is
 * to be represented as a text value, e.g. when a function is concatenated with
 * a string.</p> <p>The <code>toString()</code> method will throw a
 * <code>TypeError</code> exception ("Function.prototype.toString called on
 * incompatible object"), if its <code>this</code> value object is not a
 * <code>Function</code> object. It will also throw for <code>Proxy</code>
 * objects, for example.</p> <pre class="brush: js
 * example-bad">Function.prototype.toString.call('foo'); // TypeError var proxy
 * = new Proxy(function() {}, {}); Function.prototype.toString.call(proxy); //
 * TypeError </pre>
 *
 * @summary 
 * @return {string} <p>A string representing the source code of the
 * function.</p>
 * @see Object.prototype.toString()
 */
Function.prototype.toString = function () {};

/**
 * <p>The value passed as the first parameter is converted to a boolean value,
 * if necessary. If the value is omitted or is <code>0</code>, <code>-0</code>,
 * <code>null</code>, <code>false</code>, <code>NaN</code>,
 * <code>undefined</code>, or the empty string (<code>""</code>), the object
 * has an initial value of <code>false</code>. If the DOM object
 * <code>document.all</code> is passed as a parameter, the new boolean object
 * also has an initial value of <code>false</code>. All other values, including
 * any object or the string <code>"false"</code>, create an object with an
 * initial value of <code>true</code>.</p> <p>Do not confuse the primitive
 * <code>Boolean</code> values <code>true</code> and <code>false</code> with
 * the <code>true</code> and <code>false</code> values of the
 * <code>Boolean</code> object.</p> <p>Any object of which the value is not
 * <code>undefined</code> or <code>null</code>, including a
 * <code>Boolean</code> object whose value is <code>false</code>, evaluates to
 * <code>true</code> when passed to a conditional statement. For example, the
 * condition in the following <code>if</code> statement evaluates to
 * <code>true</code>:</p> <pre class="brush: js">var x = new Boolean('false');
 * if (x) { // this code is executed } </pre> <p>This behavior does not apply
 * to <code>Boolean</code> primitives. For example, the condition in the
 * following <code>if</code> statement evaluates to <code>false</code>:</p>
 * <pre class="brush: js">var x = false; if (x) { // this code is not executed
 * } </pre> <p>Do not use a <code>Boolean</code> object to convert a
 * non-boolean value to a boolean value. Instead, use <code>Boolean</code> as a
 * function to perform this task:</p> <pre class="brush: js">var x =
 * Boolean(expression); // preferred var x = new Boolean(expression); // don't
 * use </pre> <p>If you specify any object, including a <code>Boolean</code>
 * object whose value is <code>false</code>, as the initial value of a
 * <code>Boolean</code> object, the new <code>Boolean</code> object has a value
 * of <code>true</code>.</p> <pre class="brush: js">var myFalse = new
 * Boolean(false); // initial value of false var g = new Boolean(myFalse); //
 * initial value of true var myString = new String('Hello'); // string object
 * var s = new Boolean(myString); // initial value of true </pre> <p>Do not use
 * a <code>Boolean</code> object in place of a <code>Boolean</code>
 * primitive.</p>
 *
 * @summary 
 * @constructor
 * @extends Object
 * @param {boolean} value Optional. The initial value of the
 * <code>Boolean</code> object.
 * @see Boolean.prototype
 */
function Boolean(value) {}

/**
 * <p><code>Boolean</code> instances inherit from
 * <code>Boolean.prototype</code>. You can use the constructor's prototype
 * object to add properties or methods to all <code>Boolean</code>
 * instances.</p>
 *
 * @summary 
 * @type {Object}
 */
Boolean.prototype = null;

/**
 * <p>The <code>Boolean</code> object overrides the <code>toString</code>
 * method of the <code>Object</code> object; it does not inherit
 * <code>Object.prototype.toString()</code>. For Boolean objects, the
 * <code>toString</code> method returns a string representation of the
 * object.</p> <p>JavaScript calls the <code>toString</code> method
 * automatically when a <code>Boolean</code> is to be represented as a text
 * value or when a <code>Boolean</code> is referred to in a string
 * concatenation.</p> <p>For <code>Boolean</code> objects and values, the
 * built-in <code>toString</code> method returns the string "<code>true</code>"
 * or "<code>false</code>" depending on the value of the boolean object.</p>
 *
 * @summary 
 * @return {string} <p>A string representing the specified
 * <code>Boolean</code> object.</p>
 * @see Object.prototype.toString()
 */
Boolean.prototype.toString = function () {};

/**
 * <p>The <code>valueOf</code> method of <code>Boolean</code> returns the
 * primitive value of a <code>Boolean</code> object or literal
 * <code>Boolean</code> as a Boolean data type.</p> <p>This method is usually
 * called internally by JavaScript and not explicitly in code.</p>
 *
 * @summary 
 * @return {boolean} <p>The primitive value of the given <code>Boolean</code>
 * object</p>
 * @see Object.prototype.valueOf()
 */
Boolean.prototype.valueOf = function () {};

/**
 * <p>Runtime errors result in new <code>Error</code> objects being created and
 * thrown.</p> <p>This page documents the use of the <code>Error</code> object
 * itself and its use as a constructor function. For a list of properties and
 * methods inherited by <code>Error</code> instances, see
 * <code>Error.prototype</code>.</p> <h3 id="Error_types">Error types</h3>
 * <p>Besides the generic <code>Error</code> constructor, there are six other
 * core error constructors in JavaScript. For client-side exceptions, see
 * Exception Handling Statements.</p> <dl> <dt><code>EvalError</code></dt>
 * <dd>Creates an instance representing an error that occurs regarding the
 * global function <code>eval()</code>.</dd> <dt><code>InternalError</code>
 * <span title="This API has not been standardized."><i
 * class="icon-warning-sign"> </i></span></dt> <dd>Creates an instance
 * representing an error that occurs when an internal error in the JavaScript
 * engine is thrown. E.g. "too much recursion".</dd>
 * <dt><code>RangeError</code></dt> <dd>Creates an instance representing an
 * error that occurs when a numeric variable or parameter is outside of its
 * valid range.</dd> <dt><code>ReferenceError</code></dt> <dd>Creates an
 * instance representing an error that occurs when de-referencing an invalid
 * reference.</dd> <dt><code>SyntaxError</code></dt> <dd>Creates an instance
 * representing a syntax error that occurs while parsing code in
 * <code>eval()</code>.</dd> <dt><code>TypeError</code></dt> <dd>Creates an
 * instance representing an error that occurs when a variable or parameter is
 * not of a valid type.</dd> <dt><code>URIError</code></dt> <dd>Creates an
 * instance representing an error that occurs when <code>encodeURI()</code> or
 * <code>decodeURI()</code> are passed invalid parameters.</dd> </dl>
 *
 * @summary 
 * @constructor
 * @extends Object
 * @param {string=} message Optional. Human-readable description of the error.
 * @param {string=} fileName Optional. The value for the <code>fileName</code>
 * property on the created <code>Error</code> object. Defaults to the name of
 * the file containing the code that called the <code>Error()</code>
 * constructor.
 * @param {number=} lineNumber Optional. The value for the
 * <code>lineNumber</code> property on the created <code>Error</code> object.
 * Defaults to the line number containing the <code>Error()</code> constructor
 * invocation.
 * @see Error.prototype
 * @see throw
 * @see try...catch
 */
function Error(message, fileName, lineNumber) {}

/**
 * <p>All <code>Error</code> instances and instances of non-generic errors
 * inherit from <code>Error.prototype</code>. As with all constructor
 * functions, you can use the prototype of the constructor to add properties or
 * methods to all instances created with that constructor.</p>
 *
 * @summary 
 * @type {Object}
 * @see Error
 * @see Object.prototype
 */
Error.prototype = null;

/**
 * <p>This property contains a brief description of the error if one is
 * available or has been set. SpiderMonkey makes extensive use of the
 * <code>message</code> property for exceptions. The <code>message</code>
 * property combined with the <code>name</code> property is used by the
 * <code>Error.prototype.toString()</code> method to create a string
 * representation of the Error.</p> <p>By default, the <code>message</code>
 * property is an empty string, but this behavior can be overridden for an
 * instance by specifying a message as the first argument to the <code>Error
 * constructor</code>.</p>
 *
 * @summary 
 * @type {string}
 * @see Error.prototype.name
 * @see Error.prototype.toString()
 */
Error.prototype.message = null;

/**
 * <p>By default, <code>Error</code> instances are given the name "Error". The
 * <code>name</code> property, in addition to the <code>message</code>
 * property, is used by the <code>Error.prototype.toString()</code> method to
 * create a string representation of the error.</p>
 *
 * @summary 
 * @type {string}
 * @see Error.prototype.message
 * @see Error.prototype.toString()
 */
Error.prototype.name = null;

/**
 * <p>The <code>Error</code> object overrides the
 * <code>Object.prototype.toString()</code> method inherited by all objects.
 * Its semantics are as follows (assuming <code>Object</code> and
 * <code>String</code> have their original values):</p> <pre class="brush:
 * js">Error.prototype.toString = function() { 'use strict'; var obj =
 * Object(this); if (obj !== this) { throw new TypeError(); } var name =
 * this.name; name = (name === undefined) ? 'Error' : String(name); var msg =
 * this.message; msg = (msg === undefined) ? '' : String(msg); if (name === '')
 * { return msg; } if (msg === '') { return name; } return name + ': ' + msg;
 * }; </pre>
 *
 * @summary 
 * @return {string} <p>A string representing the specified <code>Error</code>
 * object.</p>
 * @see Error.prototype.toSource()
 */
Error.prototype.toString = function () {};

/**
 * 
 *
 * @summary 
 * @constructor
 * @extends Error
 * @param {string=} message Optional. Human-readable description of the error
 * @param {string=} fileName Optional. The name of the file containing the code
 * that caused the exception
 * @param {number=} lineNumber Optional. The line number of the code that
 * caused the exception
 * @see Error
 * @see EvalError.prototype
 * @see eval()
 */
function EvalError(message, fileName, lineNumber) {}

/**
 * <p>A <code>RangeError</code> is thrown when trying to pass a number as an
 * argument to a function that does not allow a range that includes that
 * number. This can be encountered when attempting to create an array of an
 * illegal length with the <code>Array</code> constructor, or when passing bad
 * values to the numeric methods <code>Number.toExponential()</code>,
 * <code>Number.toFixed()</code> or <code>Number.toPrecision()</code>.</p>
 *
 * @summary 
 * @constructor
 * @extends Error
 * @param {string=} message Optional. Human-readable description of the error
 * @param {string=} fileName Optional. The name of the file containing the code
 * that caused the exception
 * @param {number=} lineNumber Optional. The line number of the code that
 * caused the exception
 * @see Error
 * @see RangeError.prototype
 * @see Array
 * @see Number.toExponential()
 * @see Number.toFixed()
 * @see Number.toPrecision()
 */
function RangeError(message, fileName, lineNumber) {}

/**
 * <p>A <code>ReferenceError</code> is thrown when trying to dereference a
 * variable that has not been declared.</p>
 *
 * @summary 
 * @constructor
 * @extends Error
 * @param {string=} message Optional. Human-readable description of the error
 * @param {string=} fileName Optional. The name of the file containing the code
 * that caused the exception
 * @param {number=} lineNumber Optional. The line number of the code that
 * caused the exception
 * @see Error
 * @see ReferenceError.prototype
 */
function ReferenceError(message, fileName, lineNumber) {}

/**
 * <p>A <code>SyntaxError</code> is thrown when the JavaScript engine
 * encounters tokens or token order that does not conform to the syntax of the
 * language when parsing code.</p>
 *
 * @summary 
 * @constructor
 * @extends Error
 * @param {string=} message Optional. Human-readable description of the error
 * @param {string=} fileName Optional. The name of the file containing the code
 * that caused the exception
 * @param {number=} lineNumber Optional. The line number of the code that
 * caused the exception
 * @see Error
 * @see SyntaxError.prototype
 */
function SyntaxError(message, fileName, lineNumber) {}

/**
 * <p>A <code>TypeError</code> is thrown when an operand or argument passed to
 * a function is incompatible with the type expected by that operator or
 * function.</p>
 *
 * @summary 
 * @constructor
 * @extends Error
 * @param {string=} message Optional. Human-readable description of the error
 * @param {string=} fileName Optional. The name of the file containing the code
 * that caused the exception
 * @param {number=} lineNumber Optional. The line number of the code that
 * caused the exception
 * @see Error
 * @see TypeError.prototype
 */
function TypeError(message, fileName, lineNumber) {}

/**
 * <p>A <code>URIError</code> is thrown when the global URI handling functions
 * are passed a malformed URI.</p>
 *
 * @summary 
 * @constructor
 * @extends Error
 * @param {string=} message Optional. Human-readable description of the error
 * @param {string=} fileName Optional. The name of the file containing the code
 * that caused the exception
 * @param {number=} lineNumber Optional. The line number of the code that
 * caused the exception
 * @see Error
 * @see URIError.prototype
 * @see decodeURI()
 * @see decodeURIComponent()
 * @see encodeURI()
 * @see encodeURIComponent()
 */
function URIError(message, fileName, lineNumber) {}

/**
 * <p>The primary uses for the <code>Number</code> object are:</p> <ul> <li>If
 * the argument cannot be converted into a number, it returns
 * <code>NaN</code>.</li> <li>In a non-constructor context (i.e., without the
 * <code>new</code> operator), <code>Number</code> can be used to perform a
 * type conversion.</li> </ul>
 *
 * @summary 
 * @constructor
 * @extends Object
 * @param {number} value The numeric value of the object being created.
 * @see NaN
 * @see Math
 */
function Number(value) {}

/**
 * <p>The <code>MAX_VALUE</code> property has a value of approximately
 * <code>1.79E+308</code>. Values larger than <code>MAX_VALUE</code> are
 * represented as "<code>Infinity</code>".</p> <p>Because
 * <code>MAX_VALUE</code> is a static property of <code>Number</code>, you
 * always use it as <code>Number.MAX_VALUE</code>, rather than as a property of
 * a <code>Number</code> object you created. Calling it on the object you
 * created(rather than <code>Number</code> itself), will result in
 * <strong>undefined</strong> value.</p>
 *
 * @summary 
 * @type {number}
 * @see Number.MIN_VALUE
 * @see Number
 */
Number.MAX_VALUE = null;

/**
 * <p>The <code>MIN_VALUE</code> property is the number closest to 0, not the
 * most negative number, that JavaScript can represent.</p>
 * <p><code>MIN_VALUE</code> has a value of approximately <code>5e-324</code>.
 * Values smaller than <code>MIN_VALUE</code> ("underflow values") are
 * converted to 0.</p> <p>Because <code>MIN_VALUE</code> is a static property
 * of <code>Number</code>, you always use it as <code>Number.MIN_VALUE</code>,
 * rather than as a property of a <code>Number</code> object you created.</p>
 *
 * @summary 
 * @type {number}
 * @see Number.MAX_VALUE
 */
Number.MIN_VALUE = null;

/**
 * <p>The value of <code>Number.NEGATIVE_INFINITY</code> is the same as the
 * negative value of the global object's <code>Infinity</code> property.</p>
 * <p>This value behaves slightly differently than mathematical infinity:</p>
 * <ul> <li>Any positive value, including <code>POSITIVE_INFINITY</code>,
 * multiplied by <code>NEGATIVE_INFINITY</code> is
 * <code>NEGATIVE_INFINITY</code>.</li> <li>Any negative value, including
 * <code>NEGATIVE_INFINITY</code>, multiplied by <code>NEGATIVE_INFINITY</code>
 * is <code>POSITIVE_INFINITY</code>.</li> <li>Zero multiplied by
 * <code>NEGATIVE_INFINITY</code> is <code>NaN</code>.</li>
 * <li><code>NaN</code> multiplied by <code>NEGATIVE_INFINITY</code> is
 * <code>NaN</code>.</li> <li><code>NEGATIVE_INFINITY</code>, divided by any
 * negative value except <code>NEGATIVE_INFINITY</code>, is
 * <code>POSITIVE_INFINITY</code>.</li> <li><code>NEGATIVE_INFINITY</code>,
 * divided by any positive value except <code>POSITIVE_INFINITY</code>, is
 * <code>NEGATIVE_INFINITY</code>.</li> <li><code>NEGATIVE_INFINITY</code>,
 * divided by either <code>NEGATIVE_INFINITY</code> or
 * <code>POSITIVE_INFINITY</code>, is <code>NaN</code>.</li> <li>Any number
 * divided by <code>NEGATIVE_INFINITY</code> is zero.</li> </ul> <p>You might
 * use the <code>Number.NEGATIVE_INFINITY</code> property to indicate an error
 * condition that returns a finite number in case of success. Note, however,
 * that <code>isFinite</code> would be more appropriate in such a case.</p>
 *
 * @summary 
 * @type {number}
 * @see Number.POSITIVE_INFINITY
 * @see Number.isFinite()
 * @see Infinity
 * @see isFinite()
 */
Number.NEGATIVE_INFINITY = null;

/**
 * 
 *
 * @summary 
 * @type {number}
 * @see NaN
 * @see Number
 */
Number.NaN = null;

/**
 * <p>The value of <code>Number.POSITIVE_INFINITY</code> is the same as the
 * value of the global object's <code>Infinity</code> property.</p> <p>This
 * value behaves slightly differently than mathematical infinity:</p> <ul>
 * <li>Any positive value, including <code>POSITIVE_INFINITY</code>, multiplied
 * by <code>POSITIVE_INFINITY</code> is <code>POSITIVE_INFINITY</code>.</li>
 * <li>Any negative value, including <code>NEGATIVE_INFINITY</code>, multiplied
 * by <code>POSITIVE_INFINITY</code> is <code>NEGATIVE_INFINITY</code>.</li>
 * <li>Zero multiplied by <code>POSITIVE_INFINITY</code> is
 * <code>NaN</code>.</li> <li><code>NaN</code> multiplied by
 * <code>POSITIVE_INFINITY</code> is <code>NaN</code>.</li>
 * <li><code>POSITIVE_INFINITY</code>, divided by any negative value except
 * <code>NEGATIVE_INFINITY</code>, is <code>NEGATIVE_INFINITY</code>.</li>
 * <li><code>POSITIVE_INFINITY</code>, divided by any positive value except
 * <code>POSITIVE_INFINITY</code>, is <code>POSITIVE_INFINITY</code>.</li>
 * <li><code>POSITIVE_INFINITY</code>, divided by either
 * <code>NEGATIVE_INFINITY</code> or <code>POSITIVE_INFINITY</code>, is
 * <code>NaN</code>.</li> <li>Any number divided by
 * <code>POSITIVE_INFINITY</code> is Zero.</li> </ul> <p>You might use the
 * <code>Number.POSITIVE_INFINITY</code> property to indicate an error
 * condition that returns a finite number in case of success. Note, however,
 * that <code>isFinite</code> would be more appropriate in such a case.</p>
 *
 * @summary 
 * @type {number}
 * @see Number.NEGATIVE_INFINITY
 * @see Number.isFinite()
 * @see Infinity
 * @see isFinite()
 */
Number.POSITIVE_INFINITY = null;

/**
 * <p>All <code>Number</code> instances inherit from
 * <code>Number.prototype</code>. The prototype object of the
 * <code>Number</code> constructor can be modified to affect all
 * <code>Number</code> instances.</p>
 *
 * @summary 
 * @type {Object}
 * @see Number
 */
Number.prototype = null;

/**
 * <p>If the <code>fractionDigits</code> argument is omitted, the number of
 * digits after the decimal point defaults to the number of digits necessary to
 * represent the value uniquely.</p> <p>If you use the
 * <code>toExponential()</code> method for a numeric literal and the numeric
 * literal has no exponent and no decimal point, leave whitespace(s) before the
 * dot that precedes the method call to prevent the dot from being interpreted
 * as a decimal point.</p> <p>If a number has more digits than requested by the
 * <code>fractionDigits</code> parameter, the number is rounded to the nearest
 * number represented by <code>fractionDigits</code> digits. See the discussion
 * of rounding in the description of the <code>toFixed()</code> method, which
 * also applies to <code>toExponential()</code>.</p>
 *
 * @summary 
 * @param {number=} fractionDigits Optional. An integer specifying the number
 * of digits after the decimal point. Defaults to as many digits as necessary
 * to specify the number.
 * @return {string} <p>A string representing the given <code>Number</code>
 * object in exponential notation with one digit before the decimal point,
 * rounded to <code>fractionDigits</code> digits after the decimal point. </p>
 * @see Number.prototype.toFixed()
 * @see Number.prototype.toPrecision()
 * @see Number.prototype.toString()
 */
Number.prototype.toExponential = function (fractionDigits) {};

/**
 * <p><strong><code>toFixed()</code></strong> returns a string representation
 * of <code>numObj</code> that does not use exponential notation and has
 * exactly <code>digits</code> digits after the decimal place. The number is
 * rounded if necessary, and the fractional part is padded with zeros if
 * necessary so that it has the specified length. If <code>numObj</code> is
 * greater than <code>1e+21</code>, this method simply calls
 * <code>Number.prototype.toString()</code> and returns a string in exponential
 * notation.</p>
 *
 * @summary 
 * @param {number=} digits Optional. The number of digits to appear after the
 * decimal point; this may be a value between 0 and 20, inclusive, and
 * implementations may optionally support a larger range of values. If this
 * argument is omitted, it is treated as 0.
 * @return {string} <p>A string representing the given number using
 * fixed-point notation.</p>
 * @see Number.prototype.toExponential()
 * @see Number.prototype.toPrecision()
 * @see Number.prototype.toString()
 */
Number.prototype.toFixed = function (digits) {};

/**
 * 
 *
 * @summary 
 * @param {string=} locales <p>Optional. A string with a BCP 47 language tag,
 * or an array of such strings. For the general form and interpretation of the
 * <code>locales</code> argument, see the Intl page. The following Unicode
 * extension key is allowed:</p> <dl><dt><code>nu</code></dt> <dd>The numbering
 * system to be used. Possible values include: <code>"arab"</code>,
 * <code>"arabext"</code>, <code>"bali"</code>, <code>"beng"</code>,
 * <code>"deva"</code>, <code>"fullwide"</code>, <code>"gujr"</code>,
 * <code>"guru"</code>, <code>"hanidec"</code>, <code>"khmr"</code>,
 * <code>"knda"</code>, <code>"laoo"</code>, <code>"latn"</code>,
 * <code>"limb"</code>, <code>"mlym"</code>, <code>"mong"</code>,
 * <code>"mymr"</code>, <code>"orya"</code>, <code>"tamldec"</code>,
 * <code>"telu"</code>, <code>"thai"</code>, <code>"tibt"</code>.
 * @param {Object=} options <p>Optional. An object with some or all of the
 * following properties:</p> <dl><dt><code>localeMatcher</code></dt> <dd>The
 * locale matching algorithm to use. Possible values are <code>"lookup"</code>
 * and <code>"best fit"</code>; the default is <code>"best fit"</code>. For
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
 * <code>true</code>.</dd> </dl><p>The following properties fall into two
 * groups: <code>minimumIntegerDigits</code>,
 * <code>minimumFractionDigits</code>, and <code>maximumFractionDigits</code>
 * in one group, <code>minimumSignificantDigits</code> and
 * <code>maximumSignificantDigits</code> in the other. If at least one property
 * from the second group is defined, then the first group is ignored.</p>
 * <dl><dt><code>minimumIntegerDigits</code></dt> <dd>The minimum number of
 * integer digits to use. Possible values are from 1 to 21; the default is
 * 1.</dd> <dt><code>minimumFractionDigits</code></dt> <dd>The minimum number
 * of fraction digits to use. Possible values are from 0 to 20; the default for
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
 * @return {string} <p>A string with a language sensitive representation of
 * the given number.</p>
 * @see Number.prototype.toString()
 */
Number.prototype.toLocaleString = function (locales, options) {};

/**
 * 
 *
 * @summary 
 * @param {number=} precision Optional. An integer specifying the number of
 * significant digits.
 * @return {string} <p>A string representing a <code>Number</code> object in
 * fixed-point or exponential notation rounded to <code>precision</code>
 * significant digits. See the discussion of rounding in the description of the
 * <code>Number.prototype.toFixed()</code> method, which also applies to
 * <code>toPrecision()</code>.</p> <p>If the <code>precision</code> argument is
 * omitted, behaves as <code>Number.prototype.toString()</code>. If the
 * <code>precision</code> argument is a non-integer value, it is rounded to the
 * nearest integer.</p>
 * @see Number.prototype.toFixed()
 * @see Number.prototype.toExponential()
 * @see Number.prototype.toString()
 */
Number.prototype.toPrecision = function (precision) {};

/**
 * <p>The <code>Number</code> object overrides the <code>toString()</code>
 * method of the <code>Object</code> object; it does not inherit
 * <code>Object.prototype.toString()</code>. For <code>Number</code> objects,
 * the <code>toString()</code> method returns a string representation of the
 * object in the specified radix.</p> <p>The <code>toString()</code> method
 * parses its first argument, and attempts to return a string representation in
 * the specified radix (base). For radixes above 10, the letters of the
 * alphabet indicate numerals greater than 9. For example, for hexadecimal
 * numbers (base 16), <code>a</code> through <code>f</code> are used.</p> <p>If
 * the <code>radix</code> is not specified, the preferred radix is assumed to
 * be 10.</p> <p>If the <code>numObj</code> is negative, the sign is preserved.
 * This is the case even if the radix is 2; the string returned is the positive
 * binary representation of the <code>numObj</code> preceded by a
 * <code>-</code> sign, <strong>not</strong> the two's complement of the
 * <code>numObj</code>.</p> <p>If the <code>numObj</code> is not a whole
 * number, the 'dot' sign is used to separate the decimal places.</p>
 *
 * @summary 
 * @param {number} radix Optional. An integer between 2 and 36 specifying the
 * base to use for representing numeric values.
 * @return {string} <p>A string representing the specified <code>Number</code>
 * object.</p>
 * @see Number.prototype.toFixed()
 * @see Number.prototype.toExponential()
 * @see Number.prototype.toPrecision()
 */
Number.prototype.toString = function (radix) {};

/**
 * <p>This method is usually called internally by JavaScript and not explicitly
 * in web code.</p>
 *
 * @summary 
 * @return {number} <p>A number representing the primitive value of the
 * specified <code>Number</code> object.</p>
 * @see Number.prototype.toSource()
 */
Number.prototype.valueOf = function () {};

/**
 * <p>Unlike the other global objects, <code>Math</code> is not a constructor.
 * All properties and methods of <code>Math</code> are static. You refer to the
 * constant pi as <code>Math.PI</code> and you call the sine function as
 * <code>Math.sin(x)</code>, where <code>x</code> is the method's argument.
 * Constants are defined with the full precision of real numbers in
 * JavaScript.</p>
 *
 * @summary 
 * @type {Object}
 * @see Number
 */
var Math;

/**
 * <p>Because <code>E</code> is a static property of <code>Math</code>, you
 * always use it as <code>Math.E</code>, rather than as a property of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @type {number}
 * @see Math.exp()
 * @see Math.log()
 * @see Math.log1p()
 */
Math.E = null;

/**
 * <p>Because <code>LN10</code> is a static property of <code>Math</code>, you
 * always use it as <code>Math.LN10</code>, rather than as a property of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @type {number}
 * @see Math.exp()
 * @see Math.log()
 * @see Math.log10()
 */
Math.LN10 = null;

/**
 * <p>Because <code>LN2</code> is a static property of <code>Math</code>, you
 * always use it as <code>Math.LN2</code>, rather than as a property of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @type {number}
 * @see Math.exp()
 * @see Math.log()
 * @see Math.log2()
 */
Math.LN2 = null;

/**
 * <p>Because <code>LOG10E</code> is a static property of <code>Math</code>,
 * you always use it as <code>Math.LOG10E</code>, rather than as a property of
 * a <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @type {number}
 * @see Math.exp()
 * @see Math.log()
 * @see Math.log10()
 */
Math.LOG10E = null;

/**
 * <p>Because <code>LOG2E</code> is a static property of <code>Math</code>, you
 * always use it as <code>Math.LOG2E</code>, rather than as a property of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @type {number}
 * @see Math.exp()
 * @see Math.log()
 * @see Math.log2()
 */
Math.LOG2E = null;

/**
 * <p>Because <code>PI</code> is a static property of <code>Math</code>, you
 * always use it as <code>Math.PI</code>, rather than as a property of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @type {number}
 * @see Math
 */
Math.PI = null;

/**
 * <p>Because <code>SQRT1_2</code> is a static property of <code>Math</code>,
 * you always use it as <code>Math.SQRT1_2</code>, rather than as a property of
 * a <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @type {number}
 * @see Math.pow()
 * @see Math.sqrt()
 */
Math.SQRT1_2 = null;

/**
 * <p>Because <code>SQRT2</code> is a static property of <code>Math</code>, you
 * always use it as <code>Math.SQRT2</code>, rather than as a property of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @type {number}
 * @see Math.pow()
 * @see Math.sqrt()
 */
Math.SQRT2 = null;

/**
 * <p>Because <code>abs()</code> is a static method of <code>Math</code>, you
 * always use it as <code>Math.abs()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>The absolute value of the given number.</p>
 * @see Math.ceil()
 * @see Math.floor()
 * @see Math.round()
 * @see Math.sign()
 * @see Math.trunc()
 */
Math.abs = function (x) {};

/**
 * <p>The <code>Math.acos()</code> method returns a numeric value between 0 and
 * π radians for <code>x</code> between -1 and 1. If the value of
 * <code>x</code> is outside this range, it returns <code>NaN</code>.</p>
 * <p>Because <code>acos()</code> is a static method of <code>Math</code>, you
 * always use it as <code>Math.acos()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>The arccosine (in radians) of the given number if it's
 * between <strong>-1</strong> and <strong>1</strong>; otherwise,
 * <code>NaN</code>.</p>
 * @see Math.asin()
 * @see Math.atan()
 * @see Math.atan2()
 * @see Math.cos()
 * @see Math.sin()
 * @see Math.tan()
 */
Math.acos = function (x) {};

/**
 * <p>The <code>Math.asin()</code> method returns a numeric value between
 * <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation
 * encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> and
 * <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation
 * encoding="TeX">\frac{\pi}{2}</annotation></semantics></math> radians for
 * <code>x</code> between -1 and 1. If the value of <code>x</code> is outside
 * this range, it returns <code>NaN</code>.</p> <p>Because <code>asin()</code>
 * is a static method of <code>Math</code>, you always use it as
 * <code>Math.asin()</code>, rather than as a method of a <code>Math</code>
 * object you created (<code>Math</code> is not a constructor).</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>The arcsine (in radians) of the given number if it's
 * between <strong>-1</strong> and <strong>1</strong>; otherwise,
 * <code>NaN</code>.</p>
 * @see Math.acos()
 * @see Math.atan()
 * @see Math.atan2()
 * @see Math.cos()
 * @see Math.sin()
 * @see Math.tan()
 */
Math.asin = function (x) {};

/**
 * <p>The <code>Math.atan()</code> method returns a numeric value
 * between <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation
 * encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math>
 * and <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation
 * encoding="TeX">\frac{\pi}{2}</annotation></semantics></math> radians.</p>
 * <p>Because <code>atan()</code> is a static method of <code>Math</code>, you
 * always use it as <code>Math.atan()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>The arctangent (in radians) of the given number.</p>
 * @see Math.acos()
 * @see Math.asin()
 * @see Math.atan2()
 * @see Math.cos()
 * @see Math.sin()
 * @see Math.tan()
 */
Math.atan = function (x) {};

/**
 * <p>The <code>Math.atan2()</code> method returns a numeric value between -π
 * and π representing the angle theta of an <code>(x, y)</code> point. This is
 * the counterclockwise angle, measured in radians, between the positive X
 * axis, and the point <code>(x, y)</code>. Note that the arguments to this
 * function pass the y-coordinate first and the x-coordinate second.</p>
 * <p><img src="https://mdn.mozillademos.org/files/11557/atan2.png"
 * style="height: 300px; width: 300px;" alt="A simple diagram showing the angle
 * returned by atan2(y, x)"></p> <p><code>Math.atan2()</code> is passed
 * separate <code>x</code> and <code>y</code> arguments, and
 * <code>Math.atan()</code> is passed the ratio of those two arguments.</p>
 * <p>Because <code>atan2()</code> is a static method of <code>Math</code>, you
 * always use it as <code>Math.atan2()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @param {number} y First number.
 * @param {number} x Second number.
 * @return {number} <p>The arctangent of the quotient of the given
 * arguments.</p>
 * @see Math.acos()
 * @see Math.asin()
 * @see Math.atan()
 * @see Math.cos()
 * @see Math.sin()
 * @see Math.tan()
 */
Math.atan2 = function (y, x) {};

/**
 * <p>Because <code>ceil()</code> is a static method of <code>Math</code>, you
 * always use it as <code>Math.ceil()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>The smallest integer greater than or equal to the given
 * number.</p>
 * @see Math.abs()
 * @see Math.floor()
 * @see Math.round()
 * @see Math.sign()
 * @see Math.trunc()
 */
Math.ceil = function (x) {};

/**
 * <p>The <code>Math.cos()</code> method returns a numeric value between -1 and
 * 1, which represents the cosine of the angle.</p> <p>Because
 * <code>cos()</code> is a static method of <code>Math</code>, you always use
 * it as <code>Math.cos()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @param {number} x A number given in unit of radians.
 * @return {number} <p>The cosine of the given number.</p>
 * @see Math.acos()
 * @see Math.asin()
 * @see Math.atan()
 * @see Math.atan2()
 * @see Math.sin()
 * @see Math.tan()
 */
Math.cos = function (x) {};

/**
 * <p>Because <code>exp()</code> is a static method of <code>Math</code>, you
 * always use it as <code>Math.exp()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>A number representing <code>e<sup>x</sup></code>, where
 * <code>e</code> is Euler's number and <code>x</code> is the argument.</p>
 * @see Math.E
 * @see Math.expm1()
 * @see Math.log()
 * @see Math.log10()
 * @see Math.log1p()
 * @see Math.log2()
 * @see Math.pow()
 */
Math.exp = function (x) {};

/**
 * <p>Because <code>floor()</code> is a static method of <code>Math</code>, you
 * always use it as <code>Math.floor()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>A number representing the largest integer less than or
 * equal to the specified number.</p>
 * @see Math.abs()
 * @see Math.ceil()
 * @see Math.round()
 * @see Math.sign()
 * @see Math.trunc()
 */
Math.floor = function (x) {};

/**
 * <p>If the value of <code>x</code> is negative, the return value is always
 * <code>NaN</code>.</p> <p>Because <code>log()</code> is a static method of
 * <code>Math</code>, you always use it as <code>Math.log()</code>, rather than
 * as a method of a <code>Math</code> object you created (<code>Math</code> is
 * not a constructor).</p> <p>If you need the natural log of 2 or 10, use the
 * constants <code>Math.LN2</code> or <code>Math.LN10</code> . If you need a
 * logarithm to base 2 or 10, use <code>Math.log2()</code> or
 * <code>Math.log10()</code> . If you need a logarithm to other bases, use
 * Math.log(x) / Math.log(otherBase) as in the example below; you might want to
 * precalculate 1 / Math.log(otherBase) .</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>The natural logarithm (base <code>e</code>) of the
 * given number. If the number is negative, <code>NaN</code> is returned.</p>
 * @see Math.exp()
 * @see Math.log1p()
 * @see Math.log10()
 * @see Math.log2()
 * @see Math.pow()
 */
Math.log = function (x) {};

/**
 * <p>Because <code>max()</code> is a static method of <code>Math</code>, you
 * always use it as <code>Math.max()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p> <p>If no arguments are given, the result is
 * -<code>Infinity</code>.</p> <p>If at least one of arguments cannot be
 * converted to a number, the result is <code>NaN</code>.</p>
 *
 * @summary 
 * @param {...number} value1_ Numbers.
 * @return {number} <p>The largest of the given numbers. If at least one of
 * the arguments cannot be converted to a number, <code>NaN</code> is
 * returned.</p>
 * @see Math.min()
 */
Math.max = function (value1_) {};

/**
 * <p>Because <code>min()</code> is a static method of <code>Math</code>, you
 * always use it as <code>Math.min()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p> <p>If no arguments are given, the result is
 * <code>Infinity</code>.</p> <p>If at least one of arguments cannot be
 * converted to a number, the result is <code>NaN</code>.</p>
 *
 * @summary 
 * @param {...number} value1_ Numbers.
 * @return {number} <p>The smallest of the given numbers. If at least one of
 * the arguments cannot be converted to a number, <code>NaN</code> is
 * returned.</p>
 * @see Math.max()
 */
Math.min = function (value1_) {};

/**
 * <p>Because <code>pow()</code> is a static method of <code>Math</code>, you
 * always use it as <code>Math.pow()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> has no
 * constructor).</p>
 *
 * @summary 
 * @param {number} base The base number.
 * @param {number} exponent The exponent used to raise the <code>base</code>.
 * @return {number} <p>A number representing the given base taken to the power
 * of the given exponent.</p>
 * @see Math.cbrt()
 * @see Math.exp()
 * @see Math.log()
 * @see Math.sqrt()
 */
Math.pow = function (base, exponent) {};

/**
 * 
 *
 * @summary 
 * @return {number} <p>A floating-point, pseudo-random number between
 * <code>0</code> (inclusive) and 1 (exclusive).</p>
 */
Math.random = function () {};

/**
 * <p>If the fractional portion of the argument is greater than 0.5, the
 * argument is rounded to the integer with the next higher absolute value. If
 * it is less than 0.5, the argument is rounded to the integer with the lower
 * absolute value. If the fractional portion is exactly 0.5, the argument is
 * rounded to the next integer in the direction of +∞. <strong>Note that this
 * differs from many languages' <code>round()</code> functions, which often
 * round this case to the next integer <em>away from zero</em>,
 * instead</strong> (giving a different result in the case of negative numbers
 * with a fractional part of exactly 0.5).</p> <p>Because <code>round()</code>
 * is a static method of <code>Math</code>, you always use it as
 * <code>Math.round()</code>, rather than as a method of a <code>Math</code>
 * object you created (<code>Math</code> has no constructor).</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>The value of the given number rounded to the nearest
 * integer.</p>
 * @see Math.abs()
 * @see Math.ceil()
 * @see Math.floor()
 * @see Math.sign()
 * @see Math.trunc()
 */
Math.round = function (x) {};

/**
 * <p>The <code>Math.sin()</code> method returns a numeric value between -1 and
 * 1, which represents the sine of the angle given in radians.</p> <p>Because
 * <code>sin()</code> is a static method of <code>Math</code>, you always use
 * it as <code>Math.sin()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @param {number} x A number (given in radians).
 * @return {number} <p>The sine of the given number.</p>
 * @see Math.acos()
 * @see Math.asin()
 * @see Math.atan()
 * @see Math.atan2()
 * @see Math.cos()
 * @see Math.tan()
 */
Math.sin = function (x) {};

/**
 * <p>If the value of <code>x</code> is negative, <code>Math.sqrt()</code>
 * returns <code>NaN</code>.</p> <p>Because <code>sqrt()</code> is a static
 * method of <code>Math</code>, you always use it as <code>Math.sqrt()</code>,
 * rather than as a method of a <code>Math</code> object you created
 * (<code>Math</code> is not a constructor).</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>The square root of the given number. If the number is
 * negative, <code>NaN</code> is returned.</p>
 * @see Math.cbrt()
 * @see Math.exp()
 * @see Math.log()
 * @see Math.pow()
 */
Math.sqrt = function (x) {};

/**
 * <p>The <code>Math.tan()</code> method returns a numeric value that
 * represents the tangent of the angle.</p> <p>Because <code>tan()</code> is a
 * static method of <code>Math</code>, you always use it as
 * <code>Math.tan()</code>, rather than as a method of a <code>Math</code>
 * object you created (<code>Math</code> is not a constructor).</p>
 *
 * @summary 
 * @param {number} x A number representing an angle in radians.
 * @return {number} <p>The tangent of the given number.</p>
 * @see Math.acos()
 * @see Math.asin()
 * @see Math.atan()
 * @see Math.atan2()
 * @see Math.cos()
 * @see Math.sin()
 */
Math.tan = function (x) {};

/**
 * <ul> <li>If no arguments are provided, the constructor creates a JavaScript
 * <code>Date</code> object for the current date and time according to system
 * settings.</li> <li>If at least two arguments are supplied, missing arguments
 * are either set to 1 (if day is missing) or 0 for all others.</li> <li>The
 * JavaScript date is based on a time value that is milliseconds since midnight
 * 01 January, 1970 UTC. A day holds 86,400,000 milliseconds. The JavaScript
 * <code>Date</code> object range is -100,000,000 days to 100,000,000 days
 * relative to 01 January, 1970 UTC.</li> <li>The JavaScript <code>Date</code>
 * object provides uniform behavior across platforms. The time value can be
 * passed between systems to create a date that represents the same moment in
 * time.</li> <li>The JavaScript <code>Date</code> object supports a number of
 * UTC (universal) methods, as well as local time methods. UTC, also known as
 * Greenwich Mean Time (GMT), refers to the time as set by the World Time
 * Standard. The local time is the time known to the computer where JavaScript
 * is executed.</li> <li>Invoking JavaScript <code>Date</code> as a function
 * (i.e., without the <code>new</code> operator) will return a string
 * representing the current date and time.</li> </ul>
 *
 * @summary 
 * @constructor
 * @extends Object
 * @param {(number|string)=} value_dateString_year Integer value representing
 * the number of milliseconds since 1 January 1970 00:00:00 UTC, with leap
 * seconds ignored (Unix Epoch; but consider that most Unix time stamp
 * functions count in seconds). String value representing a date. The string
 * should be in a format recognized by the <code>Date.parse()</code> method
 * (IETF-compliant RFC 2822 timestamps and also a version of ISO8601). <div
 * class="note"> <p><strong>Note:</strong> parsing of date strings with the
 * <code>Date</code> constructor (and <code>Date.parse</code>, they are
 * equivalent) is strongly discouraged due to browser differences and
 * inconsistencies. Support for RFC 2822 format strings is by convention
 * only. Support for ISO 8601 formats differs in that date-only strings (e.g.
 * "1970-01-01") are treated as UTC, not local.</p> </div> Integer value
 * representing the year. Values from 0 to 99 map to the years 1900 to 1999.
 * See the example below.
 * @param {number=} month Integer value representing the month, beginning with
 * 0 for January to 11 for December.
 * @param {number=} day
 * @param {number=} hour
 * @param {number=} minute
 * @param {number=} second
 * @param {number=} millisecond
 */
function Date(value_dateString_year, month, day, hour, minute, second, millisecond) {}

/**
 * <p>JavaScript <code>Date</code> instances inherit from
 * <code>Date.prototype</code>. You can modify the constructor's prototype
 * object to affect properties and methods inherited by JavaScript
 * <code>Date</code> instances.</p> <p>For compatibility with millennium
 * calculations (in other words, to take into account the year 2000), you
 * should always specify the year in full; for example, use 1998, not 98. To
 * assist you in specifying the complete year, JavaScript includes the methods
 * <code>getFullYear()</code>, <code>setFullYear()</code>,
 * <code>getUTCFullYear()</code> and <code>setUTCFullYear()</code>.</p>
 * <p>Starting with ECMAScript 6, the <code>Date.prototype</code> object is
 * itself an ordinary object. It is not a <code>Date</code> instance.</p>
 *
 * @summary 
 * @type {Object}
 */
Date.prototype = null;

/**
 * <p><code>UTC()</code> takes comma-delimited date parameters and returns the
 * number of milliseconds between January 1, 1970, 00:00:00, universal time and
 * the time you specified.</p> <p>You should specify a full year for the
 * <code>year</code>; for example, 1998. If a year between 0 and 99 is
 * specified, the method converts the year to a year in the 20th century
 * <code>(1900 + year)</code>; for example, if you specify 95, the year 1995 is
 * used.</p> <p>The <code>UTC()</code> method differs from the
 * <code>Date</code> constructor in two ways.</p> <ul>
 * <li><code>Date.UTC()</code> uses universal time instead of the local
 * time.</li> <li><code>Date.UTC()</code> returns a time value as a number
 * instead of creating a <code>Date</code> object.</li> </ul> <p>If a parameter
 * you specify is outside of the expected range, the <code>UTC()</code> method
 * updates the other parameters to allow for your number. For example, if you
 * use 15 for month, the year will be incremented by 1 <code>(year + 1)</code>,
 * and 3 will be used for the month.</p> <p>Because <code>UTC()</code> is a
 * static method of <code>Date</code>, you always use it as
 * <code>Date.UTC()</code>, rather than as a method of a <code>Date</code>
 * object you created.</p>
 *
 * @summary 
 * @param {number} year A year after 1900.
 * @param {number} month An integer between 0 and 11 representing the month.
 * @param {number=} date
 * @param {number=} hrs
 * @param {number=} min
 * @param {number=} sec
 * @param {number=} ms
 * @return {Date} <p>A number representing the number of milliseconds in the
 * given <code>Date</code> object since January 1, 1970, 00:00:00, universal
 * time.</p>
 * @see Date.parse()
 */
Date.UTC = function (year, month, date, hrs, min, sec, ms) {};

/**
 * <p>The <code>parse()</code> method takes a date string (such as <code>"Dec
 * 25, 1995"</code>) and returns the number of milliseconds since January 1,
 * 1970, 00:00:00 UTC. This function is useful for setting date values based on
 * string values, for example in conjunction with the <code>setTime()</code>
 * method and the <code>Date</code> object.</p> <p>Given a string representing
 * a time, <code>parse()</code> returns the time value. It accepts the RFC2822
 * / IETF date syntax (RFC2822 Section 3.3), e.g. <code>"Mon, 25 Dec 1995
 * 13:30:00 GMT"</code>. It understands the continental US time zone
 * abbreviations, but for general use, use a time zone offset, for example,
 * <code>"Mon, 25 Dec 1995 13:30:00 +0430"</code> (4 hours, 30 minutes east of
 * the Greenwich meridian).</p> <p>GMT and UTC are considered equivalent. The
 * local time zone is used to interpret arguments in RFC2822 Section 3.3 format
 * that do not contain time zone information.</p> <p>Because of the variances
 * in parsing of date strings, it is recommended to always manually parse
 * strings as results are inconsistent, especially across different ECMAScript
 * implementations where strings like <code>"2015-10-12 12:00:00"</code> may be
 * parsed to as <code>NaN</code>, UTC or local timezone.</p> <h3
 * id="ECMAScript_5_ISO-8601_format_support">ECMAScript 5 ISO-8601 format
 * support</h3> <p>The date time string may be in ISO 8601 format. For example,
 * <code>"2011-10-10"</code> (just date) or <code>"2011-10-10T14:48:00"</code>
 * (date and time) can be passed and parsed. Where the string is ISO 8601 date
 * only, the UTC time zone is used to interpret arguments. If the string is
 * date and time in ISO 8601 format, it will be treated as local.</p> <p>While
 * time zone specifiers are used during date string parsing to interpret the
 * argument, the value returned is always the number of milliseconds between
 * January 1, 1970 00:00:00 UTC and the point in time represented by the
 * argument or <code>NaN</code>.</p> <p>Because <code>parse()</code> is a
 * static method of <code>Date</code>, it is called as
 * <code>Date.parse()</code> rather than as a method of a <code>Date</code>
 * instance.</p> <h3 id="Differences_in_assumed_time_zone">Differences in
 * assumed time zone</h3> <p>Given a date string of <code>"March 7,
 * 2014"</code>, <code>parse()</code> assumes a local time zone, but given an
 * ISO format such as <code>"2014-03-07"</code> it will assume a time zone of
 * UTC (ES5 and ECMAScript 2015). Therefore <code>Date</code> objects produced
 * using those strings may represent different moments in time depending on the
 * version of ECMAScript supported unless the system is set with a local time
 * zone of UTC. This means that two date strings that appear equivalent may
 * result in two different values depending on the format of the string that is
 * being converted.</p> <h3
 * id="Fall-back_to_implementation-specific_date_formats">Fall-back to
 * implementation-specific date formats</h3> <p>The ECMAScript specification
 * states: If the String does not conform to the standard format the function
 * may fall back to any implementation–specific heuristics or
 * implementation–specific parsing algorithm. Unrecognizable strings or dates
 * containing illegal element values in ISO formatted strings shall cause
 * <code>Date.parse()</code> to return <code>NaN</code>.</p> <p>However,
 * invalid values in date strings not recognized as ISO format as defined by
 * ECMA-262 may or may not result in <code>NaN</code>, depending on the browser
 * and values provided, e.g.:</p> <pre class="brush: js">// Non-ISO string with
 * invalid date values new Date('23/25/2014'); </pre> <p>will be treated as a
 * local date of 25 November, 2015 in Firefox 30 and an invalid date in Safari
 * 7. However, if the string is recognized as an ISO format string and it
 * contains invalid values, it will return <code>NaN</code> in all browsers
 * compliant with ES5 and later:</p> <pre class="brush: js">// ISO string with
 * invalid values new Date('2014-25-23').toISOString(); // returns "RangeError:
 * invalid date" in all es5 compliant browsers </pre> <p>SpiderMonkey's
 * implementation-specific heuristic can be found in <code>jsdate.cpp</code>.
 * The string <code>"10 06 2014"</code> is an example of a non–conforming ISO
 * format and thus falls back to a custom routine. See also this rough outline
 * on how the parsing works.</p> <pre class="brush: js">new Date('10 06 2014');
 * </pre> <p>will be treated as a local date of 6 October, 2014 and not 10
 * June, 2014. Other examples:</p> <pre class="brush: js">new Date('foo-bar
 * 2014').toString(); // returns: "Invalid Date" Date.parse('foo-bar 2014'); //
 * returns: NaN </pre>
 *
 * @summary 
 * @param {string} dateString A string representing an RFC2822 or ISO 8601 date
 * (other formats may be used, but results may be unexpected).
 * @return {number} <p>A number representing the milliseconds elapsed since
 * January 1, 1970, 00:00:00 UTC and the date obtained by parsing the given
 * string representation of a date. If the argument doesn't represent a valid
 * date, <code>NaN</code> is returned.</p>
 * @see Date.UTC()
 */
Date.parse = function (dateString) {};

/**
 * 
 *
 * @summary 
 * @return {number} <p>An integer number, between 1 and 31, representing the
 * day of the month for the given date according to local time.</p>
 * @see Date.prototype.getUTCDate()
 * @see Date.prototype.getUTCDay()
 * @see Date.prototype.setDate()
 */
Date.prototype.getDate = function () {};

/**
 * 
 *
 * @summary 
 * @return {number} <p>An integer number corresponding to the day of the week
 * for the given date, according to local time: 0 for Sunday, 1 for Monday, 2
 * for Tuesday, and so on.</p>
 * @see Date.prototype.getUTCDate()
 * @see Date.prototype.getUTCDay()
 * @see Date.prototype.setDate()
 */
Date.prototype.getDay = function () {};

/**
 * <p>The value returned by <code>getFullYear()</code> is an absolute number.
 * For dates between the years 1000 and 9999, <code>getFullYear()</code>
 * returns a four-digit number, for example, 1995. Use this function to make
 * sure a year is compliant with years after 2000.</p>
 *
 * @summary 
 * @return {number} <p>A number corresponding to the year of the given date,
 * according to local time.</p>
 * @see Date.prototype.getUTCFullYear()
 * @see Date.prototype.setFullYear()
 * @see Date.prototype.getYear()
 */
Date.prototype.getFullYear = function () {};

/**
 * 
 *
 * @summary 
 * @return {number} <p>An integer number, between 0 and 23, representing the
 * hour for the given date according to local time.</p>
 * @see Date.prototype.getUTCHours()
 * @see Date.prototype.setHours()
 */
Date.prototype.getHours = function () {};

/**
 * 
 *
 * @summary 
 * @return {number} <p>A number, between 0 and 999, representing the
 * milliseconds for the given date according to local time.</p>
 * @see Date.prototype.getUTCMilliseconds()
 * @see Date.prototype.setMilliseconds()
 */
Date.prototype.getMilliseconds = function () {};

/**
 * 
 *
 * @summary 
 * @return {number} <p>An integer number, between 0 and 59, representing the
 * minutes in the given date according to local time.</p>
 * @see Date.prototype.getUTCMinutes()
 * @see Date.prototype.setMinutes()
 */
Date.prototype.getMinutes = function () {};

/**
 * 
 *
 * @summary 
 * @return {number} <p>An integer number, between 0 and 11, representing the
 * month in the given date according to local time. 0 corresponds to January, 1
 * to February, and so on.</p>
 */
Date.prototype.getMonth = function () {};

/**
 * 
 *
 * @summary 
 * @return {number} <p>An integer number, between 0 and 59, representing the
 * seconds in the given date according to local time.</p>
 * @see Date.prototype.getUTCSeconds()
 * @see Date.prototype.setSeconds()
 */
Date.prototype.getSeconds = function () {};

/**
 * 
 *
 * @summary 
 * @return {number} <p>A number representing the milliseconds elapsed between
 * 1 January 1970 00:00:00 UTC and the given date.</p>
 * @see Date.prototype.setTime()
 * @see Date.prototype.valueOf()
 * @see Date.now()
 */
Date.prototype.getTime = function () {};

/**
 * <p>The time-zone offset is the difference, in minutes, between UTC and local
 * time. Note that this means that the offset is positive if the local timezone
 * is behind UTC and negative if it is ahead. For example, for time zone
 * UTC+10:00 (Australian Eastern Standard Time, Vladivostok Time, Chamorro
 * Standard Time), -600 will be returned.</p> <table class="standard-table">
 * <tbody> <tr> <td>Curr<span style="display: none;"> </span>ent Locale</td>
 * <td>UTC-8</td> <td>UTC</td> <td>UTC+3</td> </tr> <tr> <td>Return Value</td>
 * <td>480</td> <td><span style="display: none;"> </span>0<span style="display:
 * none;"> </span></td> <td>-180<span style="display: none;"> </span></td>
 * </tr> </tbody> </table> <p>The time zone offset returned is the one that
 * applies for the Date that it's called on. Where the host system is
 * configured for daylight saving, the offset will change depending on the date
 * and time that the Date represents and that daylight saving applies.</p>
 *
 * @summary 
 * @return {number} <p>A number representing the time-zone offset from UTC, in
 * minutes, for the date based on current host system settings.</p>
 */
Date.prototype.getTimezoneOffset = function () {};

/**
 * 
 *
 * @summary 
 * @return {number} <p>An integer number, between 1 and 31, representing the
 * day of the month in the given date according to universal time.</p>
 * @see Date.prototype.getDate()
 * @see Date.prototype.getUTCDay()
 * @see Date.prototype.setUTCDate()
 */
Date.prototype.getUTCDate = function () {};

/**
 * 
 *
 * @summary 
 * @return {number} <p>An integer number corresponding to the day of the week
 * for the given date, according to universal time: 0 for Sunday, 1 for Monday,
 * 2 for Tuesday, and so on.</p>
 * @see Date.prototype.getUTCDate()
 * @see Date.prototype.getDay()
 * @see Date.prototype.setUTCDate()
 */
Date.prototype.getUTCDay = function () {};

/**
 * <p>The value returned by <code>getUTCFullYear()</code> is an absolute number
 * that is compliant with year-2000, for example, 1995.</p>
 *
 * @summary 
 * @return {number} <p>A number representing the year in the given date
 * according to universal time.</p>
 * @see Date.prototype.getFullYear()
 * @see Date.prototype.setFullYear()
 */
Date.prototype.getUTCFullYear = function () {};

/**
 * 
 *
 * @summary 
 * @return {number} <p>An integer number, between 0 and 23, representing the
 * hours in the given date according to universal time.</p>
 * @see Date.prototype.getHours()
 * @see Date.prototype.setUTCHours()
 */
Date.prototype.getUTCHours = function () {};

/**
 * 
 *
 * @summary 
 * @return {number} <p>An integer number, between 0 and 999, representing the
 * milliseconds in the given date according to universal time.</p>
 * @see Date.prototype.getMilliseconds()
 * @see Date.prototype.setUTCMilliseconds()
 */
Date.prototype.getUTCMilliseconds = function () {};

/**
 * 
 *
 * @summary 
 * @return {number} <p>An integer number, between 0 and 59, representing the
 * minutes in the given date according to universal time.</p>
 * @see Date.prototype.getMinutes()
 * @see Date.prototype.setUTCMinutes()
 */
Date.prototype.getUTCMinutes = function () {};

/**
 * 
 *
 * @summary 
 * @return {number} <p>An integer number, between 0 and 11, corresponding to
 * the month of the given date according to universal time. 0 for January, 1
 * for February, 2 for March, and so on.</p>
 * @see Date.prototype.getMonth()
 * @see Date.prototype.setUTCMonth()
 */
Date.prototype.getUTCMonth = function () {};

/**
 * 
 *
 * @summary 
 * @return {number} <p>An integer number, between 0 and 59, representing the
 * seconds in the given date according to universal time.</p>
 * @see Date.prototype.getSeconds()
 * @see Date.prototype.setUTCSeconds()
 */
Date.prototype.getUTCSeconds = function () {};

/**
 * <p> </p><ul> <li>For years greater than or equal to 2000, the value returned
 * by <code>getYear()</code> is 100 or greater. For example, if the year is
 * 2026, <code>getYear()</code> returns 126.</li> <li>For years between and
 * including 1900 and 1999, the value returned by <code>getYear()</code> is
 * between 0 and 99. For example, if the year is 1976, <code>getYear()</code>
 * returns 76.</li> <li>For years less than 1900, the value returned by
 * <code>getYear()</code> is less than 0. For example, if the year is 1800,
 * <code>getYear()</code> returns -100.</li> </ul> <p>To take into account
 * years before and after 2000, you should use <code>getFullYear()</code>
 * instead of <code>getYear()</code> so that the year is specified in full.</p>
 *
 * @summary 
 * @deprecated Use {@linkcode #getFullYear()} instead.
 * @return {number} <p>A number representing the year of the given date,
 * according to local time, minus 1900.</p>
 * @see Date.prototype.getFullYear()
 * @see Date.prototype.getUTCFullYear()
 * @see Date.prototype.setYear()
 */
Date.prototype.getYear = function () {};

/**
 * <p>If the <code>dayValue</code> is outside of the range of date values for
 * the month, <code>setDate()</code> will update the <code>Date</code> object
 * accordingly. For example, if 0 is provided for <code>dayValue</code>, the
 * date will be set to the last day of the previous month.</p>
 *
 * @summary 
 * @param {number} dayValue An integer representing the day of the month.
 * @see Date.prototype.getDate()
 * @see Date.prototype.setUTCDate()
 */
Date.prototype.setDate = function (dayValue) {};

/**
 * <p>If you do not specify the <code>monthValue</code> and
 * <code>dayValue</code> parameters, the values returned from the
 * <code>getMonth()</code> and <code>getDate()</code> methods are used.</p>
 * <p>If a parameter you specify is outside of the expected range,
 * <code>setFullYear()</code> attempts to update the other parameters and the
 * date information in the <code>Date</code> object accordingly. For example,
 * if you specify 15 for <code>monthValue</code>, the year is incremented by 1
 * (<code>yearValue + 1</code>), and 3 is used for the month.</p>
 *
 * @summary 
 * @param {number} yearValue An integer specifying the numeric value of the
 * year, for example, 1995.
 * @param {number=} monthValue Optional. An integer between 0 and 11
 * representing the months January through December.
 * @param {number=} dayValue Optional. An integer between 1 and 31 representing
 * the day of the month. If you specify the <code>dayValue</code> parameter,
 * you must also specify the <code>monthValue</code>.
 * @see Date.prototype.getUTCFullYear()
 * @see Date.prototype.setUTCFullYear()
 * @see Date.prototype.setYear()
 */
Date.prototype.setFullYear = function (yearValue, monthValue, dayValue) {};

/**
 * <p>If you do not specify the <code>minutesValue</code>,
 * <code>secondsValue</code>, and <code>msValue</code> parameters, the values
 * returned from the <code>getMinutes()</code>, <code>getSeconds()</code>, and
 * <code>getMilliseconds()</code> methods are used.</p> <p>If a parameter you
 * specify is outside of the expected range, <code>setHours()</code> attempts
 * to update the date information in the <code>Date</code> object accordingly.
 * For example, if you use 100 for <code>secondsValue</code>, the minutes will
 * be incremented by 1 (<code>minutesValue + 1</code>), and 40 will be used for
 * seconds.</p>
 *
 * @summary 
 * @param {number} hoursValue An integer between 0 and 23, representing the
 * hour.
 * @param {number=} minutesValue Optional. An integer between 0 and 59,
 * representing the minutes.
 * @param {number=} secondsValue Optional. An integer between 0 and 59,
 * representing the seconds. If you specify the <code>secondsValue</code>
 * parameter, you must also specify the <code>minutesValue</code>.
 * @param {number=} msValue Optional. A number between 0 and 999, representing
 * the milliseconds. If you specify the <code>msValue</code> parameter, you
 * must also specify the <code>minutesValue</code> and
 * <code>secondsValue</code>.
 * @see Date.prototype.getHours()
 * @see Date.prototype.setUTCHours()
 */
Date.prototype.setHours = function (hoursValue, minutesValue, secondsValue, msValue) {};

/**
 * <p>If you specify a number outside the expected range, the date information
 * in the <code>Date</code> object is updated accordingly. For example, if you
 * specify 1005, the number of seconds is incremented by 1, and 5 is used for
 * the milliseconds.</p>
 *
 * @summary 
 * @param {number} millisecondsValue A number between 0 and 999, representing
 * the milliseconds.
 * @see Date.prototype.getMilliseconds()
 * @see Date.prototype.setUTCMilliseconds()
 */
Date.prototype.setMilliseconds = function (millisecondsValue) {};

/**
 * <p>If you do not specify the <code>secondsValue</code> and
 * <code>msValue</code> parameters, the values returned from
 * <code>getSeconds()</code> and <code>getMilliseconds()</code> methods are
 * used.</p> <p>If a parameter you specify is outside of the expected range,
 * <code>setMinutes()</code> attempts to update the date information in the
 * <code>Date</code> object accordingly. For example, if you use 100 for
 * <code>secondsValue</code>, the minutes will be incremented by 1
 * (<code>minutesValue + 1</code>), and 40 will be used for seconds.</p>
 *
 * @summary 
 * @param {number} minutesValue An integer between 0 and 59, representing the
 * minutes.
 * @param {number=} secondsValue Optional. An integer between 0 and 59,
 * representing the seconds. If you specify the <code>secondsValue</code>
 * parameter, you must also specify the <code>minutesValue</code>.
 * @param {number=} msValue Optional. A number between 0 and 999, representing
 * the milliseconds. If you specify the <code>msValue</code> parameter, you
 * must also specify the <code>minutesValue</code> and
 * <code>secondsValue</code>.
 * @see Date.prototype.getMinutes()
 * @see Date.prototype.setUTCMinutes()
 */
Date.prototype.setMinutes = function (minutesValue, secondsValue, msValue) {};

/**
 * <p>If you do not specify the <code>dayValue</code> parameter, the value
 * returned from the <code>getDate()</code> method is used.</p> <p>If a
 * parameter you specify is outside of the expected range,
 * <code>setMonth()</code> attempts to update the date information in the
 * <code>Date</code> object accordingly. For example, if you use 15 for
 * <code>monthValue</code>, the year will be incremented by 1, and 3 will be
 * used for month.</p> <p>The current day of month will have an impact on the
 * behaviour of this method. Conceptually it will add the number of days given
 * by the current day of the month to the 1st day of the new month specified as
 * the parameter, to return the new date. For example, if the current value is
 * 31st August 2016, calling setMonth with a value of 1 will return 2nd March
 * 2016. This is because in 2016 February had 29 days.</p>
 *
 * @summary 
 * @param {number} monthValue An integer between 0 and 11, representing the
 * months January through December.
 * @param {number=} dayValue Optional. An integer from 1 to 31, representing
 * the day of the month.
 * @see Date.prototype.getMonth()
 * @see Date.prototype.setUTCMonth()
 */
Date.prototype.setMonth = function (monthValue, dayValue) {};

/**
 * <p>If you do not specify the <code>msValue</code> parameter, the value
 * returned from the <code>getMilliseconds()</code> method is used.</p> <p>If a
 * parameter you specify is outside of the expected range,
 * <code>setSeconds()</code> attempts to update the date information in the
 * <code>Date</code> object accordingly. For example, if you use 100 for
 * <code>secondsValue</code>, the minutes stored in the <code>Date</code>
 * object will be incremented by 1, and 40 will be used for seconds.</p>
 *
 * @summary 
 * @param {number} secondsValue An integer between 0 and 59, representing the
 * seconds.
 * @param {number=} msValue Optional. A number between 0 and 999, representing
 * the milliseconds.
 * @see Date.prototype.getSeconds()
 * @see Date.prototype.setUTCSeconds()
 */
Date.prototype.setSeconds = function (secondsValue, msValue) {};

/**
 * <p>Use the <code>setTime()</code> method to help assign a date and time to
 * another <code>Date</code> object.</p>
 *
 * @summary 
 * @param {number} timeValue An integer representing the number of milliseconds
 * since 1 January 1970, 00:00:00 UTC.
 * @see Date.prototype.getTime()
 * @see Date.prototype.setUTCHours()
 */
Date.prototype.setTime = function (timeValue) {};

/**
 * <p>If a parameter you specify is outside of the expected range,
 * <code>setUTCDate()</code> attempts to update the date information in the
 * <code>Date</code> object accordingly. For example, if you use 40 for
 * <code>dayValue</code>, and the month stored in the <code>Date</code> object
 * is June, the day will be changed to 10 and the month will be incremented to
 * July.</p>
 *
 * @summary 
 * @param {number} dayValue An integer from 1 to 31, representing the day of
 * the month.
 * @see Date.prototype.getUTCDate()
 * @see Date.prototype.setDate()
 */
Date.prototype.setUTCDate = function (dayValue) {};

/**
 * <p>If you do not specify the <code>monthValue</code> and
 * <code>dayValue</code> parameters, the values returned from the
 * <code>getUTCMonth()</code> and <code>getUTCDate()</code> methods are
 * used.</p> <p>If a parameter you specify is outside of the expected range,
 * <code>setUTCFullYear()</code> attempts to update the other parameters and
 * the date information in the <code>Date</code> object accordingly. For
 * example, if you specify 15 for <code>monthValue</code>, the year is
 * incremented by 1 (<code>yearValue + 1</code>), and 3 is used for the
 * month.</p>
 *
 * @summary 
 * @param {number} yearValue An integer specifying the numeric value of the
 * year, for example, 1995.
 * @param {number=} monthValue Optional. An integer between 0 and 11
 * representing the months January through December.
 * @param {number=} dayValue Optional. An integer between 1 and 31 representing
 * the day of the month. If you specify the <code>dayValue</code> parameter,
 * you must also specify the <code>monthValue</code>.
 * @see Date.prototype.getUTCFullYear()
 * @see Date.prototype.setFullYear()
 */
Date.prototype.setUTCFullYear = function (yearValue, monthValue, dayValue) {};

/**
 * <p>If you do not specify the <code>minutesValue</code>,
 * <code>secondsValue</code>, and <code>msValue</code> parameters, the values
 * returned from the <code>getUTCMinutes()</code>,
 * <code>getUTCSeconds()</code>, and <code>getUTCMilliseconds()</code> methods
 * are used.</p> <p>If a parameter you specify is outside of the expected
 * range, <code>setUTCHours()</code> attempts to update the date information in
 * the <code>Date</code> object accordingly. For example, if you use 100 for
 * <code>secondsValue</code>, the minutes will be incremented by 1
 * (<code>minutesValue + 1</code>), and 40 will be used for seconds.</p>
 *
 * @summary 
 * @param {number} hoursValue An integer between 0 and 23, representing the
 * hour.
 * @param {number=} minutesValue Optional. An integer between 0 and 59,
 * representing the minutes.
 * @param {number=} secondsValue Optional. An integer between 0 and 59,
 * representing the seconds. If you specify the <code>secondsValue</code>
 * parameter, you must also specify the <code>minutesValue</code>.
 * @param {number=} msValue Optional. A number between 0 and 999, representing
 * the milliseconds. If you specify the <code>msValue</code> parameter, you
 * must also specify the <code>minutesValue</code> and
 * <code>secondsValue</code>.
 * @see Date.prototype.getUTCHours()
 * @see Date.prototype.setHours()
 */
Date.prototype.setUTCHours = function (hoursValue, minutesValue, secondsValue, msValue) {};

/**
 * <p>If a parameter you specify is outside of the expected range,
 * <code>setUTCMilliseconds()</code> attempts to update the date information in
 * the <code>Date</code> object accordingly. For example, if you use 1100 for
 * <code>millisecondsValue</code>, the seconds stored in the <code>Date</code>
 * object will be incremented by 1, and 100 will be used for milliseconds.</p>
 *
 * @summary 
 * @param {number} millisecondsValue A number between 0 and 999, representing
 * the milliseconds.
 * @see Date.prototype.getUTCMilliseconds()
 * @see Date.prototype.setMilliseconds()
 */
Date.prototype.setUTCMilliseconds = function (millisecondsValue) {};

/**
 * <p>If you do not specify the <code>secondsValue</code> and
 * <code>msValue</code> parameters, the values returned from
 * <code>getUTCSeconds()</code> and <code>getUTCMilliseconds()</code> methods
 * are used.</p> <p>If a parameter you specify is outside of the expected
 * range, <code>setUTCMinutes()</code> attempts to update the date information
 * in the <code>Date</code> object accordingly. For example, if you use 100 for
 * <code>secondsValue</code>, the minutes will be incremented by 1
 * (<code>minutesValue + 1</code>), and 40 will be used for seconds.</p>
 *
 * @summary 
 * @param {number} minutesValue An integer between 0 and 59, representing the
 * minutes.
 * @param {number=} secondsValue Optional. An integer between 0 and 59,
 * representing the seconds. If you specify the <code>secondsValue</code>
 * parameter, you must also specify the <code>minutesValue</code>.
 * @param {number=} msValue Optional. A number between 0 and 999, representing
 * the milliseconds. If you specify the <code>msValue</code> parameter, you
 * must also specify the <code>minutesValue</code> and
 * <code>secondsValue</code>.
 * @see Date.prototype.getUTCMinutes()
 * @see Date.prototype.setMinutes()
 */
Date.prototype.setUTCMinutes = function (minutesValue, secondsValue, msValue) {};

/**
 * <p>If you do not specify the <code>dayValue</code> parameter, the value
 * returned from the <code>getUTCDate()</code> method is used.</p> <p>If a
 * parameter you specify is outside of the expected range,
 * <code>setUTCMonth()</code> attempts to update the date information in the
 * <code>Date</code> object accordingly. For example, if you use 15 for
 * <code>monthValue</code>, the year will be incremented by 1, and 3 will be
 * used for month.</p>
 *
 * @summary 
 * @param {number} monthValue An integer between 0 and 11, representing the
 * months January through December.
 * @param {number=} dayValue Optional. An integer from 1 to 31, representing
 * the day of the month.
 * @see Date.prototype.getUTCMonth()
 * @see Date.prototype.setMonth()
 */
Date.prototype.setUTCMonth = function (monthValue, dayValue) {};

/**
 * <p>If you do not specify the <code>msValue</code> parameter, the value
 * returned from the <code>getUTCMilliseconds()</code> method is used.</p>
 * <p>If a parameter you specify is outside of the expected range,
 * <code>setUTCSeconds()</code> attempts to update the date information in the
 * <code>Date</code> object accordingly. For example, if you use 100 for
 * <code>secondsValue</code>, the minutes stored in the <code>Date</code>
 * object will be incremented by 1, and 40 will be used for seconds.</p>
 *
 * @summary 
 * @param {number} secondsValue An integer between 0 and 59, representing the
 * seconds.
 * @param {number=} msValue Optional. A number between 0 and 999, representing
 * the milliseconds.
 * @see Date.prototype.getUTCSeconds()
 * @see Date.prototype.setSeconds()
 */
Date.prototype.setUTCSeconds = function (secondsValue, msValue) {};

/**
 * <p>If <code>yearValue</code> is a number between 0 and 99 (inclusive), then
 * the year for <code>dateObj</code> is set to <code>1900 + yearValue</code>.
 * Otherwise, the year for <code>dateObj</code> is set to
 * <code>yearValue</code>.</p>
 *
 * @summary 
 * @deprecated Use {@linkcode #setFullYear()} instead.
 * @param {number} yearValue An integer.
 * @see Date.prototype.getFullYear()
 * @see Date.prototype.getUTCFullYear()
 * @see Date.prototype.setFullYear()
 * @see Date.prototype.setUTCFullYear()
 */
Date.prototype.setYear = function (yearValue) {};

/**
 * <p><code>Date</code> instances refer to a specific point in time. Calling
 * <code>toString()</code> will return the date formatted in a human readable
 * form in American English. In SpiderMonkey, this consists of the date portion
 * (day, month, and year) followed by the time portion (hours, minutes,
 * seconds, and time zone). Sometimes it is desirable to obtain a string of the
 * date portion; such a thing can be accomplished with the
 * <code>toDateString()</code> method.</p> <p>The <code>toDateString()</code>
 * method is especially useful because compliant engines implementing ECMA-262
 * may differ in the string obtained from <code>toString()</code> for
 * <code>Date</code> objects, as the format is implementation-dependent and
 * simple string slicing approaches may not produce consistent results across
 * multiple engines.</p>
 *
 * @summary 
 * @return {string} <p>A string representing the date portion of the given
 * <code>Date</code> object in human readable form in American English.</p>
 * @see Date.prototype.toLocaleDateString()
 * @see Date.prototype.toTimeString()
 * @see Date.prototype.toString()
 */
Date.prototype.toDateString = function () {};

/**
 * 
 *
 * @summary 
 * @deprecated Use {@linkcode #toUTCString()} instead.
 * @return {string} <p>A string representing the given date following the
 * Internet Greenwich Mean Time (GMT) convention.</p>
 * @see Date.prototype.toLocaleDateString()
 * @see Date.prototype.toTimeString()
 * @see Date.prototype.toUTCString()
 */
Date.prototype.toGMTString = function () {};

/**
 * 
 *
 * @summary 
 * @param {string=} locales <p>Optional. A string with a BCP 47 language tag,
 * or an array of such strings. For the general form and interpretation of the
 * <code>locales</code> argument, see the Intl page. The following Unicode
 * extension keys are allowed:</p> <dl><dt><code>nu</code></dt> <dd>Numbering
 * system. Possible values include: <code>"arab"</code>,
 * <code>"arabext"</code>, <code>"bali"</code>, <code>"beng"</code>,
 * <code>"deva"</code>, <code>"fullwide"</code>, <code>"gujr"</code>,
 * <code>"guru"</code>, <code>"hanidec"</code>, <code>"khmr"</code>,
 * <code>"knda"</code>, <code>"laoo"</code>, <code>"latn"</code>,
 * <code>"limb"</code>, <code>"mlym"</code>, <code>"mong"</code>,
 * <code>"mymr"</code>, <code>"orya"</code>, <code>"tamldec"</code>,
 * <code>"telu"</code>, <code>"thai"</code>, <code>"tibt"</code>.</dd>
 * <dt><code>ca</code></dt> <dd>Calendar. Possible values include:
 * <code>"buddhist"</code>, <code>"chinese"</code>, <code>"coptic"</code>,
 * <code>"ethioaa"</code>, <code>"ethiopic"</code>, <code>"gregory"</code>,
 * <code>"hebrew"</code>, <code>"indian"</code>, <code>"islamic"</code>,
 * <code>"islamicc"</code>, <code>"iso8601"</code>, <code>"japanese"</code>,
 * <code>"persian"</code>, <code>"roc"</code>.
 * @param {{localeMatcher: string, timeZone: string, hour12: boolean,
 * formatMatcher: string, weekday: string, era: string, year: string, month:
 * string, day: string, hour: string, minute: string, second: string,
 * timeZoneName: string}=} options <p>Optional. An object with some or all of
 * the following properties:</p> <dl><dt><code>localeMatcher</code></dt>
 * <dd>The locale matching algorithm to use. Possible values are
 * <code>"lookup"</code> and <code>"best fit"</code>; the default is
 * <code>"best fit"</code>. For information about this option, see the Intl
 * page.</dd> <dt><code>timeZone</code></dt> <dd>The time zone to use. The only
 * value implementations must recognize is <code>"UTC"</code>; the default is
 * the runtime's default time zone. Implementations may also recognize the time
 * zone names of the IANA time zone database, such as
 * <code>"Asia/Shanghai"</code>, <code>"Asia/Kolkata"</code>,
 * <code>"America/New_York"</code>.</dd> <dt><code>hour12</code></dt>
 * <dd>Whether to use 12-hour time (as opposed to 24-hour time). Possible
 * values are <code>true</code> and <code>false</code>; the default is locale
 * dependent.</dd> <dt><code>formatMatcher</code></dt> <dd>The format matching
 * algorithm to use. Possible values are <code>"basic"</code> and <code>"best
 * fit"</code>; the default is <code>"best fit"</code>. See the following
 * paragraphs for information about the use of this property.</dd> </dl><p>The
 * following properties describe the date-time components to use in formatted
 * output, and their desired representations. Implementations are required to
 * support at least the following subsets:</p> <ul><li><code>weekday</code>,
 * <code>year</code>, <code>month</code>, <code>day</code>, <code>hour</code>,
 * <code>minute</code>, <code>second</code></li> <li><code>weekday</code>,
 * <code>year</code>, <code>month</code>, <code>day</code></li>
 * <li><code>year</code>, <code>month</code>, <code>day</code></li>
 * <li><code>year</code>, <code>month</code></li> <li><code>month</code>,
 * <code>day</code></li> <li><code>hour</code>, <code>minute</code>,
 * <code>second</code></li> <li><code>hour</code>, <code>minute</code></li>
 * </ul><p>Implementations may support other subsets, and requests will be
 * negotiated against all available subset-representation combinations to find
 * the best match. Two algorithms are available for this negotiation and
 * selected by the <code>formatMatcher</code> property: A fully specified
 * <code>"basic"</code> algorithm and an implementation dependent <code>"best
 * fit"</code> algorithm.</p> <dl><dt><code>weekday</code></dt> <dd>The
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
 * @return {string} <p>A string representing the date portion of the given
 * <code>Date</code> instance according to language-specific conventions.</p>
 * @see Intl.DateTimeFormat
 * @see Date.prototype.toLocaleString()
 * @see Date.prototype.toLocaleTimeString()
 * @see Date.prototype.toString()
 */
Date.prototype.toLocaleDateString = function (locales, options) {};

/**
 * 
 *
 * @summary 
 * @param {string=} locales <p>Optional. A string with a BCP 47 language tag,
 * or an array of such strings. For the general form and interpretation of the
 * <code>locales</code> argument, see the Intl page. The following Unicode
 * extension keys are allowed:</p> <dl><dt><code>nu</code></dt> <dd>Numbering
 * system. Possible values include: <code>"arab"</code>,
 * <code>"arabext"</code>, <code>"bali"</code>, <code>"beng"</code>,
 * <code>"deva"</code>, <code>"fullwide"</code>, <code>"gujr"</code>,
 * <code>"guru"</code>, <code>"hanidec"</code>, <code>"khmr"</code>,
 * <code>"knda"</code>, <code>"laoo"</code>, <code>"latn"</code>,
 * <code>"limb"</code>, <code>"mlym"</code>, <code>"mong"</code>,
 * <code>"mymr"</code>, <code>"orya"</code>, <code>"tamldec"</code>,
 * <code>"telu"</code>, <code>"thai"</code>, <code>"tibt"</code>.</dd>
 * <dt><code>ca</code></dt> <dd>Calendar. Possible values include:
 * <code>"buddhist"</code>, <code>"chinese"</code>, <code>"coptic"</code>,
 * <code>"ethioaa"</code>, <code>"ethiopic"</code>, <code>"gregory"</code>,
 * <code>"hebrew"</code>, <code>"indian"</code>, <code>"islamic"</code>,
 * <code>"islamicc"</code>, <code>"iso8601"</code>, <code>"japanese"</code>,
 * <code>"persian"</code>, <code>"roc"</code>.
 * @param {{localeMatcher: string, timeZone: string, hour12: boolean,
 * formatMatcher: string, weekday: string, era: string, year: string, month:
 * string, day: string, hour: string, minute: string, second: string,
 * timeZoneName: string}=} options <p>Optional. An object with some or all of
 * the following properties:</p> <dl><dt><code>localeMatcher</code></dt>
 * <dd>The locale matching algorithm to use. Possible values are
 * <code>"lookup"</code> and <code>"best fit"</code>; the default is
 * <code>"best fit"</code>. For information about this option, see the Intl
 * page.</dd> <dt><code>timeZone</code></dt> <dd>The time zone to use. The only
 * value implementations must recognize is <code>"UTC"</code>; the default is
 * the runtime's default time zone. Implementations may also recognize the time
 * zone names of the IANA time zone database, such as
 * <code>"Asia/Shanghai"</code>, <code>"Asia/Kolkata"</code>,
 * <code>"America/New_York"</code>.</dd> <dt><code>hour12</code></dt>
 * <dd>Whether to use 12-hour time (as opposed to 24-hour time). Possible
 * values are <code>true</code> and <code>false</code>; the default is locale
 * dependent.</dd> <dt><code>formatMatcher</code></dt> <dd>The format matching
 * algorithm to use. Possible values are <code>"basic"</code> and <code>"best
 * fit"</code>; the default is <code>"best fit"</code>. See the following
 * paragraphs for information about the use of this property.</dd> </dl><p>The
 * following properties describe the date-time components to use in formatted
 * output, and their desired representations. Implementations are required to
 * support at least the following subsets:</p> <ul><li><code>weekday</code>,
 * <code>year</code>, <code>month</code>, <code>day</code>, <code>hour</code>,
 * <code>minute</code>, <code>second</code></li> <li><code>weekday</code>,
 * <code>year</code>, <code>month</code>, <code>day</code></li>
 * <li><code>year</code>, <code>month</code>, <code>day</code></li>
 * <li><code>year</code>, <code>month</code></li> <li><code>month</code>,
 * <code>day</code></li> <li><code>hour</code>, <code>minute</code>,
 * <code>second</code></li> <li><code>hour</code>, <code>minute</code></li>
 * </ul><p>Implementations may support other subsets, and requests will be
 * negotiated against all available subset-representation combinations to find
 * the best match. Two algorithms are available for this negotiation and
 * selected by the <code>formatMatcher</code> property: A fully specified
 * <code>"basic"</code> algorithm and an implementation dependent <code>"best
 * fit"</code> algorithm.</p> <dl><dt><code>weekday</code></dt> <dd>The
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
 * @return {string} <p>A string representing the given date according to
 * language-specific conventions.</p>
 * @see Intl.DateTimeFormat
 * @see Date.prototype.toLocaleDateString()
 * @see Date.prototype.toLocaleTimeString()
 * @see Date.prototype.toString()
 */
Date.prototype.toLocaleString = function (locales, options) {};

/**
 * 
 *
 * @summary 
 * @param {string=} locales <p>Optional. A string with a BCP 47 language tag,
 * or an array of such strings. For the general form and interpretation of the
 * <code>locales</code> argument, see the Intl page. The following Unicode
 * extension keys are allowed:</p> <dl><dt><code>nu</code></dt> <dd>Numbering
 * system. Possible values include: <code>"arab"</code>,
 * <code>"arabext"</code>, <code>"bali"</code>, <code>"beng"</code>,
 * <code>"deva"</code>, <code>"fullwide"</code>, <code>"gujr"</code>,
 * <code>"guru"</code>, <code>"hanidec"</code>, <code>"khmr"</code>,
 * <code>"knda"</code>, <code>"laoo"</code>, <code>"latn"</code>,
 * <code>"limb"</code>, <code>"mlym"</code>, <code>"mong"</code>,
 * <code>"mymr"</code>, <code>"orya"</code>, <code>"tamldec"</code>,
 * <code>"telu"</code>, <code>"thai"</code>, <code>"tibt"</code>.</dd>
 * <dt><code>ca</code></dt> <dd>Calendar. Possible values include:
 * <code>"buddhist"</code>, <code>"chinese"</code>, <code>"coptic"</code>,
 * <code>"ethioaa"</code>, <code>"ethiopic"</code>, <code>"gregory"</code>,
 * <code>"hebrew"</code>, <code>"indian"</code>, <code>"islamic"</code>,
 * <code>"islamicc"</code>, <code>"iso8601"</code>, <code>"japanese"</code>,
 * <code>"persian"</code>, <code>"roc"</code>.
 * @param {{localeMatcher: string, timeZone: string, hour12: boolean,
 * formatMatcher: string, weekday: string, era: string, year: string, month:
 * string, day: string, hour: string, minute: string, second: string,
 * timeZoneName: string}=} options <p>Optional. An object with some or all of
 * the following properties:</p> <dl><dt><code>localeMatcher</code></dt>
 * <dd>The locale matching algorithm to use. Possible values are
 * <code>"lookup"</code> and <code>"best fit"</code>; the default is
 * <code>"best fit"</code>. For information about this option, see the Intl
 * page.</dd> <dt><code>timeZone</code></dt> <dd>The time zone to use. The only
 * value implementations must recognize is <code>"UTC"</code>; the default is
 * the runtime's default time zone. Implementations may also recognize the time
 * zone names of the IANA time zone database, such as
 * <code>"Asia/Shanghai"</code>, <code>"Asia/Kolkata"</code>,
 * <code>"America/New_York"</code>.</dd> <dt><code>hour12</code></dt>
 * <dd>Whether to use 12-hour time (as opposed to 24-hour time). Possible
 * values are <code>true</code> and <code>false</code>; the default is locale
 * dependent.</dd> <dt><code>formatMatcher</code></dt> <dd>The format matching
 * algorithm to use. Possible values are <code>"basic"</code> and <code>"best
 * fit"</code>; the default is <code>"best fit"</code>. See the following
 * paragraphs for information about the use of this property.</dd> </dl><p>The
 * following properties describe the date-time components to use in formatted
 * output, and their desired representations. Implementations are required to
 * support at least the following subsets:</p> <ul><li><code>weekday</code>,
 * <code>year</code>, <code>month</code>, <code>day</code>, <code>hour</code>,
 * <code>minute</code>, <code>second</code></li> <li><code>weekday</code>,
 * <code>year</code>, <code>month</code>, <code>day</code></li>
 * <li><code>year</code>, <code>month</code>, <code>day</code></li>
 * <li><code>year</code>, <code>month</code></li> <li><code>month</code>,
 * <code>day</code></li> <li><code>hour</code>, <code>minute</code>,
 * <code>second</code></li> <li><code>hour</code>, <code>minute</code></li>
 * </ul><p>Implementations may support other subsets, and requests will be
 * negotiated against all available subset-representation combinations to find
 * the best match. Two algorithms are available for this negotiation and
 * selected by the <code>formatMatcher</code> property: A fully specified
 * <code>"basic"</code> algorithm and an implementation dependent <code>"best
 * fit"</code> algorithm.</p> <dl><dt><code>weekday</code></dt> <dd>The
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
 * @return {string} <p>A string representing the time portion of the given
 * <code>Date</code> instance according to language-specific conventions.</p>
 * @see Intl.DateTimeFormat
 * @see Date.prototype.toLocaleDateString()
 * @see Date.prototype.toLocaleString()
 * @see Date.prototype.toTimeString()
 * @see Date.prototype.toString()
 */
Date.prototype.toLocaleTimeString = function (locales, options) {};

/**
 * <p>The <code>Date</code> object overrides the <code>toString()</code> method
 * of the <code>Object</code> object; it does not inherit
 * <code>Object.prototype.toString()</code>. For <code>Date</code> objects, the
 * <code>toString()</code> method returns a string representation of the
 * object.</p> <p>The <code>toString()</code> method always returns a string
 * representation of the date in American English.</p> <p>JavaScript calls the
 * <code>toString()</code> method automatically when a date is to be
 * represented as a text value or when a date is referred to in a string
 * concatenation.</p> <p><code>toString()</code> is a generic method. If
 * <code>this</code> is not a <code>Date</code> instance, it returns "Invalid
 * Date".</p>
 *
 * @summary 
 * @return {string} <p>A string representing the given date.</p>
 * @see Object.prototype.toString()
 * @see Date.prototype.toDateString()
 * @see Date.prototype.toLocaleString()
 * @see Date.prototype.toTimeString()
 */
Date.prototype.toString = function () {};

/**
 * <p><code>Date</code> instances refer to a specific point in time. Calling
 * <code>toString()</code> will return the date formatted in a human readable
 * form in American English. In SpiderMonkey, this consists of the date portion
 * (day, month, and year) followed by the time portion (hours, minutes,
 * seconds, and time zone). Sometimes it is desirable to obtain a string of the
 * time portion; such a thing can be accomplished with the
 * <code>toTimeString()</code> method.</p> <p>The <code>toTimeString()</code>
 * method is especially useful because compliant engines implementing ECMA-262
 * may differ in the string obtained from <code>toString()</code> for
 * <code>Date</code> objects, as the format is implementation-dependent; simple
 * string slicing approaches may not produce consistent results across multiple
 * engines.</p>
 *
 * @summary 
 * @return {string} <p>A string representing the time portion of the given
 * date in human readable form in American English.</p>
 * @see Date.prototype.toLocaleTimeString()
 * @see Date.prototype.toDateString()
 * @see Date.prototype.toString()
 */
Date.prototype.toTimeString = function () {};

/**
 * <p>The value returned by <code>toUTCString()</code> is a human readable
 * string in the <abbr title="Coordinated Universal Time">UTC</abbr> time zone.
 * The format of the return value may vary according to the platform. The most
 * common return value is a RFC-1123 formatted date stamp, which is a slightly
 * updated version of RFC-822 date stamps.</p>
 *
 * @summary 
 * @return {string} <p>A string representing the given date using the UTC time
 * zone.</p>
 * @see Date.prototype.toLocaleString()
 * @see Date.prototype.toDateString()
 * @see Date.prototype.toISOString()
 */
Date.prototype.toUTCString = function () {};

/**
 * <p>The <code>valueOf()</code> method returns the primitive value of a
 * <code>Date</code> object as a number data type, the number of milliseconds
 * since midnight 01 January, 1970 UTC.</p> <p>This method is functionally
 * equivalent to the <code>Date.prototype.getTime()</code> method.</p> <p>This
 * method is usually called internally by JavaScript and not explicitly in
 * code.</p>
 *
 * @summary 
 * @return {number} <p>The number of milliseconds between 1 January 1970
 * 00:00:00 UTC and the given date.</p>
 * @see Object.prototype.valueOf()
 * @see Date.prototype.getTime()
 */
Date.prototype.valueOf = function () {};

/**
 * <p>Strings are useful for holding data that can be represented in text form.
 * Some of the most-used operations on strings are to check their
 * <code>length</code>, to build and concatenate them using the + and += string
 * operators, checking for the existence or location of substrings with the
 * <code>indexOf()</code> method, or extracting substrings with the
 * <code>substring()</code> method.</p> <h3 id="Character_access">Character
 * access</h3> <p>There are two ways to access an individual character in a
 * string. The first is the <code>charAt()</code> method:</p> <pre
 * class="brush: js">return 'cat'.charAt(1); // returns "a" </pre> <p>The other
 * way (introduced in ECMAScript 5) is to treat the string as an array-like
 * object, where individual characters correspond to a numerical index:</p>
 * <pre class="brush: js">return 'cat'[1]; // returns "a" </pre> <p>For
 * character access using bracket notation, attempting to delete or assign a
 * value to these properties will not succeed. The properties involved are
 * neither writable nor configurable. (See <code>Object.defineProperty()</code>
 * for more information.)</p> <h3 id="Comparing_strings">Comparing strings</h3>
 * <p>C developers have the <code>strcmp()</code> function for comparing
 * strings. In JavaScript, you just use the less-than and greater-than
 * operators:</p> <pre class="brush: js">var a = 'a'; var b = 'b'; if (a &lt;
 * b) { // true console.log(a + ' is less than ' + b); } else if (a &gt; b) {
 * console.log(a + ' is greater than ' + b); } else { console.log(a + ' and ' +
 * b + ' are equal.'); } </pre> <p>A similar result can be achieved using the
 * <code>localeCompare()</code> method inherited by <code>String</code>
 * instances.</p> <h3
 * id="Distinction_between_string_primitives_and_String_objects">Distinction
 * between string primitives and <code>String</code> objects</h3> <p>Note that
 * JavaScript distinguishes between <code>String</code> objects and primitive
 * string values. (The same is true of <code>Boolean</code> and
 * <code>Numbers</code>.)</p> <p>String literals (denoted by double or single
 * quotes) and strings returned from <code>String</code> calls in a
 * non-constructor context (i.e., without using the <code>new</code> keyword)
 * are primitive strings. JavaScript automatically converts primitives to
 * <code>String</code> objects, so that it's possible to use
 * <code>String</code> object methods for primitive strings. In contexts where
 * a method is to be invoked on a primitive string or a property lookup occurs,
 * JavaScript will automatically wrap the string primitive and call the method
 * or perform the property lookup.</p> <pre class="brush: js">var s_prim =
 * 'foo'; var s_obj = new String(s_prim); console.log(typeof s_prim); // Logs
 * "string" console.log(typeof s_obj); // Logs "object" </pre> <p>String
 * primitives and <code>String</code> objects also give different results when
 * using <code>eval()</code>. Primitives passed to <code>eval</code> are
 * treated as source code; <code>String</code> objects are treated as all other
 * objects are, by returning the object. For example:</p> <pre class="brush:
 * js">var s1 = '2 + 2'; // creates a string primitive var s2 = new String('2 +
 * 2'); // creates a String object console.log(eval(s1)); // returns the number
 * 4 console.log(eval(s2)); // returns the string "2 + 2" </pre> <p>For these
 * reasons, code may break when it encounters <code>String</code> objects when
 * it expects a primitive string instead, although generally authors need not
 * worry about the distinction.</p> <p>A <code>String</code> object can always
 * be converted to its primitive counterpart with the <code>valueOf()</code>
 * method.</p> <pre class="brush: js">console.log(eval(s2.valueOf())); //
 * returns the number 4 </pre> <div class="note"><strong>Note:</strong> For
 * another possible approach to strings in JavaScript, please read the article
 * about <code>StringView</code> — a C-like representation of strings based on
 * typed arrays.</div>
 *
 * @summary 
 * @constructor
 * @extends Object
 * @implements Iterable<string>
 * @param {*=} thing Anything to be converted to a string.
 * @see DOMString
 * @see StringView
 */
function String(thing) {}

/**
 * <p>All <code>String</code> instances inherit from
 * <code>String.prototype</code>. Changes to the <code>String</code> prototype
 * object are propagated to all <code>String</code> instances.</p>
 *
 * @summary 
 * @type {Object}
 * @see String
 * @see Function.prototype
 */
String.prototype = null;

/**
 * <p>This property returns the number of code units in the string. UTF-16, the
 * string format used by JavaScript, uses a single 16-bit code unit to
 * represent the most common characters, but needs to use two code units for
 * less commonly-used characters, so it's possible for the value returned by
 * <code>length</code> to not match the actual number of characters in the
 * string.</p> <p>For an empty string, <code>length</code> is 0.</p> <p>The
 * static property <code>String.length</code> returns the value 1.</p>
 *
 * @summary 
 * @type {number}
 * @see String.length
 */
String.prototype.length = null;

/**
 * <p>This method returns a string and not a <code>String</code> object.</p>
 * <p>Because <code>fromCharCode()</code> is a static method of
 * <code>String</code>, you always use it as
 * <code>String.fromCharCode()</code>, rather than as a method of a
 * <code>String</code> object you created.</p>
 *
 * @summary 
 * @param {...number} num1_numN A sequence of numbers that are Unicode values.
 * @return {string} <p>A string containing the characters corresponding to the
 * sequence of Unicode values.</p>
 * @see String.fromCodePoint()
 * @see String.prototype.charAt()
 * @see String.prototype.charCodeAt()
 * @see String.prototype.codePointAt()
 */
String.fromCharCode = function (num1_numN) {};

/**
 * <p>Characters in a string are indexed from left to right. The index of the
 * first character is 0, and the index of the last character in a string called
 * <code>stringName</code> is <code>stringName.length - 1</code>. If the
 * <code>index</code> you supply is out of range, JavaScript returns an empty
 * string.</p> <p>If no index is provided to .charAt(), 0 will be used as
 * default.</p>
 *
 * @summary 
 * @param {number} index An integer between 0 and 1-less-than the length of the
 * string. If no index is provided, <code>charAt()</code> will use
 * <code>0</code>.
 * @return {string} <p>A string representing the character at the specified
 * index; empty string if <code>index</code> is out of range.</p>
 * @see String.prototype.indexOf()
 * @see String.prototype.lastIndexOf()
 * @see String.prototype.charCodeAt()
 * @see String.prototype.codePointAt()
 * @see String.prototype.split()
 * @see String.fromCodePoint()
 */
String.prototype.charAt = function (index) {};

/**
 * <p>Unicode code points range from 0 to 1114111 (0x10FFFF). The first 128
 * Unicode code points are a direct match of the ASCII character encoding. For
 * information on Unicode, see the JavaScript Guide.</p> <p>Note that
 * <code>charCodeAt()</code> will always return a value that is less than
 * 65536. This is because the higher code points are represented by a pair of
 * (lower valued) "surrogate" pseudo-characters which are used to comprise the
 * real character. Because of this, in order to examine or reproduce the full
 * character for individual characters of value 65536 and above, for such
 * characters, it is necessary to retrieve not only <code>charCodeAt(i)</code>,
 * but also <code>charCodeAt(i+1)</code> (as if examining/reproducing a string
 * with two letters), or to use codePointAt(i) instead. See example 2 and 3
 * below.</p> <p><code>charCodeAt()</code> returns <code>NaN</code> if the
 * given index is less than 0 or is equal to or greater than the length of the
 * string.</p> <p>Backward compatibility: In historic versions (like JavaScript
 * 1.2) the <code>charCodeAt()</code> method returns a number indicating the
 * ISO-Latin-1 codeset value of the character at the given index. The
 * ISO-Latin-1 codeset ranges from 0 to 255. The first 0 to 127 are a direct
 * match of the ASCII character set.</p>
 *
 * @summary 
 * @param {number} index An integer greater than or equal to 0 and less than
 * the length of the string; if it is not a number, it defaults to 0.
 * @return {number} <p>A number representing the UTF-16 code unit value of the
 * character at the given index; <code>NaN</code> if <code>index</code> is out
 * of range.</p>
 * @see String.fromCharCode()
 * @see String.prototype.charAt()
 * @see String.fromCodePoint()
 * @see String.prototype.codePointAt()
 */
String.prototype.charCodeAt = function (index) {};

/**
 * <p>The <code>concat()</code> function combines the text from one or more
 * strings and returns a new string. Changes to the text in one string do not
 * affect the other string.</p>
 *
 * @summary 
 * @param {...string} string2_stringN Strings to concatenate to this string.
 * @return {string} <p>A new string containing the combined text of the
 * strings provided.</p>
 * @see Array.prototype.concat()
 */
String.prototype.concat = function (string2_stringN) {};

/**
 * <p>Characters in a string are indexed from left to right. The index of the
 * first character is 0, and the index of the last character of a string called
 * <code>stringName</code> is <code>stringName.length - 1</code>.</p> <pre
 * class="brush: js">'Blue Whale'.indexOf('Blue'); // returns 0 'Blue
 * Whale'.indexOf('Blute'); // returns -1 'Blue Whale'.indexOf('Whale', 0); //
 * returns 5 'Blue Whale'.indexOf('Whale', 5); // returns 5 'Blue
 * Whale'.indexOf(''); // returns 0 'Blue Whale'.indexOf('', 9); // returns 9
 * 'Blue Whale'.indexOf('', 10); // returns 10 'Blue Whale'.indexOf('', 11); //
 * returns 10 </pre> <h3 id="Case-sensitivity">Case-sensitivity</h3> <p>The
 * <code>indexOf()</code> method is case sensitive. For example, the following
 * expression returns -1:</p> <pre class="brush: js">'Blue
 * Whale'.indexOf('blue'); // returns -1 </pre> <h3
 * id="Checking_occurrences">Checking occurrences</h3> <p>Note that '0' doesn't
 * evaluate to <code>true</code> and '-1' doesn't evaluate to
 * <code>false</code>. Therefore, when checking if a specific string exists
 * within another string the correct way to check would be:</p> <pre
 * class="brush: js">'Blue Whale'.indexOf('Blue') !== -1; // true 'Blue
 * Whale'.indexOf('Bloe') !== -1; // false </pre>
 *
 * @summary 
 * @param {string} searchValue A string representing the value to search for.
 * @param {number=} fromIndex
 * @return {number} <p>The index of the first occurrence of the specified
 * value; <strong>-1</strong> if not found.</p>
 * @see String.prototype.charAt()
 * @see String.prototype.lastIndexOf()
 * @see String.prototype.split()
 * @see Array.prototype.indexOf()
 */
String.prototype.indexOf = function (searchValue, fromIndex) {};

/**
 * <p>Characters in a string are indexed from left to right. The index of the
 * first character is 0, and the index of the last character is
 * <code>str.length - 1</code>.</p> <pre class="brush:
 * js">'canal'.lastIndexOf('a'); // returns 3 'canal'.lastIndexOf('a', 2); //
 * returns 1 'canal'.lastIndexOf('a', 0); // returns -1
 * 'canal'.lastIndexOf('x'); // returns -1 'canal'.lastIndexOf('c', -5); //
 * returns 0 'canal'.lastIndexOf('c', 0); // returns 0 'canal'.lastIndexOf('');
 * // returns 5 'canal'.lastIndexOf('', 2); // returns 2 </pre> <h3
 * id="Case-sensitivity">Case-sensitivity</h3> <p>The
 * <code>lastIndexOf()</code> method is case sensitive. For example, the
 * following expression returns -1:</p> <pre class="brush: js">'Blue Whale,
 * Killer Whale'.lastIndexOf('blue'); // returns -1 </pre>
 *
 * @summary 
 * @param {string} searchValue A string representing the value to search
 * for. If <code>searchValue</code> is an empty string,
 * then <code>fromIndex</code> is returned.
 * @param {number=} fromIndex
 * @return {number} <p>The index of the last occurrence of the specified
 * value; <strong>-1</strong> if not found.</p>
 * @see String.prototype.charAt()
 * @see String.prototype.indexOf()
 * @see String.prototype.split()
 * @see Array.prototype.indexOf()
 * @see Array.prototype.lastIndexOf()
 */
String.prototype.lastIndexOf = function (searchValue, fromIndex) {};

/**
 * <p>Returns an integer indicating whether the <strong>referenceStr</strong>
 * comes before, after or is equivalent to the <strong>compareStr</strong>.</p>
 * <ul> <li>Negative when the <strong>referenceStr</strong> occurs before
 * <strong>compareStr</strong></li> <li>Positive when the
 * <strong>referenceStr</strong> occurs after <strong>compareStr</strong></li>
 * <li>Returns 0 if they are equivalent</li> </ul> <p><strong>DO NOT rely on
 * exact return values of -1 or 1. </strong>Negative and positive integer
 * results vary between browsers (as well as between browser versions) because
 * the W3C specification only mandates negative and positive values. Some
 * browsers may return -2 or 2 or even some other negative or positive
 * value.</p>
 *
 * @summary 
 * @param {string} compareString The string against which the referring string
 * is compared
 * @param {string=} locales <p>Optional. A string with a BCP 47 language tag,
 * or an array of such strings. For the general form and interpretation of the
 * <code>locales</code> argument, see the Intl page. The following Unicode
 * extension keys are allowed:</p> <dl><dt><code>co</code></dt> <dd>Variant
 * collations for certain locales. Possible values include:
 * <code>"big5han"</code>, <code>"dict"</code>, <code>"direct"</code>,
 * <code>"ducet"</code>, <code>"gb2312"</code>, <code>"phonebk"</code>,
 * <code>"phonetic"</code>, <code>"pinyin"</code>, <code>"reformed"</code>,
 * <code>"searchjl"</code>, <code>"stroke"</code>, <code>"trad"</code>,
 * <code>"unihan"</code>. The <code>"standard"</code> and <code>"search"</code>
 * values are ignored; they are replaced by the <code>options</code> property
 * <code>usage</code> (see below).</dd> <dt><code>kn</code></dt> <dd>Whether
 * numeric collation should be used, such that "1" &lt; "2" &lt; "10". Possible
 * values are <code>"true"</code> and <code>"false"</code>. This option can be
 * set through an <code>options</code> property or through a Unicode extension
 * key; if both are provided, the <code>options</code> property takes
 * precedence.</dd> <dt><code>kf</code></dt> <dd>Whether upper case or lower
 * case should sort first. Possible values are <code>"upper"</code>,
 * <code>"lower"</code>, or <code>"false"</code> (use the locale's default).
 * This option can be set through an <code>options</code> property or through a
 * Unicode extension key; if both are provided, the <code>options</code>
 * property takes precedence.
 * @param {{localeMatcher: string, usage: string, sensitivity: string,
 * ignorePunctuation: boolean, numeric: boolean, caseFirst: boolean}=} options
 * <p>Optional. An object with some or all of the following properties:</p>
 * <dl><dt><code>localeMatcher</code></dt> <dd>The locale matching algorithm to
 * use. Possible values are <code>"lookup"</code> and <code>"best fit"</code>;
 * the default is <code>"best fit"</code>. For information about this option,
 * see the Intl page.</dd> <dt><code>usage</code></dt> <dd>Whether the
 * comparison is for sorting or for searching for matching strings. Possible
 * values are <code>"sort"</code> and <code>"search"</code>; the default is
 * <code>"sort"</code>.</dd> <dt><code>sensitivity</code></dt> <dd> <p>Which
 * differences in the strings should lead to non-zero result values. Possible
 * values are:</p> <ul><li><code>"base"</code>: Only strings that differ in
 * base letters compare as unequal. Examples: <code>a ≠ b</code>, <code>a =
 * á</code>, <code>a = A</code>.</li> <li><code>"accent"</code>: Only strings
 * that differ in base letters or accents and other diacritic marks compare as
 * unequal. Examples: <code>a ≠ b</code>, <code>a ≠ á</code>, <code>a =
 * A</code>.</li> <li><code>"case"</code>: Only strings that differ in base
 * letters or case compare as unequal. Examples: <code>a ≠ b</code>, <code>a =
 * á</code>, <code>a ≠ A</code>.</li> <li><code>"variant"</code>: Strings that
 * differ in base letters, accents and other diacritic marks, or case compare
 * as unequal. Other differences may also be taken into consideration.
 * Examples: <code>a ≠ b</code>, <code>a ≠ á</code>, <code>a ≠ A</code>.</li>
 * </ul><p>The default is <code>"variant"</code> for usage <code>"sort"</code>;
 * it's locale dependent for usage <code>"search"</code>.</p> </dd>
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
 * @return {number} <p>A <strong>negative</strong> number if the reference
 * string occurs before the compare string; <strong>positive</strong> if the
 * reference string occurs after the compare string; <strong>0</strong> if they
 * are equivalent.</p>
 * @see Intl.Collator
 */
String.prototype.localeCompare = function (compareString, locales, options) {};

/**
 * <p>If the regular expression does not include the <code>g</code> flag,
 * <code>str.match()</code> will return the same result as
 * <code>RegExp.exec()</code>. The returned <code>Array</code> has an extra
 * <code>input</code> property, which contains the original string that was
 * parsed. In addition, it has an <code>index</code> property, which represents
 * the zero-based index of the match in the string.</p> <p>If the regular
 * expression includes the <code>g</code> flag, the method returns an
 * <code>Array</code> containing all matched substrings rather than match
 * objects. Captured groups are not returned. If there were no matches, the
 * method returns <code>null</code>.</p> <h3 id="See_also_RegExp_methods">See
 * also: <code>RegExp</code> methods</h3> <ul> <li>If you need to know if a
 * string matches a regular expression <code>RegExp</code>, use
 * <code>search()</code>.</li> <li>If you only want the first match found, you
 * might want to use <code>RegExp.exec()</code> instead.</li> <li>if you want
 * to obtain capture groups and the global flag is set, you need to use
 * <code>RegExp.exec()</code> instead.</li> </ul>
 *
 * @summary 
 * @param {(RegExp|string|String)} regexp A regular expression object. If a
 * non-RegExp object <code>obj</code> is passed, it is implicitly converted to
 * a <code>RegExp</code> by using <code>new RegExp(obj)</code>. If you don't
 * give any parameter and use the match() method directly, you will get an
 * <code>Array</code> with an empty string:[""].
 * @return {?(Array<string>|Array<Array<string>>)} <p>An <code>Array</code>
 * containing the entire match result and any parentheses-captured matched
 * results; <code>null</code> if there were no matches.</p>
 * @see RegExp
 * @see RegExp.prototype.exec()
 * @see RegExp.prototype.test()
 */
String.prototype.match = function (regexp) {};

/**
 * <p>This method does not change the <code>String</code> object it is called
 * on. It simply returns a new string.</p> <p>To perform a global search and
 * replace, include the <code>g</code> switch in the regular expression.</p>
 * <h3 id="Specifying_a_string_as_a_parameter">Specifying a string as a
 * parameter</h3> <p>The replacement string can include the following special
 * replacement patterns:</p> <table class="fullwidth-table"> <tbody> <tr> <td
 * class="header">Pattern</td> <td class="header">Inserts</td> </tr> <tr>
 * <td><code>$$</code></td> <td>Inserts a "$".</td> </tr> <tr>
 * <td><code>$&amp;</code></td> <td>Inserts the matched substring.</td> </tr>
 * <tr> <td><code>$`</code></td> <td>Inserts the portion of the string that
 * precedes the matched substring.</td> </tr> <tr> <td><code>$'</code></td>
 * <td>Inserts the portion of the string that follows the matched
 * substring.</td> </tr> <tr> <td><code>$<em>n</em></code></td> <td>Where
 * <code><em>n</em></code> is a non-negative integer lesser than 100, inserts
 * the <em>n</em>th parenthesized submatch string, provided the first argument
 * was a <code>RegExp</code> object.</td> </tr> </tbody> </table> <h3
 * id="Specifying_a_function_as_a_parameter">Specifying a function as a
 * parameter</h3> <p>You can specify a function as the second parameter. In
 * this case, the function will be invoked after the match has been performed.
 * The function's result (return value) will be used as the replacement string.
 * (Note: the above-mentioned special replacement patterns do <em>not</em>
 * apply in this case.) Note that the function will be invoked multiple times
 * for each full match to be replaced if the regular expression in the first
 * parameter is global.</p> <p>The arguments to the function are as
 * follows:</p> <table class="fullwidth-table"> <tbody> <tr> <td
 * class="header">Possible name</td> <td class="header">Supplied value</td>
 * </tr> <tr> <td><code>match</code></td> <td>The matched substring.
 * (Corresponds to <code>$&amp;</code> above.)</td> </tr> <tr> <td><code>p1,
 * p2, ...</code></td> <td>The <em>n</em>th parenthesized submatch string,
 * provided the first argument to <code>replace()</code> was a
 * <code>RegExp</code> object. (Corresponds to <code>$1</code>,
 * <code>$2</code>, etc. above.) For example, if <code>/(\a+)(\b+)/</code>, was
 * given, <code>p1</code> is the match for <code>\a+</code>,
 * and <code>p2</code> for <code>\b+</code>.</td> </tr> <tr>
 * <td><code>offset</code></td> <td>The offset of the matched substring within
 * the whole string being examined. (For example, if the whole string was
 * <code>'abcd'</code>, and the matched substring was <code>'bc'</code>, then
 * this argument will be 1.)</td> </tr> <tr> <td><code>string</code></td>
 * <td>The whole string being examined.</td> </tr> </tbody> </table> <p>(The
 * exact number of arguments will depend on whether the first argument was a
 * <code>RegExp</code> object and, if so, how many parenthesized submatches it
 * specifies.)</p> <p>The following example will set <code>newString</code>
 * to <code>'abc - 12345 - #$*%'</code>:</p> <pre class="brush: js">function
 * replacer(match, p1, p2, p3, offset, string) { // p1 is nondigits, p2 digits,
 * and p3 non-alphanumerics return [p1, p2, p3].join(' - '); } var newString =
 * 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer); </pre>
 *
 * @summary 
 * @param {(RegExp|string)} regexp_substr A <code>RegExp</code> object or
 * literal. The match or matches are replaced with <code>newSubStr</code> or
 * the value returned by the specified <code>function</code>. A
 * <code>String</code> that is to be replaced by <code>newSubStr</code>. It is
 * treated as a verbatim string and is <em>not</em> interpreted as a regular
 * expression. Only the first occurrence will be replaced.
 * @param {(string|Function)} newSubStr_function The <code>String</code> that
 * replaces the substring specified by the specified <code>regexp</code> or
 * <code>substr</code> parameter. A number of special replacement patterns are
 * supported; see the "Specifying a string as a parameter" section below. A
 * function to be invoked to create the new substring to be used to replace the
 * matches to the given <code>regexp</code> or <code>substr</code>. The
 * arguments supplied to this function are described in the "Specifying a
 * function as a parameter" section below.
 * @return {string} <p>A new string with some or all matches of a pattern
 * replaced by a replacement.</p>
 * @see String.prototype.match()
 * @see RegExp.prototype.exec()
 * @see RegExp.prototype.test()
 */
String.prototype.replace = function (regexp_substr, newSubStr_function) {};

/**
 * <p>When you want to know whether a pattern is found and also its index in a
 * string use <code>search()</code> (if you only want to know it exists, use
 * the similar <code>test()</code> method, which returns a boolean); for more
 * information (but slower execution) use <code>match()</code> (similar to the
 * regular expression <code>exec()</code> method).</p>
 *
 * @summary 
 * @param {RegExp} regexp A regular expression object. If a non-RegExp object
 * <code>obj</code> is passed, it is implicitly converted to a
 * <code>RegExp</code> by using <code>new RegExp(obj)</code>.
 * @return {number} <p>The index of the first match between the regular
 * expression and the given string; if not found, <strong>-1</strong>.</p>
 * @see String.prototype.match()
 * @see RegExp.prototype.exec()
 */
String.prototype.search = function (regexp) {};

/**
 * <p><code>slice()</code> extracts the text from one string and returns a new
 * string. Changes to the text in one string do not affect the other
 * string.</p> <p><code>slice()</code> extracts up to but not including
 * <code>endIndex</code>. <code>str.slice(1, 4)</code> extracts the second
 * character through the fourth character (characters indexed 1, 2, and 3).</p>
 * <p>As an example, <code>str.slice(2, -1)</code> extracts the third character
 * through the second to last character in the string.</p>
 *
 * @summary 
 * @param {number} beginSlice
 * @param {number=} endSlice
 * @return {string} <p>A new string containing the extracted section of the
 * string.</p>
 * @see String.prototype.substr()
 * @see String.prototype.substring()
 * @see Array.prototype.slice()
 */
String.prototype.slice = function (beginSlice, endSlice) {};

/**
 * <p>When found, <code>separator</code> is removed from the string and the
 * substrings are returned in an array. If <code>separator</code> is not found
 * or is omitted, the array contains one element consisting of the entire
 * string. If <code>separator</code> is an empty string, <code>str</code> is
 * converted to an array of characters.</p> <p>If <code>separator</code> is a
 * regular expression that contains capturing parentheses, then each time
 * <code>separator</code> is matched, the results (including any undefined
 * results) of the capturing parentheses are spliced into the output array.
 * However, not all browsers support this capability.</p> <p></p><div
 * class="note"><strong>Note:</strong> When the string is empty,
 * <code>split()</code> returns an array containing one empty string, rather
 * than an empty array. If the string and separator are both empty strings, an
 * empty array is returned.</div><p></p>
 *
 * @summary 
 * @param {(string|RegExp)=} separator Optional. Specifies the character(s) to
 * use for separating the string. The <code>separator</code> is treated as a
 * string or a regular expression. If <code>separator</code> is omitted or
 * does not occur in str, the array returned contains one element consisting of
 * the entire string. If <code>separator</code> is an empty string,
 * <code>str</code> is converted to an array of characters.
 * @param {number=} limit <p>Optional. Integer specifying a limit on the number
 * of splits to be found. The <code>split()</code> method still splits on every
 * match of <code>separator</code>, until the number of split items match the
 * <code>limit</code> or the string falls short of <code>separator</code>.</p>
 * @return {Array<string>} <p>An array of strings split at each point where
 * the separator occurs in the given string.</p>
 * @see String.prototype.charAt()
 * @see String.prototype.indexOf()
 * @see String.prototype.lastIndexOf()
 * @see Array.prototype.join()
 */
String.prototype.split = function (separator, limit) {};

/**
 * <p><code>start</code> is a character index. The index of the first character
 * is 0, and the index of the last character is 1 less than the length of the
 * string. <code>substr()</code> begins extracting characters at
 * <code>start</code> and collects <code>length</code> characters (unless it
 * reaches the end of the string first, in which case it will return
 * fewer).</p> <p>If <code>start</code> is positive and is greater than or
 * equal to the length of the string, <code>substr()</code> returns an empty
 * string.</p> <p>If <code>start</code> is negative, <code>substr()</code> uses
 * it as a character index from the end of the string. If <code>start</code> is
 * negative and <code>abs(start)</code> is larger than the length of the
 * string, <code>substr()</code> uses 0 as the start index. Note: the described
 * handling of negative values of the <code>start</code> argument is not
 * supported by Microsoft JScript.</p> <p>If <code>length</code> is 0 or
 * negative, <code>substr()</code> returns an empty string. If
 * <code>length</code> is omitted, <code>substr()</code> extracts characters to
 * the end of the string.</p>
 *
 * @summary 
 * @param {number} start Location at which to begin extracting characters. If a
 * negative number is given, it is treated as <code>strLength + start</code>
 * where <code>strLength</code> is the length of the string (for example, if
 * <code>start</code> is -3 it is treated as <code>strLength - 3</code>.)
 * @param {number=} length Optional. The number of characters to extract.
 * @return {string} <p>A new string containing the extracted section of the
 * given string. If <strong><code>length</code></strong> is <strong>0</strong>
 * or a negative number, an empty string is returned.</p>
 * @see String.prototype.slice()
 * @see String.prototype.substring()
 */
String.prototype.substr = function (start, length) {};

/**
 * <p><code>substring()</code> extracts characters from <code>indexStart</code>
 * up to <em>but not including</em> <code>indexEnd</code>. In particular:</p>
 * <ul> <li>If <code><var>indexStart </var></code>equals
 * <code><var>indexEnd</var></code>, <code>substring()</code> returns an empty
 * string.</li> <li>If <code>indexEnd</code> is omitted,
 * <code>substring()</code> extracts characters to the end of the string.</li>
 * <li>If either argument is less than 0 or is <code>NaN</code>, it is treated
 * as if it were 0.</li> <li>If either argument is greater than
 * <code>stringName.length</code>, it is treated as if it were
 * <code>stringName.length</code>.</li> </ul> <p>If <code>indexStart</code> is
 * greater than <code>indexEnd</code>, then the effect of
 * <code>substring()</code> is as if the two arguments were swapped; for
 * example, <code><em>str</em>.substring(1, 0) == <em>str</em>.substring(0,
 * 1)</code>.</p>
 *
 * @summary 
 * @param {number} indexA
 * @param {number=} indexB
 * @return {string} <p>A new string containing the extracted section of the
 * given string.</p>
 * @see String.prototype.substr()
 * @see String.prototype.slice()
 */
String.prototype.substring = function (indexA, indexB) {};

/**
 * <p>The <code>toLocaleLowerCase()</code> method returns the value of the
 * string converted to lower case according to any locale-specific case
 * mappings. <code>toLocaleLowerCase()</code> does not affect the value of the
 * string itself. In most cases, this will produce the same result as
 * <code>toLowerCase()</code>, but for some locales, such as Turkish, whose
 * case mappings do not follow the default case mappings in Unicode, there may
 * be a different result.</p>
 *
 * @summary 
 * @return {string} <p>A new string representing the calling string converted
 * to lower case, according to any locale-specific case mappings.</p>
 * @see String.prototype.toLocaleUpperCase()
 * @see String.prototype.toLowerCase()
 * @see String.prototype.toUpperCase()
 */
String.prototype.toLocaleLowerCase = function () {};

/**
 * <p>The <code>toLocaleUpperCase()</code> method returns the value of the
 * string converted to upper case according to any locale-specific case
 * mappings. <code>toLocaleUpperCase()</code> does not affect the value of the
 * string itself. In most cases, this will produce the same result as
 * <code>toUpperCase()</code>, but for some locales, such as Turkish, whose
 * case mappings do not follow the default case mappings in Unicode, there may
 * be a different result.</p>
 *
 * @summary 
 * @return {string} <p>A new string representing the calling string converted
 * to upper case, according to any locale-specific case mappings.</p>
 * @see String.prototype.toLocaleLowerCase()
 * @see String.prototype.toLowerCase()
 * @see String.prototype.toUpperCase()
 */
String.prototype.toLocaleUpperCase = function () {};

/**
 * <p>The <code>toLowerCase()</code> method returns the value of the string
 * converted to lower case. <code>toLowerCase()</code> does not affect the
 * value of the string <code>str</code> itself.</p>
 *
 * @summary 
 * @return {string} <p>A new string representing the calling string converted
 * to lower case.</p>
 * @see String.prototype.toLocaleLowerCase()
 * @see String.prototype.toLocaleUpperCase()
 * @see String.prototype.toUpperCase()
 */
String.prototype.toLowerCase = function () {};

/**
 * <p>The <code>String</code> object overrides the <code>toString()</code>
 * method of the <code>Object</code> object; it does not inherit
 * <code>Object.prototype.toString()</code>. For <code>String</code> objects,
 * the <code>toString()</code> method returns a string representation of the
 * object and is the same as the <code>String.prototype.valueOf()</code>
 * method.</p>
 *
 * @summary 
 * @return {string} <p>A string representing the calling object.</p>
 * @see Object.prototype.toSource()
 * @see String.prototype.valueOf()
 */
String.prototype.toString = function () {};

/**
 * <p>The <code>toUpperCase()</code> method returns the value of the string
 * converted to upper case. <code>toUpperCase()</code> does not affect the
 * value of the string itself.</p>
 *
 * @summary 
 * @return {string} <p>A new string representing the calling string converted
 * to upper case.</p>
 * @see String.prototype.toLocaleLowerCase()
 * @see String.prototype.toLocaleUpperCase()
 * @see String.prototype.toLowerCase()
 */
String.prototype.toUpperCase = function () {};

/**
 * <p>The <code>valueOf()</code> method of <code>String</code> returns the
 * primitive value of a <code>String</code> object as a string data type. This
 * value is equivalent to <code>String.prototype.toString()</code>.</p> <p>This
 * method is usually called internally by JavaScript and not explicitly in
 * code.</p>
 *
 * @summary 
 * @return {string} <p>A string representing the primitive value of a given
 * <code>String</code> object.</p>
 * @see String.prototype.toString()
 * @see Object.prototype.valueOf()
 */
String.prototype.valueOf = function () {};

/**
 * <p>There are 2 ways to create a <code>RegExp</code> object: a literal
 * notation and a constructor. To indicate strings, the parameters to the
 * literal notation do not use quotation marks while the parameters to the
 * constructor function do use quotation marks. So the following expressions
 * create the same regular expression:</p> <pre class="brush: js">/ab+c/i; new
 * RegExp('ab+c', 'i'); new RegExp(/ab+c/, 'i'); </pre> <p>The literal notation
 * provides compilation of the regular expression when the expression is
 * evaluated. Use literal notation when the regular expression will remain
 * constant. For example, if you use literal notation to construct a regular
 * expression used in a loop, the regular expression won't be recompiled on
 * each iteration.</p> <p>The constructor of the regular expression object, for
 * example, <code>new RegExp('ab+c')</code>, provides runtime compilation of
 * the regular expression. Use the constructor function when you know the
 * regular expression pattern will be changing, or you don't know the pattern
 * and are getting it from another source, such as user input.</p> <p>Starting
 * with ECMAScript 6, <code>new RegExp(/ab+c/, 'i')</code> no longer throws a
 * <code>TypeError</code> ("can't supply flags when constructing one RegExp
 * from another") when the first argument is a <code>RegExp</code> and the
 * second <code>flags</code> argument is present. A new <code>RegExp</code>
 * from the arguments is created instead.</p> <p>When using the constructor
 * function, the normal string escape rules (preceding special characters with
 * \ when included in a string) are necessary. For example, the following are
 * equivalent:</p> <pre class="brush: js">var re = /\w+/; var re = new
 * RegExp('\\w+'); </pre>
 *
 * @summary 
 * @constructor
 * @extends Object
 * @param {string} pattern The text of the regular expression.
 * @param {string=} flags <p>If specified, flags can have any combination of
 * the following values:</p> <dl> <dt><code>g</code></dt> <dd>global match;
 * find all matches rather than stopping after the first match</dd>
 * <dt><code>i</code></dt> <dd>ignore case</dd> <dt><code>m</code></dt>
 * <dd>multiline; treat beginning and end characters (^ and $) as working over
 * multiple lines (i.e., match the beginning or end of <em>each</em> line
 * (delimited by \n or \r), not only the very beginning or end of the whole
 * input string)</dd> <dt><code>u</code></dt> <dd>unicode; treat pattern as a
 * sequence of unicode code points</dd> <dt><code>y</code></dt> <dd>sticky;
 * matches only from the index indicated by the <code>lastIndex</code> property
 * of this regular expression in the target string (and does not attempt to
 * match from any later indexes).
 * @see String.prototype.match()
 * @see String.prototype.replace()
 */
function RegExp(pattern, flags) {}

/**
 * <p>See <code>RegExp</code> for a description of <code>RegExp</code>
 * instances. <code>RegExp</code> instances inherit from
 * <code>RegExp.prototype</code>. Modifications to the prototype object are
 * propagated to all <code>RegExp</code> instances.</p>
 *
 * @summary 
 * @type {Object}
 * @see RegExp
 * @see Function.prototype
 */
RegExp.prototype = null;

/**
 * <p>This property is set only if the regular expression instance used the
 * <code>"g"</code> flag to indicate a global search. The following rules
 * apply:</p> <ul> <li>If <code>lastIndex</code> is greater than the length of
 * the string, <code>test()</code> and <code>exec()</code> fail, then
 * <code>lastIndex</code> is set to 0.</li> <li>If <code>lastIndex</code> is
 * equal to the length of the string and if the regular expression matches the
 * empty string, then the regular expression matches input starting at
 * <code>lastIndex</code>.</li> <li>If <code>lastIndex</code> is equal to the
 * length of the string and if the regular expression does not match the empty
 * string, then the regular expression mismatches input, and
 * <code>lastIndex</code> is reset to 0.</li> <li>Otherwise,
 * <code>lastIndex</code> is set to the next position following the most recent
 * match.</li> </ul>
 *
 * @summary 
 * @type {number}
 * @see RegExp.prototype.ignoreCase
 * @see RegExp.prototype.global
 * @see RegExp.prototype.multiline
 * @see RegExp.prototype.source
 * @see RegExp.prototype.sticky
 */
RegExp.prototype.lastIndex = null;

/**
 * <p>The value of <code>global</code> is a <code>Boolean</code> and
 * <code>true</code> if the "<code>g</code>" flag was used; otherwise,
 * <code>false</code>. The "<code>g</code>" flag indicates that the regular
 * expression should be tested against all possible matches in a string.</p>
 * <p>You cannot change this property directly.</p>
 *
 * @summary 
 * @type {boolean}
 * @see RegExp.lastIndex
 * @see RegExp.prototype.ignoreCase
 * @see RegExp.prototype.multiline
 * @see RegExp.prototype.source
 * @see RegExp.prototype.sticky
 */
RegExp.prototype.global = null;

/**
 * <p>The value of <code>ignoreCase</code> is a <code>Boolean</code> and
 * <code>true</code> if the "<code>i</code>" flag was used; otherwise,
 * <code>false</code>. The "<code>i</code>" flag indicates that case should be
 * ignored while attempting a match in a string.</p> <p>You cannot change this
 * property directly.</p>
 *
 * @summary 
 * @type {boolean}
 * @see RegExp.lastIndex
 * @see RegExp.prototype.global
 * @see RegExp.prototype.multiline
 * @see RegExp.prototype.source
 * @see RegExp.prototype.sticky
 */
RegExp.prototype.ignoreCase = null;

/**
 * <p>The value of <code>multiline</code> is a <code>Boolean</code> and is true
 * if the "<code>m</code>" flag was used; otherwise, false. The
 * "<code>m</code>" flag indicates that a multiline input string should be
 * treated as multiple lines. For example, if "<code>m</code>" is used,
 * "<code>^</code>" and "<code>$</code>" change from matching at only the start
 * or end of the entire string to the start or end of any line within the
 * string.</p> <p>You cannot change this property directly.</p>
 *
 * @summary 
 * @type {boolean}
 * @see RegExp.lastIndex
 * @see RegExp.prototype.global
 * @see RegExp.prototype.ignoreCase
 * @see RegExp.prototype.source
 * @see RegExp.prototype.sticky
 */
RegExp.prototype.multiline = null;

/**
 * 
 *
 * @summary 
 * @type {string}
 * @see RegExp.prototype.flags
 */
RegExp.prototype.source = null;

/**
 * <p>Consider the following example:</p> <pre class="brush: js">// Match
 * "quick brown" followed by "jumps", ignoring characters in between //
 * Remember "brown" and "jumps" // Ignore case var re =
 * /quick\s(brown).+?(jumps)/ig; var result = re.exec('The Quick Brown Fox
 * Jumps Over The Lazy Dog'); </pre> <p>The following table shows the results
 * for this script:</p> <table class="fullwidth-table"> <tbody> <tr> <td
 * class="header">Object</td> <td class="header">Property/Index</td> <td
 * class="header">Description</td> <td class="header">Example</td> </tr> <tr>
 * <td rowspan="4"><code>result</code></td> <td><code>[0]</code></td> <td>The
 * full string of characters matched</td> <td><code>Quick Brown Fox
 * Jumps</code></td> </tr> <tr> <td><code>[1], ...[<em>n</em> ]</code></td>
 * <td>The parenthesized substring matches, if any. The number of possible
 * parenthesized substrings is unlimited.</td> <td><code>[1] = Brown<br> [2] =
 * Jumps</code></td> </tr> <tr> <td><code>index</code></td> <td>The 0-based
 * index of the match in the string.</td> <td><code>4</code></td> </tr> <tr>
 * <td><code>input</code></td> <td>The original string.</td> <td><code>The
 * Quick Brown Fox Jumps Over The Lazy Dog</code></td> </tr> <tr> <td
 * rowspan="5"><code>re</code></td> <td><code>lastIndex</code></td> <td>The
 * index at which to start the next match. When "g" is absent, this will remain
 * as 0.</td> <td><code>25</code></td> </tr> <tr>
 * <td><code>ignoreCase</code></td> <td>Indicates if the "<code>i</code>" flag
 * was used to ignore case.</td> <td><code>true</code></td> </tr> <tr>
 * <td><code>global</code></td> <td>Indicates if the "<code>g</code>" flag was
 * used for a global match.</td> <td><code>true</code></td> </tr> <tr>
 * <td><code>multiline</code></td> <td>Indicates if the "<code>m</code>" flag
 * was used to search in strings across multiple lines.</td>
 * <td><code>false</code></td> </tr> <tr> <td><code>source</code></td> <td>The
 * text of the pattern.</td> <td><code>quick\s(brown).+?(jumps)</code></td>
 * </tr> </tbody> </table>
 *
 * @summary 
 * @param {string} str The string against which to match the regular
 * expression.
 * @return {?(Array<string>)} <p>If the match succeeds, the
 * <code>exec()</code> method returns an array and updates properties of the
 * regular expression object. The returned array has the matched text as the
 * first item, and then one item for each capturing parenthesis that matched
 * containing the text that was captured.</p> <p>If the match fails, the
 * <code>exec()</code> method returns <code>null</code>.</p>
 * @see RegExp
 */
RegExp.prototype.exec = function (str) {};

/**
 * <p>Use <code>test()</code> whenever you want to know whether a pattern is
 * found in a string (similar to the <code>String.prototype.search()</code>
 * method, difference is that test returns a boolean, whilst search returns the
 * index (if found) or -1 if not found); for more information (but slower
 * execution) use the <code>exec()</code> method (similar to the
 * <code>String.prototype.match()</code> method). As with <code>exec()</code>
 * (or in combination with it), <code>test()</code> called multiple times on
 * the same global regular expression instance will advance past the previous
 * match.</p>
 *
 * @summary 
 * @param {string} str The string against which to match the regular
 * expression.
 * @return {boolean} <p><code>true</code> if there is a match between the
 * regular expression and the specified string; otherwise,
 * <code>false</code>.</p>
 * @see RegExp
 */
RegExp.prototype.test = function (str) {};

/**
 * <p>The <code>RegExp</code> object overrides the <code>toString()</code>
 * method of the <code>Object</code> object; it does not inherit
 * <code>Object.prototype.toString()</code>. For <code>RegExp</code> objects,
 * the <code>toString()</code> method returns a string representation of the
 * regular expression.</p>
 *
 * @summary 
 * @return {string} <p>A string representing the given object.</p>
 * @see Object.prototype.toString()
 */
RegExp.prototype.toString = function () {};

/**
 * <p>Arrays are list-like objects whose prototype has methods to perform
 * traversal and mutation operations. Neither the length of a JavaScript array
 * nor the types of its elements are fixed. Since an array's length can change
 * at any time, and data can be stored at non-contiguous locations in the
 * array, JavaScript arrays are not guaranteed to be dense; this depends on how
 * the programmer chooses to use them. In general, these are convenient
 * characteristics; but if these features are not desirable for your particular
 * use, you might consider using typed arrays.</p> <p>Some people think that
 * you shouldn't use an array as an associative array. In any case, you can use
 * plain <code>objects</code> instead, although doing so comes with its own
 * caveats. See the post Lightweight JavaScript dictionaries with arbitrary
 * keys as an example.</p> <h3 id="Accessing_array_elements">Accessing array
 * elements</h3> <p>JavaScript arrays are zero-indexed: the first element of an
 * array is at index <code>0</code>, and the last element is at the index equal
 * to the value of the array's <code>length</code> property minus 1.</p> <pre
 * class="brush: js">var arr = ['this is the first element', 'this is the
 * second element']; console.log(arr[0]); // logs 'this is the first element'
 * console.log(arr[1]); // logs 'this is the second element'
 * console.log(arr[arr.length - 1]); // logs 'this is the second element'
 * </pre> <p>Array elements are object properties in the same way that
 * <code>toString</code> is a property, but trying to access an element of an
 * array as follows throws a syntax error, because the property name is not
 * valid:</p> <pre class="brush: js">console.log(arr.0); // a syntax error
 * </pre> <p>There is nothing special about JavaScript arrays and the
 * properties that cause this. JavaScript properties that begin with a digit
 * cannot be referenced with dot notation; and must be accessed using bracket
 * notation. For example, if you had an object with a property named
 * <code>'3d'</code>, it can only be referenced using bracket notation.
 * E.g.:</p> <pre class="brush: js">var years = [1950, 1960, 1970, 1980, 1990,
 * 2000, 2010]; console.log(years.0); // a syntax error console.log(years[0]);
 * // works properly </pre> <pre class="brush:
 * js">renderer.3d.setTexture(model, 'character.png'); // a syntax error
 * renderer['3d'].setTexture(model, 'character.png'); // works properly </pre>
 * <p>Note that in the <code>3d</code> example, <code>'3d'</code> had to be
 * quoted. It's possible to quote the JavaScript array indexes as well (e.g.,
 * <code>years['2']</code> instead of <code>years[2]</code>), although it's not
 * necessary. The 2 in <code>years[2]</code> is coerced into a string by the
 * JavaScript engine through an implicit <code>toString</code> conversion. It
 * is for this reason that <code>'2'</code> and <code>'02'</code> would refer
 * to two different slots on the <code>years</code> object and the following
 * example could be <code>true</code>:</p> <pre class="brush:
 * js">console.log(years['2'] != years['02']); </pre> <p>Similarly, object
 * properties which happen to be reserved words(!) can only be accessed as
 * string literals in bracket notation(but it can be accessed by dot notation
 * in firefox 40.0a2 at least):</p> <pre class="brush: js">var promise = {
 * 'var' : 'text', 'array': [1, 2, 3, 4] }; console.log(promise['var']); </pre>
 * <h3 id="Relationship_between_length_and_numerical_properties">Relationship
 * between <code>length</code> and numerical properties</h3> <p>A JavaScript
 * array's <code>length</code> property and numerical properties are connected.
 * Several of the built-in array methods (e.g., <code>join</code>,
 * <code>slice</code>, <code>indexOf</code>, etc.) take into account the value
 * of an array's <code>length</code> property when they're called. Other
 * methods (e.g., <code>push</code>, <code>splice</code>, etc.) also result in
 * updates to an array's <code>length</code> property.</p> <pre class="brush:
 * js">var fruits = []; fruits.push('banana', 'apple', 'peach');
 * console.log(fruits.length); // 3 </pre> <p>When setting a property on a
 * JavaScript array when the property is a valid array index and that index is
 * outside the current bounds of the array, the engine will update the array's
 * <code>length</code> property accordingly:</p> <pre class="brush:
 * js">fruits[5] = 'mango'; console.log(fruits[5]); // 'mango'
 * console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
 * console.log(fruits.length); // 6 </pre> <p>Increasing the
 * <code>length</code>.</p> <pre class="brush: js">fruits.length = 10;
 * console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
 * console.log(fruits.length); // 10 </pre> <p>Decreasing the
 * <code>length</code> property does, however, delete elements.</p> <pre
 * class="brush: js">fruits.length = 2; console.log(Object.keys(fruits)); //
 * ['0', '1'] console.log(fruits.length); // 2 </pre> <p>This is explained
 * further on the <code>Array.length</code> page.</p> <h3
 * id="Creating_an_array_using_the_result_of_a_match">Creating an array using
 * the result of a match</h3> <p>The result of a match between a regular
 * expression and a string can create a JavaScript array. This array has
 * properties and elements which provide information about the match. Such an
 * array is returned by <code>RegExp.exec</code>, <code>String.match</code>,
 * and <code>String.replace</code>. To help explain these properties and
 * elements, look at the following example and then refer to the table
 * below:</p> <pre class="brush: js">// Match one d followed by one or more b's
 * followed by one d // Remember matched b's and the following d // Ignore case
 * var myRe = /d(b+)(d)/i; var myArray = myRe.exec('cdbBdbsbz'); </pre> <p>The
 * properties and elements returned from this match are as follows:</p> <table
 * class="fullwidth-table"> <tbody> <tr> <td
 * class="header">Property/Element</td> <td class="header">Description</td> <td
 * class="header">Example</td> </tr> <tr> <td><code>input</code></td> <td>A
 * read-only property that reflects the original string against which the
 * regular expression was matched.</td> <td>cdbBdbsbz</td> </tr> <tr>
 * <td><code>index</code></td> <td>A read-only property that is the zero-based
 * index of the match in the string.</td> <td>1</td> </tr> <tr>
 * <td><code>[0]</code></td> <td>A read-only element that specifies the last
 * matched characters.</td> <td>dbBd</td> </tr> <tr> <td><code>[1],
 * ...[n]</code></td> <td>Read-only elements that specify the parenthesized
 * substring matches, if included in the regular expression. The number of
 * possible parenthesized substrings is unlimited.</td> <td>[1]: bB<br> [2]:
 * d</td> </tr> </tbody> </table>
 *
 * @summary 
 * @constructor
 * @template E
 * @extends Object
 * @implements Iterable<E>
 * @param {...E} element0_elementN_arrayLength A JavaScript array is
 * initialized with the given elements, except in the case where a single
 * argument is passed to the <code>Array</code> constructor and that argument
 * is a number (see the arrayLength parameter below). Note that this special
 * case only applies to JavaScript arrays created with the <code>Array</code>
 * constructor, not array literals created with the bracket syntax. If the only
 * argument passed to the <code>Array</code> constructor is an integer between
 * 0 and 2<sup>32</sup>-1 (inclusive), this returns a new JavaScript array with
 * its <code>length</code> property set to that number (<strong>Note:</strong>
 * this implies an array of <code>arrayLength</code> empty slots, not slots
 * with actual <code>undefined</code> values). If the argument is any other
 * number, a <code>RangeError</code> exception is thrown.
 * @see Array
 */
function Array(element0_elementN_arrayLength) {}

/**
 * <p><code>Array</code> instances inherit from <code>Array.prototype</code>.
 * As with all constructors, you can change the constructor's prototype object
 * to make changes to all <code>Array</code> instances. For example, you can
 * add new methods and properties to extend all <code>Array</code> objects.
 * This is used for polyfilling, for example.</p> <p>Little known fact:
 * <code>Array.prototype</code> itself is an <code>Array</code>:</p> <pre
 * class="brush: js">Array.isArray(Array.prototype); // true </pre>
 * <p></p><table class="standard-table"> <thead> <tr> <th class="header"
 * colspan="2">Property attributes of <code>Array.prototype</code></th> </tr>
 * </thead> <tbody> <tr> <td>Writable</td> <td>no</td> </tr> <tr>
 * <td>Enumerable</td> <td>no</td> </tr> <tr> <td>Configurable</td> <td>no</td>
 * </tr> </tbody> </table><p></p>
 *
 * @summary 
 * @type {Object}
 * @see Array
 * @see Function.prototype
 */
Array.prototype = null;

/**
 * <p>The value of the <code>length</code> property is an integer with a
 * positive sign and a value less than 2 to the 32nd power
 * (2<sup>32</sup>).</p> <p>You can set the <code>length</code> property to
 * truncate an array at any time. When you extend an array by changing its
 * <code>length</code> property, the number of actual elements does not
 * increase; for example, if you set <code>length</code> to 3 when it is
 * currently 2, the array still contains only 2 elements. Thus, the
 * <code>length</code> property does not necessarily indicate the number of
 * defined values in the array. See also Relationship between
 * <code>length</code> and numerical properties.</p> <p></p><table
 * class="standard-table"> <thead> <tr> <th class="header" colspan="2">Property
 * attributes of <code>Array.length</code></th> </tr> </thead> <tbody> <tr>
 * <td>Writable</td> <td>yes</td> </tr> <tr> <td>Enumerable</td> <td>no</td>
 * </tr> <tr> <td>Configurable</td> <td>no</td> </tr> </tbody> </table><p></p>
 *
 * @summary 
 * @type {number}
 * @see Array
 */
Array.length = null;

/**
 * <p>The <code>concat</code> method creates a new array consisting of the
 * elements in the object on which it is called, followed in order by, for each
 * argument, the elements of that argument (if the argument is an array) or the
 * argument itself (if the argument is not an array). It does not recurse into
 * nested array arguments.</p> <p>The <code>concat</code> method does not alter
 * <code>this</code> or any of the arrays provided as arguments but instead
 * returns a shallow copy that contains copies of the same elements combined
 * from the original arrays. Elements of the original arrays are copied into
 * the new array as follows:</p> <ul> <li>Object references (and not the actual
 * object): <code>concat</code> copies object references into the new array.
 * Both the original and new array refer to the same object. That is, if a
 * referenced object is modified, the changes are visible to both the new and
 * original arrays. This includes elements of array arguments that are also
 * arrays.</li> <li>Strings, numbers and booleans (not <code>String</code>,
 * <code>Number</code>, and <code>Boolean</code> objects): <code>concat</code>
 * copies the values of strings and numbers into the new array.</li> </ul> <div
 * class="note"> <p><strong>Note:</strong> Concatenating array(s)/value(s) will
 * leave the originals untouched. Furthermore, any operation on the new
 * array(only if the element is not object reference) will have no effect on
 * the original arrays, and vice versa.</p> </div>
 *
 * @summary 
 * @template O
 * @param {...O} valueN Arrays and/or values to concatenate into a new array.
 * See the description below for details.
 * @return {Array<(E|O)>} <p>A new <code>Array</code> instance.</p>
 * @see push
 * @see unshift
 * @see splice
 * @see String.prototype.concat()
 * @see Symbol.isConcatSpreadable
 */
Array.prototype.concat = function (valueN) {};

/**
 * <p>The string conversions of all array elements are joined into one string.
 * If an element is <code>undefined</code> or <code>null</code>, it is
 * converted to the empty string.</p>
 *
 * @summary 
 * @param {string=} separator
 * @return {string} <p>A string with all array elements joined. If
 * <code><em>arr</em>.length</code> is <code>0</code>, the empty string is
 * returned.</p>
 * @see String.prototype.split()
 * @see Array.prototype.toString()
 * @see TypedArray.prototype.join()
 */
Array.prototype.join = function (separator) {};

/**
 * <p>The <code>pop</code> method removes the last element from an array and
 * returns that value to the caller.</p> <p><code>pop</code> is intentionally
 * generic; this method can be called or applied to objects resembling arrays.
 * Objects which do not contain a <code>length</code> property reflecting the
 * last in a series of consecutive, zero-based numerical properties may not
 * behave in any meaningful manner.</p> <p>If you call <code>pop()</code> on an
 * empty array, it returns <code>undefined</code>.</p>
 *
 * @summary 
 * @return {E} <p>The removed element from the array; <code>undefined</code>
 * if the array is empty.</p>
 * @see Array.prototype.push()
 * @see Array.prototype.shift()
 * @see Array.prototype.unshift()
 * @see Array.prototype.concat()
 * @see Array.prototype.splice()
 */
Array.prototype.pop = function () {};

/**
 * <p>The <code>push</code> method appends values to an array.</p>
 * <p><code>push</code> is intentionally generic. This method can be used with
 * <code>call()</code> or <code>apply()</code> on objects resembling arrays.
 * The <code>push</code> method relies on a <code>length</code> property to
 * determine where to start inserting the given values. If the
 * <code>length</code> property cannot be converted into a number, the index
 * used is 0. This includes the possibility of <code>length</code> being
 * nonexistent, in which case <code>length</code> will also be created.</p>
 * <p>The only native, array-like objects are strings, although they are not
 * suitable in applications of this method, as strings are immutable.</p>
 *
 * @summary 
 * @param {...E} element1_elementN The elements to add to the end of the array.
 * @return {number} <p>The new <code>length</code> property of the object upon
 * which the method was called.</p>
 * @see Array.prototype.pop()
 * @see Array.prototype.shift()
 * @see Array.prototype.unshift()
 * @see Array.prototype.concat()
 */
Array.prototype.push = function (element1_elementN) {};

/**
 * <p>The <code>reverse</code> method transposes the elements of the calling
 * array object in place, mutating the array, and returning a reference to the
 * array.</p>
 *
 * @summary 
 * @return {Array<E>} <p>The reversed array.</p>
 * @see Array.prototype.join()
 * @see Array.prototype.sort()
 * @see TypedArray.prototype.reverse()
 */
Array.prototype.reverse = function () {};

/**
 * <p>The <code>shift</code> method removes the element at the zeroeth index
 * and shifts the values at consecutive indexes down, then returns the removed
 * value. If the <code>length</code> property is 0, <code>undefined</code> is
 * returned.</p> <p><code>shift</code> is intentionally generic; this method
 * can be called or applied to objects resembling arrays. Objects which do not
 * contain a <code>length</code> property reflecting the last in a series of
 * consecutive, zero-based numerical properties may not behave in any
 * meaningful manner.</p>
 *
 * @summary 
 * @return {E} <p>The removed element from the array; <code>undefined</code>
 * if the array is empty.</p>
 * @see Array.prototype.push()
 * @see Array.prototype.pop()
 * @see Array.prototype.unshift()
 * @see Array.prototype.concat()
 */
Array.prototype.shift = function () {};

/**
 * <p><code>slice</code> does not alter. It returns a shallow copy of elements
 * from the original array. Elements of the original array are copied into the
 * returned array as follows:</p> <ul> <li>For object references (and not the
 * actual object), <code>slice</code> copies object references into the new
 * array. Both the original and new array refer to the same object. If a
 * referenced object changes, the changes are visible to both the new and
 * original arrays.</li> <li>For strings, numbers and booleans (not
 * <code>String</code>, <code>Number</code> and <code>Boolean</code> objects),
 * <code>slice</code> copies the values into the new array. Changes to the
 * string, number or boolean in one array does not affect the other array.</li>
 * </ul> <p>If a new element is added to either array, the other array is not
 * affected.</p>
 *
 * @summary 
 * @param {number} begin
 * @param {number=} end
 * @return {Array<E>} <p>A new array containing the extracted elements.</p>
 * @see Array.prototype.splice()
 * @see Function.prototype.call()
 * @see Function.prototype.bind()
 */
Array.prototype.slice = function (begin, end) {};

/**
 * <p>If <code>compareFunction</code> is not supplied, elements are sorted by
 * converting them to strings and comparing strings in Unicode code point
 * order. For example, "Banana" comes before "cherry". In a numeric sort, 9
 * comes before 80, but because numbers are converted to strings, "80" comes
 * before "9" in Unicode order.</p> <p>If <code>compareFunction</code> is
 * supplied, the array elements are sorted according to the return value of the
 * compare function. If <code>a</code> and <code>b</code> are two elements
 * being compared, then:</p> <ul> <li>If <code>compareFunction(a, b)</code> is
 * less than 0, sort <code>a</code> to a lower index than <code>b</code>, i.e.
 * <code>a</code> comes first.</li> <li>If <code>compareFunction(a, b)</code>
 * returns 0, leave <code>a</code> and <code>b</code> unchanged with respect to
 * each other, but sorted with respect to all different elements. Note: the
 * ECMAscript standard does not guarantee this behaviour, and thus not all
 * browsers (e.g. Mozilla versions dating back to at least 2003) respect
 * this.</li> <li>If <code>compareFunction(a, b)</code> is greater than 0, sort
 * <code>b</code> to a lower index than <code>a</code>.</li>
 * <li><code>compareFunction(a, b)</code> must always return the same value
 * when given a specific pair of elements a and b as its two arguments. If
 * inconsistent results are returned then the sort order is undefined.</li>
 * </ul> <p>So, the compare function has the following form:</p> <pre
 * class="brush: js">function compare(a, b) { if (a is less than b by some
 * ordering criterion) { return -1; } if (a is greater than b by the ordering
 * criterion) { return 1; } // a must be equal to b return 0; } </pre> <p>To
 * compare numbers instead of strings, the compare function can simply subtract
 * <code>b</code> from <code>a</code>. The following function will sort the
 * array ascending (if it doesn't contain <code>Infinity</code> and
 * <code>NaN</code>):</p> <pre class="brush: js">function compareNumbers(a, b)
 * { return a - b; } </pre> <p>The <code>sort</code> method can be conveniently
 * used with function expressions (and closures):</p> <pre class="brush:
 * js">var numbers = [4, 2, 5, 1, 3]; numbers.sort(function(a, b) { return a -
 * b; }); console.log(numbers); // [1, 2, 3, 4, 5] </pre> <p>Objects can be
 * sorted given the value of one of their properties.</p> <pre class="brush:
 * js">var items = [ { name: 'Edward', value: 21 }, { name: 'Sharpe', value: 37
 * }, { name: 'And', value: 45 }, { name: 'The', value: -12 }, { name:
 * 'Magnetic', value: 13 }, { name: 'Zeros', value: 37 } ]; // sort by value
 * items.sort(function (a, b) { return a.value - b.value; }); // sort by name
 * items.sort(function(a, b) { var nameA = a.name.toUpperCase(); // ignore
 * upper and lowercase var nameB = b.name.toUpperCase(); // ignore upper and
 * lowercase if (nameA &lt; nameB) { return -1; } if (nameA &gt; nameB) {
 * return 1; } // names must be equal return 0; });</pre>
 *
 * @summary 
 * @param {function(E, E): number=} compareFunction
 * @return {Array<E>} <p>The sorted array.</p>
 * @see Array.prototype.reverse()
 * @see String.prototype.localeCompare()
 */
Array.prototype.sort = function (compareFunction) {};

/**
 * <p>If you specify a different number of elements to insert than the number
 * you're removing, the array will have a different length at the end of the
 * call.</p>
 *
 * @summary 
 * @param {number} index
 * @param {number} howMany
 * @param {...E} element1_elementN
 * @return {Array<E>} <p>An array containing the deleted elements. If only one
 * element is removed, an array of one element is returned. If no elements are
 * removed, an empty array is returned.</p>
 * @see push()
 * @see unshift()
 * @see concat()
 */
Array.prototype.splice = function (index, howMany, element1_elementN) {};

/**
 * 
 *
 * @summary 
 * @return {string} <p>A string representing the elements of the array.</p>
 * @see Array.prototype.toString()
 * @see Intl
 * @see Object.prototype.toLocaleString()
 * @see Number.prototype.toLocaleString()
 * @see Date.prototype.toLocaleString()
 */
Array.prototype.toLocaleString = function () {};

/**
 * <p>The <code>Array</code> object overrides the <code>toString</code> method
 * of <code>Object</code>. For Array objects, the <code>toString</code> method
 * joins the array and returns one string containing each array element
 * separated by commas.</p> <p>JavaScript calls the <code>toString</code>
 * method automatically when an array is to be represented as a text value or
 * when an array is referred to in a string concatenation.</p> <h3
 * id="ECMAScript_5_semantics">ECMAScript 5 semantics</h3> <p>Starting in
 * JavaScript 1.8.5 (Firefox 4), and consistent with ECMAScript 5th edition
 * semantics, the <code>toString()</code> method is generic and can be used
 * with any object. <code>Object.prototype.toString()</code> will be called,
 * and the resulting value will be returned.</p>
 *
 * @summary 
 * @return {string} <p>A string representing the elements of the array.</p>
 * @see Array.prototype.join()
 * @see Object.prototype.toSource()
 */
Array.prototype.toString = function () {};

/**
 * <p>The <code>unshift</code> method inserts the given values to the beginning
 * of an array-like object.</p> <p><code>unshift</code> is intentionally
 * generic; this method can be called or applied to objects resembling arrays.
 * Objects which do not contain a <code>length</code> property reflecting the
 * last in a series of consecutive, zero-based numerical properties may not
 * behave in any meaningful manner.</p>
 *
 * @summary 
 * @param {...E} element1_elementN The elements to add to the front of the
 * array.
 * @return {number} <p>The new <code>length</code> property of the object upon
 * which the method was called.</p>
 * @see Array.prototype.push()
 * @see Array.prototype.pop()
 * @see Array.prototype.shift()
 * @see Array.prototype.concat()
 */
Array.prototype.unshift = function (element1_elementN) {};

/**
 * <p>The <code>arguments</code> object is a local variable available within
 * all functions; <code>arguments</code> as a property of <code>Function</code>
 * can no longer be used.</p> <p>You can refer to a function's arguments within
 * the function by using the <code>arguments</code> object. This object
 * contains an entry for each argument passed to the function, the first
 * entry's index starting at 0. For example, if a function is passed three
 * arguments, you can refer to the argument as follows:</p>
 * <pre><code>arguments[0] arguments[1] arguments[2] </code></pre> <p>The
 * arguments can also be set:</p> <pre><code>arguments[1] = 'new
 * value';</code></pre> <div class="note"> <strong>Note:</strong> The
 * SpiderMonkey JavaScript engine has a bug in which <code>arguments[n]</code>
 * cannot be set if <code>n</code> is greater than the number of formal or
 * actual parameters. This has been fixed in the engine for JavaScript
 * 1.6.</div> <p>The <code>arguments</code> object is not an
 * <code>Array</code>. It is similar to an <code>Array</code>, but does not
 * have any <code>Array</code> properties except <code>length</code>. For
 * example, it does not have the <code>pop</code> method. However it can be
 * converted to a real <code>Array</code>:</p> <pre><code>var args =
 * Array.prototype.slice.call(arguments);</code></pre> <p>If Array generics are
 * available, one can use the following instead:</p> <pre><code>var args =
 * Array.slice(arguments);</code></pre> <p> </p> <p>The <code>arguments</code>
 * object is available only within a function body. Attempting to access the
 * <code>arguments</code> object outside a function declaration results in an
 * error.</p> <p>You can use the <code>arguments</code> object if you call a
 * function with more arguments than it is formally declared to accept. This
 * technique is useful for functions that can be passed a variable number of
 * arguments. You can use <code>arguments.length</code> to determine the number
 * of arguments passed to the function, and then process each argument by using
 * the <code>arguments</code> object. (To determine the number of arguments
 * declared when a function was defined, use the <code>Function.length</code>
 * property.)</p>
 *
 * @summary <p>An <code>Array</code>-like object corresponding to the arguments
 * passed to a function.</p> <table class="standard-table"> <thead> <tr> <th
 * class="header" colspan="2">Variable of the function scope</th> </tr>
 * </thead> <thead> </thead> <tbody> <tr> <td>Implemented in</td>
 * <td>JavaScript 1.1</td> </tr> <tr> <td>ECMAScript Version</td>
 * <td>ECMA-262</td> </tr> </tbody> </table>
 *
 * @summary 
 * @type {Object}
 */
var arguments;

/**
 * <p><code>callee</code> is a property of the <code>arguments</code> object.
 * It can be used to refer to the currently executing function inside the
 * function body of that function. This is useful when the name of the function
 * is unknown, such as within a function expression with no name (also called
 * "anonymous functions").</p> <div class="note"> <strong>Note:</strong> Avoid
 * using <code>arguments.callee()</code> by either giving function expressions
 * a name or use a function declaration where a function must call
 * itself.</div> <div class="warning"> <strong>Warning:</strong> The 5th
 * edition of ECMAScript (ES5) forbids use of <code>arguments.callee()</code>
 * in strict mode.</div> <h3
 * id="Example.3A_Using_arguments.callee_in_an_anonymous_recursive_function"
 * name="Example.3A_Using_arguments.callee_in_an_anonymous_recursive_function">Example:
 * Using <code>arguments.callee</code> in an anonymous recursive function</h3>
 * <p>A recursive function must be able to refer to itself. Typically, a
 * function refers to itself by its name. However, an anonymous function (which
 * can be created by a function expression or the <code>Function</code>
 * constructor) does not have a name. Therefore if there is no accessible
 * variable referring to it, the only way the function can refer to itself is
 * by <code>arguments.callee</code>.</p> <p>The following example defines a
 * function, which, in turn, defines and returns a factorial function. This
 * example isn't very practical, and there are nearly no cases where the same
 * result cannot be achieved with named function expressions.</p> <pre
 * class="brush: js">function create() { return function(n) { if (n &lt;= 1)
 * return 1; return n arguments.callee(n - 1); }; } var result = create()(5);
 * // returns 120 (5 4 3 2 1)</pre>
 *
 * @summary 
 * @deprecated This property cannot be accessed in the strict mode.
 * @type {function}
 */
arguments.callee = null;

/**
 * <p>arguments.length provides the number of arguments actually passed to a
 * function. This can be more or less than the defined parameter count (See
 * Function.length).</p>
 *
 * @summary <p>Specifies the number of arguments passed to the function.</p>
 * <table class="standard-table"> <tbody> <tr> <td class="header"
 * colspan="2">Property of arguments</td> </tr> <tr> <td>Implemented in</td>
 * <td>JavaScript 1.1</td> </tr> <tr> <td>ECMAScript Edition</td>
 * <td>ECMA-262</td> </tr> </tbody> </table>
 * @type {number}
 */
arguments.length = null;
