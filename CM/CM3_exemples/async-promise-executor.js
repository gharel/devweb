console.log("A");
const promise = new Promise(function (resolve, _) {
  console.info(`resolve = ${resolve}`);
  resolve(42);
});

console.log("B");
promise.then(console.log);
console.log("C");
