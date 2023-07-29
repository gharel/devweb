function work(x, cb) {
  console.info(`work(${x})`);
  cb(x ** 2);
  console.info(`work done`);
}

function async_work(n, cb) {
  return setTimeout(() => work(n, cb), 0);
}

const r1 = async_work(3, (r) => console.log(r));
// ou plus simplement, en remarquant que (x) => f(x)
// est la même chose que la fonction f quand x n'a pas d'effet de bord
const r2 = async_work(3, console.log);
