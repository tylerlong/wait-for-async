# wait-for-async

```ts
import waitFor from `wait-for-async`;

const result = await waitFor(condition, interval, times);

console.log(`condition() is ${result}`);
```

Wait for `condition()` to be true. Its value is checked every `interval` milliseconds, check no more than `times` intervals in total.

Whenever `condition()` becomes true, return `true`. If `conditions()` never becomes `true` until `times` intervals passed, return `false`.


## Parameters explained

### condition

`condition()` is a method which returns `true` or `false`.


### interval

The intervals (in milliseconds) on how often to check `condition()`'s value. Default value is `1000`.

At least 1 interval will be waited before `condition()` is checked, even if `condition()` is `true` at the very beginning.


### times

How many times in total to check `condition()`'s value. Default value is `Infinity`.

This is the maximum times to check. Fewer times to check if `condition()`'s value becomes `true` sooner.


## Interesting use cases


### Wait for file downloading

```ts
let downloaded = false;
await waitFor(() => downloaded, 1000, 60)
```

### Pause the app for 3 seconds

```ts
await waitFor(() => true, 3000);
```
