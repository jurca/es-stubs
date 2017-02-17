/**
 * 
 *
 * @summary 
 * @param {?Object} proto The object which should be the prototype of the
 * newly-created object.
 * @param {Object<(string|symbol), ({configurable: boolean=, enumerable: boolean=, value: *=, writable: boolean=}|{configurable: boolean=, enumerable: boolean=, get: function(): *=, set: function(*): undefined=})>=} propertiesObject
 * Optional. If specified and not <code>undefined</code>, an object whose
 * enumerable own properties (that is, those properties defined upon itself and
 * <em>not</em> enumerable properties along its prototype chain) specify
 * property descriptors to be added to the newly-created object, with the
 * corresponding property names. These properties correspond to the second
 * argument of <code>Object.defineProperties()</code>.
 * @return {Object} <p>A new object with the specified prototype object and
 * properties.</p>
 * @see Object.defineProperty()
 * @see Object.defineProperties()
 * @see Object.prototype.isPrototypeOf()
 */
Object.create = function (proto, propertiesObject) {};

/**
 * <p><code>Object.defineProperties</code>, in essence, defines all properties
 * corresponding to the enumerable own properties of <code>props</code> on the
 * object <code>obj</code> object.</p>
 *
 * @summary 
 * @param {Object} obj The object on which to define or modify properties.
 * @param {Object<(string|symbol), ({configurable: boolean=, enumerable: boolean=, value: *=, writable: boolean=}|{configurable: boolean=, enumerable: boolean=, get: function(): *=, set: function(*): undefined=})>} props An object whose own enumerable properties constitute
 * descriptors for the properties to be defined or modified. Property
 * descriptors present in objects come in two main flavors: data descriptors
 * and accessor descriptors (see <code>Object.defineProperty()</code> for more
 * details). Descriptors have the following keys: <dl>
 * <dt><code>configurable</code></dt> <dd><code>true</code> if and only if the
 * type of this property descriptor may be changed and if the property may be
 * deleted from the corresponding object.<br> <strong>Defaults to
 * <code>false</code>.</strong></dd> <dt><code>enumerable</code></dt>
 * <dd><code>true</code> if and only if this property shows up during
 * enumeration of the properties on the corresponding object.<br>
 * <strong>Defaults to <code>false</code>.</strong></dd>
 * <dt><code>value</code></dt> <dd>The value associated with the property. Can
 * be any valid JavaScript value (number, object, function, etc).<br>
 * <strong>Defaults to <code>undefined</code>.</strong></dd>
 * <dt><code>writable</code></dt> <dd><code>true</code> if and only if the
 * value associated with the property may be changed with an assignment
 * operator.<br> <strong>Defaults to <code>false</code>.</strong></dd>
 * <dt><code>get</code></dt> <dd>A function which serves as a getter for the
 * property, or <code>undefined</code> if there is no getter. The function
 * return will be used as the value of property.<br> <strong>Defaults to
 * <code>undefined</code>.</strong></dd> <dt><code>set</code></dt> <dd>A
 * function which serves as a setter for the property, or
 * <code>undefined</code> if there is no setter. The function will receive as
 * only argument the new value being assigned to the property.<br>
 * <strong>Defaults to <code>undefined</code>.</strong>
 * @return {Object} <p>The object that was passed to the function.</p>
 * @see Object.defineProperty()
 * @see Object.keys()
 */
Object.defineProperties = function (obj, props) {};

/**
 * <p>This method allows precise addition to or modification of a property on
 * an object. Normal property addition through assignment creates properties
 * which show up during property enumeration (<code>for...in</code> loop or
 * <code>Object.keys</code> method), whose values may be changed, and which may
 * be deleted. This method allows these extra details to be changed from their
 * defaults. By default, values added using
 * <code>Object.defineProperty()</code> are immutable.</p> <p>Property
 * descriptors present in objects come in two main flavors: data descriptors
 * and accessor descriptors. A <em><dfn>data descriptor</dfn></em> is a
 * property that has a value, which may or may not be writable. An
 * <dfn>accessor descriptor</dfn> is a property described by a getter-setter
 * pair of functions. A descriptor must be one of these two flavors; it cannot
 * be both.</p> <p>Both data and accessor descriptors are objects. They share
 * the following required keys:</p> <dl> <dt><code>configurable</code></dt>
 * <dd><code>true</code> if and only if the type of this property descriptor
 * may be changed and if the property may be deleted from the corresponding
 * object.<br> <strong>Defaults to <code>false</code>.</strong></dd>
 * <dt><code>enumerable</code></dt> <dd><code>true</code> if and only if this
 * property shows up during enumeration of the properties on the corresponding
 * object.<br> <strong>Defaults to <code>false</code>.</strong></dd> </dl> <p>A
 * data descriptor also has the following optional keys:</p> <dl>
 * <dt><code>value</code></dt> <dd>The value associated with the property. Can
 * be any valid JavaScript value (number, object, function, etc).<br>
 * <strong>Defaults to <code>undefined</code>.</strong></dd>
 * <dt><code>writable</code></dt> <dd><code>true</code> if and only if the
 * value associated with the property may be changed with an assignment
 * operator.<br> <strong>Defaults to <code>false</code>.</strong></dd> </dl>
 * <p>An accessor descriptor also has the following optional keys:</p> <dl>
 * <dt><code>get</code></dt> <dd>A function which serves as a getter for the
 * property, or <code>undefined</code> if there is no getter. The function
 * return will be used as the value of property.<br> <strong>Defaults to
 * <code>undefined</code>.</strong></dd> <dt><code>set</code></dt> <dd>A
 * function which serves as a setter for the property, or
 * <code>undefined</code> if there is no setter. The function will receive as
 * only argument the new value being assigned to the property.<br>
 * <strong>Defaults to <code>undefined</code>.</strong></dd> </dl> <p>Bear in
 * mind that these options are not necessarily the descriptor's own properties,
 * and properties inherited from the prototype chain will be considered too. In
 * order to ensure these defaults are preserved you might freeze the
 * <code>Object.prototype</code> upfront, specify all options explicitly, or
 * point to <code>null</code> as <code>__proto__</code> property.</p> <pre
 * class="brush: js">// using __proto__ var obj = {};
 * Object.defineProperty(obj, 'key', { __proto__: null, // no inherited
 * properties value: 'static' // not enumerable // not configurable // not
 * writable // as defaults }); // being explicit Object.defineProperty(obj,
 * 'key', { enumerable: false, configurable: false, writable: false, value:
 * 'static' }); // recycling same object function withValue(value) { var d =
 * withValue.d || ( withValue.d = { enumerable: false, writable: false,
 * configurable: false, value: null } ); d.value = value; return d; } // ...
 * and ... Object.defineProperty(obj, 'key', withValue('static')); // if freeze
 * is available, prevents adding or // removing the object prototype properties
 * // (value, get, set, enumerable, writable, configurable) (Object.freeze ||
 * Object)(Object.prototype); </pre>
 *
 * @summary 
 * @param {Object} obj The object on which to define the property.
 * @param {(string|symbol)} prop The name of the property to be defined or modified.
 * @param {({configurable: boolean=, enumerable: boolean=, value: *=, writable: boolean=}|{configurable: boolean=, enumerable: boolean=, get: function(): *=, set: function(*): undefined=})} descriptor The descriptor for the property being defined or modified.
 * @return {Object} <p>The object that was passed to the function.</p>
 * @see Object.defineProperties()
 * @see Object.propertyIsEnumerable()
 * @see Object.getOwnPropertyDescriptor()
 * @see Object.prototype.watch()
 * @see Object.prototype.unwatch()
 * @see get
 * @see set
 * @see Object.create()
 * @see Object.defineProperty
 * @see Reflect.defineProperty()
 */
Object.defineProperty = function (obj, prop, descriptor) {};

/**
 * <p>Nothing can be added to or removed from the properties set of a frozen
 * object. Any attempt to do so will fail, either silently or by throwing a
 * <code>TypeError</code> exception (most commonly, but not exclusively, when
 * in strict mode).</p> <p>Values cannot be changed for data properties.
 * Accessor properties (getters and setters) work the same (and still give the
 * illusion that you are changing the value). Note that values that are objects
 * can still be modified, unless they are also frozen.</p>
 *
 * @summary 
 * @param {Object} obj The object to freeze.
 * @return {Object} <p>The frozen object.</p>
 * @see Object.isFrozen()
 * @see Object.preventExtensions()
 * @see Object.isExtensible()
 * @see Object.seal()
 * @see Object.isSealed()
 */
