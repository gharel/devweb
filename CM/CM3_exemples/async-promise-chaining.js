const inc = (x) => {
  console.log(`inc(${x})`);
  return x + 1;
};

console.info("Start");
Promise.resolve(1)
  .then(inc)
  .then((_) => Promise.reject(new Error("Broken")))
  .then(inc) // /!\ sauté /!\
  .catch((err) => {
    console.error(err);
    return 42;
  }) // /!\ attention au retour /!\
  .then(inc)
  .finally(() => console.log("Done"));
console.info("End");
