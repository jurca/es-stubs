/**
 * <p>Properties in the target object will be overwritten by properties in the
 * sources if they have the same key. Later sources' properties will similarly
 * overwrite earlier ones. </p> <p>The <code>Object.assign()</code> method only
 * copies <em>enumerable</em> and <em>own</em> properties from a source object
 * to a target object. It uses <code>[[Get]]</code> on the source and
 * <code>[[Set]]</code> on the target, so it will invoke getters and setters.
 * Therefore it <em>assigns</em> properties versus just copying or defining new
 * properties. This may make it unsuitable for merging new properties into a
 * prototype if the merge sources contain getters. For copying property
 * definitions, including their enumerability, into prototypes
 * <code>Object.getOwnPropertyDescriptor()</code> and
 * <code>Object.defineProperty()</code> should be used instead.</p> <p>Both
 * <code>String</code> and <code>Symbol</code> properties are copied.</p> <p>In
 * case of an error, for example if a property is non-writable, a
 * <code>TypeError</code> will be raised, and the <code>target</code> object
 * remains unchanged.</p> <p>Note that <code>Object.assign()</code> does not
 * throw on <code>null</code> or <code>undefined</code> source values.</p>
 *
 * @summary 
 * @param {Object} target The target object.
 * @param {...Object} sources The source object(s).
 * @return {Object} <p>The target object.</p>
 * @see Object.defineProperties()
 */
Object.assign = function (target, sources) {};

/**
 * <p>Similar to <code>Object.getOwnPropertyNames()</code>, you can get all
 * symbol properties of a given object as an array of symbols. Note that
 * <code>Object.getOwnPropertyNames()</code> itself does not contain the symbol
 * properties of an object and only the string properties.</p> <p>As all
 * objects have no own symbol properties initially,
 * <code>Object.getOwnPropertySymbols()</code> returns an empty array unless
 * you have set symbol properties on your object.</p>
 *
 * @summary 
 * @param {Object} obj The object whose symbol properties are to be returned.
 * @return {Array<symbol>} <p>An array of all symbol properties found directly
 * upon the given object.</p>
 * @see Object.getOwnPropertyNames()
 * @see Symbol
 */
Object.getOwnPropertySymbols = function (obj) {};

/**
 * <p><code>Object.is()</code> determines whether two values are the same
 * value. Two values are the same if one of the following holds:</p> <ul>
 * <li>both <code>undefined</code></li> <li>both <code>null</code></li>
 * <li>both <code>true</code> or both <code>false</code></li> <li>both strings
 * of the same length with the same characters</li> <li>both the same
 * object</li> <li>both numbers and <ul> <li>both <code>+0</code></li> <li>both
 * <code>-0</code></li> <li>both <code>NaN</code></li> <li>or both non-zero and
 * both not <code>NaN</code> and both have the same value</li> </ul> </li>
 * </ul> <p>This is <em>not</em> the same as being equal according to the
 * <code>==</code> operator. The <code>==</code> operator applies various
 * coercions to both sides (if they are not the same Type) before testing for
 * equality (resulting in such behavior as <code>"" == false</code> being
 * <code>true</code>), but <code>Object.is</code> doesn't coerce either
 * value.</p> <p>This is also <em>not</em> the same as being equal according to
 * the <code>===</code> operator. The <code>===</code> operator (and the
 * <code>==</code> operator as well) treats the number values <code>-0</code>
 * and <code>+0</code> as equal and treats <code>Number.NaN</code> as not equal
 * to <code>NaN</code>.</p>
 *
 * @summary 
 * @param {*} value1 The first value to compare.
 * @param {*} value2 The second value to compare.
 * @return {boolean} <p>A <code>Boolean</code> indicating whether or not the
 * two arguments are the same value.</p>
 */
Object.is = function (value1, value2) {};

/**
 * <p>Throws a <code>TypeError</code> exception if the object whose
 * <code>[[Prototype]]</code> is to be modified is non-extensible according to
 * <code>Object.isExtensible()</code>. Does nothing if the
 * <code>prototype</code> parameter isn't an object or <code>null</code> (i.e.,
 * number, string, boolean, or <code>undefined</code>). Otherwise, this method
 * changes the <code>[[Prototype]]</code> of <code>obj</code> to the new
 * value.</p> <p><code>Object.setPrototypeOf()</code> is in the ECMAScript 2015
 * specification. It is generally considered the proper way to set the
 * prototype of an object, vs. the more
 * controversial <code>Object.prototype.__proto__</code> property.</p>
 *
 * @summary 
 * @param {Object} obj The object which is to have its prototype set.
 * @param {?Object} prototype The object's new prototype (an object or
 * <code>null</code>).
 * @return {Object} <p>The specified object.</p>
 * @see Reflect.setPrototypeOf()
 * @see Object.prototype.isPrototypeOf()
 * @see Object.getPrototypeOf()
 * @see Object.prototype.__proto__
 */
Object.setPrototypeOf = function (obj, prototype) {};

/**
 * <p>The <code>name</code> property returns the name of a function, or (before
 * ES2015 implementations) an empty string for anonymous functions:</p> <pre
 * class="brush: js">function doSomething() {} console.log(doSomething.name);
 * // logs "doSomething" </pre> <p>Functions created with the syntax <code>new
 * Function(...)</code> or just <code>Function(...)</code> have their
 * <code>name</code> property set to an empty string. In the following examples
 * anonymous functions are created, so <code>name</code> returns an empty
 * string:</p> <pre class="brush: js">var f = function() {}; var object = {
 * someMethod: function() {} }; console.log(f.name == ''); // true
 * console.log(object.someMethod.name == ''); // also true </pre> <p>Browsers
 * that implement ES2015 functions can infer the name of an anonymous function
 * from its syntactic position. For example:</p> <pre class="brush: js">var f =
 * function() {}; console.log(f.name); // "f"</pre> <p>You can define a
 * function with a name in a function expression:</p> <pre class="brush:
 * js">var object = { someMethod: function object_someMethod() {} };
 * console.log(object.someMethod.name); // logs "object_someMethod" try {
 * object_someMethod } catch(e) { console.log(e); } // ReferenceError:
 * object_someMethod is not defined </pre> <p>You cannot change the name of a
 * function, this property is read-only:</p> <pre class="brush: js">var object
 * = { // anonymous someMethod: function() {} }; object.someMethod.name =
 * 'someMethod'; console.log(object.someMethod.name); // empty string,
 * someMethod is anonymous </pre> <p>To change it, you could use
 * <code>Object.defineProperty()</code> though.</p>
 *
 * @summary 
 * @type {string}
 */
Function.name = null;

/**
 * <p>To create a new primitive symbol, you write <code>Symbol()</code> with an
 * optional string as its description:</p> <pre class="brush: js">var sym1 =
 * Symbol(); var sym2 = Symbol('foo'); var sym3 = Symbol('foo'); </pre> <p>The
 * above code creates three new symbols. Note that <code>Symbol("foo")</code>
 * does not coerce the string "foo" into a symbol. It creates a new symbol each
 * time:</p> <pre class="brush: js">Symbol('foo') === Symbol('foo'); //
 * false</pre> <p>The following syntax with the <code>new</code> operator will
 * throw a <code>TypeError</code>:</p> <pre class="brush: js">var sym = new
 * Symbol(); // TypeError</pre> <p>This prevents authors from creating an
 * explicit <code>Symbol</code> wrapper object instead of a new symbol value
 * and might be surprising as creating explicit wrapper objects around
 * primitive data types is generally possible (for example, <code>new
 * Boolean</code>, <code>new String</code> and <code>new Number</code>).</p>
 * <p>If you really want to create a <code>Symbol</code> wrapper object, you
 * can use the <code>Object()</code> function:</p> <pre class="brush: js">var
 * sym = Symbol('foo'); typeof sym; // "symbol" var symObj = Object(sym);
 * typeof symObj; // "object" </pre> <h3
 * id="Shared_symbols_in_the_global_symbol_registry">Shared symbols in the
 * global symbol registry</h3> <p>The above syntax using the
 * <code>Symbol()</code> function will not create a global symbol that is
 * available in your whole codebase. To create symbols available across files
 * and even across realms (each of which has its own global scope), use the
 * methods <code>Symbol.for()</code> and <code>Symbol.keyFor()</code> to set
 * and retrieve symbols from the global symbol registry.</p> <h3
 * id="Finding_symbol_properties_on_objects">Finding symbol properties on
 * objects</h3> <p>The method <code>Object.getOwnPropertySymbols()</code>
 * returns an array of symbols and lets you find symbol properties on a given
 * object. Note that every object is initialized with no own symbol properties,
 * so that this array will be empty unless you've set symbol properties on the
 * object.</p>
 *
 * @summary 
 * @constructor
 * @param {string=} description
 * @return {symbol}
 * @see typeof
 */
function Symbol(description) {}

/**
 * This is a representation of the primitive type of symbol.
 *
 * @summary This is a representation of the primitive type of symbol.
 * @return {symbol}
 */
function symbol() {}

/**
 * <p>In contrast to <code>Symbol()</code>, the <code>Symbol.for()</code>
 * function creates a symbol available in a global symbol registry list.
 * <code>Symbol.for()</code> does also not necessarily create a new symbol on
 * every call, but checks first if a symbol with the given <code>key</code> is
 * already present in the registry. In that case, that symbol is returned. If
 * no symbol with the given key is found, <code>Symbol.for()</code> will create
 * a new global symbol.</p> <h3 id="Global_symbol_registry">Global symbol
 * registry</h3> <p>The global symbol registry is a list with the following
 * record structure and it is initialized empty:</p> <table
 * class="standard-table"> <caption>A record in the global symbol
 * registry</caption> <tbody> <tr> <th>Field name</th> <th>Value</th> </tr>
 * <tr> <td>[[key]]</td> <td>A string key used to identify a symbol.</td> </tr>
 * <tr> <td>[[symbol]]</td> <td>A symbol that is stored globally.</td> </tr>
 * </tbody> </table>
 *
 * @summary 
 * @param {string} key String, required. The key for the symbol (and also used
 * for the description of the symbol).
 * @return {symbol} <p>An existing symbol with the given key if found;
 * otherwise, a new symbol is created and returned.</p>
 * @see Symbol.keyFor()
 */
Symbol.for = function (key) {};

/**
 * 
 *
 * @summary 
 * @param {symbol} sym Symbol, required. The symbol to find a key for.
 * @see Symbol.for()
 */
Symbol.keyFor = function (sym) {};

/**
 * <p>The <code>Symbol</code> object overrides the <code>toString</code> method
 * of the <code>Object</code> object; it does not inherit
 * <code>Object.prototype.toString()</code>. For <code>Symbol</code> objects,
 * the <code>toString</code> method returns a string representation of the
 * object.</p> <h3 id="No_string_concatenation">No string concatenation</h3>
 * <p>While you can call <code>toString()</code> on Symbols, you can't use
 * string concatenation with them:</p> <pre class="brush: js">Symbol('foo') +
 * 'bar'; // TypeError: Can't convert symbol to string</pre>
 *
 * @summary 
 * @return {string} <p>A string representing the specified <code>Symbol</code>
 * object.</p>
 * @see Object.prototype.toString()
 */
Symbol.prototype.toString = function () {};

/**
 * <p>The <code>valueOf</code> method of <code>Symbol</code> returns the
 * primitive value of a Symbol object as a Symbol data type.</p> <p>JavaScript
 * calls the <code>valueOf</code> method to convert an object to a primitive
 * value. You rarely need to invoke the <code>valueOf</code> method yourself;
 * JavaScript automatically invokes it when encountering an object where a
 * primitive value is expected.</p>
 *
 * @summary 
 * @return {*} <p>The primitive value of the specified <code>Symbol</code>
 * object.</p>
 * @see Object.prototype.valueOf()
 */
Symbol.prototype.valueOf = function () {};

/**
 * <p>The <code>EPSILON</code> property has a value of approximately
 * <code>2.2204460492503130808472633361816E-16</code>, or
 * <code>2<sup>-52</sup></code>.</p>
 *
 * @summary 
 * @type {number}
 * @see Number
 */
Number.EPSILON = null;

/**
 * <p>The <code>MAX_SAFE_INTEGER</code> constant has a value of
 * <code>9007199254740991</code>. The reasoning behind that number is that
 * JavaScript uses double-precision floating-point format numbers as specified
 * in IEEE 754 and can only safely represent numbers between
 * <code>-(2<sup>53</sup> - 1)</code> and <code>2<sup>53</sup> - 1</code>.</p>
 * <p>Safe in this context refers to the ability to represent integers exactly
 * and to correctly compare them. For
 * example, <code>Number.MAX_SAFE_INTEGER + 1 ===
 * Number.MAX_SAFE_INTEGER + 2</code> will evaluate to true, which is
 * mathematically incorrect. See <code>Number.isSafeInteger()</code> for more
 * information.</p> <p>Because <code>MAX_SAFE_INTEGER</code> is a static
 * property of <code>Number</code>, you always use it as
 * <code>Number.MAX_SAFE_INTEGER</code>, rather than as a property of a
 * <code>Number</code> object you created.</p>
 *
 * @summary 
 * @type {number}
 * @see Number.MIN_SAFE_INTEGER
 * @see Number.isSafeInteger()
 */
Number.MAX_SAFE_INTEGER = null;

/**
 * <p>In comparison to the global <code>isFinite()</code> function, this method
 * doesn't forcibly convert the parameter to a number. This means only values
 * of the type number, that are also finite, return <code>true</code>.</p>
 *
 * @summary 
 * @param {number} testValue
 * @return {boolean} <p>A <code>Boolean</code> indicating whether or not the
 * given value is a finite number.</p>
 * @see Number
 */
Number.isFinite = function (testValue) {};

/**
 * <p>If the target value is an integer, return <code>true</code>, otherwise
 * return <code>false</code>. If the value is <code>NaN</code> or infinite,
 * return <code>false</code>.</p>
 *
 * @summary 
 * @param {number} value The value to be tested for being an integer.
 * @return {boolean} <p>A <code>Boolean</code> indicating whether or not the
 * given value is an integer.</p>
 * @see Number
 */
Number.isInteger = function (value) {};

/**
 * <p>Due to both equality operators, <code>==</code> and <code>===</code>,
 * evaluating to <code>false</code> when checking if <code>NaN</code>
 * <em>is</em> <code>NaN</code>, the function <code>Number.isNaN()</code> has
 * become necessary. This situation is unlike all other possible value
 * comparisons in JavaScript.</p> <p>In comparison to the global
 * <code>isNaN()</code> function, <code>Number.isNaN()</code> doesn't suffer
 * the problem of forcefully converting the parameter to a number. This means
 * it is now safe to pass values that would normally convert to
 * <code>NaN</code>, but aren't actually the same value as <code>NaN</code>.
 * This also means that only values of the type number, that are also
 * <code>NaN</code>, return <code>true</code>.</p>
 *
 * @summary 
 * @param {*} value The value to be tested for <code>NaN</code>.
 * @return {boolean} <p>A <code>Boolean</code> indicating whether or not the
 * given value is <code>NaN</code>.</p>
 * @see Number
 * @see isNaN()
 */
Number.isNaN = function (value) {};

/**
 * 
 *
 * @summary 
 * @param {number} testValue The value to be tested for being a safe integer.
 * @return {boolean} <p>A <code>Boolean</code> indicating whether or not the
 * given value is a number that is a safe integer.</p>
 * @see Number
 * @see Number.MIN_SAFE_INTEGER
 * @see Number.MAX_SAFE_INTEGER
 */
Number.isSafeInteger = function (testValue) {};

/**
 * <p>Please see <code>parseFloat()</code> for more details and examples.</p>
 *
 * @summary 
 * @param {string} string A string that represents the value you want to parse.
 * @see Number
 * @see parseFloat()
 */
Number.parseFloat = function (string) {};

/**
 * <p>This method has the same functionality as the global
 * <code>parseInt()</code> function:</p> <pre class="brush: js">Number.parseInt
 * === parseInt; // true</pre> <p>and is part of ECMAScript 2015 (its purpose
 * is modularization of globals). Please see <code>parseInt()</code> for more
 * details and examples.</p>
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
 * @see Number
 * @see parseInt()
 */
Number.parseInt = function (string, radix) {};

/**
 * <p>Because <code>acosh()</code> is a static method of <code>Math</code>, you
 * always use it as <code>Math.acosh()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is no
 * constructor).</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>The hyperbolic arc-cosine of the given number. If the
 * number is less than <strong>1</strong>, <code>NaN</code>.</p>
 * @see Math.asinh()
 * @see Math.atanh()
 * @see Math.cosh()
 * @see Math.sinh()
 * @see Math.tanh()
 */
Math.acosh = function (x) {};

/**
 * <p>Because <code>asinh()</code> is a static method of <code>Math</code>, you
 * always use it as <code>Math.asinh()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>The hyperbolic arcsine of the given number.</p>
 * @see Math.acosh()
 * @see Math.atanh()
 * @see Math.cosh()
 * @see Math.sinh()
 * @see Math.tanh()
 */
Math.asinh = function (x) {};

/**
 * <p>Because <code>atanh()</code> is a static method of <code>Math</code>, you
 * always use it as <code>Math.atanh()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>The hyperbolic arctangent of the given number.</p>
 * @see Math.acosh()
 * @see Math.asinh()
 * @see Math.cosh()
 * @see Math.sinh()
 * @see Math.tanh()
 */
Math.atanh = function (x) {};

/**
 * <p>Because <code>cbrt()</code> is a static method of <code>Math</code>, you
 * always use it as <code>Math.cbrt()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>The cube root of the given number.</p>
 * @see Math.pow()
 * @see Math.sqrt()
 */
