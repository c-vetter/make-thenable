/**
 * Makes the given object "thenable", behaving like a promise.
 *
 * Creates a promise, adds its `then` and `catch` methods to the given object,
 * and finally returns its `resolve` and `reject` functions.
 *
 * Use this in a constructor to make your class Promise-like.
 *
 * @param {Object} object - object to make thenable
 *
 * @returns {[function, function]}
 */
module.exports = function promisify(object) {
	let resolve, reject
	const promise = new Promise((innerResolve, innerReject) => {
		resolve = innerResolve;
		reject = innerReject;
	});

	object.catch = promise.catch.bind(promise);
	object.then = promise.then.bind(promise);

	return [resolve, reject];
};
