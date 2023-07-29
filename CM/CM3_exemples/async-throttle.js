// https://stackoverflow.com/questions/27078285/simple-throttle-in-js
function throttle(funct, delay) {
  let waiting = false;
  return function (...args) {
    if (!waiting) {
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, delay);
      return funct(...args);
    }
  };
}