Math.cbrt = function (x) {};

/**
 * <p>"<code>clz32</code>" is short for <code>CountLeadingZeroes32</code>.</p>
 * <p>If <code>x</code> is not a number, then it will be converted to a number
 * first, then converted to a 32-bit unsigned integer.</p> <p>If the converted
 * 32-bit unsigned integer is <code>0</code>, then return <code>32</code>,
 * because all bits are <code>0</code>.</p> <p>This function is particularly
 * useful for systems that compile to JS, like Emscripten.</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>The number of leading zero bits in the 32-bit binary
 * representation of the given number.</p>
 * @see Math
 * @see Math.imul
 */
Math.clz32 = function (x) {};

/**
 * <p>Because <code>cosh()</code> is a static method of <code>Math</code>, you
 * always use it as <code>Math.cosh()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>The hyperbolic cosine of the given number.</p>
 * @see Math.acosh()
 * @see Math.asinh()
 * @see Math.atanh()
 * @see Math.sinh()
 * @see Math.tanh()
 */
Math.cosh = function (x) {};

/**
 * <p>Because <code>expm1()</code> is a static method of <code>Math</code>, you
 * always use it as <code>Math.expm1()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>A number representing <code>e<sup>x</sup> - 1</code>,
 * where <code>e</code> is Euler's number and <code>x</code> is the
 * argument.</p>
 * @see Math.E
 * @see Math.exp()
 * @see Math.log()
 * @see Math.log10()
 * @see Math.log1p()
 * @see Math.log2()
 * @see Math.pow()
 */
Math.expm1 = function (x) {};

/**
 * <p>Because <code>fround()</code> is a static method of <code>Math</code>,
 * you always use it as <code>Math.fround()</code>, rather than as a method of
 * a <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>The nearest single precision float representation of the
 * given number.</p>
 * @see Math.round()
 */
Math.fround = function (x) {};

/**
 * <p>Calculating the hypotenuse of a right triangle, or the magnitude of a
 * complex number, uses the formula Math.sqrt(v1*v1 + v2*v2) where v1 and v2
 * are either the sides of the triangle, or the real and complex values. For
 * calculating distance in 2 or more dimensions, simply add in more squares
 * inside the square root sign, like Math.sqrt(v1*v1 + v2*v2 + v3*v3 + v4*v4) .
 * </p> <p>This function makes it a little easier and faster, you just call
 * Math.hypot(v1, v2) , or Math.hypot(v1, v2, v3, v4, ...) . </p> <p>It also
 * avoids a problem if the magnitude of your numbers is huge. The largest
 * number you can represent in JS's double floats is <span style="line-height:
 * 1.5;">Number.MAX_VALUE = 1.797...e+308 . If your numbers are larger than
 * about 1e154, taking the square of them will result in Infinity, demolishing
 * your results. For example, Math.sqrt(1e200*1e200 + 1e200*1e200) = Infinity .
 * If you use hypot() instead, you get a good answer Math.hypot(1e200, 1e200)
 * = 1.4142...e+200 . This is also true with very small numbers.
 * Math.sqrt(1e-200*1e-200 + 1e-200*1e-200) = 0, but </span><span
 * style="line-height: 1.5;">Math.hypot(1e-200, 1e-200) = </span><span
 * style="line-height: 1.5;">1.4142...e-200, a good answer.</span></p>
 * <p>Because <code>hypot()</code> is a static method of <code>Math</code>, you
 * always use it as <code>Math.hypot()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p> <p>If no arguments are given, the result is +0.</p> <p>If
 * at least one of the arguments cannot be converted to a number, the result is
 * <code>NaN</code>.</p> <p>With one argument, <code>Math.hypot()</code>
 * returns the same as <code>Math.abs()</code>.</p>
 *
 * @summary 
 * @param {...number} value1_value2 Numbers.
 * @return {number} <p>The square root of the sum of squares of the given
 * arguments. If at least one of the arguments cannot be converted to a number,
 * <code>NaN</code> is returned.</p>
 * @see Math.abs()
 * @see Math.pow()
 * @see Math.sqrt()
 */
Math.hypot = function (value1_value2) {};

/**
 * <p><code>Math.imul()</code> allows for fast 32-bit integer multiplication
 * with C-like semantics. This feature is useful for projects like Emscripten.
 * Because <code>imul()</code> is a static method of <code>Math</code>, you
 * always use it as <code>Math.imul()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @param {number} a First number.
 * @param {number} b Second number.
 * @return {number} <p>The result of the C-like 32-bit multiplication of the
 * given arguments.</p>
 */
Math.imul = function (a, b) {};

/**
 * <p>For very small values of <em>x</em>, adding 1 can reduce or eliminate
 * precision. The double floats used in JS give you about 15 digits of
 * precision. 1 + 1e-15 = 1.000000000000001, but 1 + 1e-16
 * = 1.000000000000000 and therefore exactly 1.0 in that arithmetic, because
 * digits past 15 are rounded off. </p> <p>When you calculate log(1 + x), you
 * should get an answer very close to x, if x is small (that's why these are
 * called 'natural' logarithms). If you calculate Math.log(1 +
 * 1.1111111111e-15) you should get an answer close to 1.1111111111e-15.
 * Instead, <span style="line-height: 1.5;">you will end up taking the
 * logarithm of </span><span style="line-height: 1.5;">1.00000000000000111022
 * (the roundoff is in binary so sometimes it gets ugly)</span><span
 * style="line-height: 1.5;">, so you get </span><span style="line-height:
 * 1.5;">the answer 1.11022...e-15, with only 3 correct digits. If, instead,
 * you calculate Math.log1p(</span>1.1111111111e-15<span style="line-height:
 * 1.5;">) you will get a much more accurate answer 1.1111111110999995e-15 with
 * 15 correct digits of precision (actually 16 in this case).</span></p> <p>If
 * the value of <code>x</code> is less than -1, the return value is always
 * <code>NaN</code>.</p> <p>Because <code>log1p()</code> is a static method of
 * <code>Math</code>, you always use it as <code>Math.log1p()</code>, rather
 * than as a method of a <code>Math</code> object you created
 * (<code>Math</code> is not a constructor).</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>The natural logarithm (base <code>e</code>) of
 * <strong>1</strong> plus the given number. If the number is less than
 * <strong>-1</strong>, <code>NaN</code> is returned.</p>
 * @see Math.exp()
 * @see Math.log()
 * @see Math.expm1()
 * @see Math.log10()
 * @see Math.log2()
 * @see Math.pow()
 */
Math.log1p = function (x) {};

/**
 * <p>If the value of <code>x</code> is less than 0, the return value is always
 * <code>NaN</code>.</p> <p>Because <code>log10()</code> is a static method of
 * <code>Math</code>, you always use it as <code>Math.log10()</code>, rather
 * than as a method of a <code>Math</code> object you created
 * (<code>Math</code> is not a constructor).</p> <p>This function is the
 * equvalent of Math.log(x) / Math.log(10). For log10(e) use the
 * constant <code>Math.LOG10E</code> which is 1 / <code>Math.LN10</code>. </p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>The base 10 logarithm of the given number. If the number
 * is negative, <code>NaN</code> is returned.</p>
 * @see Math.exp()
 * @see Math.log()
 * @see Math.log1p()
 * @see Math.log2()
 * @see Math.pow()
 */
Math.log10 = function (x) {};

/**
 * <p>If the value of <code>x</code> is less than 0, the return value is always
 * <code>NaN</code>.</p> <p>Because <code>log2()</code> is a static method of
 * <code>Math</code>, you always use it as <code>Math.log2()</code>, rather
 * than as a method of a <code>Math</code> object you created
 * (<code>Math</code> is not a constructor).</p> <p>This function is the
 * equvalent of Math.log(x) / Math.log(2). For log2(e) use the
 * constant <code>Math.LOG2E</code> which is 1 / <code>Math.LN2</code>. </p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>The base 2 logarithm of the given number. If the number
 * is negative, <code>NaN</code> is returned.</p>
 * @see Math.exp()
 * @see Math.log()
 * @see Math.log10()
 * @see Math.log1p()
 * @see Math.pow()
 */
Math.log2 = function (x) {};

/**
 * <p>Because <code>sign()</code> is a static method of <code>Math</code>, you
 * always use it as <code>Math.sign()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p> <p>This function has 5 kinds of return values,
 * <code>1</code>, <code>-1</code>, <code>0</code>, <code>-0</code>,
 * <code>NaN</code>, which represent "positive number", "negative number",
 * "positive zero", "negative zero" and <code>NaN</code> respectively.</p>
 * <p>The argument passed to this function will be converted to <code>x</code>
 * type implicitly.</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>A number representing the sign of the given argument. If
 * the argument is a positive number, negative number, positive zero or
 * negative zero, the function will return <code>1</code>, <code>-1</code>,
 * <code>0</code> or <code>-0</code> respectively. Otherwise, <code>NaN</code>
 * is returned.</p>
 * @see Math.abs()
 * @see Math.ceil()
 * @see Math.floor()
 * @see Math.round()
 * @see Math.trunc()
 */
Math.sign = function (x) {};

/**
 * <p>Because <code>sinh()</code> is a static method of <code>Math</code>, you
 * always use it as <code>Math.sinh()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>The hyperbolic sine of the given number.</p>
 * @see Math.acosh()
 * @see Math.asinh()
 * @see Math.atanh()
 * @see Math.cosh()
 * @see Math.tanh()
 */
Math.sinh = function (x) {};

/**
 * <p>Because <code>tanh()</code> is a static method of <code>Math</code>, you
 * always use it as <code>Math.tanh()</code>, rather than as a method of a
 * <code>Math</code> object you created (<code>Math</code> is not a
 * constructor).</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>The hyperbolic tangent of the given number.</p>
 * @see Math.acosh()
 * @see Math.asinh()
 * @see Math.atanh()
 * @see Math.cosh()
 * @see Math.sinh()
 */
Math.tanh = function (x) {};

/**
 * <p>Unlike the other three <code>Math</code> methods:
 * <code>Math.floor()</code>, <code>Math.ceil()</code> and
 * <code>Math.round()</code>, the way <code>Math.trunc()</code> works is very
 * simple. It <em>truncates</em> (cuts off) the dot and the digits to the right
 * of it, no matter whether the argument is a positive or negative number.</p>
 * <p>The argument passed to this method will be converted to number type
 * implicitly.</p> <p>Because <code>trunc()</code> is a static method of
 * <code>Math</code>, you always use it as <code>Math.trunc()</code>, rather
 * than as a method of a <code>Math</code> object you created
 * (<code>Math</code> is not a constructor).</p>
 *
 * @summary 
 * @param {number} x A number.
 * @return {number} <p>The integer part of the given number.</p>
 * @see Math.abs()
 * @see Math.ceil()
 * @see Math.floor()
 * @see Math.round()
 * @see Math.sign()
 */
Math.trunc = function (x) {};

/**
 * <p>This method returns a string and not a <code>String</code> object.</p>
 * <p>Because <code>fromCodePoint()</code> is a static method of
 * <code>String</code>, you always use it as
 * <code>String.fromCodePoint()</code>, rather than as a method of a
 * <code>String</code> object you created.</p>
 *
 * @summary 
 * @param {number} num1_numN A sequence of code points.
 * @return {string} <p>A string created by using the specified sequence of code
 * points.</p>
 * @see String.fromCharCode()
 * @see String.prototype.charAt()
 * @see String.prototype.codePointAt()
 * @see String.prototype.charCodeAt()
 */
String.fromCodePoint = function (num1_numN) {};

/**
 * <p>In most cases, <code>String.raw()</code> is used with template strings.
 * The first syntax mentioned above is only rarely used, because the JavaScript
 * engine will call this with proper arguments for you, just like with other
 * tag functions.</p> <p><code>String.raw()</code> is the only built-in tag
 * function of template strings; it works just like the default template
 * function and performs concatenation. You can even re-implement it with
 * normal JavaScript code.</p>
 *
 * @summary 
 * @param {{raw: string}} callSite Well-formed template call site object, like
 * <code>{ raw: 'string' }</code>.
 * @param {...*} _substitutions Well-formed template call site object, like
 * <code>{ raw: 'string' }</code>. Contains substitution values. A template
 * string, optionally with substitutions (<code>${...}</code>).
 * @see String
 */
String.raw = function (callSite, _substitutions) {};

/**
 * <p>If there is no element at the specified position, <code>undefined</code>
 * is returned. If no UTF-16 surrogate pair begins at <code>pos</code>, the
 * code unit at <code>pos</code> is returned.</p>
 *
 * @summary 
 * @param {number} pos Position of an element in the String to return the code
 * point value from.
 * @return {number} <p>A number representing the code unit value of the
 * character at the given index; <code>undefined</code> if there is no element
 * at <code>pos</code>.</p>
 * @see String.fromCodePoint()
 * @see String.fromCharCode()
 * @see String.prototype.charCodeAt()
 * @see String.prototype.charAt()
 */
String.prototype.codePointAt = function (pos) {};

/**
 * <p>This method lets you determine whether or not a string includes another
 * string.</p> <h3 id="Case-sensitivity">Case-sensitivity</h3> <p>The
 * <code>includes()</code> method is case sensitive. For example, the following
 * expression returns false:</p> <pre class="brush: js">'Blue
 * Whale'.includes('blue'); // returns false </pre>
 *
 * @summary 
 * @param {string} searchString A string to be searched for within this string.
 * @param {number=} position Optional. The position in this string at which to
 * begin searching for <code>searchString</code>; defaults to 0.
 * @return {boolean} <p><strong><code>true</code></strong> if the string
 * contains the search string; otherwise,
 * <strong><code>false</code></strong>.</p>
 * @see Array.prototype.includes()
 * @see TypedArray.prototype.includes()
 * @see String.prototype.indexOf()
 * @see String.prototype.lastIndexOf()
 * @see String.prototype.startsWith()
 * @see String.prototype.endsWith()
 */
String.prototype.includes = function (searchString, position) {};

/**
 * <p>This method lets you determine whether or not a string ends with another
 * string. This method is case-sensitive.</p>
 *
 * @summary 
 * @param {string} searchString The characters to be searched for at the end of
 * this string.
 * @param {number=} position Optional. Search within this string as if this
 * string were only this long; defaults to this string's actual length, clamped
 * within the range established by this string's length.
 * @return {boolean} <p><strong><code>true</code></strong> if the string ends
 * with the characters of the search string; otherwise,
 * <strong><code>false</code></strong>.</p>
 * @see String.prototype.startsWith()
 * @see String.prototype.includes()
 * @see String.prototype.indexOf()
 * @see String.prototype.lastIndexOf()
 */
String.prototype.endsWith = function (searchString, position) {};

/**
 * <p>The <code>normalize()</code> method returns the specified Unicode
 * Normalization Form of the string. It does not affect the value of the string
 * itself.</p>
 *
 * @summary 
 * @param {string} form One of <code>"NFC"</code>, <code>"NFD"</code>,
 * <code>"NFKC"</code>, or <code>"NFKD"</code>, specifying the Unicode
 * Normalization Form. If omitted or <code>undefined</code>, <code>"NFC"</code>
 * is used. <ul> <li><code>NFC</code> — Normalization Form Canonical
 * Composition.</li> <li><code>NFD</code> — Normalization Form Canonical
 * Decomposition.</li> <li><code>NFKC</code> — Normalization Form Compatibility
 * Composition.</li> <li><code>NFKD</code> — Normalization Form Compatibility
 * Decomposition.</li> </ul>
 * @return {string} <p>A string containing the Unicode Normalization Form of
 * the given string.</p>
 */
String.prototype.normalize = function (form) {};

/**
 * 
 *
 * @summary 
 * @param {number} count An integer between 0 and +∞: [0, +∞), indicating the
 * number of times to repeat the string in the newly-created string that is to
 * be returned.
 * @return {string} <p>A new string containing the specified number of copies
 * of the given string.</p>
 */
String.prototype.repeat = function (count) {};

/**
 * <p>This method lets you determine whether or not a string begins with
 * another string. This method is case-sensitive.</p>
 *
 * @summary 
 * @param {string} searchString The characters to be searched for at the start
 * of this string.
 * @param {number=} position
 * @return {boolean} <p><strong><code>true</code></strong> if the string begins
 * with the characters of the search string; otherwise,
 * <strong><code>false</code></strong>.</p>
 * @see String.prototype.endsWith()
 * @see String.prototype.includes()
 * @see String.prototype.indexOf()
 * @see String.prototype.lastIndexOf()
 */
String.prototype.startsWith = function (searchString, position) {};

/**
 * <p>Use the <code>anchor()</code> method to programmatically create and
 * display an anchor in a document.</p> <p>In the syntax, the text string
 * represents the literal text that you want the user to see. The
 * <code>name</code> parameter string represents the <code>name</code>
 * attribute of the ) defines a hyperlink to a location on the same page or any
 * other page on the Web. It can also be used (in an obsolete way) to create an
 * anchor point—a destination for hyperlinks within the content of a page, so
 * that links aren't limited to connecting simply to the top of a
 * page."><code>&lt;a&gt;</code> element.</p> <p>Anchors created with the
 * <code>anchor()</code> method become elements in the
 * <code>document.anchors</code> array.</p>
 *
 * @summary 
 * @param {type} name A string representing the <code>name</code> attribute of
 * the a tag to be created.
 * @return {HTMLAnchorElement} <p>A string containing an ) defines a hyperlink
 * to a location on the same page or any other page on the Web. It can also be
 * used (in an obsolete way) to create an anchor point—a destination for
 * hyperlinks within the content of a page, so that links aren't limited to
 * connecting simply to the top of a page."><code>&lt;a&gt;</code> HTML
 * element.</p>
 * @see String.prototype.link()
 */
