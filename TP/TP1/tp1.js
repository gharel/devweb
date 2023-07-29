function chrono(fct) {
  // c.f. https://javascript.info/rest-parameters-spread
  return function (...args) {
    const start = Date.now();
    const res = fct(...args);
    const end = Date.now();
    console.info(`${fct.name}(...) executed in ${end - start}ms`);
    return res;
  };
}