export const fakeRequest = (cb, delay = 500) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = cb();
        resolve(result);
      } catch (e) {
        reject(e);
      }
    }, delay);
  });
