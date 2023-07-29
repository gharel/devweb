"use strict";

// const etudiants = [
//   { name: "Floris", age: 23, registered: true },
//   { name: "Romain", age: 21, registered: true },
//   { name: "Norman", age: 21, registered: false },
// ];

function generate(n) {
  let res = [];
  for (let i = 0; i < n; ++i) {
    res.push({
      name: Math.random().toString(36).slice(2, 7),
      age: Math.floor(Math.random() * 100),
      registered: Math.random() < 0.5,
    });
  }
  return res;
}

const etudiants = generate(100_000);

// on veut calculer :
// - les noms des étudiants inscrits
// - la somme des ages des étudiants inscrits

// approche impérative "classique L1"
function nomsInscrits(arr) {
  const res = [];
  for (const elt of arr) {
    if (elt.registered) {
      res.push(elt.name);
    }
  }
  return res;
}

console.time("noms classiques");
nomsInscrits(etudiants);
console.timeEnd("noms classiques");

// approche avec API fonctionnelle Array JS
console.time("noms fonctionnels");
etudiants.filter((etu) => etu.registered).map((etu) => etu.name);
console.timeEnd("noms fonctionnels");

// idem avec la somme des ages

function sommeAgesInscrits(arr) {
  let sum = 0;
  for (const elt of arr) {
    if (elt.registered) {
      sum += elt.age;
    }
  }
  return sum;
}

console.time("ages classiques");
sommeAgesInscrits(etudiants);
console.timeEnd("ages classiques");

console.time("ages fonctionnels");
etudiants
  .filter((etu) => etu.registered)
  .map((etu) => etu.age)
  .reduce((etu, acc) => etu + acc, 0);
console.timeEnd("ages fonctionnels");
