/**
 * Makes the given object "thenable", behaving like a promise, and reoslvable/rejectable.
 *
 * Creates a promise, adds its `then` and `catch` methods to the given object,
 * and finally returns its `resolve` and `reject` functions.
 *
 * Use this in a constructor to make your class Promise-like.
 *
 * @param {Object} object - object to make thenable
 *
 * @returns {Object} the modified original object
 */
module.exports = function promisify(object) {
	const promise = new Promise((resolve, reject) => {
		object.resolve = resolve
		object.reject = reject
	})

	object.catch = promise.catch.bind(promise)
	object.then = promise.then.bind(promise)

	return object
}
