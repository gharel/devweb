function work(x) {
  console.info(`work(${x})`);
  return x ** 2;
}

function async_work(n) {
  return setTimeout(() => work(n), 0);
}

const r1 = async_work(12);
console.log(r1);
// KO!