String.prototype.anchor = function (name) {};

/**
 * <p>The <code>big()</code> method embeds a string in a
 * <code>&lt;big&gt;</code> tag: <code>"&lt;big&gt;str&lt;/big&gt;"</code>.</p>
 *
 * @summary 
 * @deprecated Do not use this method because it relies on deprecated HTML
 * elements.
 * @return {HTMLElement} <p>A string containing a ) makes the text font size
 * one size bigger (for example, from small to medium, or from large to
 * x-large) up to the browser's maximum font size."><code>&lt;big&gt;</code>
 * HTML element.</p>
 * @see String.prototype.fontsize()
 * @see String.prototype.small()
 */
String.prototype.big = function () {};

/**
 * <p>The <code>blink()</code> method embeds a string in a
 * <code>&lt;blink&gt;</code> tag:
 * <code>"&lt;blink&gt;str&lt;/blink&gt;"</code>.</p>
 *
 * @summary 
 * @deprecated Blinking text is frowned upon by several accessibility
 * standards. The &lt;blink&gt; element itself is non-standard and deprecated.
 * @return {HTMLElement} <p>A string containing a ) is a non-standard element
 * causing the enclosed text to flash slowly."><code>&lt;blink&gt;</code> HTML
 * element.</p>
 * @see String.prototype.bold()
 * @see String.prototype.italics()
 * @see String.prototype.strike()
 */
String.prototype.blink = function () {};

/**
 * <p>The <code>bold()</code> method embeds a string in a
 * <code>&lt;b&gt;</code> tag: <code>"&lt;b&gt;str&lt;/b&gt;"</code>.</p>
 *
 * @summary 
 * @deprecated Do not use this method because it relies on deprecated HTML
 * elements.
 * @return {HTMLElement} <p>A string containing a  Element represents a span of
 * text stylistically different from normal text, without conveying any special
 * importance or relevance. It is typically used for keywords in a summary,
 * product names in a review, or other spans of text whose typical presentation
 * would be boldfaced. Another example of its use is to mark the lead sentence
 * of each paragraph of an article."
 * href="/en-US/docs/Web/HTML/Element/b"><code>&lt;b&gt;</code> HTML
 * element.</p>
 * @see String.prototype.blink()
 * @see String.prototype.italics()
 * @see String.prototype.strike()
 */
String.prototype.bold = function () {};

/**
 * <p>The <code>fixed()</code> method embeds a string in a
 * <code>&lt;tt&gt;</code> tag: <code>"&lt;tt&gt;str&lt;/tt&gt;"</code>.</p>
 *
 * @summary 
 * @deprecated Do not use this method because it relies on deprecated HTML
 * elements.
 * @return {HTMLElement} <p>A string representing a ) produces an inline
 * element displayed in the browser's default monotype font. This element was
 * intended to style text as it would display on a fixed width display, such as
 * a teletype. It probably is more common to display fixed width type using the
 * &lt;code> element."><code>&lt;tt&gt;</code> HTML element.</p>
 * @see String.prototype.bold()
 * @see String.prototype.italics()
 * @see String.prototype.strike()
 */
String.prototype.fixed = function () {};

/**
 * <p>If you express color as a hexadecimal RGB triplet, you must use the
 * format <code>rrggbb</code>. For example, the hexadecimal RGB values for
 * salmon are red=FA, green=80, and blue=72, so the RGB triplet for salmon is
 * <code>"FA8072"</code>.</p>
 *
 * @summary 
 * @deprecated Do not use this method because it relies on deprecated HTML
 * elements.
 * @param {string} color A string expressing the color as a hexadecimal RGB
 * triplet or as a string literal. String literals for color names are listed
 * in the CSS color reference.
 * @return {HTMLElement} <p>A string containing a ) defines the font size,
 * color and face for its content."
 * href="/en-US/docs/Web/HTML/Element/font"><code>&lt;font&gt;</code> HTML
 * element.</p>
 * @see String.prototype.fontsize()
 */
String.prototype.fontcolor = function (color) {};

/**
 * <p>When you specify size as an integer, you set the font size of
 * <code>str</code> to one of the 7 defined sizes. When you specify
 * <code>size</code> as a string such as "-2", you adjust the font size of
 * <code>str</code> relative to the size set in the ) establishes a default
 * font size for a document. Font size then can be varied relative to the base
 * font size using the &lt;font> element."><code>&lt;basefont&gt;</code>
 * tag.</p>
 *
 * @summary 
 * @deprecated Do not use this method because it relies on deprecated HTML
 * elements.
 * @param {number} size An integer between 1 and 7, a string representing a
 * signed integer between 1 and 7.
 * @return {HTMLElement} <p>A string containing a ) defines the font size,
 * color and face for its content."><code>&lt;font&gt;</code> HTML element.</p>
 * @see String.prototype.big()
 * @see String.prototype.small()
 */
String.prototype.fontsize = function (size) {};

/**
 * <p>The <code>italics()</code> method embeds a string in an
 * <code>&lt;i&gt;</code> tag: <code>"&lt;i&gt;str&lt;/i&gt;"</code>.</p>
 *
 * @summary 
 * @deprecated Do not use this method because it relies on deprecated HTML
 * elements.
 * @return {HTMLElement} <p>A string containing a  Element represents a range
 * of text that is set off from the normal text for some reason, for example,
 * technical terms, foreign language phrases, or fictional character thoughts.
 * It is typically displayed in italic type."
 * href="/en-US/docs/Web/HTML/Element/i"><code>&lt;i&gt;</code> HTML
 * element.</p>
 * @see String.prototype.blink()
 * @see String.prototype.bold()
 * @see String.prototype.strike()
 */
String.prototype.italics = function () {};

/**
 * <p>Use the <code>link()</code> method to create an HTML snippet for a
 * hypertext link. The returned string can then be added to the document via
 * <code>document.write()</code> or <code>element.innerHTML</code>.</p>
 * <p>Links created with the <code>link()</code> method become elements in the
 * <code>links</code> array of the <code>document</code> object. See  elements
 * and &lt;a> elements in a document with a value for the href attribute."
 * href="/en-US/docs/Web/API/Document/links"><code>document.links</code>.</p>
 *
 * @summary 
 * @param {string} url Any string that specifies the <code>href</code>
 * attribute of the <code>&lt;a&gt;</code> tag; it should be a valid URL
 * (relative or absolute), with any <code>&amp;</code> characters escaped as
 * <code>&amp;amp;</code>, and any <code>"</code> characters escaped as
 * <code>&amp;quot;</code>.
 * @return {HTMLAnchorElement} <p>A string containing an ) defines a hyperlink
 * to a location on the same page or any other page on the Web. It can also be
 * used (in an obsolete way) to create an anchor point—a destination for
 * hyperlinks within the content of a page, so that links aren't limited to
 * connecting simply to the top of a page."
 * href="/en-US/docs/Web/HTML/Element/a"><code>&lt;a&gt;</code> HTML
 * element.</p>
 * @see String.prototype.anchor()
 */
String.prototype.link = function (url) {};

/**
 * <p>The <code>small()</code> method embeds a string in a
 * <code>&lt;small&gt;</code> tag:
 * <code>"&lt;small&gt;str&lt;/small&gt;"</code>.</p>
 *
 * @summary 
 * @deprecated Do not use this method because it relies on deprecated HTML
 * elements.
 * @return {HTMLElement} <p>A string containing a ) makes the text font size
 * one size smaller (for example, from large to medium, or from small to
 * x-small) down to the browser's minimum font size. In HTML5, this element is
 * repurposed to represent side-comments and small print, including copyright
 * and legal text, independent of its styled
 * presentation."><code>&lt;small&gt;</code> HTML element.</p>
 * @see String.prototype.fontsize()
 * @see String.prototype.big()
 */
String.prototype.small = function () {};

/**
 * <p>The <code>strike()</code> method embeds a string in a
 * <code>&lt;strike&gt;</code> tag:
 * <code>"&lt;strike&gt;str&lt;/strike&gt;"</code>.</p>
 *
 * @summary 
 * @deprecated Do not use this method because it relies on deprecated HTML
 * elements.
 * @return {HTMLElement} <p>A string containing a ) renders text with a
 * strikethrough, or a line through it."><code>&lt;strike&gt;</code> HTML
 * element.</p>
 * @see String.prototype.blink()
 * @see String.prototype.bold()
 * @see String.prototype.italics()
 */
String.prototype.strike = function () {};

/**
 * <p>The <code>sub()</code> method embeds a string in a
 * <code>&lt;sub&gt;</code> tag: <code>"&lt;sub&gt;str&lt;/sub&gt;"</code>.</p>
 *
 * @summary 
 * @deprecated Do not use this method because it relies on deprecated HTML
 * elements.
 * @return {HTMLElement} <p>A string containing a  element defines a span of
 * text that should be displayed, for typographic reasons, lower, and often
 * smaller, than the main span of text."><code>&lt;sub&gt;</code> HTML
 * element.</p>
 * @see String.prototype.sup()
 */
String.prototype.sub = function () {};

/**
 * <p>The <code>sup()</code> method embeds a string in a
 * <code>&lt;sup&gt;</code> tag: <code>"&lt;sup&gt;str&lt;/sup&gt;"</code>.</p>
 *
 * @summary 
 * @deprecated Do not use this method because it relies on deprecated HTML
 * elements.
 * @return {HTMLElement} <p>A string containing a  element defines a span of
 * text that should be displayed, for typographic reasons, higher, and often
 * smaller, than the main span of text."><code>&lt;sup&gt;</code> HTML
 * element.</p>
 * @see String.prototype.sub()
 */
String.prototype.sup = function () {};

/**
 * <p>Flags in the <code>flags</code> property are sorted alphabetically (from
 * left to right, e.g. <code>"gimuy"</code>).</p>
 *
 * @summary 
 * @type {string}
 * @see RegExp.prototype.source
 */
RegExp.prototype.flags = null;

/**
 * <p>The value of <code>sticky</code> is a <code>Boolean</code> and true if
 * the "<code>y</code>" flag was used; otherwise, false. The "<code>y</code>"
 * flag indicates that it matches only from the index indicated by the
 * <code>lastIndex</code> property of this regular expression in the target
 * string (and does not attempt to match from any later indexes).</p> <p>You
 * cannot change this property directly. It is read-only.</p>
 *
 * @summary 
 * @type {boolean}
 * @see RegExp.lastIndex
 * @see RegExp.prototype.global
 * @see RegExp.prototype.ignoreCase
 * @see RegExp.prototype.multiline
 * @see RegExp.prototype.source
 */
RegExp.prototype.sticky = null;

/**
 * <p>The value of <code>unicode</code> is a <code>Boolean</code> and
 * <code>true</code> if the "<code>u</code>" flag was used; otherwise
 * <code>false</code>. The "<code>u</code>" flag enables various
 * Unicode-related features. With the "u" flag, any Unicode code point escapes
 * will be interpreted as such, for example.</p> <p>You cannot change this
 * property directly. It is read-only.</p>
 *
 * @summary 
 * @type {boolean}
 * @see RegExp.lastIndex
 * @see RegExp.prototype.global
 * @see RegExp.prototype.ignoreCase
 * @see RegExp.prototype.multiline
 * @see RegExp.prototype.source
 * @see RegExp.prototype.sticky
 */
RegExp.prototype.unicode = null;

/**
 * <p> The <code>compile</code> method is deprecated. You can just use the
 * <code>RegExp</code> constructor to achieve the same effect.</p>
 *
 * @summary 
 * @deprecated This feature is being removed from the standard and browsers.
 * Use the <code>RegExp</code> constructor to achieve the same.
 * @param {string} pattern The text of the regular expression.
 * @param {string} flags <p>If specified, flags can have any combination of the
 * following values:</p> <dl> <dt><code>g</code></dt> <dd>global match</dd>
 * <dt><code>i</code></dt> <dd>ignore case</dd> <dt><code>m</code></dt>
 * <dd>multiline; treat beginning and end characters (^ and $) as working over
 * multiple lines (i.e., match the beginning or end of <em>each</em> line
 * (delimited by \n or \r), not only the very beginning or end of the whole
 * input string)</dd> <dt><code>y</code></dt> <dd>sticky; matches only from the
 * index indicated by the <code>lastIndex</code> property of this regular
 * expression in the target string (and does not attempt to match from any
 * later indexes).
 * @see RegExp
 */
RegExp.prototype.compile = function (pattern, flags) {};

/**
 * <p><code>Array.from()</code> lets you create <code>Arrays</code> from:</p>
 * <ul> <li>array-like objects (objects with a <code>length</code> property and
 * indexed elements) or</li> <li>iterable objects (objects where you can get
 * its elements, such as <code>Map</code> and <code>Set</code>).</li> </ul>
 * <p><code>Array.from()</code> has an optional parameter <code>mapFn</code>,
 * which allows you to execute a <code>map</code> function on each element of
 * the array (or subclass object) that is being created. More clearly,<code>
 * Array.from(obj, mapFn, thisArg)</code> has the same result
 * as <code>Array.from(obj).map(mapFn, thisArg)</code>, except that it does not
 * create an intermediate array. This is especially important for certain array
 * subclasses, like typed arrays, since the intermediate array would
 * necessarily have values truncated to fit into the appropriate type.</p>
 * <p>The <code>length</code> property of the <code>from()</code> method is
 * 1.</p> <p>In ES2015, the class syntax allows for sub-classing of both
 * built-in and user defined classes; as a result, static methods such as
 * <code>Array.from</code> are "inherited" by subclasses of <code>Array</code>
 * and create new instances of the subclass, not <code>Array</code>.</p>
 *
 * @summary 
 * @template T
 * @template E
 * @param {({length: number}|{next: function(): {value: E, done: boolean}})}
 * arrayLike An array-like or iterable object to convert to an array.
 * @param {function(this: T, E): E=} mapFn Optional. Map function to call on
 * every element of the array.
 * @param {T=} thisArg Optional. Value to use as <code>this</code> when
 * executing <code>mapFn</code>.
 * @return {Array<E>} <p>A new <code>Array</code> instance.</p>
 * @see Array
 * @see Array.prototype.map()
 * @see TypedArray.from()
 */
Array.from = function (arrayLike, mapFn, thisArg) {};

/**
 * <p>This function is part of the ECMAScript 2015 standard. For more
 * information see <code>Array.of</code> and <code>Array.from</code> proposal
 * and <code>Array.of</code> polyfill.</p>
 *
 * @summary 
 * @template E
 * @param {...E} _element Elements of which to create the array.
 * @return {Array<E>} <p>A new <code>Array</code> instance.</p>
 * @see Array
 * @see Array.from()
 * @see TypedArray.of()
 */
Array.of = function (_element) {};

/**
 * <p>The <code>copyWithin</code> works like C and C++'s <code>memmove</code>,
 * and is a high-performance method to shift the data of an <code>Array</code>.
 * This especially applies to the <code>TypedArray</code> method of the same
 * name. The sequence is copied and pasted as one operation; pasted sequence
 * will have the copied values even when the copy and paste region overlap.</p>
 * <p>The <code>copyWithin</code> function is intentionally <em>generic</em>,
 * it does not require that its this value be an <code>Array</code> object.</p>
 * <p>The <code>copyWithin</code> method is a mutable method. It does not alter
 * the length of <code>this</code>, but will change its content and create new
 * properties if necessary.</p>
 *
 * @summary 
 * @template E
 * @param {number} target Zero based index at which to copy the sequence to. If
 * negative, <code>target</code> will be counted from the end. If
 * <code>target</code> is at or greater than <code>arr.length</code>, nothing
 * will be copied. If <code>target</code> is positioned after
 * <code>start</code>, the copied sequence will be trimmed to fit
 * <code>arr.length</code>.
 * @param {number=} start
 * @param {number=} end
 * @return {Array<E>} <p>The modified array.</p>
 * @see Array
 */
Array.prototype.copyWithin = function (target, start, end) {};

/**
 * <p>The elements interval to fill is [<code>start</code>,
 * <code>end</code>).</p> <p>The <strong><code>fill</code></strong> method
 * takes up to three arguments <code>value</code>, <code>start</code> and
 * <code>end</code>. The <code>start</code> and <code>end</code> arguments are
 * optional with default values of <code>0</code> and the <code>length</code>
 * of the <code>this</code> object.</p> <p>If <code>start</code> is negative,
 * it is treated as <code>length+start</code> where <code>length</code> is the
 * length of the array. If <code>end</code> is negative, it is treated as
 * <code>length+end</code>.</p> <p>The <strong>fill</strong> function is
 * intentionally generic, it does not require that its <code>this</code> value
 * be an Array object.</p> <p>The <strong>fill</strong> method is a mutable
 * method, it will change <code>this</code> object itself, and return it, not
 * just return a copy of it.</p>
 *
 * @summary 
 * @template E
 * @param {E} value Value to fill an array.
 * @param {number=} start
 * @param {number=} end
 * @return {Array<E>} <p>The modified array.</p>
 * @see Array
 * @see TypedArray.prototype.fill()
 */
Array.prototype.fill = function (value, start, end) {};

/**
 * 
 *
 * @summary 
 * @template E
 * @return {{next: function(): {value: E, done: boolean}}} <p>A new
 * <code>Array</code> iterator object.</p>
 * @see Array.prototype.keys()
 * @see Array.prototype.values()
 * @see Array.prototype.forEach()
 * @see Array.prototype.every()
 * @see Array.prototype.some()
 */
