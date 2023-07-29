"use strict";

let evaluate = function (expr) {
  console.log("[js] evaluate (" + expr + ")");
  let results = [];
  let carac = expr.split(" ");
  for (const elem of carac) {
    if (!isNaN(elem)) results.push(parseFloat(elem));
    else {
      if (elem == "*" || elem == "x") {
        results.push(results.pop() * results.pop());
      }
      if (elem == "+") {
        results.push(results.pop() + results.pop());
      }
      if (elem == "-") {
        results.push(-results.pop() + results.pop());
      }
      if (elem == "/") {
        results.push(results.pop() ** -1 * results.pop());
      }
    }
  }

  return results.pop() || 0;
};

const test1 = evaluate("5 1 2 + 4 * + 3 -");
console.assert(test1 === 14, test1);
const test2 = evaluate("15");
console.assert(test2 === 15, test2);
const test3 = evaluate("");
console.assert(test3 === 0, test3);