Object.freeze = function (obj) {};

/**
 * <p>This method permits examination of the precise description of a property.
 * A <dfn>property</dfn> in JavaScript consists of a string-valued name and a
 * property descriptor. Further information about property descriptor types and
 * their attributes can be found in <code>Object.defineProperty()</code>.</p>
 * <p>A <dfn>property descriptor</dfn> is a record with some of the following
 * attributes:</p> <dl> <dt><code>value</code></dt> <dd>The value associated
 * with the property (data descriptors only).</dd>
 * <dt><code><strong>writable</strong></code></dt> <dd><code>true</code> if and
 * only if the value associated with the property may be changed (data
 * descriptors only).</dd> <dt><code>get</code></dt> <dd>A function which
 * serves as a getter for the property, or <code>undefined</code> if there is
 * no getter (accessor descriptors only).</dd> <dt><code>set</code></dt> <dd>A
 * function which serves as a setter for the property, or
 * <code>undefined</code> if there is no setter (accessor descriptors
 * only).</dd> <dt><code>configurable</code></dt> <dd><code>true</code> if and
 * only if the type of this property descriptor may be changed and if the
 * property may be deleted from the corresponding object.</dd>
 * <dt><code>enumerable</code></dt> <dd><code>true</code> if and only if this
 * property shows up during enumeration of the properties on the corresponding
 * object.</dd> </dl>
 *
 * @summary 
 * @param {Object} obj The object in which to look for the property.
 * @param {(string|symbol)} prop The name of the property whose description is to be
 * retrieved.
 * @return {({configurable: boolean=, enumerable: boolean=, value: *=, writable: boolean=}|{configurable: boolean=, enumerable: boolean=, get: function(): *=, set: function(*): undefined=})}
 * <p> A property descriptor of the given property if it exists on the
 * object, <code>undefined</code> otherwise.</p>
 * @see Object.defineProperty()
 * @see Reflect.getOwnPropertyDescriptor()
 */
Object.getOwnPropertyDescriptor = function (obj, prop) {};

/**
 * <p><code>Object.getOwnPropertyNames()</code> returns an array whose elements
 * are strings corresponding to the enumerable <em>and non-enumerable</em>
 * properties found directly upon <code>obj</code>. The ordering of the
 * enumerable properties in the array is consistent with the ordering exposed
 * by a <code>for...in</code> loop (or by <code>Object.keys()</code>) over the
 * properties of the object. The ordering of the non-enumerable properties in
 * the array, and among the enumerable properties, is not defined.</p>
 *
 * @summary 
 * @param {Object} obj The object whose enumerable <em>and non-enumerable</em>
 * own properties are to be returned.
 * @return {Array<string>} <p>An array of strings that correspond to the
 * properties found directly upon the given object.</p>
 * @see Object.prototype.hasOwnProperty()
 * @see Object.prototype.propertyIsEnumerable()
 * @see Object.create()
 * @see Object.keys()
 * @see Array.forEach()
 */
Object.getOwnPropertyNames = function (obj) {};

/**
 * 
 *
 * @summary 
 * @param {Object} obj The object whose prototype is to be returned.
 * @return {?Object} <p>The prototype of the given object. If there are no
 * inherited properties, <code>null</code> is returned.</p>
 * @see Object.prototype.isPrototypeOf()
 * @see Object.setPrototypeOf()
 * @see Object.prototype.__proto__
 * @see Reflect.getPrototypeOf()
 */
Object.getPrototypeOf = function (obj) {};

/**
 * <p>Objects are extensible by default: they can have new properties added to
 * them, and (in engines that support <code>__proto__</code> <span title="This
 * deprecated API should no longer be used, but will probably still work."><i
 * class="icon-thumbs-down-alt"> </i></span> their __proto__ property) can be
 * modified. An object can be marked as non-extensible using
 * <code>Object.preventExtensions()</code>, <code>Object.seal()</code>, or
 * <code>Object.freeze()</code>.</p>
 *
 * @summary 
 * @param {Object} obj The object which should be checked.
 * @return {boolean} <p>A <code>Boolean</code> indicating whether or not the
 * given object is extensible.</p>
 * @see Object.preventExtensions()
 * @see Object.seal()
 * @see Object.isSealed()
 * @see Object.freeze()
 * @see Object.isFrozen()
 * @see Reflect.isExtensible()
 */
Object.isExtensible = function (obj) {};

/**
 * <p>An object is frozen if and only if it is not extensible, all its
 * properties are non-configurable, and all its data properties (that is,
 * properties which are not accessor properties with getter or setter
 * components) are non-writable.</p>
 *
 * @summary 
 * @param {Object} obj The object which should be checked.
 * @return {boolean} <p>A <code>Boolean</code> indicating whether or not the
 * given object is frozen.</p>
 * @see Object.freeze()
 * @see Object.preventExtensions()
 * @see Object.isExtensible()
 * @see Object.seal()
 * @see Object.isSealed()
 */
Object.isFrozen = function (obj) {};

/**
 * <p>Returns <code>true</code> if the object is sealed, otherwise
 * <code>false</code>. An object is sealed if it is not extensible and if all
 * its properties are non-configurable and therefore not removable (but not
 * necessarily non-writable).</p>
 *
 * @summary 
 * @param {Object} obj The object which should be checked.
 * @return {boolean} <p>A <code>Boolean</code> indicating whether or not the
 * given object is sealed.</p>
 * @see Object.seal()
 * @see Object.preventExtensions()
 * @see Object.isExtensible()
 * @see Object.freeze()
 * @see Object.isFrozen()
 */
Object.isSealed = function (obj) {};

/**
 * <p><code>Object.keys()</code> returns an array whose elements are strings
 * corresponding to the enumerable properties found directly upon
 * <code>object</code>. The ordering of the properties is the same as that
 * given by looping over the properties of the object manually.</p>
 *
 * @summary 
 * @param {Object} obj The object whose enumerable own properties are to be
 * returned.
 * @return {Array<string>} <p>An array of strings that represent all the
 * enumerable properties of the given object.</p>
 * @see Object.prototype.propertyIsEnumerable()
 * @see Object.create()
 * @see Object.getOwnPropertyNames()
 * @see Object.values()
 * @see Object.entries()
 */
Object.keys = function (obj) {};

/**
 * <p>An object is extensible if new properties can be added to it.
 * <code>Object.preventExtensions()</code> marks an object as no longer
 * extensible, so that it will never have properties beyond the ones it had at
 * the time it was marked as non-extensible. Note that the properties of a
 * non-extensible object, in general, may still be <em>deleted</em>. Attempting
 * to add new properties to a non-extensible object will fail, either silently
 * or by throwing a <code>TypeError</code> (most commonly, but not exclusively,
 * when in strict mode).</p> <p><code>Object.preventExtensions()</code> only
 * prevents addition of own properties. Properties can still be added to the
 * object prototype. However, calling <code>Object.preventExtensions()</code>
 * on an object will also prevent extensions on its <code>__proto__</code>
 * <span title="This deprecated API should no longer be used, but will probably
 * still work."><i class="icon-thumbs-down-alt"> </i></span> property.</p>
 * <p>If there is a way to turn an extensible object to a non-extensible one,
 * there is no way to do the opposite in ECMAScript 5.</p>
 *
 * @summary 
 * @param {Object} obj The object which should be made non-extensible.
 * @return {Object} <p>The object being made non-extensible.</p>
 * @see Object.isExtensible()
 * @see Object.seal()
 * @see Object.isSealed()
 * @see Object.freeze()
 * @see Object.isFrozen()
 * @see Reflect.preventExtensions()
 */
Object.preventExtensions = function (obj) {};

