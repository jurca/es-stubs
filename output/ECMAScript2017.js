/**
 * <p><code>Object.entries()</code> returns an array whose elements are arrays
 * corresponding to the enumerable property <code>[key, value]</code> pairs
 * found directly upon <code>object</code>. The ordering of the properties is
 * the same as that given by looping over the property values of the object
 * manually.</p>
 *
 * @summary 
 * @param {Object} obj The object whose enumerable own property <code>[key,
 * value]</code> pairs are to be returned.
 * @return {Array<Array<(string|symbol|*)>>} <p>An array of the given object's
 * own enumerable property <code>[key, value]</code> pairs.</p>
 * @see Object.keys()
 * @see Object.values()
 * @see Object.prototype.propertyIsEnumerable()
 * @see Object.create()
 * @see Object.getOwnPropertyNames()
 */
Object.entries = function (obj) {};

/**
 * <p>This method permits examination of the precise description of all own
 * properties of an object. A <dfn>property</dfn> in JavaScript consists of a
 * string-valued name and a property descriptor. Further information about
 * property descriptor types and their attributes can be found in
 * <code>Object.defineProperty()</code>.</p> <p>A <dfn>property
 * descriptor</dfn> is a record with some of the following attributes:</p> <dl>
 * <dt><code>value</code></dt> <dd>The value associated with the property (data
 * descriptors only).</dd> <dt><code><strong>writable</strong></code></dt>
 * <dd><code>true</code> if and only if the value associated with the property
 * may be changed (data descriptors only).</dd> <dt><code>get</code></dt> <dd>A
 * function which serves as a getter for the property, or
 * <code>undefined</code> if there is no getter (accessor descriptors
 * only).</dd> <dt><code>set</code></dt> <dd>A function which serves as a
 * setter for the property, or <code>undefined</code> if there is no setter
 * (accessor descriptors only).</dd> <dt><code>configurable</code></dt>
 * <dd><code>true</code> if and only if the type of this property descriptor
 * may be changed and if the property may be deleted from the corresponding
 * object.</dd> <dt><code>enumerable</code></dt> <dd><code>true</code> if and
 * only if this property shows up during enumeration of the properties on the
 * corresponding object.</dd> </dl>
 *
 * @summary 
 * @param {Object} obj The object for which to get all own property
 * descriptors.
 * @return {Object<(string|symbol), ({configurable: boolean=, enumerable: boolean=, value: *=, writable: boolean=}|{configurable: boolean=, enumerable: boolean=, get: function(): *=, set: function(*): undefined=})>} <p>An
 * object containing all own property descriptors of an object. Might be an
 * empty object, if there are no properties.</p>
 * @see Object.getOwnPropertyDescriptor()
 * @see Object.defineProperty()
 */
Object.getOwnPropertyDescriptors = function (obj) {};

/**
 * <p><code>Object.values()</code> returns an array whose elements are the
 * enumerable property values found on the object. The ordering of the
 * properties is the same as that given by looping over the property values of
 * the object manually.</p>
 *
 * @summary 
 * @param {Object} obj The object whose enumerable own property values are to
 * be returned.
 * @return {Array<*>} <p>An array containing the given object's own enumerable
 * property values.</p>
 * @see Object.keys()
 * @see Object.entries()
 * @see Object.prototype.propertyIsEnumerable()
 * @see Object.create()
 * @see Object.getOwnPropertyNames()
 */
Object.values = function (obj) {};

/**
 * 
 *
 * @summary 
 * @param {number} targetLength The length of the resulting string once the
 * current string has been padded. If this parameter is smaller than the
 * current string's length, the current string will be returned as it is.
 * @param {string} padString
 * @return {string} <p>A <code>String</code> of the specified length with the
 * pad string applied at the end of the current string.</p>
 * @see String.padStart()
 */
String.prototype.padEnd = function (targetLength, padString) {};

/**
 * 
 *
 * @summary 
 * @param {number} targetLength The length of the resulting string once the
 * current string has been padded. If this parameter is smaller than the
 * current string's length, the current string will be returned as it is.
 * @param {string} padString
 * @return {string} <p>A <code>String</code> of the specified length with the
 * pad string applied from the start.</p>
 * @see String.padEnd()
 */
String.prototype.padStart = function (targetLength, padString) {};

