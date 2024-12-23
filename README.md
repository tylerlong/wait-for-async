# wait-for-async

```ts
import waitFor from `wait-for-async`;

await waitFor({ interval, condition, times });
```

Wait for `condition()` to be `true`.
Its value is checked every `interval` milliseconds,
check no more than `times` intervals in total.

Whenever `condition()` becomes `true`, return `true`.
If `condition()` never becomes `true` until `times` intervals passed, return `false`.

## Parameters explained

### interval

The intervals (in milliseconds) on how often to check `condition()`'s value.
The default value is `100`.

At least 1 interval will be waited before `condition()` is checked,
even if `condition()` is `true` at the very beginning.

### condition

`condition()` is a method that returns `true` or `false`.
The default value is `() => true`.

### times

How many times in total to check `condition()`'s value before giving up.
The default value is `Infinity`.

These are the maximum times to check. Fewer times to check if `condition()`'s value becomes `true` sooner.

### return value

`true` if `condition()` becomes `true` before giving up, otherwise return `false`.

Or simply put, `condition()`'s value will be returned.

## Interesting use cases

### Wait for file downloading

Wait for the `download` to become `true` (this variable should be updated by the file downloading code).
Check the `download` value every second (the `interval`'s default value is 100ms), and give up after 60 seconds(60 checks).

### "Delay" the app for 3 seconds

```ts
await waitFor({ interval: 3000 });
```