/**
 * <p>By default, objects are extensible (new properties can be added to them).
 * Sealing an object prevents new properties from being added and marks all
 * existing properties as non-configurable. This has the effect of making the
 * set of properties on the object fixed and immutable. Making all properties
 * non-configurable also prevents them from being converted from data
 * properties to accessor properties and vice versa, but it does not prevent
 * the values of data properties from being changed. Attempting to delete or
 * add properties to a sealed object, or to convert a data property to accessor
 * or vice versa, will fail, either silently or by throwing a
 * <code>TypeError</code> (most commonly, although not exclusively, when in
 * strict mode code).</p> <p>The prototype chain remains untouched. However,
 * the <code>__proto__</code> <span title="This deprecated API should no longer
 * be used, but will probably still work."><i class="icon-thumbs-down-alt">
 * </i></span> property is sealed as well.</p> <p>Returns a reference to the
 * passed Object.</p>
 *
 * @summary 
 * @param {Object} obj The object which should be sealed.
 * @return {Object} <p>The object being sealed.</p>
 * @see Object.isSealed()
 * @see Object.preventExtensions()
 * @see Object.isExtensible()
 * @see Object.freeze()
 * @see Object.isFrozen()
 */
Object.seal = function (obj) {};

/**
 * <p>The <strong>bind()</strong> function creates a new <strong>bound
 * function</strong> <strong>(BF)</strong>. A <strong>BF</strong> is an
 * <strong>exotic function object</strong> (a term from <strong>ECMAScript
 * 2015</strong>) that wraps the original function object. Calling a
 * <strong>BF</strong> generally, results in the execution of its
 * <strong>wrapped function</strong>.<br> A<strong> BF</strong> has the
 * following internal properties:</p> <ul> <li><strong>[[BoundTargetFunction]]
 * </strong>- the wrapped function object;</li>
 * <li><strong>[[BoundThis]]</strong> - the value that is always passed as
 * <strong>this</strong> value when calling the wrapped function.</li>
 * <li><strong>[[BoundArguments]]</strong> - a list of values whose elements
 * are used as the first arguments to any call to the wrapped function.</li>
 * <li><strong>[[Call]]</strong> - executes code associated with this object.
 * Invoked via a function call expression. The arguments to the internal method
 * are a <strong>this</strong> value and a list containing the arguments passed
 * to the function by a call expression.</li> </ul> <p>When bound function is
 * called, it calls internal method<strong> [[Call]]</strong> with following
 * arguments <strong>Call(<em>target</em>, <em>boundThis</em>,
 * <em>args</em>).</strong> Where, <strong><em>target</em></strong> is<strong>
 * [[BoundTargetFunction]]</strong>, <strong><em>boundThis </em></strong>is
 * <strong>[[BoundThis]]</strong>, <em><strong>args </strong></em>is
 * <strong>[[BoundArguments]]</strong>.</p> <p>A bound function may also be
 * constructed using the <code>new</code> operator: doing so acts as though the
 * target function had instead been constructed. The provided
 * <strong><code>this</code></strong> value is ignored, while prepended
 * arguments are provided to the emulated function.</p>
 *
 * @summary 
 * @param {?Object} thisArg The value to be passed as the <code>this</code>
 * parameter to the target function when the bound function is called. The
 * value is ignored if the bound function is constructed using the
 * <code>new</code> operator.
 * @param {...*} arg1_ The value to be passed as the <code>this</code>
 * parameter to the target function when the bound function is called. The
 * value is ignored if the bound function is constructed using the
 * <code>new</code> operator. Arguments to prepend to arguments provided to the
 * bound function when invoking the target function.
 * @return {Function} <p>A copy of the given function with the specified
 * <strong><code>this</code></strong> value and initial arguments.</p>
 * @see Function.prototype.apply()
 * @see Function.prototype.call()
 */
Function.prototype.bind = function (thisArg, arg1_) {};

/**
 * <p>Because <code>now()</code> is a static method of <code>Date</code>, you
 * always use it as <code>Date.now()</code>.</p>
 *
 * @summary 
 * @return {number} <p>A <code>Number</code> representing the milliseconds
 * elapsed since the UNIX epoch.</p>
 * @see Performance.now()
 * @see console.time()
 */
Date.now = function () {};

/**
 * 
 *
 * @summary 
 * @return {string} <p>A string representing the given date in the ISO 8601
 * format according to universal time. </p>
 * @see Date.prototype.toLocaleDateString()
 * @see Date.prototype.toTimeString()
 * @see Date.prototype.toUTCString()
 */
Date.prototype.toISOString = function () {};

/**
 * <p><code>Date</code> instances refer to a specific point in time. Calling
 * <code>toJSON()</code> returns a string (using <code>toISOString()</code>)
 * representing the <code>Date</code> object's value. This method is generally
 * intended to, by default, usefully serialize <code>Date</code> objects during
 * JSON serialization.</p>
 *
 * @summary 
 * @return {string} <p>A string representation of the given date.</p>
 * @see Date.prototype.toLocaleDateString()
 * @see Date.prototype.toTimeString()
 * @see Date.prototype.toUTCString()
 */
Date.prototype.toJSON = function () {};

/**
 * <p>The <code>trim()</code> method returns the string stripped of whitespace
 * from both ends. <code>trim()</code> does not affect the value of the string
 * itself.</p>
 *
 * @summary 
 * @return {string} <p>A new string representing the calling string stripped of
 * whitespace from both ends.</p>
 * @see String.prototype.trimLeft()
 * @see String.prototype.trimRight()
 */
String.prototype.trim = function () {};

/**
 * <p>If the object is an <code>Array</code>, <code>true</code> is returned,
 * otherwise <code>false</code> is. </p> <p>See the article “Determining with
 * absolute accuracy whether or not a JavaScript object is an array” for more
 * details.</p>
 *
 * @summary 
 * @param {Object} obj The object to be checked.
 * @return {boolean} <p><code>true</code> if the object is an
 * <code>Array</code>; otherwise, <code>false</code>.</p>
 * @see Array
 */
Array.isArray = function (obj) {};

/**
 * <p>The <code>every</code> method executes the provided <code>callback</code>
 * function once for each element present in the array until it finds one where
 * <code>callback</code> returns a falsy value. If such an element is found,
 * the <code>every</code> method immediately returns <code>false</code>.
 * Otherwise, if <code>callback</code> returns a truthy value for all elements,
 * <code>every</code> returns <code>true</code>. <code>callback</code> is
 * invoked only for indexes of the array which have assigned values; it is not
 * invoked for indexes which have been deleted or which have never been
 * assigned values.</p> <p><code>callback</code> is invoked with three
 * arguments: the value of the element, the index of the element, and the Array
 * object being traversed.</p> <p>If a <code>thisArg</code> parameter is
 * provided to <code>every</code>, it will be passed to <code>callback</code>
 * when invoked, for use as its <code>this</code> value. Otherwise, the value
 * <code>undefined</code> will be passed for use as its <code>this</code>
 * value. The <code>this</code> value ultimately observable by
 * <code>callback</code> is determined according to the usual rules for
 * determining the <code>this</code> seen by a function.</p>
 * <p><code>every</code> does not mutate the array on which it is called.</p>
 * <p>The range of elements processed by <code>every</code> is set before the
 * first invocation of <code>callback</code>. Elements which are appended to
 * the array after the call to <code>every</code> begins will not be visited by
 * <code>callback</code>. If existing elements of the array are changed, their
 * value as passed to <code>callback</code> will be the value at the time
 * <code>every</code> visits them; elements that are deleted are not
 * visited.</p> <p><code>every</code> acts like the "for all" quantifier in
 * mathematics. In particular, for an empty array, it returns true. (It is
 * vacuously true that all elements of the empty set satisfy any given
 * condition.)</p>
 *
 * @summary 
 * @template E
 * @template T
 * @param {function(this: T, E, number, Array<E>): boolean} callback Function
 * to test for each element, taking three arguments: <dl>
 * <dt><code>currentValue</code> (required)</dt> <dd>The current element being
 * processed in the array.</dd> <dt><code>index</code> (optional)</dt> <dd>The
 * index of the current element being processed in the array.</dd>
 * <dt><code>array</code> (optional)</dt> <dd>The array <code>every</code> was
 * called upon.
 * @param {T=} thisArg Optional. Value to use as <code>this</code> when
 * executing <code>callback</code>.
 * @return {boolean} <p><code><strong>true</strong></code> if the callback
 * function returns a truthy value for every array element; otherwise,
 * <code><strong>false</strong></code>.</p>
 * @see Array.prototype.forEach()
 * @see Array.prototype.some()
 * @see TypedArray.prototype.every()
 */
Array.prototype.every = function (callback, thisArg) {};

