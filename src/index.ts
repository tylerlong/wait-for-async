interface WaitForOptions {
  interval?: number;
  condition?: () => boolean;
  times?: number;
}

const defaultOptions: WaitForOptions = {
  interval: 1000,
  condition: () => true,
  times: Infinity,
};

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