Array.prototype.entries = function () {};

/**
 * <p>The <code>find</code> method executes the <code>callback</code> function
 * once for each index of the array until it finds one where
 * <code>callback</code> returns a true value. If such an element is found,
 * <code>find</code> immediately returns the value of that element. Otherwise,
 * <code>find</code> returns <code>undefined</code>. <code>callback</code> is
 * invoked for every index of the array from <code>0</code> to <code>length -
 * 1</code> and is invoked for all indexes, not just those that have been
 * assigned values. This may mean that it's less efficient for sparse arrays
 * than other methods that only visit indexes that have been assigned a
 * value.</p> <p><code>callback</code> is invoked with three arguments: the
 * value of the element, the index of the element, and the Array object being
 * traversed.</p> <p>If a <code>thisArg</code> parameter is provided to
 * <code>find</code>, it will be used as the <code>this</code> for each
 * invocation of the <code>callback</code>. If it is not provided, then
 * <code>undefined</code> is used.</p> <p><code>find</code> does not mutate the
 * array on which it is called.</p> <p>The range of elements processed by
 * <code>find</code> is set before the first invocation of
 * <code>callback</code>. Elements that are appended to the array after the
 * call to <code>find</code> begins will not be visited by
 * <code>callback</code>. If an existing, unvisited element of the array is
 * changed by <code>callback</code>, its value passed to the visiting
 * <code>callback</code> will be the value at the time that <code>find</code>
 * visits that element's index; elements that are deleted are still
 * visited.</p>
 *
 * @summary 
 * @template E
 * @template T
 * @param {function(this: T, E, number, Array<E>): boolean} callback Function
 * to execute on each value in the array, taking three arguments: <dl>
 * <dt><code>element</code></dt> <dd>The current element being processed in the
 * array.</dd> <dt><code>index</code></dt> <dd>The index of the current element
 * being processed in the array.</dd> <dt><code>array</code></dt> <dd>The array
 * <code>find</code> was called upon.
 * @param {T=} thisArg Optional. Object to use as <code>this</code> when
 * executing <code>callback</code>.
 * @return {E} <p>A value in the array if an element passes the test;
 * otherwise, <code>undefined</code>.</p>
 * @see Array.prototype.findIndex()
 * @see Array.prototype.every()
 */
Array.prototype.find = function (callback, thisArg) {};

/**
 * <p>The <code>findIndex</code> method executes the <code>callback</code>
 * function once for every array index <code>0..length-1</code> (inclusive) in
 * the array until it finds one where <code>callback</code> returns a truthy
 * value (a value that coerces to <code>true</code>). If such an element is
 * found, <code>findIndex</code> immediately returns the index for that
 * iteration. If the callback never returns a truthy value or the array's
 * <code>length</code> is 0, <code>findIndex</code> returns -1. Unlike some
 * other array methods such as Array#some, in sparse arrays
 * the <code>callback</code> <strong>is</strong> called even for indexes of
 * entries not present in the array.</p> <p><code>callback</code> is invoked
 * with three arguments: the value of the element, the index of the element,
 * and the Array object being traversed.</p> <p>If a <code>thisArg</code>
 * parameter is provided to <code>findIndex</code>, it will be used as the
 * <code>this</code> for each invocation of the <code>callback</code>. If it is
 * not provided, then <code>undefined</code> is used.</p>
 * <p><code>findIndex</code> does not mutate the array on which it is
 * called.</p> <p>The range of elements processed by <code>findIndex</code> is
 * set before the first invocation of <code>callback</code>. Elements that are
 * appended to the array after the call to <code>findIndex</code> begins will
 * not be visited by <code>callback</code>. If an existing, unvisited element
 * of the array is changed by <code>callback</code>, its value passed to the
 * visiting <code>callback</code> will be the value at the time that
 * <code>findIndex</code> visits that element's index; elements that are
 * deleted are not visited.</p>
 *
 * @summary 
 * @template T
 * @template E
 * @param {function(this: T, E, number, Array<E>): boolean} callback Function
 * to execute on each value in the array, taking three arguments: <dl>
 * <dt><code>element</code></dt> <dd>The current element being processed in the
 * array.</dd> <dt><code>index</code></dt> <dd>The index of the current element
 * being processed in the array.</dd> <dt><code>array</code></dt> <dd>The array
 * <code>findIndex</code> was called upon.
 * @param {T=} thisArg Optional. Object to use as <code>this</code> when
 * executing <code>callback</code>.
 * @return {number} <p>An index in the array if an element passes the test;
 * otherwise, <strong>-1</strong>.</p>
 * @see Array.prototype.find()
 * @see Array.prototype.indexOf()
 */
Array.prototype.findIndex = function (callback, thisArg) {};

/**
 * 
 *
 * @summary 
 * @return {{next: function(): {value: number, done: boolean}}} <p>A new
 * <code>Array</code> iterator object.</p>
 * @see Array.prototype.values()
 * @see Array.prototype.entries()
 */
Array.prototype.keys = function () {};

/**
 * 
 *
 * @summary 
 * @constructor
 * @param {number} length
 */
function ArrayBuffer(length) {}

/**
 * 
 *
 * @summary 
 * @type {number}
 */
ArrayBuffer.prototype.byteLength = null;

/**
 * 
 *
 * @summary 
 * @param {(*|ArrayBuffer|DataView|TypedArray)} arg
 * @return {boolean}
 */
ArrayBuffer.isView = function (arg) {};

/**
 * 
 *
 * @summary 
 * @param {number=} start
 * @param {number=} end
 * @return {ArrayBuffer}
 */
ArrayBuffer.prototype.slice = function (start, end) {};

/**
 * 
 *
 * @summary 
 * @constructor
 * @param {ArrayBuffer} buffer
 * @param {number=} byteOffset
 * @param {number=} byteLength
 */
function DataView(buffer, byteOffset, byteLength) {}

/**
 * 
 *
 * @summary 
 * @type {ArrayBuffer}
 */
DataView.prototype.buffer = null;

/**
 * 
 *
 * @summary 
 * @type {number}
 */
DataView.prototype.byteLength = null;

/**
 * 
 *
 * @summary 
 * @type {number}
 */
DataView.prototype.byteOffset = null;

/**
 * 
 *
 * @summary 
 * @param {number} byteOffset
 * @param {boolean=} littleEndian
 * @return {number}
 */
DataView.prototype.getFloat32 = function (byteOffset, littleEndian) {};

/**
 * 
 *
 * @summary 
 * @param {number} byteOffset
 * @param {boolean=} littleEndian
 * @return {number}
 */
DataView.prototype.getFloat64 = function (byteOffset, littleEndian) {};

/**
 * 
 *
 * @summary 
 * @param {number} byteOffset
 * @param {boolean=} littleEndian
 * @return {number}
 */
DataView.prototype.getInt16 = function (byteOffset, littleEndian) {};

/**
 * 
 *
 * @summary 
 * @param {number} byteOffset
 * @param {boolean=} littleEndian
 * @return {number}
 */
DataView.prototype.getInt32 = function (byteOffset, littleEndian) {};

/**
 * 
 *
 * @summary 
 * @param {number} byteOffset
 * @return {number}
 */
DataView.prototype.getInt8 = function (byteOffset) {};

/**
 * 
 *
 * @summary 
 * @param {number} byteOffset
 * @param {boolean=} littleEndian
 * @return {number}
 */
DataView.prototype.getUint16 = function (byteOffset, littleEndian) {};

/**
 * 
 *
 * @summary 
 * @param {number} byteOffset
 * @param {boolean=} littleEndian
 * @return {number}
 */
DataView.prototype.getUint32 = function (byteOffset, littleEndian) {};

/**
 * 
 *
 * @summary 
 * @param {number} byteOffset
 * @return {number}
 */
DataView.prototype.getUint8 = function (byteOffset) {};

/**
 * 
 *
 * @summary 
 * @param {number} byteOffset
 * @param {number} value
 * @param {boolean=} littleEndian
 */
DataView.prototype.setFloat32 = function (byteOffset, value, littleEndian) {};

/**
 * 
 *
 * @summary 
 * @param {number} byteOffset
 * @param {number} value
 * @param {boolean=} littleEndian
 */
DataView.prototype.setFloat64 = function (byteOffset, value, littleEndian) {};

/**
 * 
 *
 * @summary 
 * @param {number} byteOffset
 * @param {number} value
 * @param {boolean=} littleEndian
 */
DataView.prototype.setInt16 = function (byteOffset, value, littleEndian) {};

/**
 * 
 *
 * @summary 
 * @param {number} byteOffset
 * @param {number} value
 * @param {boolean=} littleEndian
 */
DataView.prototype.setInt32 = function (byteOffset, value, littleEndian) {};

/**
 * 
 *
 * @summary 
 * @param {number} byteOffset
 * @param {number} value
 */
DataView.prototype.setInt8 = function (byteOffset, value) {};

/**
 * 
 *
 * @summary 
 * @param {number} byteOffset
 * @param {number} value
 * @param {boolean=} littleEndian
 */
DataView.prototype.setUint16 = function (byteOffset, value, littleEndian) {};

/**
 * 
 *
 * @summary 
 * @param {number} byteOffset
 * @param {number} value
 * @param {boolean=} littleEndian
 */
DataView.prototype.setUint32 = function (byteOffset, value, littleEndian) {};

/**
 * 
 *
 * @summary 
 * @param {number} byteOffset
 * @param {number} value
 */
DataView.prototype.setUint8 = function (byteOffset, value) {};

/**
 * <p>ECMAScript 2015 defines a <em>TypedArray</em> constructor that serves as
 * the <code>[[Prototype]]</code> of all <em>TypedArray</em> constructors. This
 * constructor is not directly exposed: there is no global
 * <code>%TypedArray%</code> or <code>TypedArray</code> property. It is only
 * directly accessible through <code>Object.getPrototypeOf(Int8Array)</code>
 * and similar. All <em>TypedArray</em>s constructors inherit common properties
 * from the <code>%TypedArray%</code> constructor function. Additionally, all
 * typed array prototypes (<em>TypedArray</em><code>.prototype</code>) have
 * <code>%TypedArray%.prototype</code> as their <code>[[Prototype]]</code>.</p>
 * <p>The <code>%TypedArray%</code> constructor on its own is not particularly
 * useful. Calling it or using it in a <code>new</code> expression will throw a
 * <code>TypeError</code>, except when used during object creation in JS
 * engines that support subclassing. There are at present no such engines, so
 * <code>%TypedArray%</code> is only useful to polyfill functions or properties
 * onto all <em>TypedArray</em> constructors.</p> <p>When creating
 * a <em>TypedArray </em>instance (i.e. instance of Int8Array or similar), an
 * array buffer is created internally (if ArrayBuffer object is present as
 * constructor argument then this array buffer is used) in memory and this
 * buffer address is saved as internal property of that instances, and all the
 * methods of %<code>TypedArray</code>%.<code>prototype </code>uses that array
 * buffer address to operate on i.e. set value and get value etc.</p> <h3
 * id="Property_access">Property access</h3> <p>You can reference elements in
 * the array using standard array index syntax (that is, using bracket
 * notation). However, getting or setting indexed properties on typed arrays
 * will not search in the prototype chain for this property, even when the
 * indices are out of bound. Indexed properties will consult the
 * <code>ArrayBuffer</code> and will never look at object properties. You can
 * still use named properties, just like with all objects.</p> <pre
 * class="brush: js">// Setting and getting using standard array syntax var
 * int16 = new Int16Array(2); int16[0] = 42; console.log(int16[0]); // 42 //
 * Indexed properties on prototypes are not consulted (Fx 25)
 * Int8Array.prototype[20] = 'foo'; (new Int8Array(32))[20]; // 0 // even when
 * out of bound Int8Array.prototype[20] = 'foo'; (new Int8Array(8))[20]; //
 * undefined // or with negative integers Int8Array.prototype[-1] = 'foo'; (new
 * Int8Array(8))[-1]; // undefined // Named properties are allowed, though (Fx
 * 30) Int8Array.prototype.foo = 'bar'; (new Int8Array(32)).foo; // "bar"</pre>
 *
 * @summary 
 * @interface
 * @param {(number|TypedArray|{length: number}|{next: function(): {value: *,
 * done: boolean}}|ArrayBuffer)} length_typedArray_object_buffer When called
 * with a <code>length</code> argument, an internal array buffer is created in
 * memory of size <em>length multiplied by BYTES_PER_ELEMENT</em> bytes
 * containing 0 value. When called with a <code>typedArray</code> argument,
 * which can be an object of any of the typed array types (such as
 * <code>Int32Array</code>), the <code>typedArray</code> gets copied into a new
 * typed array. Each value in <code>typedArray</code> is converted to the
 * corresponding type of the constructor before being copied into the new
 * array. Then length of the new typedArray object will be same of length of
 * the typedArray argument. When called with an <code>object</code> argument, a
 * new typed array is created as if by the
 * <code><em>TypedArray</em>.from()</code> method. When called with a
 * <code>buffer</code>, and optionally a <code>byteOffset</code> and a
 * <code>length</code> argument, a new typed array view is created that views
 * the specified <code>ArrayBuffer</code>. The <code>byteOffset</code> and
 * <code>length</code> parameters specify the memory range that will be exposed
 * by the typed array view. If both are omitted, all of <code>buffer</code> is
 * viewed; if only <code>length</code> is omitted, the remainder of
 * <code>buffer</code> is viewed.
 * @param {number=} _byteOffset When called with a <code>length</code>
 * argument, an internal array buffer is created in memory of size <em>length
 * multiplied by BYTES_PER_ELEMENT</em> bytes containing 0 value. When called
 * with a <code>typedArray</code> argument, which can be an object of any of
 * the typed array types (such as <code>Int32Array</code>), the
 * <code>typedArray</code> gets copied into a new typed array. Each value in
 * <code>typedArray</code> is converted to the corresponding type of the
 * constructor before being copied into the new array. Then length of the new
 * typedArray object will be same of length of the typedArray argument. When
 * called with an <code>object</code> argument, a new typed array is created as
 * if by the <code><em>TypedArray</em>.from()</code> method. When called with a
 * <code>buffer</code>, and optionally a <code>byteOffset</code> and a
 * <code>length</code> argument, a new typed array view is created that views
 * the specified <code>ArrayBuffer</code>. The <code>byteOffset</code> and
 * <code>length</code> parameters specify the memory range that will be exposed
 * by the typed array view. If both are omitted, all of <code>buffer</code> is
 * viewed; if only <code>length</code> is omitted, the remainder of
 * <code>buffer</code> is viewed.
 * @param {number=} _length When called with a <code>length</code> argument, an
 * internal array buffer is created in memory of size <em>length multiplied by
 * BYTES_PER_ELEMENT</em> bytes containing 0 value. When called with a
 * <code>typedArray</code> argument, which can be an object of any of the typed
 * array types (such as <code>Int32Array</code>), the <code>typedArray</code>
 * gets copied into a new typed array. Each value in <code>typedArray</code> is
 * converted to the corresponding type of the constructor before being copied
 * into the new array. Then length of the new typedArray object will be same of
 * length of the typedArray argument. When called with an <code>object</code>
 * argument, a new typed array is created as if by the
 * <code><em>TypedArray</em>.from()</code> method. When called with a
 * <code>buffer</code>, and optionally a <code>byteOffset</code> and a
 * <code>length</code> argument, a new typed array view is created that views
 * the specified <code>ArrayBuffer</code>. The <code>byteOffset</code> and
 * <code>length</code> parameters specify the memory range that will be exposed
 * by the typed array view. If both are omitted, all of <code>buffer</code> is
 * viewed; if only <code>length</code> is omitted, the remainder of
 * <code>buffer</code> is viewed.
 * @constructor
 * @see ArrayBuffer
 * @see DataView
 */
function TypedArray(length_typedArray_object_buffer, _byteOffset, _length) {}

/**
 * <p>TypedArray objects differ from each other in the number of bytes per
 * element and in the way the bytes are interpreted. The
 * <code>BYTES_PER_ELEMENT</code> constant contains the number of bytes each
 * element in the given TypedArray has.</p>
 *
 * @summary 
 * @type {number}
 * @see TypedArray
 */
TypedArray.BYTES_PER_ELEMENT = null;

/**
 * <p>TypedArray objects differ from each other in the number of bytes per
 * element and in the way the bytes are interpreted. The <code>name</code>
 * property describes of what data type the array consists. The first part can
 * be <code>Int</code> for "integer" or <code>Uint</code> for an "unsigned
 * integer", also <code>Float</code> for "floating point" is used. The second
 * part is a number describing the bit-size of the array. Finally, the object
 * type is <code>Array</code>, with <code>ClampedArray</code> as a special
 * case. Please see <code>Uint8ClampedArray</code> for more details.</p>
 *
 * @summary 
 * @type {string}
 * @see TypedArray
 */
TypedArray.name = null;

