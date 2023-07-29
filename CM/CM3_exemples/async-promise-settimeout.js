function timedValue(value, delay) {
  function executor(resolve, reject) {
    setTimeout(() => resolve(value), delay);
  }
  return new Promise(executor);
}

const p = timedValue("Success!", 1000);

// on enchaine ici 3 callbacks sans imbrication
p.then((str) => "OK! " + str)
  .then((str) => str + " Done!")
  .then((str) => console.log(str));

// en parallèle
timedValue("B", 1000).then(console.log);

// on peut enchainer les timers
timedValue("A", 1000)
  .then((r) => timedValue(r + " Done!", 1000))
  .then(console.log);

// on pourrait introduire des variables intermédiaires comme suit
// pour voir les promesses rendues par chaque `.then`
// p1 = p.then((str) => "OK! " + str)
// p2 = p1.then((str) => str + " Done!")
// p3 = p2.then((str) => console.log(str));

