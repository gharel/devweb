"use strict";

function funct_decl(x, y) {
  // instructions
  return x ** y - 1;
}
const res_decl = funct_decl(2, 8);

const funct_expr = function (x, y) {
  // instructions
  return x ** y - 1;
};
const res_expr = funct_expr(2, 8);

const funct_arrow = (x, y) => x ** y - 1;
const res_arrow = funct_arrow(2, 8);

console.assert(res_decl === res_expr);
console.assert(res_expr === res_arrow);

let sum = (a, b) => {
  // accolade pour avoir plusieurs lignes
  const result = a + b;
  return result; // avec les accolades, l'instruction return est OBLIGATOIRE
};

console.log(sum(1, 2));