/**
 * <p><code><em>TypedArray</em>.from()</code> lets you create typed arrays
 * from:</p> <ul> <li>array-like objects (objects with a <code>length</code>
 * property and indexed elements) or</li> <li>iterable objects (objects where
 * you can get its elements, such as <code>Map</code> and
 * <code>Set</code>).</li> </ul> <p><code><em>TypedArray</em>.from()</code> has
 * an optional parameter <code>mapFn</code>, which allows you to execute a
 * <code>map</code> function on each element of the typed array (or subclass
 * object) that is being created. More clearly,
 * <code><em>TypedArray</em>.from(obj, mapFn, thisArg)</code> is the same as
 * <code><em>TypedArray</em>.from(Array.prototype.map.call(obj, mapFn,
 * thisArg))</code>.</p> <p>The <code>length</code> property of the
 * <code>from()</code> method is 1.</p> <p>Some subtle dinstinctions between
 * <code>Array.from()</code> and <code><em>TypedArray</em>.from()</code>:</p>
 * <ul> <li>If the <code>|this|</code> value passed to
 * <code><em>TypedArray</em>.from</code> is not a constructor,
 * <code><em>TypedArray</em>.from</code> will throw a <code>TypeError</code>,
 * where <code>Array.from</code> defaults to creating a new
 * <code>Array</code>.</li> <li><code><em>TypedArray</em>.from</code> uses
 * <code>[[Put]]</code> where <code>Array.from</code> uses
 * <code>[[DefineProperty]]</code>. Hence, when working with <code>Proxy</code>
 * objects, it calls <code>handler.set</code> to create new elements rather
 * than <code>handler.defineProperty</code>.</li> <li>When <code>from</code>
 * gets an iterator, the <code><em>TypedArray</em></code> version first
 * collects all the values from the iterator, then creates an instance of
 * <code>|this|</code> using the count, then sets the values on the instance.
 * <code>Array.from</code> sets each value as it gets them from the iterator
 * then sets the length at the end.</li> <li>When <code>Array.from</code> gets
 * an array-like which isn't an iterator, it respects holes, where
 * <code><em>TypedArray</em>.from</code> will ensure the result is dense.</li>
 * </ul>
 *
 * @summary 
 * @template T
 * @param {({length: number}|{next: function(): {value: *, done: boolean}})}
 * source An array-like or iterable object to convert to a typed array.
 * @param {function(this: T, *): number=} mapFn Optional. Map function to call
 * on every element of the typed array.
 * @param {T=} thisArg Optional. Value to use as <code>this</code> when
 * executing <code>mapFn</code>.
 * @return {TypedArray} <p>A new <code>TypedArray</code> instance.</p>
 * @see TypedArray.of()
 * @see Array.from()
 * @see Array.prototype.map()
 */
TypedArray.from = function (source, mapFn, thisArg) {};

/**
 * <p>Some subtle distinctions between <code>Array.of()</code> and
 * <code><em>TypedArray</em>.of()</code>:</p> <ul> <li>If the <code>this</code>
 * value passed to <code><em>TypedArray</em>.of</code> is not a constructor,
 * <code><em>TypedArray</em>.of</code> will throw a <code>TypeError</code>,
 * where <code>Array.of</code> defaults to creating a new
 * <code>Array</code>.</li> <li><code><em>TypedArray</em>.of</code> uses
 * <code>[[Put]]</code> where <code>Array.of</code> uses
 * <code>[[DefineProperty]]</code>. Hence, when working with <code>Proxy</code>
 * objects, it calls <code>handler.set</code> to create new elements rather
 * than <code>handler.defineProperty</code>.</li> </ul>
 *
 * @summary 
 * @param {...number} _element Elements of which to create the typed array.
 * @return {TypedArray} <p>A new <code>TypedArray</code> instance.</p>
 * @see TypedArray.from()
 * @see Array.of()
 */
TypedArray.of = function (_element) {};

/**
 * <p>See <code>Array.prototype.copyWithin</code> for more details.</p> <p>This
 * method replaces the experimental
 * <code>TypedArray.prototype.move()</code>.</p>
 *
 * @summary 
 * @param {number} target Target start index position where to copy the
 * elements to.
 * @param {number} start Source start index position where to start copying
 * elements from.
 * @param {number} end
 * @see TypedArray
 */
TypedArray.prototype.copyWithin = function (target, start, end) {};

/**
 * 
 *
 * @summary 
 * @return {{next: function(): {value: number, done: boolean}}} <p>A new
 * <code><strong>Array Iterator</strong></code> object.</p>
 * @see TypedArray
 * @see TypedArray.prototype.keys()
 * @see TypedArray.prototype.values()
 * @see TypedArray.prototype[@@iterator]()
 */
TypedArray.prototype.entries = function () {};

/**
 * <p>The <code>every</code> method executes the provided <code>callback</code>
 * function once for each element present in the typed array until it finds one
 * where <code>callback</code> returns a <em>falsy</em> value (a value that
 * becomes false when converted to a Boolean). If such an element is found, the
 * <code>every</code> method immediately returns <code>false</code>. Otherwise,
 * if <code>callback</code> returned a true value for all elements,
 * <code>every</code> will return <code>true</code>.</p>
 * <p><code>callback</code> is invoked with three arguments: the value of the
 * element, the index of the element, and the array object being traversed.</p>
 * <p>If a <code>thisArg</code> parameter is provided to <code>every</code>, it
 * will be passed to <code>callback</code> when invoked, for use as its
 * <code>this</code> value. Otherwise, the value <code>undefined</code> will be
 * passed for use as its <code>this</code> value. The <code>this</code> value
 * ultimately observable by <code>callback</code> is determined according to
 * the usual rules for determining the <code>this</code> seen by a
 * function.</p> <p><code>every</code> does not mutate the typed array on which
 * it is called.</p>
 *
 * @summary 
 * @template T
 * @param {function(this: T, number, number, TypedArray): boolean} callback
 * Function to test for each element, taking three arguments: <dl>
 * <dt><code>currentValue</code></dt> <dd>The current element being processed
 * in the typed array.</dd> <dt><code>index</code></dt> <dd>The index of the
 * current element being processed in the typed array.</dd>
 * <dt><code>array</code></dt> <dd>The typed array <code>every</code> was
 * called upon.
 * @param {T=} thisArg Optional. Value to use as <code>this</code> when
 * executing <code>callback</code>.
 * @return {boolean} <p><code><strong>true</strong></code> if the callback
 * function returns a truthy value for every array element; otherwise,
 * <code><strong>false</strong></code>.</p>
 * @see TypedArray.prototype.some()
 * @see Array.prototype.every()
 */
TypedArray.prototype.every = function (callback, thisArg) {};

/**
 * <p>The elements interval to fill is [<code>start</code>,
 * <code>end</code>).</p> <p>The <strong><code>fill</code></strong> method
 * takes up to three arguments <code>value</code>, <code>start</code> and
 * <code>end</code>. The <code>start</code> and <code>end</code> arguments are
 * optional with default values of <code>0</code> and the <code>length</code>
 * of the <code>this</code> object.</p> <p>If <code>start</code> is negative,
 * it is treated as <code>length+start</code> where <code>length</code> is the
 * length of the array. If <code>end</code> is negative, it is treated as
 * <code>length+end</code>.</p>
 *
 * @summary 
 * @param {number} value Value to fill the typed array with.
 * @param {number=} start Optional. Start index. Defaults to 0.
 * @param {number=} end Optional. End index (not included). Defaults to
 * this.length.
 * @see Array.prototype.fill()
 */
TypedArray.prototype.fill = function (value, start, end) {};

/**
 * <p>The <code>filter()</code> method calls a provided <code>callback</code>
 * function once for each element in a typed array, and constructs a new typed
 * array of all the values for which <code>callback</code> returns a true
 * value. <code>callback</code> is invoked only for indexes of the typed array
 * which have assigned values; it is not invoked for indexes which have been
 * deleted or which have never been assigned values. Typed array elements which
 * do not pass the <code>callback</code> test are simply skipped, and are not
 * included in the new typed array.</p> <p><code>callback</code> is invoked
 * with three arguments:</p> <ol> <li>the value of the element</li> <li>the
 * index of the element</li> <li>the typed array object being traversed</li>
 * </ol> <p>If a <code>thisArg</code> parameter is provided to
 * <code>filter</code>, it will be passed to <code>callback</code> when
 * invoked, for use as its <code>this</code> value. Otherwise, the value
 * <code>undefined</code> will be passed for use as its <code>this</code>
 * value. The <code>this</code> value ultimately observable by
 * <code>callback</code> is determined according to the usual rules for
 * determining the <code>this</code> seen by a function.</p>
 * <p><code>filter()</code> does not mutate the typed array on which it is
 * called.</p> <p>The range of elements processed by <code>filter()</code> is
 * set before the first invocation of <code>callback</code>. Elements which are
 * appended to the typed array after the call to <code>filter()</code> begins
 * will not be visited by <code>callback</code>. If existing elements of the
 * typed array are changed, or deleted, their value as passed to
 * <code>callback</code> will be the value at the time <code>filter()</code>
 * visits them; elements that are deleted are not visited.</p>
 *
 * @summary 
 * @template T
 * @param {function(this: T, number, number, TypedArray): number} callback
 * Function to test each element of the typed array. Invoked with arguments
 * <code>(element, index, typedarray)</code>. Return <code>true</code> to keep
 * the element, <code>false</code> otherwise.
 * @param {T=} thisArg
 * @return {TypedArray} <p>A new typed array with the elements that pass the
 * test.</p>
 * @see TypedArray.prototype.every()
 * @see TypedArray.prototype.some()
 * @see Array.prototype.filter()
 */
TypedArray.prototype.filter = function (callback, thisArg) {};

/**
 * <p>The <code>find</code> method executes the <code>callback</code> function
 * once for each element present in the typed array until it finds one where
 * <code>callback</code> returns a true value. If such an element is found,
 * <code>find</code> immediately returns the value of that element. Otherwise,
 * <code>find</code> returns <code>undefined</code>. <code>callback</code> is
 * invoked only for indexes of the typed array which have assigned values; it
 * is not invoked for indexes which have been deleted or which have never been
 * assigned values.</p> <p><code>callback</code> is invoked with three
 * arguments: the value of the element, the index of the element, and the typed
 * array object being traversed.</p> <p>If a <code>thisArg</code> parameter is
 * provided to <code>find</code>, it will be used as the <code>this</code> for
 * each invocation of the <code>callback</code>. If it is not provided, then
 * <code>undefined</code> is used.</p> <p><code>find</code> does not mutate the
 * typed array on which it is called.</p> <p>The range of elements processed by
 * <code>find</code> is set before the first invocation of
 * <code>callback</code>. Elements that are appended to the typed array after
 * the call to <code>find</code> begins will not be visited by
 * <code>callback</code>. If an existing, unvisited element of the typed array
 * is changed by <code>callback</code>, its value passed to the visiting
 * <code>callback</code> will be the value at the time that <code>find</code>
 * visits that element's index; elements that are deleted are not visited.</p>
 *
 * @summary 
 * @template T
 * @param {function(this: T, number, number, TypedArray): number} callback
 * Function to execute on each value in the typed array, taking three
 * arguments: <dl> <dt><code>element</code></dt> <dd>The current element being
 * processed in the typed array.</dd> <dt><code>index</code></dt> <dd>The index
 * of the current element being processed in the typed array.</dd>
 * <dt><code>array</code></dt> <dd>The array <code>find</code> was called upon.
 * @param {T=} thisArg Optional. Object to use as <code>this</code> when
 * executing <code>callback</code>.
 * @return {(undefined|number)} <p>A value in the array if an element passes
 * the test; otherwise, <code>undefined</code>.</p>
 * @see TypedArray.prototype.findIndex()
 * @see TypedArray.prototype.every()
 */
TypedArray.prototype.find = function (callback, thisArg) {};

/**
 * <p>The <code>findIndex</code> method executes the <code>callback</code>
 * function once for each element present in the typed array until it finds one
 * where <code>callback</code> returns a true value. If such an element is
 * found, <code>findIndex</code> immediately returns the index of that element.
 * Otherwise, <code>findIndex</code> returns -1. <code>callback</code> is
 * invoked only for indexes of the typed array which have assigned values; it
 * is not invoked for indexes which have been deleted or which have never been
 * assigned values.</p> <p><code>callback</code> is invoked with three
 * arguments: the value of the element, the index of the element, and the typed
 * array object being traversed.</p> <p>If a <code>thisArg</code> parameter is
 * provided to <code>findIndex</code>, it will be used as the <code>this</code>
 * for each invocation of the <code>callback</code>. If it is not provided,
 * then <code>undefined</code> is used.</p> <p><code>findIndex</code> does not
 * mutate the typed array on which it is called.</p> <p>The range of elements
 * processed by <code>findIndex</code> is set before the first invocation of
 * <code>callback</code>. Elements that are appended to the typed array after
 * the call to <code>findIndex</code> begins will not be visited by
 * <code>callback</code>. If an existing, unvisited element of the typed array
 * is changed by <code>callback</code>, its value passed to the visiting
 * <code>callback</code> will be the value at the time that
 * <code>findIndex</code> visits that element's index; elements that are
 * deleted are not visited.</p>
 *
 * @summary 
 * @template T
 * @param {function(this: T, number, number, TypedArray): number} callback
 * Function to execute on each value in the typed array, taking three
 * arguments: <dl> <dt><code>element</code></dt> <dd>The current element being
 * processed in the typed array.</dd> <dt><code>index</code></dt> <dd>The index
 * of the current element being processed in the typed array.</dd>
 * <dt><code>array</code></dt> <dd>The typed array <code>findIndex</code> was
 * called upon.
 * @param {T=} thisArg Optional. Object to use as <code>this</code> when
 * executing <code>callback</code>.
 * @return {number} <p>An index in the array if an element passes the test;
 * otherwise, <strong>-1</strong>.</p>
 * @see TypedArray.prototype.find()
 * @see TypedArray.prototype.indexOf()
 */
TypedArray.prototype.findIndex = function (callback, thisArg) {};

/**
 * <p>The <code>forEach()</code> method executes the provided
 * <code>callback</code> once for each element present in the typed array in
 * ascending order. It is not invoked for indexes that have been deleted or
 * elided. However, it is executed for elements that are present and have the
 * value <code>undefined</code>.</p> <p><code>callback</code> is invoked with
 * <strong>three arguments</strong>:</p> <ul> <li>the <strong>element
 * value</strong></li> <li>the <strong>element index</strong></li> <li>the
 * <strong>typed array being traversed</strong></li> </ul> <p>If a
 * <code>thisArg</code> parameter is provided to <code>forEach()</code>, it
 * will be passed to <code>callback</code> when invoked, for use as its
 * <code>this</code> value. Otherwise, the value <code>undefined</code> will be
 * passed for use as its <code>this</code> value. The <code>this</code> value
 * ultimately observable by <code>callback</code> is determined according to
 * the usual rules for determining the <code>this</code> seen by a
 * function.</p> <p>The range of elements processed by <code>forEach()</code>
 * is set before the first invocation of <code>callback</code>. Elements that
 * are appended to the typed array after the call to <code>forEach()</code>
 * begins will not be visited by <code>callback</code>. If the values of
 * existing elements of the typed array are changed, the value passed to
 * <code>callback</code> will be the value at the time <code>forEach()</code>
 * visits them; elements that are deleted before being visited are not
 * visited.</p> <p><code>forEach()</code> executes the <code>callback</code>
 * function once for each typed array element; unlike <code>every()</code> and
 * <code>some()</code> it, always returns the value <code>undefined</code>.</p>
 *
 * @summary 
 * @template T
 * @param {function(this: T, number, number, TypedArray)} callback Function
 * that produces an element of the new typed array, taking three arguments:
 * <dl> <dt><code>currentValue</code></dt> <dd>The current element being
 * processed in the typed array.</dd> <dt><code>index</code></dt> <dd>The index
 * of the current element being processed in the array.</dd>
 * <dt><code>array</code></dt> <dd>The array <code>forEach()</code> was called
 * upon.
 * @param {T=} thisArg Optional. Value to use as <code>this</code> when
 * executing <code>callback</code>.
 * @see TypedArray.prototype.map()
 * @see TypedArray.prototype.every()
 * @see TypedArray.prototype.some()
 * @see Array.prototype.forEach()
 */
TypedArray.prototype.forEach = function (callback, thisArg) {};

/**
 * <p><code>indexOf</code> compares <code>searchElement</code> to elements of
 * the typed array using strict equality (the same method used by the ===, or
 * triple-equals, operator).</p>
 *
 * @summary 
 * @template E
 * @param {E} searchElement Element to locate in the typed array.
 * @param {number=} fromIndex The index to start the search at. If the index is
 * greater than or equal to the typed array's length, -1 is returned, which
 * means the typed array will not be searched. If the provided index value is a
 * negative number, it is taken as the offset from the end of the typed array.
 * Note: if the provided index is negative, the typed array is still searched
 * from front to back. If the calculated index is less than 0, then the whole
 * typed array will be searched. Default: 0 (entire typed array is searched).
 * @return {number} <p>The first index of the element in the array;
 * <strong>-1</strong> if not found.</p>
 * @see TypedArray.prototype.lastIndexOf()
 * @see Array.prototype.indexOf()
 */
TypedArray.prototype.indexOf = function (searchElement, fromIndex) {};

/**
 * 
 *
 * @summary 
 * @param {string} separator Optional. Specifies a string to separate each
 * element. The separator is converted to a string if necessary. If omitted,
 * the typed array elements are separated with a comma (",").
 * @return {string} <p>A string with all array elements joined.</p>
 * @see TypedArray
 * @see Array.prototype.join()
 */
TypedArray.prototype.join = function (separator) {};

/**
 * 
 *
 * @summary 
 * @return {{next: function(): {value: number, done: boolean}}} <p>A new
 * <code><strong>Array Iterator</strong></code> object.</p>
 * @see TypedArray
 * @see TypedArray.prototype.entries()
 * @see TypedArray.prototype.values()
 * @see TypedArray.prototype[@@iterator]()
 */
TypedArray.prototype.keys = function () {};