/**
 * <p><code>filter()</code> calls a provided <code>callback</code> function
 * once for each element in an array, and constructs a new array of all the
 * values for which <code>callback</code> returns a value that coerces to
 * <code>true</code>. <code>callback</code> is invoked only for indexes of the
 * array which have assigned values; it is not invoked for indexes which have
 * been deleted or which have never been assigned values. Array elements which
 * do not pass the <code>callback</code> test are simply skipped, and are not
 * included in the new array.</p> <p><code>callback</code> is invoked with
 * three arguments:</p> <ol> <li>the value of the element</li> <li>the index of
 * the element</li> <li>the Array object being traversed</li> </ol> <p>If a
 * <code>thisArg</code> parameter is provided to <code>filter</code>, it will
 * be passed to <code>callback</code> when invoked, for use as its
 * <code>this</code> value. Otherwise, the value <code>undefined</code> will be
 * passed for use as its <code>this</code> value. The <code>this</code> value
 * ultimately observable by <code>callback</code> is determined according to
 * the usual rules for determining the <code>this</code> seen by a
 * function.</p> <p><code>filter()</code> does not mutate the array on which it
 * is called.</p> <p>The range of elements processed by <code>filter()</code>
 * is set before the first invocation of <code>callback</code>. Elements which
 * are appended to the array after the call to <code>filter()</code> begins
 * will not be visited by <code>callback</code>. If existing elements of the
 * array are changed, or deleted, their value as passed to
 * <code>callback</code> will be the value at the time <code>filter()</code>
 * visits them; elements that are deleted are not visited.</p>
 *
 * @summary 
 * @template E
 * @template T
 * @param {function(this: T, E, number, Array<E>): boolean} callback Function
 * is a predicate, to test each element of the array. Return <code>true</code>
 * to keep the element, <code>false</code> otherwise, taking three arguments:
 * <dl> <dt><code>element</code></dt> <dd>The current element being processed
 * in the array.</dd> <dt><code>index</code></dt> <dd>The index of the current
 * element being processed in the array.</dd> <dt><code>array</code></dt>
 * <dd>The array <code>filter</code> was called upon.
 * @param {T=} thisArg
 * @return {Array<E>} <p>A new array with the elements that pass the test.</p>
 * @see Array.prototype.forEach()
 * @see Array.prototype.every()
 * @see Array.prototype.some()
 * @see Array.prototype.reduce()
 */
Array.prototype.filter = function (callback, thisArg) {};

/**
 * <p><code>forEach()</code> executes the provided <code>callback</code> once
 * for each element present in the array in ascending order. It is not invoked
 * for index properties that have been deleted or are uninitialized (i.e. on
 * sparse arrays).</p> <p><code>callback</code> is invoked with <strong>three
 * arguments</strong>:</p> <ul> <li>the <strong>element value</strong></li>
 * <li>the <strong>element index</strong></li> <li>the <strong>array being
 * traversed</strong></li> </ul> <p>If a <code>thisArg</code> parameter is
 * provided to <code>forEach()</code>, it will be passed to
 * <code>callback</code> when invoked, for use as its <code>this</code> value.
 * Otherwise, the value <code>undefined</code> will be passed for use as its
 * <code>this</code> value. The <code>this</code> value ultimately observable
 * by <code>callback</code> is determined according to the usual rules for
 * determining the <code>this</code> seen by a function.</p> <p>The range of
 * elements processed by <code>forEach()</code> is set before the first
 * invocation of <code>callback</code>. Elements that are appended to the array
 * after the call to <code>forEach()</code> begins will not be visited by
 * <code>callback</code>. If the values of existing elements of the array are
 * changed, the value passed to <code>callback</code> will be the value at the
 * time <code>forEach()</code> visits them; elements that are deleted before
 * being visited are not visited. If elements that are already visited are
 * removed (e.g. using <code>shift()</code>) during the iteration, later
 * elements will be skipped - see example below.</p> <p><code>forEach()</code>
 * executes the <code>callback</code> function once for each array element;
 * unlike <code>map()</code> or <code>reduce()</code> it always returns the
 * value <code>undefined</code> and is not chainable. The typical use case is
 * to execute side effects at the end of a chain.</p> <div class="note">
 * <p>There is no way to stop or break a <code>forEach()</code> loop other than
 * by throwing an exception. If you need such behavior, the
 * <code>forEach()</code> method is the wrong tool, use a plain loop instead.
 * If you are testing the array elements for a predicate and need a Boolean
 * return value, you can use <code>every()</code> or <code>some()</code>
 * instead. If available, the new methods <code>find()</code> or
 * <code>findIndex()</code> can be used for early termination upon true
 * predicates as well.</p> </div>
 *
 * @summary 
 * @template E
 * @template T
 * @param {function(this: T, E, number, Array<E>)} callback Function to execute
 * for each element, taking three arguments: <dl>
 * <dt><code>currentValue</code></dt> <dd>The current element being processed
 * in the array.</dd> <dt><code>index</code></dt> <dd>The index of the current
 * element being processed in the array.</dd> <dt><code>array</code></dt>
 * <dd>The array that <code>forEach()</code> is being applied to.
 * @param {T=} thisArg
 * @see Array.prototype.find()
 * @see Array.prototype.findIndex()
 * @see Array.prototype.map()
 * @see Array.prototype.every()
 * @see Array.prototype.some()
 * @see Map.prototype.forEach()
 * @see Set.prototype.forEach()
 */
Array.prototype.forEach = function (callback, thisArg) {};

/**
 * <p><code>indexOf()</code> compares <code>searchElement</code> to elements of
 * the Array using strict equality (the same method used by the
 * <code>===</code> or triple-equals operator).</p>
 *
 * @summary 
 * @param {*} searchElement Element to locate in the array.
 * @param {number=} fromIndex
 * @return {number} <p>The first index of the element in the array;
 * <strong>-1</strong> if not found.</p>
 * @see Array.prototype.lastIndexOf()
 * @see TypedArray.prototype.indexOf()
 */
Array.prototype.indexOf = function (searchElement, fromIndex) {};

/**
 * <p><code>lastIndexOf</code> compares <code>searchElement</code> to elements
 * of the Array using strict equality (the same method used by the ===, or
 * triple-equals, operator).</p>
 *
 * @summary 
 * @param {*} searchElement Element to locate in the array.
 * @param {number=} fromIndex
 * @return {number} <p>The last index of the element in the array;
 * <strong>-1</strong> if not found.</p>
 * @see Array.prototype.indexOf()
 * @see TypedArray.prototype.lastIndexOf()
 */
Array.prototype.lastIndexOf = function (searchElement, fromIndex) {};

/**
 * <p><code>map</code> calls a provided <code>callback</code> function
 * <strong>once for each element</strong> in an array, in order, and constructs
 * a new array from the results. <code>callback</code> is invoked only for
 * indexes of the array which have assigned values, including undefined. It is
 * not called for missing elements of the array (that is, indexes that have
 * never been set, which have been deleted or which have never been assigned a
 * value).</p> <p><code>callback</code> is invoked with three arguments: the
 * value of the element, the index of the element, and the Array object being
 * traversed.</p> <p>If a <code>thisArg</code> parameter is provided to
 * <code>map</code>, it will be passed to <code>callback</code> when invoked,
 * for use as its <code>this</code> value. Otherwise, the value
 * <code>undefined</code> will be passed for use as its <code>this</code>
 * value. The <code>this</code> value ultimately observable by
 * <code>callback</code> is determined according to the usual rules for
 * determining the <code>this</code> seen by a function.</p>
 * <p><code>map</code> does not mutate the array on which it is called
 * (although <code>callback</code>, if invoked, may do so).</p> <p>The range of
 * elements processed by <code>map</code> is set before the first invocation of
 * <code>callback</code>. Elements which are appended to the array after the
 * call to <code>map</code> begins will not be visited by
 * <code>callback</code>. If existing elements of the array are changed, their
 * value as passed to <code>callback</code> will be the value at the time
 * <code>map</code> visits them. Elements that are deleted after the call
 * to <code>map</code> begins and before being visited are not visited.<br>
 * <br> Due to the algorithm defined in the specification if the array which
 * map was called upon is sparse, resulting array will also be sparse keeping
 * same indices blank.</p>
 *
 * @summary 
 * @template E
 * @template R
 * @template T
 * @param {function(this: T, E, number, Array<E>): R} callback Function that
 * produces an element of the new Array, taking three arguments: <dl>
 * <dt> </dt> <dt><code>currentValue</code></dt> <dd>The current element being
 * processed in the array.</dd> <dt><code>index</code></dt> <dd>The index of
 * the current element being processed in the array.</dd>
 * <dt><code>array</code></dt> <dd>The array <code>map</code> was called upon.
 * @param {T=} thisArg Optional. Value to use as <code>this</code> when
 * executing <code>callback</code>.
 * @return {Array<R>} <p>A new array with each element being the result of the
 * callback function.</p>
 * @see Array.prototype.forEach()
 * @see Map
 * @see Array.from()
 */
