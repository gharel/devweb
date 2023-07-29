// exemple d'utilisation des rest/spread

// ici pour TRANSFORMER UNE LISTE D'ARGS (de demo) EN VRAI TABLEAU
function demo(x, ...args) {
  // ici args est **un vrai tableau Array de JS **
  console.log(`x = ${x} et ${args.length} paramètres : ${args}`);
}

demo();
demo(1);
demo(1, "Toto");
demo(1, "Toto", 42);

// ici pour TRANSFORMER UN VRAI TABLEAU EN UNE LISTE D'ARGS (de Math.max)
const arr = [1, 42, 3, 2, 0];

// un alias de la fonction de la lib std.
const max = Math.max;

console.log(max(arr));
console.log(max(1, 42, 3, 2, 0));
console.log(max(...arr));