/**
 * <p><code>lastIndexOf</code> compares <code>searchElement</code> to elements
 * of the typed array using strict equality (the same method used by the ===,
 * or triple-equals, operator).</p>
 *
 * @summary 
 * @template E
 * @param {E} searchElement Element to locate in the typed array.
 * @param {number=} fromIndex Optional. The index at which to start searching
 * backwards. Defaults to the typed array's length, i.e. the whole typed array
 * will be searched. If the index is greater than or equal to the length of the
 * typed array, the whole typed array will be searched. If negative, it is
 * taken as the offset from the end of the typed array. Note that even when the
 * index is negative, the typed array is still searched from back to front. If
 * the calculated index is less than 0, -1 is returned, i.e. the typed array
 * will not be searched.
 * @return {number} <p>The last index of the element in the array;
 * <strong>-1</strong> if not found.</p>
 * @see TypedArray.prototype.indexOf()
 * @see Array.prototype.lastIndexOf()
 */
TypedArray.prototype.lastIndexOf = function (searchElement, fromIndex) {};

/**
 * <p>The <code>map</code> method calls a provided <code>callback</code>
 * function once for each element in a typed array, in order, and constructs a
 * new typed array from the results. <code>callback</code> is invoked only for
 * indexes of the typed array which have assigned values; it is not invoked for
 * indexes that are undefined, those which have been deleted or which have
 * never been assigned values.</p> <p><code>callback</code> is invoked with
 * three arguments: the value of the element, the index of the element, and the
 * typed array object being traversed.</p> <p>If a <code>thisArg</code>
 * parameter is provided to <code>map</code>, it will be passed to
 * <code>callback</code> when invoked, for use as its <code>this</code> value.
 * Otherwise, the value <code>undefined</code> will be passed for use as its
 * <code>this</code> value. The <code>this</code> value ultimately observable
 * by <code>callback</code> is determined according to the usual rules for
 * determining the <code>this</code> seen by a function.</p>
 * <p><code>map</code> does not mutate the typed array on which it is called
 * (although <code>callback</code>, if invoked, may do so).</p> <p>The range of
 * elements processed by <code>map</code> is set before the first invocation of
 * <code>callback</code>. Elements which are appended to the array after the
 * call to <code>map</code> begins will not be visited by
 * <code>callback</code>. If existing elements of the typed array are changed,
 * or deleted, their value as passed to <code>callback</code> will be the value
 * at the time <code>map</code> visits them; elements that are deleted are not
 * visited.</p>
 *
 * @summary 
 * @template T
 * @param {function(this: T, number, number, TypedArray): number} callback
 * Function that produces an element of the new typed array, taking three
 * arguments: <dl> <dt><code>currentValue</code></dt> <dd>The current element
 * being processed in the typed array.</dd> <dt><code>index</code></dt> <dd>The
 * index of the current element being processed in the typed array.</dd>
 * <dt><code>array</code></dt> <dd>The typed array <code>map</code> was called
 * upon.
 * @param {T=} thisArg Optional. Value to use as <code>this</code> when
 * executing <code>callback</code>.
 * @return {TypedArray} <p>A new typed array.</p>
 * @see TypedArray.prototype.filter()
 * @see Array.prototype.map()
 */
TypedArray.prototype.map = function (callback, thisArg) {};

/**
 * <p>The <code>reduce</code> method executes the <code>callback</code>
 * function once for each element present in the typed array, excluding holes
 * in the typed array, receiving four arguments: the initial value (or value
 * from the previous <code>callback</code> call), the value of the current
 * element, the current index, and the typed array over which iteration is
 * occurring.</p> <p>The first time the callback is called,
 * <code>previousValue</code> and <code>currentValue</code> can be one of two
 * values. If <code>initialValue</code> is provided in the call to
 * <code>reduce</code>, then <code>previousValue</code> will be equal to
 * <code>initialValue</code> and <code>currentValue</code> will be equal to the
 * first value in the typed array. If no <code>initialValue</code> was
 * provided, then <code>previousValue</code> will be equal to the first value
 * in the typed array and <code>currentValue</code> will be equal to the
 * second.</p> <p>If the typed array is empty and no <code>initialValue</code>
 * was provided, <code>TypeError</code> would be thrown. If the typed array has
 * only one element (regardless of position) and no <code>initialValue</code>
 * was provided, or if <code>initialValue</code> is provided but the typed
 * array is empty, the solo value would be returned without calling
 * <code>callback</code>.</p>
 *
 * @summary 
 * @param {function(number, number, number, TypedArray): number} callback
 * Function to execute on each value in the typed array, taking four arguments:
 * <dl> <dt><code>previousValue</code></dt> <dd>The value previously returned
 * in the last invocation of the callback, or <code>initialValue</code>, if
 * supplied (see below).</dd> <dt><code>currentValue</code></dt> <dd>The
 * current element being processed in the typed array.</dd>
 * <dt><code>index</code></dt> <dd>The index of the current element being
 * processed in the typed array.</dd> <dt><code>array</code></dt> <dd>The typed
 * array <code>reduce</code> was called upon.
 * @param {number=} initialValue Optional. Object to use as the first argument
 * to the first call of the <code>callback</code>.
 * @return {number} <p>The value that results from the reduction.</p>
 * @see TypedArray.prototype.reduceRight()
 * @see Array.prototype.reduce()
 */
TypedArray.prototype.reduce = function (callback, initialValue) {};

/**
 * <p>The <code>reduceRight</code> method executes the callback function once
 * for each element present in the typed array, excluding holes in the typed
 * array, receiving four arguments: the initial value (or value from the
 * previous callback call), the value of the current element, the current
 * index, and the typed array over which iteration is occurring.</p> <p>The
 * call to the <code>reduceRight</code> callback would look something like
 * this:</p> <pre class="brush:
 * js">typedarray.reduceRight(function(previousValue, currentValue, index,
 * typedarray) { // ... }); </pre> <p>The first time the function is called,
 * the <code>previousValue</code> and <code>currentValue</code> can be one of
 * two values. If an <code>initialValue</code> was provided in the call to
 * <code>reduceRight</code>, then <code>previousValue</code> will be equal to
 * <code>initialValue</code> and <code>currentValue</code> will be equal to the
 * last value in the typed array. If no <code>initialValue</code> was provided,
 * then <code>previousValue</code> will be equal to the last value in the typed
 * array and <code>currentValue</code> will be equal to the second-to-last
 * value.</p> <p>If the typed array is empty and no <code>initialValue
 * </code>was provided, <code>TypeError</code> would be thrown. If the typed
 * array has only one element (regardless of position) and no
 * <code>initialValue </code>was provided, or if <code>initialValue</code> is
 * provided but the typed array is empty, the solo value would be returned
 * without calling <code>callback</code>.</p>
 *
 * @summary 
 * @param {function(number, number, number, TypedArray)} callback Function to
 * execute on each value in the typed array, taking four arguments: <dl>
 * <dt><code>previousValue</code></dt> <dd>The value previously returned in the
 * last invocation of the callback, or <code>initialValue</code>, if supplied
 * (see below).</dd> <dt><code>currentValue</code></dt> <dd>The current element
 * being processed in the typed array.</dd> <dt><code>index</code></dt> <dd>The
 * index of the current element being processed in the typed array.</dd>
 * <dt><code>array</code></dt> <dd>The typed array <code>reduce</code> was
 * called upon.
 * @param {number=} initialValue Optional. Object to use as the first argument
 * to the first call of the <code>callback</code>.
 * @return {number} <p>The value that results from the reduction.</p>
 * @see TypedArray.prototype.reduce()
 * @see Array.prototype.reduceRight()
 */
TypedArray.prototype.reduceRight = function (callback, initialValue) {};

/**
 * 
 *
 * @summary 
 * @return {TypedArray} <p>The reversed array.</p>
 * @see Array.prototype.reverse()
 */
TypedArray.prototype.reverse = function () {};

/**
 * 
 *
 * @summary 
 * @param {(Array<number>|TypedArray)} array The array from which to copy
 * values. All values from the source array are copied into the target array,
 * unless the length of the source array plus the offset exceeds the length of
 * the target array, in which case an exception is thrown.
 * @param {number=} offset
 * @see TypedArray
 * @see ArrayBuffer
 */
TypedArray.prototype.set = function (array, offset) {};

/**
 * <p>The <code>slice</code> method does not alter. It returns a shallow copy
 * of elements from the original typed array.</p> <p>If a new element is added
 * to either typed array, the other typed array is not affected.</p>
 *
 * @summary 
 * @param {number=} begin
 * @param {number=} end
 * @return {TypedArray}
 * @see Array.prototype.slice()
 */
TypedArray.prototype.slice = function (begin, end) {};

/**
 * <p>The <code>some</code> method executes the <code>callback</code> function
 * once for each element present in the typed array until it finds one where
 * <code>callback</code> returns a true value. If such an element is found,
 * <code>some</code> immediately returns <code>true</code>. Otherwise,
 * <code>some</code> returns <code>false</code>.</p> <p><code>callback</code>
 * is invoked with three arguments: the value of the element, the index of the
 * element, and the array object being traversed.</p> <p>If a
 * <code>thisArg</code> parameter is provided to <code>some</code>, it will be
 * passed to <code>callback</code> when invoked, for use as its
 * <code>this</code> value. Otherwise, the value <code>undefined</code> will be
 * passed for use as its <code>this</code> value. The <code>this</code> value
 * ultimately observable by <code>callback</code> is determined according to
 * the usual rules for determining the <code>this</code> seen by a
 * function.</p> <p><code>some</code> does not mutate the typed array on which
 * it is called.</p>
 *
 * @summary 
 * @template T
 * @param {function(this: T, number, number, TypedArray)} callback Function to
 * test for each element, taking three arguments: <dl>
 * <dt><code>currentValue</code></dt> <dd>The current element being processed
 * in the typed array.</dd> <dt><code>index</code></dt> <dd>The index of the
 * current element being processed in the typed array.</dd>
 * <dt><code>array</code></dt> <dd>The typed array <code>every</code> was
 * called upon.
 * @param {T=} thisArg Optional. Value to use as <code>this</code> when
 * executing <code>callback</code>.
 * @return {boolean} <p><code><strong>true</strong></code> if the callback
 * function returns a truthy value for any array element; otherwise,
 * <code><strong>false</strong></code>.</p>
 * @see TypedArray.prototype.every()
 * @see Array.prototype.some()
 */
TypedArray.prototype.some = function (callback, thisArg) {};

/**
 * 
 *
 * @summary 
 * @param {function(number, number): number} compareFunction
 * @return {TypedArray} <p>The sorted typed array.</p>
 * @see Array.prototype.sort()
 */
TypedArray.prototype.sort = function (compareFunction) {};

/**
 * <p>The range specified by <code>begin</code> and <code>end</code> is clamped
 * to the valid index range for the current array; if the computed length of
 * the new array would be negative, it's clamped to zero. If either
 * <code>begin</code> or <code>end</code> is negative, it refers to an index
 * from the end of the array instead of from the beginning.</p> <p>Also note
 * that this is creating a new view on the existing buffer; changes to the new
 * object's contents will impact the original object and vice versa.</p>
 *
 * @summary 
 * @param {number=} begin
 * @param {number=} end
 * @return {TypedArray} <p>A new <code>TypedArray</code> object.</p>
 * @see TypedArray
 * @see ArrayBuffer
 */
TypedArray.prototype.subarray = function (begin, end) {};

/**
 * 
 *
 * @summary 
 * @param {(string|Array<string>)=} locales <p>Optional. A string with a BCP 47
 * language tag, or an array of such strings. For the general form and
 * interpretation of the <code>locales</code> argument, see the Intl page. The
 * following Unicode extension key is allowed:</p> <dl><dt><code>nu</code></dt>
 * <dd>The numbering system to be used. Possible values include:
 * <code>"arab"</code>, <code>"arabext"</code>, <code>"bali"</code>,
 * <code>"beng"</code>, <code>"deva"</code>, <code>"fullwide"</code>,
 * <code>"gujr"</code>, <code>"guru"</code>, <code>"hanidec"</code>,
 * <code>"khmr"</code>, <code>"knda"</code>, <code>"laoo"</code>,
 * <code>"latn"</code>, <code>"limb"</code>, <code>"mlym"</code>,
 * <code>"mong"</code>, <code>"mymr"</code>, <code>"orya"</code>,
 * <code>"tamldec"</code>, <code>"telu"</code>, <code>"thai"</code>,
 * <code>"tibt"</code>.
 * @param options <p>Optional. An object with some or all of the following
 * properties:</p> <dl><dt><code>localeMatcher</code></dt> <dd>The locale
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
 * @return {string} <p>A string representing the elements of the typed
 * array.</p>
 * @see Array.prototype.toLocaleString()
 * @see Number.prototype.toLocaleString()
 */
TypedArray.prototype.toLocaleString = function (locales, options) {};

/**
 * <p>The <code>TypedArray</code> objects override the <code>toString</code>
 * method of <code>Object</code>. For TypedArray objects, the
 * <code>toString</code> method joins the array and returns one string
 * containing each typed array element separated by commas. For example, the
 * following code creates a typed array and uses <code>toString</code> to
 * convert the array to a string.</p> <pre class="brush: js">var numbers = new
 * Uint8Array([2, 5, 8, 1, 4]) numbers.toString(); // "2,5,8,1,4" </pre>
 * <p>JavaScript calls the <code>toString</code> method automatically when a
 * typed array is to be represented as a text value or when an array is
 * referred to in a string concatenation.</p> <h3
 * id="Compatibility">Compatibility</h3> <p>If a browser doesn't support the
 * <code>TypedArray.prototype.toString()</code> method yet, JavaScript will
 * call the <code>toString</code> method of <code>Object</code>:</p> <pre
 * class="brush: js">var numbers = new Uint8Array([2, 5, 8, 1, 4])
 * numbers.toString(); // "[object Uint8Array]" </pre>
 *
 * @summary 
 * @return {string} <p>A string representing the elements of the typed
 * array.</p>
 * @see TypedArray.prototype.join()
 */
TypedArray.prototype.toString = function () {};

/**
 * 
 *
 * @summary 
 * @return {{next: function(): {value: number, done: boolean}}} <p>A new
 * <code><strong>Array Iterator</strong></code> object.</p>
 * @see TypedArray
 * @see TypedArray.prototype.entries()
 * @see TypedArray.prototype.keys()
 * @see TypedArray.prototype[@@iterator]()
 */
TypedArray.prototype.values = function () {};

/**
 * 
 *
 * @summary 
 * @constructor
 * @implements TypedArray
 */
function Int8Array() {}

/**
 * 
 *
 * @summary 
 * @constructor
 * @implements TypedArray
 */
function Uint8Array() {}

/**
 * 
 *
 * @summary 
 * @constructor
 * @implements TypedArray
 */
function Uint8ClampedArray() {}

/**
 * 
 *
 * @summary 
 * @constructor
 * @implements TypedArray
 */
function Int16Array() {}

/**
 * 
 *
 * @summary 
 * @constructor
 * @implements TypedArray
 */
function Uint16Array() {}

/**
 * 
 *
 * @summary 
 * @constructor
 * @implements TypedArray
 */
function Int32Array() {}

/**
 * 
 *
 * @summary 
 * @constructor
 * @implements TypedArray
 */
function Uint32Array() {}

/**
 * 
 *
 * @summary 
 * @constructor
 * @implements TypedArray
 */
function Float32Array() {}

/**
 * 
 *
 * @summary 
 * @constructor
 * @implements TypedArray
 */
function Float64Array() {}

/**
 * <p>A Map object iterates its elements in insertion order — a
 * <code>for...of</code> loop returns an array of <code>[key, value]</code> for
 * each iteration.<br> <br> It should be noted that a Map that is a map of an
 * object, especially a dictionary of dictionaries, will only map to the
 * object's insertion order -- which is random and not ordered. </p> <h3
 * id="Key_equality">Key equality</h3> <p>Key equality is based on the
 * "same-value" algorithm: <code>NaN</code> is considered the same as
 * <code>NaN</code> (even though <code>NaN !== NaN</code>) and all other values
 * are considered equal according to the semantics of the === operator. In
 * earlier versions of the ECMAScript 2015 draft <code>-0</code> and
 * <code>+0</code> were considered distinct (even though <code>-0 ===
 * +0</code>), this has been changed in later versions and has been adapted in
 * Gecko 29 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26) (bug 952870) and a
 * recent nightly Chrome.</p> <h3 id="Objects_and_maps_compared">Objects and
 * maps compared</h3> <p><code>Objects</code> are similar to <code>Maps</code>
 * in that both let you set keys to values, retrieve those values, delete keys,
 * and detect whether something is stored at a key. Because of this (and
 * because there were no built-in alternatives), <code>Objects</code> have been
 * used as <code>Maps</code> historically; however, there are important
 * differences between <code>Objects</code> and <code>Maps</code> that make
 * using a <code>Map</code> better:</p> <ul> <li>An <code>Object</code> has a
 * prototype, so there are default keys in the map that could collide with your
 * keys if you're not careful. This could be bypassed by using <code>map =
 * Object.create(null)</code> since ES5, but was seldom done.</li> <li>The keys
 * of an <code>Object</code> are <code>Strings</code> and <code>Symbols</code>,
 * whereas they can be any value for a <code>Map</code>, including functions,
 * objects, and any primitive.</li> <li>You can get the size of a
 * <code>Map</code> easily with the <code>size</code> property, while the size
 * of an <code>Object</code> must be determined manually. </li> </ul> <p>This
 * does not mean you should use <code>Maps</code> everywhere, objects still are
 * used in most cases. <code>Map</code> instances are only useful for
 * collections, and you should consider adapting your code where you have
 * previously used objects for such. Objects shall be used as records, with
 * fields and methods.<br> If you're still not sure which one to use, ask
 * yourself the following questions:</p> <ul> <li>Are keys usually unknown
 * until run time, do you need to look them up dynamically?</li> <li>Do all
 * values have the same type, and can be used interchangeably?</li> <li>Do you
 * need keys that aren't strings?</li> <li>Are key-value pairs often added or
 * removed?</li> <li>Do you have an arbitrary (easily changing) amount of
 * key-value pairs?</li> <li>Is the collection iterated?</li> </ul> <p>Those
 * all are signs that you want a <code>Map</code> for a collection. If in
 * contrast you have a fixed amount of keys, operate on them individually, and
 * distinguish between their usage, then you want an object.</p>
 *
 * @summary 
 * @constructor
 * @template K
 * @template V
 * @param {(Array<Array<(K|V)>>|{next: function(): {value: Array<(K|V)>, done:
 * boolean}})=} iterable Iterable is an Array or other iterable object whose
 * elements are key-value pairs (2-element Arrays). Each key-value pair is
 * added to the new Map. <code>null</code> is treated as
 * <code>undefined</code>.
 * @see Set
 * @see WeakMap
 * @see WeakSet
 */
