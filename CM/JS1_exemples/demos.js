"use strict";

// Types de données
// ----------------

typeof 1;
typeof 1.3;
typeof true;
typeof "toto";
typeof "titi";
typeof null;
typeof undefined;
typeof Infinity;

// Conversions
// ----------------

"5" * 3;
"5" + 3;
"5" + 3 * "2";
5 + 3 * "2";
true + true;

// Comparaisons
// ----------------

0 == false;
"0" == false;
"1" == true;
"2" == true;
"  123  \n" == 123;

"0" == false;
false == "";
"0" == "";

let a = { x: 5 };
let b = { x: 5 };
let c = a;

a == b;
a == c;

// Expressions
// ----------------
"toto" + "titi";
true || false;
2.5 + 3 * 4;
"toto" > "titi";
2 < 3.5;

// Variables et constantes
// ----------------

// Portée des constantes

for (var i = 0; i < 3; ++i) {
  {
    const test = i;
    console.log(test);
  }
  console.log(i);
  // console.log(test);
}
console.log(i);

// Structures de contrôle et itératives
// ----------------

// If

let cond = false;
if (cond) {
  console.log(1);
  console.log(2);
}

// Switch

let x = "toto";
switch (x) {
  case "titi":
    console.log(1);
    break;
  case "tutu":
    console.log(2);
    break;
  case "toto":
    console.log(3);
    break;
  default:
    console.log(4);
}

// For et while

let text = "";
for (let i = 0; i < 10; i++) {
  text += "The number is " + i + "\n";
}
console.log(text);

text = "";
let i = 0;
while (i < 10) {
  text += "The number is " + i + "\n";
  i++;
}
console.log(text);

// for ... of et for ... in

// Définitions de fonctions
// ----------------

function ajoute3(x) {
  // déclaration de fonction
  return x + 3;
}

/* en Python
def ajoute3(x)
  return x + 3
*/

const ajoute4 = function (x) {
  // expression fonctionnelle
  return x + 3;
};

const ajoute5 = (x) => x + 3;
// notation lambda

/* 
ajoute5 = lambda x : x + 3
*/ 

// Objets
// ----------------

// Création

let o1 = { x: 5, y: 3 };
o1;

let o2 = { x: 5, y: 3 };
o2;

// Accès aux champs
// Notation pointée
o1.x;
o1.x = 12;
o1.x;

o1.z = 3;
o1;

// Notation crochets

o1["x"];

let c1 = "to" + "ti";
o1[c] = 18;
o1;
c1;

// Méthodes

let o3 = {
  salut: function () {
    console.log("Bonjour");
  },
};

let o4 = {
  salut: function () {
    console.log("Salut");
  },
};

o3.salut;

o3.salut();

o4.salut();

// L'objet _this_

let p = {
  x: 5,
  y: 3,
  deplace: function (dx, dy) {
    this.x = this.x + dx;
    this.y = this.y + dy;
  },
};
p.x;

p.deplace(1, 2);

p.x;

// Structure : les tableaux
// ----------------

// let t = Array(1, 2, 3);
// t;

let t = [1, 2, 3];
t;

t[0];

t.length;

t.push(12);

t[7] = 18;
t;

// Itérations
// ----------------

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in#why_use_for...in
// "It may be most practically used for debugging purposes"

// /!\ attention
for (let v of t) {
  console.log(v);
}

// /!\ attention
for (let v in t) {
  console.log(v);
}

for (const f of [ajoute3, ajoute4, ajoute5]) {
  console.log(f);
  console.log(f(5));
}

// Références sur des objets
// ----------------

let x1 = 3;
let y1 = x1;
x1 = 5;
y1;

let o5 = { a: 3 };
let o6 = o5;
o5.a = 5;
o6;

