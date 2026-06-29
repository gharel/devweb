// Exercice : objet avec une méthode : l'objet magique `this`

o = {
  x: "Guillaume",
  y: 40,
  do: function () {
    console.log(this.x, this.y);
  },
};

o.do();

// Exercice : 4 variantes de parcours de tableau

function iterate_array_for_of(arr) {
  for (let val of arr) {
    console.log(val);
  }
}
console.log("iterate_array_for_of");
iterate_array_for_of([1, 1, 2, 3, 5, 8]);

function iterate_array_for(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
console.log("iterate_array_for");
iterate_array_for([1, 1, 2, 3, 5, 8]);

function iterate_array_while(arr) {
  let i = 0;
  while (i < arr.length) {
    console.log(arr[i]);
    i += 1;
  }
}
console.log("iterate_array_while");
iterate_array_while([1, 1, 2, 3, 5, 8]);

console.log("Array.forEach");
[1, 1, 2, 3, 5, 8].forEach(x => console.log(x))

// Exercice 1 : 99 Bottles of Beer
// ----------------------------

function bottles(beers) {
  console.log("[js] bottles (" + beers + ")");
  let res = "";

  const bottle = n => `${n || "No more"} bottle${n === 1 ? "" : "s"} of beer`;

  for (let n = beers; n > 0; n--) {
    res += `${bottle(n)} on the wall, ${bottle(n).toLowerCase()}.
Take one down and pass it around, ${bottle(n - 1).toLowerCase()} on the wall.

`;
  }

  return res.trim();
}

// Exercice 2 : fonction `range`
// ----------------------------

// solution étudiant #1
function fibonacci_pw(n) {
  if (Number.isInteger(n)) {
    let a = 0;
    let b = 1;
    let t = 0;
    let i = 0;
    while (i < n) {
      console.log(i + " : " + a);
      t = a;
      a = b + a;
      b = t;
      i++;
    }
  }
}
console.log(fibonacci_pw(8));

// solution étudiant #2
function fibonacci_fa(n) {
  if (!Number.isInteger(n)) {
    console.log("Error n must be a number");
    return null;
  }
  let array = [0, 1];
  for (let i = 2; i < n; i++) {
    array.push(array[array.length - 1] + array[array.length - 2]);
  }
  return array;
}

console.log(fibonacci_fa(8));

// Exercice 4 : calculatrice polonaise inverse
// ----------------------------

let evaluate = function (expr) {
  console.log("[js] evaluate (" + expr + ")");
  let results = [];

  const ops = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  expr.split(" ").forEach(item => {
    let nb = parseFloat(item);

    if (!isNaN(nb)) results.push(nb);
    else {
      let b = results.pop();
      let a = results.pop();
      results.push(ops[item](a, b));
    }
  });

  return results.pop() || 0;
};
