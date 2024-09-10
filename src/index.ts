interface WaitForOptions {
  /**
   * How long to wait before checking condition.
   * Default value is 100 millisecond.
   */
  interval?: number;
  /**
   * When condition is met, the wait-for ends.
   * Default value is `() => true`.
   * @returns true if condition is met, otherwise false.
   */
  condition?: () => boolean;
  /**
   * How many times to try before giving up.
   * Default value is Infinity.
   */
  times?: number;
}

const defaultOptions: WaitForOptions = {
  interval: 100,
  condition: () => true,
  times: Infinity,
};

/**
 * Wait for `condition()` to be `true`.
 * Its value is checked every `interval` milliseconds,
 * check no more than `times` intervals in total.
 * @param waitForOptions check the docs for `WaitForOptions`.
 * @returns Whenever `condition()` becomes `true`, return `true`.
 * If `condition()` never becomes `true` until `times` intervals passed, return `false`.
 */
const waitFor = async (waitForOptions: WaitForOptions): Promise<boolean> => {
  const { interval, condition, times } = {
    ...defaultOptions,
    ...waitForOptions,
  };
  return new Promise<boolean>((resolve) => {
    let count = 0;
    const handle = setInterval(() => {
      if (condition!()) {
        clearInterval(handle);
        resolve(true);
      }
      count += 1;
      if (count >= times!) {
        clearInterval(handle);
        resolve(false);
      }
    }, interval!);
  });
};

export default waitFor;