/**
 * <h3 id="Allocating_and_sharing_memory">Allocating and sharing memory</h3>
 * <p>To share memory using <code>SharedArrayBuffer</code> objects from one
 * agent in the cluster to another (an agent is either the web page’s main
 * program or one of its web workers), <code>postMessage</code> and structured
 * cloning is used.</p> <p>The structured clone algorithm accepts
 * <code>SharedArrayBuffers</code> and <code>TypedArrays</code> mapped onto
 * <code>SharedArrayBuffers</code>. In both cases, the
 * <code>SharedArrayBuffer</code> object is transmitted to the receiver
 * resulting in a new, private SharedArrayBuffer object in the receiving agent
 * (just as for <code>ArrayBuffer</code>). However, the shared data block
 * referenced by the two <code>SharedArrayBuffer</code> objects is the same
 * data block, and a side effect to the block in one agent will eventually
 * become visible in the other agent.</p> <pre class="brush: js">var sab = new
 * SharedArrayBuffer(1024); worker.postMessage(sab); </pre> <p>In earlier
 * versions of the specification, <code>SharedArrayBuffer</code>s needed to be
 * explicitly transferred during structured cloning. However, a
 * <code>SharedArrayBuffer</code> is not a <code>Transferable</code> object in
 * the sense of HTML. Thus if a <code>SharedArrayBuffer</code> object is
 * present in the transfer list, then <code>postMessage</code> will throw a
 * <code>DataCloneError</code> or at least a warning:</p> <pre class="brush:
 * js">var sab = new SharedArrayBuffer(1024); worker.postMessage(sab, [sab]);
 * // SharedArrayBuffer must not be in the transfer list</pre> <h3
 * id="Updating_and_synchronizing_shared_memory_with_Atomic_operations">Updating
 * and synchronizing shared memory with Atomic operations</h3> <p>Shared memory
 * can be created and updated simultaneously in workers or the main thread.
 * Depending on the system (the CPU, the OS, the Browser) it can take a while
 * until the change is propagated to all contexts. To synchronize, atomic
 * operations are needed.</p> <h3
 * id="APIs_accepting_SharedArrayBuffer_objects">APIs accepting
 * <code>SharedArrayBuffer</code> objects</h3> <ul>
 * <li><code>WebGLRenderingContext.bufferData()</code></li>
 * <li><code>WebGLRenderingContext.bufferSubData()</code></li>
 * <li><code>WebGL2RenderingContext.getBufferSubData()</code></li> </ul> <h3
 * id="Constructing_is_required_with_new_operator">Constructing is required
 * with <code>new</code> operator</h3> <p><code>SharedArrayBuffer</code>
 * constructors require to be constructed with a <code>new</code> operator.
 * Calling a <code>SharedArrayBuffer</code> constructor as a function without
 * <code>new</code>, will throw a <code>TypeError</code>.</p> <pre
 * class="brush: js example-bad">var sab = SharedArrayBuffer(1024); //
 * TypeError: calling a builtin SharedArrayBuffer constructor // without new is
 * forbidden</pre> <pre class="brush: js example-good">var sab = new
 * SharedArrayBuffer(1024);</pre>
 *
 * @summary 
 * @constructor
 * @param {number} length The size, in bytes, of the array buffer to create.
 * @see Atomics
 * @see ArrayBuffer
 */
function SharedArrayBuffer(length) {}

/**
 * <p>The <code>byteLength</code> property is an accessor property whose set
 * accessor function is <code>undefined</code>, meaning that you can only read
 * this property. The value is established when the shared array is constructed
 * and cannot be changed.</p>
 *
 * @summary 
 * @type {number}
 * @see SharedArrayBuffer
 */
SharedArrayBuffer.prototype.byteLength = null;

/**
 * 
 *
 * @summary 
 * @param {number=} begin
 * @param {number=} end
 * @see SharedArrayBuffer
 * @see Array.prototype.slice()
 */
SharedArrayBuffer.prototype.slice = function (begin, end) {};

/**
 * 
 *
 * @summary 
 * @type {Object}
 * @see ArrayBuffer
 */
var Atomics;

/**
 * 
 *
 * @summary 
 * @param {TypedArray} typedArray A shared integer typed array. One of
 * <code>Int8Array</code>, <code>Uint8Array</code>, <code>Int16Array</code>,
 * <code>Uint16Array</code>, <code>Int32Array</code>, or
 * <code>Uint32Array</code>.
 * @param {number} index The position in the <code>typedArray</code> to add a
 * <code>value</code> to.
 * @param {number} value The number to add.
 * @return {number} <p>The old value at the given position
 * (<code>typedArray[index]</code>).</p>
 * @see Atomics
 * @see Atomics.sub()
 */
Atomics.add = function (typedArray, index, value) {};