Array.prototype.map = function (callback, thisArg) {};

/**
 * <p><code>reduce</code> executes the <code>callback</code> function once for
 * each element present in the array, excluding holes in the array, receiving
 * four arguments:</p> <ul> <li><code>accumulator</code></li>
 * <li><code>currentValue</code></li> <li><code>currentIndex</code></li>
 * <li><code>array</code></li> </ul> <p>The first time the callback is called,
 * <code>accumulator</code> and <code>currentValue</code> can be one of two
 * values. If <code>initialValue</code> is provided in the call to
 * <code>reduce</code>, then <code>accumulator</code> will be equal to
 * <code>initialValue</code> and <code>currentValue</code> will be equal to the
 * first value in the array. If no <code>initialValue</code> was provided, then
 * <code>accumulator</code> will be equal to the first value in the array and
 * <code>currentValue</code> will be equal to the second.</p>
 * <p><strong>Note:</strong> If <code>initialValue</code> isn't provided,
 * reduce will execute the callback function starting at index 1, skipping the
 * first index. If <code>initialValue</code> is provided, it will start at
 * index 0.</p> <p>If the array is empty and no <code>initialValue</code> was
 * provided, <code>TypeError</code> would be thrown. If the array has only one
 * element (regardless of position) and no <code>initialValue</code> was
 * provided, or if <code>initialValue</code> is provided but the array is
 * empty, the solo value would be returned <em>without calling
 * <code>callback</code>.</em></p> <p>It is usually safer to provide an initial
 * value because there are three possible outputs without
 * <code>initialValue</code>, as shown in the following example.</p> <pre
 * class="brush: js">var maxCallback = ( pre, cur ) =&gt; Math.max( pre.x,
 * cur.x ); var maxCallback2 = ( max, cur ) =&gt; Math.max( max, cur ); //
 * reduce() without initialValue [ { x: 22 }, { x: 42 } ].reduce( maxCallback
 * ); // 42 [ { x: 22 } ].reduce( maxCallback ); // { x: 22 } [ ].reduce(
 * maxCallback ); // TypeError // map/reduce; better solution, also works for
 * empty arrays [ { x: 22 }, { x: 42 } ].map( el =&gt; el.x ) .reduce(
 * maxCallback2, -Infinity ); </pre> <h3 id="How_reduce_works">How reduce
 * works</h3> <p>Suppose the following use of <code>reduce</code> occurred:</p>
 * <pre class="brush: js">[0, 1, 2, 3,
 * 4].reduce(function(<code>accumulator</code>, currentValue, currentIndex,
 * array) { return <code>accumulator</code> + currentValue; }); </pre> <p>The
 * callback would be invoked four times, with the arguments and return values
 * in each call being as follows:</p> <table> <thead> <tr> <th
 * scope="col"><code>callback</code></th> <th
 * scope="col"><code>accumulator</code></th> <th
 * scope="col"><code>currentValue</code></th> <th
 * scope="col"><code>currentIndex</code></th> <th
 * scope="col"><code>array</code></th> <th scope="col">return value</th> </tr>
 * </thead> <tbody> <tr> <th scope="row">first call</th>
 * <td><code>0</code></td> <td><code>1</code></td> <td><code>1</code></td>
 * <td><code>[0, 1, 2, 3, 4]</code></td> <td><code>1</code></td> </tr> <tr> <th
 * scope="row">second call</th> <td><code>1</code></td> <td><code>2</code></td>
 * <td><code>2</code></td> <td><code>[0, 1, 2, 3, 4]</code></td>
 * <td><code>3</code></td> </tr> <tr> <th scope="row">third call</th>
 * <td><code>3</code></td> <td><code>3</code></td> <td><code>3</code></td>
 * <td><code>[0, 1, 2, 3, 4]</code></td> <td><code>6</code></td> </tr> <tr> <th
 * scope="row">fourth call</th> <td><code>6</code></td> <td><code>4</code></td>
 * <td><code>4</code></td> <td><code>[0, 1, 2, 3, 4]</code></td>
 * <td><code>10</code></td> </tr> </tbody> </table> <p>The value returned by
 * <code>reduce</code> would be that of the last callback invocation
 * (<code>10</code>).</p> <p>You can also provide an Arrow Function in lieu of
 * a full function. The code below will produce the same output as the code in
 * the block above:</p> <pre class="brush: js">[0, 1, 2, 3, 4].reduce( (prev,
 * curr) =&gt; prev + curr ); </pre> <p>If you were to provide an initial value
 * as the second argument to <code>reduce</code>, the result would look like
 * this:</p> <pre class="brush: js">[0, 1, 2, 3, 4].reduce(
 * (<code>accumulator</code>, currentValue, currentIndex, array) =&gt; { return
 * <code>accumulator</code> + currentValue; }, 10); </pre> <table> <thead> <tr>
 * <th scope="col"><code>callback</code></th> <th
 * scope="col"><code>accumulator</code></th> <th
 * scope="col"><code>currentValue</code></th> <th
 * scope="col"><code>currentIndex</code></th> <th
 * scope="col"><code>array</code></th> <th scope="col">return value</th> </tr>
 * </thead> <tbody> <tr> <th scope="row">first call</th>
 * <td><code>10</code></td> <td><code>0</code></td> <td><code>0</code></td>
 * <td><code>[0, 1, 2, 3, 4]</code></td> <td><code>10</code></td> </tr> <tr>
 * <th scope="row">second call</th> <td><code>10</code></td>
 * <td><code>1</code></td> <td><code>1</code></td> <td><code>[0, 1, 2, 3,
 * 4]</code></td> <td><code>11</code></td> </tr> <tr> <th scope="row">third
 * call</th> <td><code>11</code></td> <td><code>2</code></td>
 * <td><code>2</code></td> <td><code>[0, 1, 2, 3, 4]</code></td>
 * <td><code>13</code></td> </tr> <tr> <th scope="row">fourth call</th>
 * <td><code>13</code></td> <td><code>3</code></td> <td><code>3</code></td>
 * <td><code>[0, 1, 2, 3, 4]</code></td> <td><code>16</code></td> </tr> <tr>
 * <th scope="row">fifth call</th> <td><code>16</code></td>
 * <td><code>4</code></td> <td><code>4</code></td> <td><code>[0, 1, 2, 3,
 * 4]</code></td> <td><code>20</code></td> </tr> </tbody> </table> <p>The final
 * call return value (<code>20</code>) is <em>returned</em> as a result of the
 * reduce function</p>
 *
 * @summary 
 * @template I
 * @template E
 * @template R
 * @param {function((I|E|R), (E), number, Array<E>): R} callback Function to
 * execute on each value in the array, taking four arguments: <dl>
 * <dt><code>accumulator</code></dt> <dd>The accumulated value previously
 * returned in the last invocation of the callback, or
 * <code>initialValue</code>, if supplied. (See below.)</dd>
 * <dt><code>currentValue</code></dt> <dd>The current element being processed
 * in the array.</dd> <dt><code>currentIndex</code></dt> <dd>The index of the
 * current element being processed in the array. Starts at index 0, if an
 * <code>initialValue</code> is provided, and at index 1 otherwise.</dd>
 * <dt><code>array</code></dt> <dd>The array <code>reduce</code> was called
 * upon.
 * @param {I} initialValue Optional. Value to use as the first argument to the
 * first call of the <code>callback</code>.
 * @return {R} <p>The value that results from the reduction.</p>
 * @see Array.prototype.reduceRight()
 */
Array.prototype.reduce = function (callback, initialValue) {};

