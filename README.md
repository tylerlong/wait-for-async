# wait-for-async

```ts
import waitFor from `wait-for-async`;

const result = await waitFor(condition, interval, times);

console.log(`condition() is ${result}`);
```

Wait for `condition()` to be true. Its value is checked every `interval` milliseconds, check no more than `times` intervals in total.

Whenever `condition()` becomes true, return `true`. If `conditions()` never becomes `true` until `times` intervals passed, return `false`.

- `interval`'s default value is `1000`
- `times`'s default value is `Infinity`
