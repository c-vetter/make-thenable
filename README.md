# make-thenable
Make an object thenable without a fuss

## What it does
```js
const makeThenable = require('make-thenable')

const promiseLike = {}

const [resolve, reject] = makeThenable(promiseLike)
```

Now, the given object behaves exactly like a good little `Promise`: you can add callbacks through `promiseLike.then` and `promiseLike.catch`, and resolve/reject through the return values.
That is because it is now linked to a real `Promise`. Consequently, in Internet Explorer, you need a polyfill.

### Also resolvable
```js
const makeThenable = require('make-thenable/resolvable')

const promiseLike = makeThenable({})
```

This gives you the same functionality as above, plus `promiseLike.resolve` and `promiseLike.reject`.

## Why it exists
Sometimes, you need an arbitrary object to behave like a Promise. In times like these, just make it thenable and be happy.

After writing the original version, I came across
[an article by Lea Verou](http://lea.verou.me/2016/12/resolve-promises-externally-with-this-one-weird-trick/),
and thought I'd cover her use-case as well.
That's why there's `make-thenable/resolvable`