/**
 * <p><code>reduceRight</code> executes the callback function once for each
 * element present in the array, excluding holes in the array, receiving four
 * arguments: the initial value (or value from the previous callback call), the
 * value of the current element, the current index, and the array over which
 * iteration is occurring.</p> <p>The call to the reduceRight
 * <code>callback</code> would look something like this:</p> <pre class="brush:
 * js">array.reduceRight(function(previousValue, currentValue, index, array) {
 * // ... }); </pre> <p>The first time the function is called, the
 * <code>previousValue</code> and <code>currentValue</code> can be one of two
 * values. If an <code>initialValue</code> was provided in the call to
 * <code>reduceRight</code>, then <code>previousValue</code> will be equal to
 * <code>initialValue</code> and <code>currentValue</code> will be equal to the
 * last value in the array. If no <code>initialValue</code> was provided, then
 * <code>previousValue</code> will be equal to the last value in the array and
 * <code>currentValue</code> will be equal to the second-to-last value.</p>
 * <p>If the array is empty and no <code>initialValue </code>was provided,
 * <code>TypeError</code> would be thrown. If the array has only one element
 * (regardless of position) and no <code>initialValue </code>was provided, or
 * if <code>initialValue</code> is provided but the array is empty, the solo
 * value would be returned without calling <code>callback</code>.</p> <p>Some
 * example run-throughs of the function would look like this:</p> <pre
 * class="brush: js">[0, 1, 2, 3, 4].reduceRight(function(previousValue,
 * currentValue, index, array) { return previousValue + currentValue; });
 * </pre> <p>The callback would be invoked four times, with the arguments and
 * return values in each call being as follows:</p> <table> <thead> <tr> <th
 * scope="col"><code>callback</code></th> <th
 * scope="col"><code>previousValue</code></th> <th
 * scope="col"><code>currentValue</code></th> <th
 * scope="col"><code>index</code></th> <th scope="col"><code>array</code></th>
 * <th scope="col">return value</th> </tr> </thead> <tbody> <tr> <th
 * scope="row">first call</th> <td><code>4</code></td> <td><code>3</code></td>
 * <td><code>3</code></td> <td><code>[0, 1, 2, 3, 4]</code></td>
 * <td><code>7</code></td> </tr> <tr> <th scope="row">second call</th>
 * <td><code>7</code></td> <td><code>2</code></td> <td><code>2</code></td>
 * <td><code>[0, 1, 2, 3, 4]</code></td> <td><code>9</code></td> </tr> <tr> <th
 * scope="row">third call</th> <td><code>9</code></td> <td><code>1</code></td>
 * <td><code>1</code></td> <td><code>[0, 1, 2, 3, 4]</code></td>
 * <td><code>10</code></td> </tr> <tr> <th scope="row">fourth call</th>
 * <td><code>10</code></td> <td><code>0</code></td> <td><code>0</code></td>
 * <td><code>[0, 1, 2, 3, 4]</code></td> <td><code>10</code></td> </tr>
 * </tbody> </table> <p>The value returned by <code>reduceRight</code> would be
 * that of the last callback invocation (<code>10</code>).</p> <p>And if you
 * were to provide an <code>initialValue</code>, the result would look like
 * this:</p> <pre class="brush: js">[0, 1, 2, 3,
 * 4].reduceRight(function(previousValue, currentValue, index, array) { return
 * previousValue + currentValue; }, 10); </pre> <table> <thead> <tr> <th
 * scope="col"><code>callback</code></th> <th
 * scope="col"><code>previousValue</code></th> <th
 * scope="col"><code>currentValue</code></th> <th
 * scope="col"><code>index</code></th> <th scope="col"><code>array</code></th>
 * <th scope="col">return value</th> </tr> </thead> <tbody> <tr> <th
 * scope="row">first call</th> <td><code>10</code></td> <td><code>4</code></td>
 * <td><code>4</code></td> <td><code>[0, 1, 2, 3, 4]</code></td>
 * <td><code>14</code></td> </tr> <tr> <th scope="row">second call</th>
 * <td><code>14</code></td> <td><code>3</code></td> <td><code>3</code></td>
 * <td><code>[0, 1, 2, 3, 4]</code></td> <td><code>17</code></td> </tr> <tr>
 * <th scope="row">third call</th> <td><code>17</code></td>
 * <td><code>2</code></td> <td><code>2</code></td> <td><code>[0, 1, 2, 3,
 * 4]</code></td> <td><code>19</code></td> </tr> <tr> <th scope="row">fourth
 * call</th> <td><code>19</code></td> <td><code>1</code></td>
 * <td><code>1</code></td> <td><code>[0, 1, 2, 3, 4]</code></td>
 * <td><code>20</code></td> </tr> <tr> <th scope="row">fifth call</th>
 * <td><code>20</code></td> <td><code>0</code></td> <td><code>0</code></td>
 * <td><code>[0, 1, 2, 3, 4]</code></td> <td><code>20</code></td> </tr>
 * </tbody> </table> <p>The value returned by <code>reduceRight</code> this
 * time would be, of course, <code>20</code>.</p>
 *
 * @summary 
 * @template I
 * @template E
 * @template R
 * @param {function((I|E|R), (E), number, Array<E>): R} callback Function to
 * execute on each value in the array, taking four arguments: <dl>
 * <dt><code>previousValue</code></dt> <dd>The value previously returned in the
 * last invocation of the callback, or <code>initialValue</code>, if supplied.
 * (See below.)</dd> <dt><code>currentValue</code></dt> <dd>The current element
 * being processed in the array.</dd> <dt><code>index</code></dt> <dd>The index
 * of the current element being processed in the array.</dd>
 * <dt><code>array</code></dt> <dd>The array <code>reduce</code> was called
 * upon.
 * @param {I} initialValue Optional. Object to use as the first argument to the
 * first call of the <code>callback</code>.
 * @return {R} <p>The value that results from the reduction.</p>
 * @see Array.prototype.reduce()
 */
Array.prototype.reduceRight = function (callback, initialValue) {};

/**
 * <p><code>some()</code> executes the <code>callback</code> function once for
 * each element present in the array until it finds one where
 * <code>callback</code> returns a <em>truthy</em> value (a value that becomes
 * true when converted to a Boolean). If such an element is found,
 * <code>some()</code> immediately returns <code>true</code>. Otherwise,
 * <code>some()</code> returns <code>false</code>. <code>callback</code> is
 * invoked only for indexes of the array which have assigned values; it is not
 * invoked for indexes which have been deleted or which have never been
 * assigned values.</p> <p><code>callback</code> is invoked with three
 * arguments: the value of the element, the index of the element, and the array
 * object being traversed.</p> <p>If a <code>thisArg</code> parameter is
 * provided to <code>some()</code>, it will be passed to <code>callback</code>
 * when invoked, for use as its <code>this</code> value. Otherwise, the value
 * <code>undefined</code> will be passed for use as its <code>this</code>
 * value. The <code>this</code> value ultimately observable by
 * <code>callback</code> is determined according to the usual rules for
 * determining the <code>this</code> seen by a function.</p>
 * <p><code>some()</code> does not mutate the array on which it is called.</p>
 * <p>The range of elements processed by <code>some()</code> is set before the
 * first invocation of <code>callback</code>. Elements that are appended to the
 * array after the call to <code>some()</code> begins will not be visited by
 * <code>callback</code>. If an existing, unvisited element of the array is
 * changed by <code>callback</code>, its value passed to the visiting
 * <code>callback</code> will be the value at the time that <code>some()</code>
 * visits that element's index; elements that are deleted are not visited.</p>
 *
 * @summary 
 * @template E
 * @template T
 * @param {function(this: T, E, number, Array<E>): boolean} callback Function
 * to test for each element, taking three arguments: <dl>
 * <dt><code>currentValue</code></dt> <dd>The current element being processed
 * in the array.</dd> <dt><code>index</code></dt> <dd>The index of the current
 * element being processed in the array.</dd> <dt><code>array</code></dt>
 * <dd>The array <code>some()</code> was called upon.
 * @param {T=} thisArg Optional. Value to use as <code>this</code> when
 * executing <code>callback</code>.
 * @return {boolean} <p><code><strong>true</strong></code> if the callback
 * function returns a truthy value for any array element; otherwise,
 * <code><strong>false</strong></code>.</p>
 * @see Array.prototype.find()
 * @see Array.prototype.forEach()
 * @see Array.prototype.every()
 * @see TypedArray.prototype.some()
 */
Array.prototype.some = function (callback, thisArg) {};

