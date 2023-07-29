"use strict";

console.log("Début du script");

/* Exercice 0 : Tutoriel */
function iterate_array(arr) {
  /* TODO */
}

let my_object = {
  /* TODO */
};

function fibonacci(n) {
  /* TODO */
  return 0;
}

function test() {
  iterate_array([1, 2, 3, 6, 5, 4]);
  iterate_array([
    { a: 0, b: 1 },
    { a: 1, b: 42 },
  ]);
  console.log(fibonacci(10));
  if (typeof my_object.do !== "undefined") my_object.do();
}

/* Exercice 1 : 99 Bottles of Beer */
function bottles(beers) {
  console.log("[js] bottles (" + beers + ")");
  let res = "";

  /* TODO */

  return res;
}

/* Exercice 2 : fonction range */
function range(stop, start, step) {
  console.log("[js] range(" + stop + "," + start + "," + step + ")");
  const res = [];

  /* TODO */

  return res;
}

/* Exercice 3 : Calculatrice polonaise inverse */
let evaluate = function (expr) {
  console.log("[js] evaluate (" + expr + ")");
  let results = [];

  /* TODO */

  return results.pop() || 0;
};

// /!\ IMPORTANT : pour l'instant, ne regardez PAS ce qui est dessous ! /!\

document.addEventListener(
  "DOMContentLoaded",
  function () {
    /* Exercice 1 : 99 Bottles of Beer */
    let output1 = document.getElementById("output1");
    let input1 = document.getElementById("input1");

    document.getElementById("eval1").onclick = function () {
      output1.innerHTML = bottles(input1.value);
    };

    /* Exercice 2 : fonction range */
    let output2 = document.getElementById("output2");
    let input2stop = document.getElementById("input2stop");
    let input2start = document.getElementById("input2start");
    let input2step = document.getElementById("input2step");

    document.getElementById("reset2").onclick = function () {
      input2stop.value = 10;
      input2start.value = "";
      input2step.value = "";
      output2.innerHTML = "";
    };

    document.getElementById("eval2").onclick = function () {
      let stop = Number(input2stop.value);
      let start = input2start.value !== "" ? Number(input2start.value) : undefined;
      let step = input2step.value !== "" ? Number(input2step.value) : undefined;

      output2.innerHTML += "[" + String(range(stop, start, step)) + "]<br>";
    };

    /* Exercice 4 : Calculatrice polonaise inverse */
    let output3 = document.getElementById("output3");
    let input3 = document.getElementById("input3");

    document.getElementById("reset3").onclick = function () {
      output3.innerHTML = "";
    };

    document.getElementById("eval3").onclick = function () {
      let res = evaluate(input3.value);
      output3.innerHTML += String(res) + "<br>";
    };
  },
  false,
);

console.log("Fin du script");

