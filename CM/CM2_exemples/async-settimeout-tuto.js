function work(x) {
  console.info(`work(${x})`);
  return x ** 2;
}

// KO: pas de paramètre passé à work
setTimeout(work, 0);

// KO: typeof(work(2)) == "number"
// setTimeout(work(2), 0);

// OK! avec function explicite
setTimeout(function () {
  return work(2);
}, 0);

// OK! avec fat arrow
setTimeout(() => work(2), 0);