/**
 * <h3 id="JavaScript_Object_Notation">JavaScript Object Notation</h3> <p>JSON
 * is a syntax for serializing objects, arrays, numbers, strings, booleans, and
 * <code>null</code>. It is based upon JavaScript syntax but is distinct from
 * it: some JavaScript is not JSON, and some JSON is not JavaScript. See also
 * JSON: The JavaScript subset that isn't.</p> <table> <caption>JavaScript and
 * JSON differences</caption> <thead> <tr> <th scope="col">JavaScript type</th>
 * <th scope="col">JSON differences</th> </tr> </thead> <tbody> <tr>
 * <td>Objects and Arrays</td> <td>Property names must be double-quoted
 * strings; trailing commas are forbidden.</td> </tr> <tr> <td>Numbers</td>
 * <td>Leading zeros are prohibited( in JSON.stringify zeros will be ignored,
 * but in JSON.parse it will throw SyntaxError); a decimal point must be
 * followed by at least one digit.</td> </tr> <tr> <td>Strings</td> <td>
 * <p>Only a limited set of characters may be escaped; certain control
 * characters are prohibited; the Unicode line separator (U+2028) and paragraph
 * separator (U+2029) characters are permitted; strings must be double-quoted.
 * See the following example where <code>JSON.parse()</code> works fine and a
 * <code>SyntaxError</code> is thrown when evaluating the code as
 * JavaScript:</p> <pre class="brush: js"> var code = '"\u2028\u2029"';
 * JSON.parse(code); // works fine eval(code); // fails </pre> </td> </tr>
 * </tbody> </table> <p>The full JSON syntax is as follows:</p>
 * <pre><var>JSON</var> = <strong>null</strong> <em>or</em>
 * <strong>true</strong> <em>or</em> <strong>false</strong> <em>or</em>
 * <var>JSONNumber</var> <em>or</em> <var>JSONString</var> <em>or</em>
 * <var>JSONObject</var> <em>or</em> <var>JSONArray</var> <var>JSONNumber</var>
 * = <strong>-</strong> <var>PositiveNumber</var> <em>or</em>
 * <var>PositiveNumber</var> <var>PositiveNumber</var> = DecimalNumber
 * <em>or</em> <var>DecimalNumber</var> <strong>.</strong> <var>Digits</var>
 * <em>or</em> <var>DecimalNumber</var> <strong>.</strong> <var>Digits</var>
 * <var>ExponentPart</var> <em>or</em> <var>DecimalNumber</var>
 * <var>ExponentPart</var> <var>DecimalNumber</var> = <strong>0</strong>
 * <em>or</em> <var>OneToNine</var> <var>Digits</var> <var>ExponentPart</var> =
 * <strong>e</strong> <var>Exponent</var> <em>or</em> <strong>E</strong>
 * <var>Exponent</var> <var>Exponent</var> = <var>Digits</var> <em>or</em>
 * <strong>+</strong> <var>Digits</var> <em>or</em> <strong>-</strong>
 * <var>Digits</var> <var>Digits</var> = <var>Digit</var> <em>or</em>
 * <var>Digits</var> <var>Digit</var> <var>Digit</var> = <strong>0</strong>
 * through <strong>9</strong> <var>OneToNine</var> = <strong>1</strong> through
 * <strong>9</strong> <var>JSONString</var> = <strong>""</strong> <em>or</em>
 * <strong>"</strong> <var>StringCharacters</var> <strong>"</strong>
 * <var>StringCharacters</var> = <var>StringCharacter</var> <em>or</em>
 * <var>StringCharacters</var> <var>StringCharacter</var>
 * <var>StringCharacter</var> = any character <em>except</em>
 * <strong>"</strong> <em>or</em> <strong>\</strong> <em>or</em> U+0000 through
 * U+001F <em>or</em> <var>EscapeSequence</var> <var>EscapeSequence</var> =
 * <strong>\"</strong> <em>or</em> <strong>\/</strong> <em>or</em>
 * <strong>\\</strong> <em>or</em> <strong>\b</strong> <em>or</em>
 * <strong>\f</strong> <em>or</em> <strong>\n</strong> <em>or</em>
 * <strong>\r</strong> <em>or</em> <strong>\t</strong> <em>or</em>
 * <strong>\u</strong> <var>HexDigit</var> <var>HexDigit</var>
 * <var>HexDigit</var> <var>HexDigit</var> <var>HexDigit</var> =
 * <strong>0</strong> through <strong>9</strong> <em>or</em> <strong>A</strong>
 * through <strong>F</strong> <em>or</em> <strong>a</strong> through
 * <strong>f</strong> <var>JSONObject</var> = <strong>{</strong>
 * <strong>}</strong> <em>or</em> <strong>{</strong> <var>Members</var>
 * <strong>}</strong> <var>Members</var> = <var>JSONString</var>
 * <strong>:</strong> <var>JSON</var> <em>or</em> <var>Members</var>
 * <strong>,</strong> <var>JSONString</var> <strong>:</strong> <var>JSON</var>
 * <var>JSONArray</var> = <strong>[</strong> <strong>]</strong> <em>or</em>
 * <strong>[</strong> <var>ArrayElements</var> <strong>]</strong>
 * <var>ArrayElements</var> = <var>JSON</var> <em>or</em>
 * <var>ArrayElements</var> <strong>,</strong> <var>JSON</var> </pre>
 * <p>Insignificant whitespace may be present anywhere except within a
 * <code><var>JSONNumber</var></code> (numbers must contain no whitespace) or
 * <code><var>JSONString</var></code> (where it is interpreted as the
 * corresponding character in the string, or would cause an error). The tab
 * character (U+0009), carriage return (U+000D), line feed (U+000A), and space
 * (U+0020) characters are the only valid whitespace characters.</p>
 *
 * @summary 
 * @type {Object}
 * @see Date.prototype.toJSON()
 */
var JSON;

/**
 * 
 *
 * @summary 
 * @param {string} text The string to parse as JSON. See the <code>JSON</code>
 * object for a description of JSON syntax.
 * @param {function(string, (undefined|null|boolean|number|string|Object)):
 * (undefined|null|boolean|number|string|Object)=} reviver
 * @return {(undefined|null|boolean|number|string|Object)} <p>The
 * <code>Object</code> corresponding to the given JSON <code>text</code>.</p>
 * @see JSON.stringify()
 */
JSON.parse = function (text, reviver) {};