/**
 * <p>The bitwise AND operation only yields 1, if both <code>a</code> and
 * <code>b</code> are 1. The truth table for the AND operation is:</p> <table
 * class="standard-table"> <thead> <tr> <th><code>a</code></th>
 * <th><code>b</code></th> <th><code>a &amp; b</code></th> </tr> </thead>
 * <tbody> <tr> <td>0</td> <td>0</td> <td>0</td> </tr> <tr> <td>0</td>
 * <td>1</td> <td>0</td> </tr> <tr> <td>1</td> <td>0</td> <td>0</td> </tr> <tr>
 * <td>1</td> <td>1</td> <td>1</td> </tr> </tbody> </table> <p>For example, a
 * bitwise AND of <code>5 &amp; 1</code> results in <code>0001</code> which is
 * 1 in decimal.</p> <pre>5 0101 1 0001 ---- 1 0001</pre>
 *
 * @summary 
 * @param {TypedArray} typedArray A shared integer typed array. One of
 * <code>Int8Array</code>, <code>Uint8Array</code>, <code>Int16Array</code>,
 * <code>Uint16Array</code>, <code>Int32Array</code>, or
 * <code>Uint32Array</code>.
 * @param {index} index The position in the <code>typedArray</code> to compute
 * the bitwise AND.
 * @param {index} value The number to compute the bitwise AND with.
 * @return {number} <p>The old value at the given position
 * (<code>typedArray[index]</code>).</p>
 * @see Atomics
 * @see Atomics.or()
 * @see Atomics.xor()
 */
Atomics.and = function (typedArray, index, value) {};

/**
 * 
 *
 * @summary 
 * @param {TypedArray} typedArray A shared integer typed array. One of
 * <code>Int8Array</code>, <code>Uint8Array</code>, <code>Int16Array</code>,
 * <code>Uint16Array</code>, <code>Int32Array</code>, or
 * <code>Uint32Array</code>.
 * @param {number} index The position in the <code>typedArray</code> to
 * exchange a <code>value</code>.
 * @param {number} expectedValue The value to check for equality.
 * @param {number} replacementValue The number to exchange.
 * @return {number} <p>The old value at the given position
 * (<code>typedArray[index]</code>).</p>
 * @see Atomics
 * @see Atomics.exchange()
 */
Atomics.compareExchange = function (typedArray, index, expectedValue, replacementValue) {};

/**
 * 
 *
 * @summary 
 * @param {TypedArray} typedArray A shared integer typed array. One of
 * <code>Int8Array</code>, <code>Uint8Array</code>, <code>Int16Array</code>,
 * <code>Uint16Array</code>, <code>Int32Array</code>, or
 * <code>Uint32Array</code>.
 * @param {number} index The position in the <code>typedArray</code> to
 * exchange a <code>value</code>.
 * @param {number} value The number to exchange.
 * @return {number} <p>The old value at the given position
 * (<code>typedArray[index]</code>).</p>
 * @see Atomics
 * @see Atomics.compareExchange()
 */
Atomics.exchange = function (typedArray, index, value) {};

/**
 * 
 *
 * @summary 
 * @param {number} size The size in byte to check.
 * @return {boolean} <p>A <code>Boolean</code> indicating whether the operation
 * is lock free.</p>
 * @see Atomics
 */
Atomics.isLockFree = function (size) {};

/**
 * 
 *
 * @summary 
 * @param {TypedArray} typedArray A shared integer typed array. One of
 * <code>Int8Array</code>, <code>Uint8Array</code>, <code>Int16Array</code>,
 * <code>Uint16Array</code>, <code>Int32Array</code>, or
 * <code>Uint32Array</code>.
 * @param {number} index The position in the <code>typedArray</code> to load
 * from<code>.</code>
 * @return {number} <p>The value at the given position
 * (<code>typedArray[index]</code>).</p>
 * @see Atomics
 * @see Atomics.store()
 */
Atomics.load = function (typedArray, index) {};

/**
 * <p>The bitwise OR operation yields 1, if either <code>a</code> or
 * <code>b</code> are 1. The truth table for the OR operation is:</p> <table
 * class="standard-table"> <thead> <tr> <th><code>a</code></th>
 * <th><code>b</code></th> <th><code>a | b</code></th> </tr> </thead> <tbody>
 * <tr> <td>0</td> <td>0</td> <td>0</td> </tr> <tr> <td>0</td> <td>1</td>
 * <td>1</td> </tr> <tr> <td>1</td> <td>0</td> <td>1</td> </tr> <tr> <td>1</td>
 * <td>1</td> <td>1</td> </tr> </tbody> </table> <p>For example, a bitwise OR
 * of <code>5 &amp; 1</code> results in <code>0101</code> which is 5 in
 * decimal.</p> <pre>5 0101 1 0001 ---- 5 0101 </pre>
 *
 * @summary 
 * @param {TypedArray} typedArray A shared integer typed array. One of
 * <code>Int8Array</code>, <code>Uint8Array</code>, <code>Int16Array</code>,
 * <code>Uint16Array</code>, <code>Int32Array</code>, or
 * <code>Uint32Array</code>.
 * @param {number} index The position in the <code>typedArray</code> to compute
 * the bitwise OR.
 * @param {number} value The number to compute the bitwise OR with.
 * @return {number} <p>The old value at the given position
 * (<code>typedArray[index]</code>).</p>
 * @see Atomics
 * @see Atomics.and()
 * @see Atomics.xor()
 */