function Map(iterable) {}

/**
 * <p>The value of <code>size</code> is an integer representing how many
 * entries the <code>Map</code> object has. A set accessor function for
 * <code>size</code> is <code>undefined</code>; you can not change this
 * property.</p>
 *
 * @summary 
 * @type {number}
 * @see Map
 */
Map.prototype.size = null;

/**
 * 
 *
 * @summary 
 * @see Map
 */
Map.prototype.clear = function () {};

/**
 * 
 *
 * @summary 
 * @param {K} key Required. The key of the element to remove from the
 * <code>Map</code> object.
 * @return {boolean} <p>Returns <code>true</code> if an element in the
 * <code>Map</code> object existed and has been removed, or <code>false</code>
 * if the element does not exist.</p>
 * @see Map
 */
Map.prototype.delete = function (key) {};

/**
 * 
 *
 * @summary 
 * @return {{next: function(): {value: Array<(K|V)>, done: boolean}}} <p>A new
 * <code>Map</code> iterator object.</p>
 * @see Map.prototype.keys()
 * @see Map.prototype.values()
 */
Map.prototype.entries = function () {};

/**
 * <p>The <code>forEach</code> method executes the provided
 * <code>callback</code> once for each key of the map which actually exist. It
 * is not invoked for keys which have been deleted. However, it is executed for
 * values which are present but have the value <code>undefined</code>.</p>
 * <p><code>callback</code> is invoked with <strong>three
 * arguments</strong>:</p> <ul> <li>the <strong>element value</strong></li>
 * <li>the <strong>element key</strong></li> <li>the <strong><code>Map</code>
 * object being traversed</strong></li> </ul> <p>If a <code>thisArg</code>
 * parameter is provided to <code>forEach</code>, it will be passed to
 * <code>callback</code> when invoked, for use as its <code>this</code> value.
 * Otherwise, the value <code>undefined</code> will be passed for use as its
 * <code>this</code> value. The <code>this</code> value ultimately observable
 * by <code>callback</code> is determined according to the usual rules for
 * determining the <code>this</code> seen by a function.</p> <p>Each value is
 * visited once, except in the case when it was deleted and re-added before
 * <code>forEach</code> has finished. <code>callback</code> is not invoked for
 * values deleted before being visited. New values added before
 * <code>forEach</code> has finished will be visited.</p>
 * <p><code>forEach</code> executes the <code>callback</code> function once for
 * each element in the <code>Map</code> object; it does not return a value.</p>
 *
 * @summary 
 * @template T
 * @template V
 * @template K
 * @param {function(this: T, V, K, Map<K, V>)} callback Function to execute for
 * each element.
 * @param {T=} thisArg Value to use as <code>this</code> when executing
 * <code>callback</code>.
 * @see Array.prototype.forEach()
 * @see Set.prototype.forEach()
 */
Map.prototype.forEach = function (callback, thisArg) {};

/**
 * 
 *
 * @summary 
 * @param {K} key Required. The key of the element to return from the
 * <code>Map</code> object.
 * @return {(undefined|V)} <p>Returns the element associated with the specified
 * key or <code>undefined</code> if the key can't be found in the
 * <code>Map</code> object.</p>
 * @see Map
 * @see Map.prototype.set()
 * @see Map.prototype.has()
 */
Map.prototype.get = function (key) {};

/**
 * 
 *
 * @summary 
 * @param {K} key Required. The key of the element to test for presence in the
 * <code>Map</code> object.
 * @return {boolean} <dl> <dt>Boolean</dt> <dd>Returns <code>true</code> if an
 * element with the specified key exists in the <code>Map</code> object;
 * otherwise <code>false</code>.</dd> </dl>
 * @see Map
 * @see Map.prototype.set()
 * @see Map.prototype.get()
 */
Map.prototype.has = function (key) {};

/**
 * 
 *
 * @summary 
 * @return {{next: function(): {value: K, done: boolean}}} <p>A new
 * <code>Map</code> iterator object.</p>
 * @see Map.prototype.entries()
 * @see Map.prototype.values()
 */
Map.prototype.keys = function () {};

/**
 * 
 *
 * @summary 
 * @param {K} key Required. The key of the element to add to the
 * <code>Map</code> object.
 * @param {V} value Required. The value of the element to add to the
 * <code>Map</code> object.
 * @return {Map<K, V>} <p>The <code>Map</code> object.</p>
 * @see Map
 * @see Map.prototype.get()
 * @see Map.prototype.has()
 */
Map.prototype.set = function (key, value) {};

/**
 * 
 *
 * @summary 
 * @return {{next: function(): {value: V, done: boolean}}} <p>A new
 * <code>Map</code> iterator object.</p>
 * @see Map.prototype.entries()
 * @see Map.prototype.keys()
 */
Map.prototype.values = function () {};

/**
 * <p><code>Set</code> objects are collections of values. You can iterate
 * through the elements of a set in insertion order. A value in the
 * <code>Set</code> may only occur once; it is unique in the <code>Set</code>'s
 * collection.</p> <h3 id="Value_equality">Value equality</h3> <p>Because each
 * value in the Set has to be unique, the value equality will be checked. In an
 * earlier version of ECMAScript specification this was not based on the same
 * algorithm as the one used in the === operator. Specifically, for
 * <code>Set</code>s, <code>+0</code> (which is strictly equal to
 * <code>-0</code>) and <code>-0</code> were different values. However, this
 * was changed in the ECMAScript 2015 specification. See "Value equality for -0
 * and 0" in the browser compatability table for details.</p> <p>Also,
 * <code>NaN</code> and <code>undefined</code> can also be stored in a Set.
 * <code>NaN</code> is considered the same as <code>NaN</code> (even though
 * <code>NaN !== NaN</code>).</p>
 *
 * @summary 
 * @constructor
 * @template E
 * @param {(Array<E>|{next: function(): {value: E, done: boolean}})=} iterable
 * If an iterable object is passed, all of its elements will be added to the
 * new Set. If null is passed instead of iterable, it is treated as not passing
 * iterable at all.
 * @see Map
 * @see WeakMap
 * @see WeakSet
 */
function Set(iterable) {}

/**
 * <p>The value of <code>size</code> is an integer representing how many
 * entries the <code>Set</code> object has. A set accessor function for
 * <code>size</code> is <code>undefined</code>; you cannot change this
 * property.</p>
 *
 * @summary 
 * @type {number}
 * @see Set
 */
Set.prototype.size = null;

/**
 * 
 *
 * @summary 
 * @param {E} value Required. The value of the element to add to the
 * <code>Set</code> object.
 * @return {Set<E>} <p>The <code>Set</code> object.</p>
 * @see Set
 * @see Set.prototype.delete()
 * @see Set.prototype.has()
 */
Set.prototype.add = function (value) {};

/**
 * 
 *
 * @summary 
 * @see Set
 * @see Set.prototype.delete()
 */
Set.prototype.clear = function () {};

/**
 * 
 *
 * @summary 
 * @param {E} value Required. The value of the element to remove from the
 * <code>Set</code> object.
 * @return {boolean} <p><code>true</code> if an element in the <code>Set</code>
 * object has been removed successfully; otherwise <code>false</code>.</p>
 * @see Set
 * @see Set.prototype.clear()
 */
Set.prototype.delete = function (value) {};

/**
 * 
 *
 * @summary 
 * @return {{next: function(): {value: Array<E>, done: boolean}}} <p>A new
 * <code>Iterator</code> object that contains an array of <code>[value,
 * value]</code> for each element in the given <code>Set</code>, in insertion
 * order.</p>
 * @see Set.prototype.keys()
 * @see Set.prototype.values()
 */
Set.prototype.entries = function () {};

/**
 * <p>The <code>forEach</code> method executes the provided
 * <code>callback</code> once for each value which actually exists in the
 * <code>Set</code> object. It is not invoked for values which have been
 * deleted. However, it is executed for values which are present but have the
 * value <code>undefined</code>.</p> <p><code>callback</code> is invoked with
 * <strong>three arguments</strong>:</p> <ul> <li>the <strong>element
 * value</strong></li> <li>the <strong>element key</strong></li> <li>the
 * <strong><code>Set</code> object being traversed</strong></li> </ul> <p>There
 * are no keys in Set objects. However, the first two arguments are both
 * <strong>values</strong> contained in the Set, so that the callback function
 * is consistent with the forEach methods for <code>Map</code> and
 * <code>Array</code>.</p> <p>If a <code>thisArg</code> parameter is provided
 * to <code>forEach</code>, it will be passed to <code>callback</code> when
 * invoked, for use as its <code>this</code> value. Otherwise, the value
 * <code>undefined</code> will be passed for use as its <code>this</code>
 * value. The <code>this</code> value ultimately observable by
 * <code>callback</code> is determined according to the usual rules for
 * determining the <code>this</code> seen by a function.</p> <p>Each value is
 * visited once, except in the case when it was deleted and re-added before
 * <code>forEach</code> has finished. <code>callback</code> is not invoked for
 * values deleted before being visited. New values added before
 * <code>forEach</code> has finished will be visited.</p>
 * <p><code>forEach</code> executes the <code>callback</code> function once for
 * each element in the <code>Set</code> object; it does not return a value.</p>
 *
 * @summary 
 * @template T
 * @param {function(this: T, E, E, Set<E>)} callback Function to execute for
 * each element.
 * @param {T=} thisArg Value to use as <code>this</code> when executing
 * <code>callback</code>.
 * @see Array.prototype.forEach()
 * @see Map.prototype.forEach()
 */
Set.prototype.forEach = function (callback, thisArg) {};

/**
 * 
 *
 * @summary 
 * @param {E} value Required. The value to test for presence in the
 * <code>Set</code> object.
 * @return {boolean} <dl> <dt>Boolean</dt> <dd>Returns <code>true</code> if an
 * element with the specified value exists in the <code>Set</code> object;
 * otherwise <code>false</code>.</dd> </dl>
 * @see Set
 * @see Set.prototype.add()
 * @see Set.prototype.delete()
 */
Set.prototype.has = function (value) {};

/**
 * 
 *
 * @summary 
 * @return {{next: function(): {value: E, done: boolean}}} <p>A new
 * <code><strong>Iterator</strong></code> object containing the values for each
 * element in the given <code>Set</code>, in insertion order.</p>
 * @see Set.prototype.entries()
 */
Set.prototype.values = function () {};

/**
 * <p>Keys of WeakMaps are of the type <code>Object</code> only. Primitive data
 * types as keys are not allowed (e.g. a <code>Symbol</code> can't be a
 * <code>WeakMap</code> key).</p> <h3 id="Why_WeakMap">Why
 * <em>Weak</em>Map?</h3> <p>The experienced JavaScript programmer will notice
 * that this API could be implemented in JavaScript with two arrays (one for
 * keys, one for values) shared by the four API methods. Such an implementation
 * would have two main inconveniences. The first one is an O(n) search (n being
 * the number of keys in the map). The second one is a memory leak issue. With
 * manually written maps, the array of keys would keep references to key
 * objects, preventing them from being garbage collected. In native WeakMaps,
 * references to key objects are held "weakly", which means that they do not
 * prevent garbage collection in case there would be no other reference to the
 * object.</p> <p>Because of references being weak, <code>WeakMap</code> keys
 * are not enumerable (i.e. there is no method giving you a list of the keys).
 * If they were, the list would depend on the state of garbage collection,
 * introducing non-determinism. If you want to have a list of keys, you should
 * use a <code>Map</code>.</p>
 *
 * @summary 
 * @constructor
 * @template K
 * @template V
 * @param {(Array<Array<(K|V)>>|{next: function(): {value: Array<(K|V)>, done:
 * boolean}})=} iterable Iterable is an Array or other iterable object whose
 * elements are key-value pairs (2-element Arrays). Each key-value pair will be
 * added to the new WeakMap. null is treated as undefined.
 * @see Map
 * @see Set
 * @see WeakSet
 */
function WeakMap(iterable) {}

/**
 * 
 *
 * @summary 
 * @param {K} key Required. The key of the element to remove from the
 * <code>WeakMap</code> object.
 * @return {boolean} <p><code>true</code> if an element in the
 * <code>WeakMap</code> object has been removed successfully.
 * <code>false</code> if the key is not found in the <code>WeakMap</code> or if
 * the key is not an object.</p>
 * @see WeakMap
 */
WeakMap.prototype.delete = function (key) {};

/**
 * 
 *
 * @summary 
 * @param {K} key Required. The key of the element to return from the
 * <code>WeakMap</code> object.
 * @return {(undefined|V)} <p>The element associated with the specified key in
 * the <code>WeakMap</code> object. If the key can't be found,
 * <code>undefined</code> is returned.</p>
 * @see WeakMap
 * @see WeakMap.set()
 * @see WeakMap.has()
 */
WeakMap.prototype.get = function (key) {};

/**
 * 
 *
 * @summary 
 * @param {K} key Required. The key of the element to test for presence in the
 * <code>WeakMap</code> object.
 * @return {boolean} <dl> <dt>Boolean</dt> <dd>Returns <code>true</code> if an
 * element with the specified key exists in the <code>WeakMap</code> object;
 * otherwise <code>false</code>.</dd> </dl>
 * @see WeakMap
 * @see WeakMap.prototype.set()
 * @see WeakMap.prototype.get()
 */
WeakMap.prototype.has = function (key) {};

/**
 * 
 *
 * @summary 
 * @param {K} key Required. The key of the element to add to the
 * <code>WeakMap</code> object.
 * @param {V} value Required. The value of the element to add to the
 * <code>WeakMap</code> object.
 * @return {WeakMap<K, V>} <p>The <code>WeakMap</code> object.</p>
 * @see WeakMap
 * @see WeakMap.prototype.get()
 * @see WeakMap.prototype.has()
 */
WeakMap.prototype.set = function (key, value) {};

/**
 * <p><code>WeakSet</code> objects are collections of objects. An object in the
 * <code>WeakSet</code> may only occur once; it is unique in the
 * <code>WeakSet</code>'s collection.</p> <p>The main differences to the
 * <code>Set</code> object are:</p> <ul> <li>In contrast to <code>Sets</code>,
 * <code>WeakSets</code> are <strong>collections of objects only</strong> and
 * not of arbitrary values of any type.</li> <li>The <code>WeakSet</code> is
 * <em>weak</em>: References to objects in the collection are held weakly. If
 * there is no other reference to an object stored in the <code>WeakSet</code>,
 * they can be garbage collected. That also means that there is no list of
 * current objects stored in the collection. <code>WeakSets</code> are not
 * enumerable.</li> </ul>
 *
 * @summary 
 * @constructor
 * @template E
 * @param {(Array<E>|{next: function(): {value: E, done: boolean}})=} iterable
 * If an iterable object is passed, all of its elements will be added to the
 * new <code>WeakSet</code>. null is treated as undefined.
 * @see Map
 * @see Set
 * @see WeakMap
 */
function WeakSet(iterable) {}

/**
 * 
 *
 * @summary 
 * @param {E} value Required. The object to add to the <code>WeakSet</code>
 * collection.
 * @return {WeakSet<E>} <p>The <code>WeakSet</code> object.</p>
 * @see WeakSet
 * @see WeakSet.prototype.delete()
 * @see WeakSet.prototype.has()
 */
WeakSet.prototype.add = function (value) {};

/**
 * 
 *
 * @summary 
 * @param {E} value Required. The object remove from the <code>WeakSet</code>
 * object.
 * @return {boolean} <p><code>true</code> if an element in the
 * <code>WeakMap</code> object has been removed successfully.
 * <code>false</code> if the key is not found in the <code>WeakMap</code> or if
 * the key is not an object.</p>
 * @see WeakSet
 * @see WeakSet.prototype.clear()
 */
WeakSet.prototype.delete = function (value) {};

/**
 * 
 *
 * @summary 
 * @param {E} value Required. The object to test for presence in the
 * <code>WeakSet</code>.
 * @return {boolean} <dl> <dt>Boolean</dt> <dd>Returns <code>true</code> if an
 * element with the specified value exists in the <code>WeakSet</code> object;
 * otherwise <code>false</code>.</dd> </dl>
 * @see WeakSet
 * @see WeakSet.prototype.add()
 * @see WeakSet.prototype.delete()
 */
WeakSet.prototype.has = function (value) {};

