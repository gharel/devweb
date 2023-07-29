const operands = new Map([
  ["+", (x, y) => y + x],
  ["*", (x, y) => y * x],
  ["/", (x, y) => y / x],
  ["-", (x, y) => y - x],
]);

let evaluate = function (expr) {
  let results = [];
  expr = expr.split(" ");
  for (const elem of expr) {
    console.debug(elem, results);
    if (operands.has(elem)) {
      results.push(operands.get(elem)(results.pop(), results.pop()));
    } else results.push(Number(elem));
  }
  return results.pop() || 0;
};

const test1 = evaluate("5 1 2 + 4 * + 3 -");
console.assert(test1 === 14, test1);
const test2 = evaluate("15");
console.assert(test2 === 15, test2);
const test3 = evaluate("");
console.assert(test3 === 0, test3);