Atomics.or = function (typedArray, index, value) {};

/**
 * 
 *
 * @summary 
 * @param {TypedArray} typedArray A shared integer typed array. One of
 * <code>Int8Array</code>, <code>Uint8Array</code>, <code>Int16Array</code>,
 * <code>Uint16Array</code>, <code>Int32Array</code>, or
 * <code>Uint32Array</code>.
 * @param {number} index The position in the <code>typedArray</code> to store a
 * <code>value</code> in.
 * @param {number} value The number to store.
 * @return {number} <p>The value that has been stored.</p>
 * @see Atomics
 * @see Atomics.load()
 */
Atomics.store = function (typedArray, index, value) {};

/**
 * 
 *
 * @summary 
 * @param {TypedArray} typedArray A shared integer typed array. One of
 * <code>Int8Array</code>, <code>Uint8Array</code>, <code>Int16Array</code>,
 * <code>Uint16Array</code>, <code>Int32Array</code>, or
 * <code>Uint32Array</code>.
 * @param {number} index The position in the <code>typedArray</code> to
 * subtract a <code>value</code> from.
 * @param {number} value The number to subtract.
 * @return {number} <p>The old value at the given position
 * (<code>typedArray[index]</code>).</p>
 * @see Atomics
 * @see Atomics.add()
 */
Atomics.sub = function (typedArray, index, value) {};

/**
 * 
 *
 * @summary 
 * @param {TypedArray} typedArray A shared <code>Int32Array</code>.
 * @param {number} index The position in the <code>typedArray</code> to wait
 * on.
 * @param {number} value The expected value to test .
 * @param {number} timeout
 * @return {string} <p>A <code>String</code> which is either "<code>ok</code>",
 * "<code>not-equal</code>", or "<code>timed-out</code>".</p>
 * @see Atomics
 * @see Atomics.wake()
 */
Atomics.wait = function (typedArray, index, value, timeout) {};

/**
 * 
 *
 * @summary 
 * @param {TypedArray} typedArray A shared <code>Int32Array</code>.
 * @param {number} index The position in the <code>typedArray</code> to wake up
 * on.
 * @param {number} count The number of sleeping agents to wake. Defaults to
 * <code>+Infinity</code>.
 * @return {number} <p>A number of woken up agents.</p>
 * @see Atomics
 * @see Atomics.wait()
 */
Atomics.wake = function (typedArray, index, count) {};

/**
 * <p>The bitwise XOR operation yields 1, if <code>a</code> and <code>b</code>
 * are different. The truth table for the XOR operation is:</p> <table
 * class="standard-table"> <thead> <tr> <th><code>a</code></th>
 * <th><code>b</code></th> <th><code>a ^ b</code></th> </tr> </thead> <tbody>
 * <tr> <td>0</td> <td>0</td> <td>0</td> </tr> <tr> <td>0</td> <td>1</td>
 * <td>1</td> </tr> <tr> <td>1</td> <td>0</td> <td>1</td> </tr> <tr> <td>1</td>
 * <td>1</td> <td>0</td> </tr> </tbody> </table> <p>For example, a bitwise XOR
 * of <code>5 &amp; 1</code> results in <code>0100</code> which is 4 in
 * decimal.</p> <pre>5 0101 1 0001 ---- 4 0100 </pre>
 *
 * @summary 
 * @param {TypedArray} typedArray A shared integer typed array. One of
 * <code>Int8Array</code>, <code>Uint8Array</code>, <code>Int16Array</code>,
 * <code>Uint16Array</code>, <code>Int32Array</code>, or
 * <code>Uint32Array</code>.
 * @param {number} index The position in the <code>typedArray</code> to compute
 * the bitwise XOR.
 * @param {number} value The number to compute the bitwise XOR with.
 * @return {number} <p>The old value at the given position
 * (<code>typedArray[index]</code>).</p>
 * @see Atomics
 * @see Atomics.and()
 * @see Atomics.or()
 */
Atomics.xor = function (typedArray, index, value) {};