/**
 * <p><code>JSON.stringify()</code> converts a value to JSON notation
 * representing it:</p> <ul> <li>Properties of non-array objects are not
 * guaranteed to be stringified in any particular order. Do not rely on
 * ordering of properties within the same object within the
 * stringification.</li> <li><code>Boolean</code>, <code>Number</code>, and
 * <code>String</code> objects are converted to the corresponding primitive
 * values during stringification, in accord with the traditional conversion
 * semantics.</li> <li>If <code>undefined</code>, a function, or a symbol is
 * encountered during conversion it is either omitted (when it is found in an
 * object) or censored to <code>null</code> (when it is found in an array).
 * <code>JSON.stringify</code> can also just return <code>undefined</code> when
 * passing in "pure" values like <code>JSON.stringify(function(){})</code> or
 * <code>JSON.stringify(undefined)</code>.</li> <li>All symbol-keyed properties
 * will be completely ignored, even when using the <code>replacer</code>
 * function.</li> <li>Non-enumerable properties will be ignored</li> </ul> <pre
 * class="brush: js">JSON.stringify({}); // '{}' JSON.stringify(true); //
 * 'true' JSON.stringify('foo'); // '"foo"' JSON.stringify([1, 'false',
 * false]); // '[1,"false",false]' JSON.stringify({ x: 5 }); // '{"x":5}'
 * JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)) //
 * '"2006-01-02T15:04:05.000Z"' JSON.stringify({ x: 5, y: 6 }); //
 * '{"x":5,"y":6}' or '{"y":6,"x":5}' JSON.stringify([new Number(1), new
 * String('false'), new Boolean(false)]); // '[1,"false",false]'
 * JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }); //
 * '{"x":[10,null,null,null]}' // Symbols: JSON.stringify({ x: undefined, y:
 * Object, z: Symbol('') }); // '{}' JSON.stringify({ [Symbol('foo')]: 'foo'
 * }); // '{}' JSON.stringify({ [Symbol.for('foo')]: 'foo' },
 * [Symbol.for('foo')]); // '{}' JSON.stringify({ [Symbol.for('foo')]: 'foo' },
 * function(k, v) { if (typeof k === 'symbol') { return 'a symbol'; } }); //
 * '{}' // Non-enumerable properties: JSON.stringify( Object.create(null, { x:
 * { value: 'x', enumerable: false }, y: { value: 'y', enumerable: true } }) );
 * // '{"y":"y"}' </pre> <h3 id="The_replacer_parameter">The
 * <code>replacer</code> parameter</h3> <p>The <code>replacer</code> parameter
 * can be either a function or an array. As a function, it takes two
 * parameters, the key and the value being stringified. The object in which the
 * key was found is provided as the replacer's <code>this</code> parameter.
 * Initially it gets called with an empty key representing the object being
 * stringified, and it then gets called for each property on the object or
 * array being stringified. It should return the value that should be added to
 * the JSON string, as follows:</p> <ul> <li>If you return a
 * <code>Number</code>, the string corresponding to that number is used as the
 * value for the property when added to the JSON string.</li> <li>If you return
 * a <code>String</code>, that string is used as the property's value when
 * adding it to the JSON string.</li> <li>If you return a <code>Boolean</code>,
 * "true" or "false" is used as the property's value, as appropriate, when
 * adding it to the JSON string.</li> <li>If you return any other object, the
 * object is recursively stringified into the JSON string, calling the
 * <code>replacer</code> function on each property, unless the object is a
 * function, in which case nothing is added to the JSON string.</li> <li>If you
 * return <code>undefined</code>, the property is not included (i.e., filtered
 * out) in the output JSON string.</li> </ul> <div
 * class="note"><strong>Note:</strong> You cannot use the <code>replacer</code>
 * function to remove values from an array. If you return
 * <code>undefined</code> or a function then <code>null</code> is used
 * instead.</div> <h4 id="Example_with_a_function">Example with a function</h4>
 * <pre class="brush: js">function replacer(key, value) { // Filtering out
 * properties if (typeof value === 'string') { return undefined; } return
 * value; } var foo = {foundation: 'Mozilla', model: 'box', week: 45,
 * transport: 'car', month: 7}; JSON.stringify(foo, replacer); //
 * '{"week":45,"month":7}' </pre> <h4 id="Example_with_an_array">Example with
 * an array</h4> <p>If <code>replacer</code> is an array, the array's values
 * indicate the names of the properties in the object that should be included
 * in the resulting JSON string.</p> <pre class="brush: js">JSON.stringify(foo,
 * ['week', 'month']); // '{"week":45,"month":7}', only keep "week" and "month"
 * properties </pre> <h3 id="The_space_argument">The <code>space</code>
 * argument</h3> <p>The <code>space</code> argument may be used to control
 * spacing in the final string. If it is a number, successive levels in the
 * stringification will each be indented by this many space characters (up to
 * 10). If it is a string, successive levels will be indented by this string
 * (or the first ten characters of it).</p> <pre class="brush:
 * js">JSON.stringify({ a: 2 }, null, ' '); // '{ // "a": 2 // }' </pre>
 * <p>Using a tab character mimics standard pretty-print appearance:</p> <pre
 * class="brush: js">JSON.stringify({ uno: 1, dos: 2 }, null, '\t'); // returns
 * the string: // '{ // "uno": 1, // "dos": 2 // }' </pre> <h3
 * id="toJSON()_behavior"><code>toJSON()</code> behavior</h3> <p>If an object
 * being stringified has a property named <code>toJSON</code> whose value is a
 * function, then the <code>toJSON()</code> method customizes JSON
 * stringification behavior: instead of the object being serialized, the value
 * returned by the <code>toJSON()</code> method when called will be serialized.
 * For example:</p> <pre class="brush: js">var obj = { foo: 'foo', toJSON:
 * function() { return 'bar'; } }; JSON.stringify(obj); // '"bar"'
 * JSON.stringify({ x: obj }); // '{"x":"bar"}' </pre> <h3
 * id="Issue_with_plain_JSON.stringify_for_use_as_JavaScript">Issue with plain
 * <code>JSON.stringify</code> for use as JavaScript</h3> <p>Note that JSON is
 * not a completely strict subset of JavaScript, with two line terminators
 * (Line separator and Paragraph separator) not needing to be escaped in JSON
 * but needing to be escaped in JavaScript. Therefore, if the JSON is meant to
 * be evaluated or directly utilized within JSONP, the following utility can be
 * used:</p> <pre class="brush: js">function jsFriendlyJSONStringify (s) {
 * return JSON.stringify(s). replace(/\u2028/g, '\\u2028'). replace(/\u2029/g,
 * '\\u2029'); } var s = { a: String.fromCharCode(0x2028), b:
 * String.fromCharCode(0x2029) }; try { eval('(' + JSON.stringify(s) + ')'); }
 * catch (e) { console.log(e); // "SyntaxError: unterminated string literal" }
 * // No need for a catch eval('(' + jsFriendlyJSONStringify(s) + ')'); //
 * console.log in Firefox unescapes the Unicode if // logged to console, so we
 * use alert alert(jsFriendlyJSONStringify(s)); //
 * {"a":"\u2028","b":"\u2029"}</pre> <h3
 * id="Example_of_using_JSON.stringify()_with_localStorage">Example of using
 * <code>JSON.stringify()</code> with <code>localStorage</code></h3> <p>In a
 * case where you want to store an object created by your user and allowing it
 * to be restored even after the browser has been closed, the following example
 * is a model for the applicability of <code>JSON.stringify()</code>:</p> <div
 * class="warning"> <p>Functions are not a valid JSON data type so they will
 * not work. However, they can be displayed if first converted to a string
 * (e.g. in the replacer), via the function's toString method. Also, some
 * objects like <code>Date</code> will be a string after
 * <code>JSON.parse()</code>.</p> </div> <pre class="brush: js">// Creating an
 * example of JSON var session = { 'screens': [], 'state': true };
 * session.screens.push({ 'name': 'screenA', 'width': 450, 'height': 250 });
 * session.screens.push({ 'name': 'screenB', 'width': 650, 'height': 350 });
 * session.screens.push({ 'name': 'screenC', 'width': 750, 'height': 120 });
 * session.screens.push({ 'name': 'screenD', 'width': 250, 'height': 60 });
 * session.screens.push({ 'name': 'screenE', 'width': 390, 'height': 120 });
 * session.screens.push({ 'name': 'screenF', 'width': 1240, 'height': 650 });
 * // Converting the JSON string with JSON.stringify() // then saving with
 * localStorage in the name of session localStorage.setItem('session',
 * JSON.stringify(session)); // Example of how to transform the String
 * generated through // JSON.stringify() and saved in localStorage in JSON
 * object again var restoredSession =
 * JSON.parse(localStorage.getItem('session')); // Now restoredSession variable
 * contains the object that was saved // in localStorage
 * console.log(restoredSession); </pre>
 *
 * @summary 
 * @param {(null|boolean|number|string|Object)} value The value to convert to a
 * JSON string.
 * @param {?(function(string, (undefined|null|boolean|number|string|Object)):
 * (undefined|boolean|number|string|Object)|Array<string>)=} replacer
 * @param {(number|string)=} space
 * @return {string} <p>A JSON string representing the given value.</p>
 * @see JSON.parse()
 */
JSON.stringify = function (value, replacer, space) {};

/**
 * The iterator protocol defines a standard way to produce a sequence of values
 * (either finite or infinite).
 *
 * @template E
 * @interface
 */
function Iterator() {}

/**
 * The next method always has to return an object with appropriate properties
 * including done and value. If a non-object value gets returned (such as
 * <code>false</code> or <code>undefined</code>), a
 * <code>TypeError("iterator.next() returned a non-object value")</code> will
 * be thrown.
 *
 * @return {{value: E, done: boolean}} An object with two properties:
 *         <ul>
 *             <li>
 *                 <code>value</code> - any JavaScript value returned by the
 *                 iterator. Can be omitted when done is true.
 *             </li>
 *             <li>
 *                 <code>done</code>
 *                 <ul>
 *                     <li>
 *                         Has the value <code>true</code> if the iterator is
 *                         past the end of the iterated sequence. In this case
 *                         value optionally specifies the return value of the
 *                         iterator.
 *                     </li>
 *                     <li>
 *                         Has the value <code>false</code> if the iterator was
 *                         able to produce the next value in the sequence. This
 *                         is equivalent of not specifying the done property
 *                         altogether.
 *                     </li>
 *                 </ul>
 *             </li>
 *         </ul>
 */
Iterator.prototype.next = function () {};
