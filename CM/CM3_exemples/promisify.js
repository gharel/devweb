function promisify(funct) {
  // wrapper (*)
  return function (...args) {
    return new Promise((resolve, reject) => {
      // custom callback/executor (**)
      function callback(err, result) {
        if (err) reject(err);
        else resolve(result);
      }
      args.push(callback); // append custom callback
      funct.call(this, ...args); // call the original function
    });
  };
}

// avec API callback
const wait = (delay, value, cb) => setTimeout(() => cb(null, value), delay);
wait(1000, 42, (err, res) => (err ? console.error(err) : console.log(res)));

// avec Promisification
const waitPromise = promisify(wait);
waitPromise(1000, 42).then(console.log).catch(console.error);

// idem, mais avec lib Node
const util = require("node:util");
const waitPromiseNode = util.promisify(wait);
waitPromiseNode(1000, 42).then(console.log).catch(console.error);
