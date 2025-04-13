export const fakeRequest = (delay = 500, cb = () => {}) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldFail = Math.random() < 0.2;
      if (shouldFail) {
        reject(new Error("Сервер вернул ошибку"));
        return;
      }

      try {
        const result = cb();
        resolve(result);
      } catch (e) {
        reject(e);
      }
    }, delay);
  });
