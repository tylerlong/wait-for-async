const waitFor = async (
  condition: () => boolean,
  interval = 1000,
  times = Infinity
): Promise<boolean> => {
  return new Promise<boolean>(resolve => {
    let count = 0;
    const handle = setInterval(() => {
      if (condition()) {
        clearInterval(handle);
        resolve(true);
      }
      count += 1;
      if (count >= times) {
        clearInterval(handle);
        resolve(false);
      }
    }, interval);
  });
};

export default waitFor;