/**
 * <p>A <code><strong>Promise</strong></code> is a proxy for a value not
 * necessarily known when the promise is created. It allows you to associate
 * handlers with an asynchronous action's eventual success value or failure
 * reason. This lets asynchronous methods return values like synchronous
 * methods: instead of immediately returning the final value, the asynchronous
 * method returns a <em>promise</em> to supply the value at some point in the
 * future.</p> <p>A <code>Promise</code> is in one of these states:</p> <ul>
 * <li><em>pending</em>: initial state, not fulfilled or rejected.</li>
 * <li><em>fulfilled</em>: meaning that the operation completed
 * successfully.</li> <li><em>rejected</em>: meaning that the operation
 * failed.</li> </ul> <p>A pending promise can either be <em>fulfilled</em>
 * with a value, or <em>rejected</em> with a reason (error). When either of
 * these happens, the associated handlers queued up by a promise's
 * <code>then</code> method are called. (If the promise has already been
 * fulfilled or rejected when a corresponding handler is attached, the handler
 * will be called, so there is no race condition between an asynchronous
 * operation completing and its handlers being attached.)</p> <p>As the
 * <code><code>Promise.prototype.then()</code></code> and
 * <code><code>Promise.prototype.catch()</code></code> methods return promises,
 * they can be chained.</p> <p><img
 * src="https://mdn.mozillademos.org/files/8633/promises.png" alt=""></p> <div
 * class="note"> <p><strong>Not to be confused with:</strong> Several other
 * languages have mechanisms for lazy evaluation and deferring a computation,
 * which they also call “promises” — e.g. Scheme. Promises in JavaScript
 * represent processes which are already happening, which can be chained with
 * callback functions. If you are looking to lazily evaluate an expression,
 * consider the arrow function with no arguments: <code>f = ()
 * =&gt; <em>expression</em></code> to create the lazily-evaluated
 * expression, and <code>f()</code> to evaluate.</p> </div> <div class="note">
 * <p><strong>Note</strong>: A promise is said to be <em>settled </em>if it is
 * either fulfilled or rejected, but not pending. You will also hear the term
 * <em>resolved</em> used with promises — this means that the promise is
 * settled, or it is locked into a promise chain. Domenic Denicola's States and
 * fates contains more details about promise terminology.</p> </div>
 *
 * @summary 
 * @constructor
 * @template R
 * @param {function(function(R), function(Error))} executor A function that is
 * passed with the arguments <code>resolve</code> and <code>reject</code>. The
 * <code>executor</code> function is executed immediately by the Promise
 * implementation, passing <code>resolve</code> and <code>reject</code>
 * functions (the executor is called before the <code>Promise</code>
 * constructor even returns the created object). The <code>resolve</code> and
 * <code>reject</code> functions, when called, resolve or reject the promise,
 * respectively. The executor normally initiates some asynchronous work, and
 * then, once that completes, either calls the <code>resolve</code> function to
 * resolve the promise or else rejects it if an error occurred.<br> If an error
 * is thrown in the executor function, the promise is rejected. The return
 * value of the executor is ignored.
 */
function Promise(executor) {}

/**
 * <p><strong>Promise.all </strong> that resolves when all of the promises in
 * the given iterable have resolved, or rejects if any of the promises
 * rejects. <code>Promise.resolve</code>. </p> <p>If any of the passed in
 * promises rejects, the <code>all</code> Promise immediately rejects with the
 * value of the promise that rejected, discarding all the other promises
 * whether or not they have resolved. If an empty array is passed, then this
 * method resolves immediately.</p>
 *
 * @summary 
 * @template R
 * @param {(Array<(R|Promise<R>|{then: function(function(R),
 * function(Error))})>|{next: function(): {value: (R|Promise<R>|{then:
 * function(function(R), function(Error))}), done: boolean}})} iterable
 * @return {Promise<Array<R>>} <p>A <code>Promise</code> that resolves when all
 * of the promises in the given iterable have resolved, or rejects if any of
 * the promises rejects.</p>
 * @see Promise
 * @see Promise.race()
 */
Promise.all = function (iterable) {};

/**
 * <p>The <code>catch</code> method can be useful for error handling in your
 * promise composition.</p>
 *
 * @summary 
 * @template O
 * @param {function(Error): (O|Promise<O>|{then: function(function(O),
 * function(Error))})} onRejected A <code>Function</code> called when the
 * <code>Promise</code> is rejected. This function has one argument: <dl>
 * <dt><code>reason</code></dt> <dd>The rejection reason.
 * @return {Promise<O>} <p>A <code>Promise</code>.</p>
 * @see Promise
 * @see Promise.prototype.then()
 */
Promise.prototype.catch = function (onRejected) {};

/**
 * <p>As the <code>then</code> and <code>Promise.prototype.catch()</code>
 * methods return promises, they can be chained — an operation called
 * <em>composition</em>.</p>
 *
 * @summary 
 * @template R
 * @template O
 * @param {function(R): (O|Promise<O>|{then: function(function(O),
 * function(Error))})} onFulfilled A <code>Function</code> called when the
 * <code>Promise</code> is fulfilled. This function has one argument, the
 * fulfillment <code>value</code>.
 * @param {function(Error): (O|Promise<O>|{then: function(function(O),
 * function(Error))})=} onRejected
 * @return {Promise<O>} <p>A <code>Promise</code>.</p>
 * @see Promise
 * @see Promise.prototype.catch()
 */
Promise.prototype.then = function (onFulfilled, onRejected) {};

/**
 * <p>The <code>race</code> function returns a <code>Promise</code> that is
 * settled the same way as the first passed promise to settle. It resolves or
 * rejects, whichever happens first.</p>
 *
 * @summary 
 * @param {(Array<(R|Promise<R>|{then: function(function(R),
 * function(Error))})>|{next: function(): {value: (R|Promise<R>|{then:
 * function(function(R), function(Error))}), done: boolean}})} iterable An
 * iterable object, such as an <code>Array</code>. See iterable.
 * @see Promise
 * @see Promise.all()
 */
Promise.race = function (iterable) {};

/**
 * <p>The static <code>Promise.reject</code> function returns a
 * <code>Promise</code> that is rejected. For debugging purposes and selective
 * error catching, it is useful to make <code>reason</code> an
 * <code>instanceof</code> <code>Error</code>.</p>
 *
 * @summary 
 * @param {Error} reason Reason why this <code>Promise</code> rejected.
 * @return {Promise<undefined>} <p>A <code>Promise</code> that is rejected with
 * the given reason.</p>
 * @see Promise
 */
Promise.reject = function (reason) {};

/**
 * <p>The static <code>Promise.resolve</code> function returns a
 * <code>Promise</code> that is resolved.</p>
 *
 * @summary 
 * @template R
 * @param {(R|Promise<R>|{then: function(function(R), function(Error))})} value
 * Argument to be resolved by this <code>Promise</code>. Can also be a
 * <code>Promise</code> or a thenable to resolve.
 * @return {Promise<R>} <p>A <code>Promise</code> that is resolved with the
 * given value.</p>
 * @see Promise
 */
Promise.resolve = function (value) {};

/**
 * <p>Unlike most global objects, <code>Reflect</code> is not a constructor.
 * You can not use it with a <code>new</code> operator or invoke the
 * <code>Reflect</code> object as a function. All properties and methods of
 * <code>Reflect</code> are static (just like the <code>Math</code>
 * object).</p>
 *
 * @summary 
 * @type {Object}
 * @see Proxy
 * @see handler
 */
var Reflect;

/**
 * <p>In ES5, you typically use the <code>Function.prototype.apply()</code>
 * method to call a function with a given <code>this</code> value and
 * <code>arguments</code> provided as an array (or an array-like object).</p>
 * <pre class="brush: js">Function.prototype.apply.call(Math.floor, undefined,
 * [1.75]);</pre> <p>With <code>Reflect.apply</code> this becomes less verbose
 * and easier to understand.</p>
 *
 * @summary 
 * @template R
 * @template T
 * @template A
 * @param {function(this: T, ...A): R} target The target function to call.
 * @param {T} thisArgument The value of <code>this</code> provided for the call
 * to <em><code>target</code></em>.
 * @param {(Array<A>|{length: number})} argumentsList An array-like object
 * specifying the arguments with which <em><code>target</code></em> should be
 * called.
 * @return {R} <p>The result of calling the given target function with the
 * specified <code><strong>this</strong></code> value and arguments.</p>
 * @see Reflect
 * @see Function.prototype.apply()
 */
Reflect.apply = function (target, thisArgument, argumentsList) {};

/**
 * <p><code>Reflect.construct</code> allows you to invoke a constructor with a
 * variable number of arguments (which would also be possible by using the
 * spread operator combined with the new operator).</p> <pre class="brush:
 * js">var obj = new Foo(...args); var obj = Reflect.construct(Foo,
 * args);</pre>
 *
 * @summary 
 * @template T
 * @template A
 * @param {function(this: T, ...A)} target The target function to call.
 * @param {(Array<A>|{length: number})} argumentsList An array-like object
 * specifying the arguments with which <code>target</code> should be called.
 * @param {function(this: T, ...*)=} newTarget
 * @return {T} <p>A new instance of the given target, created by calling it (or
 * <code>newTarget</code>, if present) as a constructor with the given
 * arguments.</p>
 * @see Reflect
 * @see new
 */
Reflect.construct = function (target, argumentsList, newTarget) {};

/**
 * <p>The <code>Reflect.defineProperty</code> method allows precise addition to
 * or modification of a property on an object. For more details see the
 * <code>Object.defineProperty</code> which is similar.
 * <code>Object.defineProperty</code> returns the object or throws a
 * <code>TypeError</code> if the property has not been successfully defined.
 * <code>Reflect.defineProperty</code>, however, simply returns a
 * <code>Boolean</code> indicating whether or not the property was successfully
 * defined.</p>
 *
 * @summary 
 * @param {Object} target The target object on which to define the property.
 * @param {(string|symbol)} propertyKey The name of the property to be defined
 * or modified.
 * @param attributes The attributes for the property being defined or modified.
 * @return {boolean} <p>A <code>Boolean</code> indicating whether or not the
 * property was successfully defined.</p>
 * @see Reflect
 * @see Object.defineProperty()
 */
Reflect.defineProperty = function (target, propertyKey, attributes) {};

/**
 * <p>The <code>Reflect.deleteProperty</code> method allows you to delete a
 * property on an object. It returns a <code>Boolean</code> indicating whether
 * or not the property was successfully deleted. It is almost identical to the
 * non-strict <code>delete</code> operator.</p>
 *
 * @summary 
 * @param {Object} target The target object on which to delete the property.
 * @param {(string|symbol)} propertyKey The name of the property to be deleted.
 * @return {boolean} <p>A <code>Boolean</code> indicating whether or not the
 * property was successfully deleted.</p>
 * @see Reflect
 * @see delete
 */
Reflect.deleteProperty = function (target, propertyKey) {};

/**
 * <p>The <code>Reflect.get</code> method allows you to get a property on an
 * object. It is like the property accessor syntax as a function.</p>
 *
 * @summary 
 * @param {Object} target The target object on which to get the property.
 * @param {(string|symbol)} propertyKey The name of the property to get.
 * @param {Object=} receiver The value of <code>this</code> provided for the
 * call to <code>target</code> if a getter is encountered.
 * @return {*} <p>The value of the property.</p>
 * @see Reflect
 */
Reflect.get = function (target, propertyKey, receiver) {};

/**
 * <p>The <code>Reflect.</code>getOwnPropertyDescriptor method returns a
 * property descriptor of the given property if it exists on the object,
 * <code>undefined</code> otherwise. The only difference to
 * <code>Object.getOwnPropertyDescriptor()</code> is how non-object targets are
 * handled.</p>
 *
 * @summary 
 * @param {Object} target The target object in which to look for the property.
 * @param {(string|symbol)} propertyKey The name of the property to get an own
 * property descriptor for.
 * @return <p>A property descriptor object if the property exists in the given
 * target object; otherwise, <code>undefined</code>.</p>
 * @see Reflect
 * @see Object.getOwnPropertyDescriptor()
 */
Reflect.getOwnPropertyDescriptor = function (target, propertyKey) {};

/**
 * <p>The <code>Reflect.getPrototypeOf</code> method returns the prototype
 * (i.e. the value of the internal <code>[[Prototype]]</code> property) of the
 * specified object.</p>
 *
 * @summary 
 * @param {Object} target The target object of which to get the prototype.
 * @return {?Object} <p>The prototype of the given object. If there are no
 * inherited properties, <code>null</code> is returned.</p>
 * @see Reflect
 * @see Object.getPrototypeOf()
 */
Reflect.getPrototypeOf = function (target) {};

/**
 * <p>The <code>Reflect.has</code> method allows you to check if a property is
 * in an object. It works like the <code>in</code> operator as a function.</p>
 *
 * @summary 
 * @param {Object} target The target object in which to look for the property.
 * @param {(string|symbol)} propertyKey The name of the property to check.
 * @return {boolean} <p>A <code>Boolean</code> indicating whether or not the
 * target has the property.</p>
 * @see Reflect
 * @see in
 */
Reflect.has = function (target, propertyKey) {};

/**
 * <p>The <code>Reflect.isExtensible</code> method allows you determine if an
 * object is extensible (whether it can have new properties added to it). It is
 * the same method as <code>Object.isExtensible()</code>.</p>
 *
 * @summary 
 * @param {Object} target The target object which to check if it is extensible.
 * @return {boolean} <p>A <code>Boolean</code> indicating whether or not the
 * target is extensible.</p>
 * @see Reflect
 * @see Object.isExtensible()
 */
Reflect.isExtensible = function (target) {};

/**
 * <p>The <code>Reflect.ownKeys</code> method returns an array of the
 * <code>target</code> object's own property keys. Its return value is
 * equivalent to<code><code>Object.getOwnPropertyNames</code>(target).concat(<code>Object.getOwnPropertySymbols</code>(target))</code>.</p>
 * 
 *
 * @summary 
 * @param {Object} target The target object from which to get the own keys.
 * @return {Array<(string|symbol)>} <p>An <code>Array</code> of the
 * <code>target</code> object's own property keys.</p>
 * @see Reflect
 * @see Object.getOwnPropertyNames()
 */
Reflect.ownKeys = function (target) {};

/**
 * <p>The <code>Reflect.preventExtensions</code> method allows you to prevent
 * new properties from ever being added to an object (i.e. prevents future
 * extensions to the object). It is the same method as
 * <code>Object.preventExtensions()</code>.</p>
 *
 * @summary 
 * @param {Object} target The target object on which to prevent extensions.
 * @return {boolean} <p>A <code>Boolean</code> indicating whether or not the
 * target was successfully set to prevent extensions.</p>
 * @see Reflect
 * @see Object.isExtensible()
 */
Reflect.preventExtensions = function (target) {};

/**
 * <p>The <code>Reflect.set</code> method allows you to set a property on an
 * object. It does property assignment and is like the property accessor syntax
 * as a function.</p>
 *
 * @summary 
 * @param {Object} target The target object on which to set the property.
 * @param {(string|symbol)} propertyKey The name of the property to set.
 * @param {*} value The value to set.
 * @param {Object=} receiver The value of <code>this</code> provided for the
 * call to <code>target</code> if a setter is encountered.
 * @return {boolean} <p>A <code>Boolean</code> indicating whether or not
 * setting the property was successful.</p>
 * @see Reflect
 */
Reflect.set = function (target, propertyKey, value, receiver) {};

/**
 * <p>The <code>Reflect.setPrototypeOf</code> method changes the prototype
 * (i.e. the value of the internal <code>[[Prototype]]</code> property) of the
 * specified object.</p>
 *
 * @summary 
 * @param {Object} target The target object of which to set the prototype.
 * @param {?Object} prototype The object's new prototype (an object or
 * <code>null</code>).
 * @return {boolean} <p>A <code>Boolean</code> indicating whether or not the
 * prototype was successfully set.</p>
 * @see Reflect
 * @see Object.setPrototypeOf()
 */
Reflect.setPrototypeOf = function (target, prototype) {};

/**
 * 
 *
 * @summary 
 * @constructor
 * @param {Object} target A target object (can be any sort of object, including
 * a native array, a function or even another proxy) to wrap with
 * <code>Proxy</code>.
 * @param handler An object whose properties are functions which define the
 * behavior of the proxy when an operation is performed on it.
 * @see Object.watch()
 */
function Proxy(target, handler) {}

/**
 * <p>A revocable <code>Proxy</code> is an object with following two properties
 * <code>{proxy: proxy, revoke: revoke}</code>.</p> <dl>
 * <dt><code>proxy</code></dt> <dd>A Proxy object created with <code>new
 * Proxy(target, handler)</code> call.</dd> <dt><code>revoke</code></dt> <dd>A
 * function with no argument to invalidate (switch off) the
 * <code>proxy</code>.</dd> </dl> <p>If the <code>revoke()</code> function gets
 * called, the proxy becomes unusable: Any trap to a handler will throw a
 * <code>TypeError</code>. Once a proxy is revoked, it will remain revoked and
 * can be garbage collected. Calling <code>revoke()</code> again has no
 * effect.</p>
 *
 * @summary 
 * @param {Object} target A target object (can be any sort of object, including
 * a native array, a function or even another proxy) to wrap with
 * <code>Proxy</code>.
 * @param handler An object whose properties are functions which define the
 * behavior of the proxy when an operation is performed on it.
 * @return {{proxy: Proxy, revoke: function()}} <p>A newly created revocable
 * <code>Proxy</code> object is returned.</p>
 * @see Proxy
 */
Proxy.revocable = function (target, handler) {};
