# JS1 : premiers pas en JavaScript

Un projet de départ vous est fourni, il comprend un fichier [`JS1.html`](content/JS1.html) qui charge [`JS1.js`](content/JS1.js). Le fichier JavaScript comprend tout l'outillage de base pour la gestion des événements HTML. La [source `.md` du sujet](JS1.md) est également fournie pour copier les exemples de code ainsi qu'un fichier [`JS1.css`](content/JS1.css) pour le dernier exercice.

Utilisez les outils de développement (F12) de firefox pour activer la console javascript et mettre au point vos programmes.

**Important** : copiez les deux fichiers sur votre compte en faisant clic-droit "Save Link As...", puis ouvrez `JS1.html` dans firefox et éditez `JS1.js` avec votre éditeur préféré pour répondre aux exercices suivants. **Attention** si vous ouvrez la page puis l'enregistrez différement, les fichiers ne seront pas au même endroit !

## Exercice 0 : Tutoriel

### Bases du langages

**Exercice** ouvrir les pages <https://javascript.info/> et <https://developer.mozilla.org/en-US/docs/Web/JavaScript> dans de nouvelles fenêtres. **Ce seront des références pour ce TP et tous les autres**.

**Exercice** exécuter les commandes suivantes dans la console pour expliquer ce que font les opérateurs [`typeof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) et [`instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)

```javascript
typeof "John";
typeof 3.14;
typeof NaN;
typeof false;
typeof null;
typeof undefined;
typeof un_truc_pas_declare;

typeof {};
typeof { name: "John", age: 34 };
({} instanceof Object);

typeof [1, 2, 3, 4];
[1, 2] instanceof Array;
[1, 2] instanceof Object;

typeof new Date();
typeof new Date("2020-02-02");
new Date() instanceof Date;
new Date() instanceof Object;

typeof function () {};
typeof (() => {});
(() => {}) instanceof Function;
(() => {}) instanceof Object;
```

**Exercice** Ouvrir le fichier [`JS1-equality.js`](content/JS1-equality.js), réfléchir pour prévoir la valeur de retour attendue puis vérifier dans la console.
Résumer la différence entre les comparaisons `==` et `===`

**Exercice** A partir de l'exemple suivant, expliquez le [passage de paramètres en JavaScript](https://en.wikipedia.org/wiki/Call_by_sharing#Call_by_sharing)

```javascript
let n = 42;
let b = false;
let s = "test";
let o = { name: "Romuald", age: 37 };
let a = [0, 1, 1, 2, 3, 5, 8];
let f = function () {
  return 42;
};

function test1(num, bool, str, obj, arr) {
  num++;
  bool = !bool;
  str += "foo";
  obj.name = "Olivier";
  arr.push(13);

  console.log(num, bool, str, obj, arr);
}

test1(n, b, s, o, a);
console.log(n, b, s, o, a);

function test2(obj, arr, fun) {
  obj = { foo: "bar" };
  arr = [42];
  fun = function () {
    return 0;
  };

  console.log(obj, arr, fun());
}

test2(o, a, f);
console.log(o, a, f);
```

**Exercice** Définir l'objet `my_object` qui contient un champ `x`, un champ `y` et une méthode `do()` qui va afficher les valeurs des champs `x` et `y` dans la console.

### Premières fonctions

**Exercice** écrire la fonction `iterate_array(arr)` qui va afficher les éléments du tableau passé en paramètre dans la console. Une fonction `test()` est prévue pour tester la fonction. Essayer les différentes variantes de boucles :

- une boucle [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- une boucle [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- une boucle [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) _à la C_
- une boucle [`while`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) _à la C_
- la méthode [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) des tableaux

**Exercice** définir la fonction `fibonacci(n)` qui pour n > 1 renvoie un tableau de longueur `n` contenant les `n` premiers termes de la [suite de Fibonacci](https://fr.wikipedia.org/wiki/Suite_de_Fibonacci), e.g., `fibonacci(8) = [0,1,1,2,3,5,8,13]`.

**Exercice** _question subsidiaire_ : que ce passe-t'il si on passe autre chose qu'un nombre à ces fonctions ou si le nombre est négatif ? Testez et corriger avec `Number.isInteger(n)`.

## Exercice 1 : 99 Bottles of Beer

**Exercice** écrire un programme qui génère les paroles de ["99 Bottles of Beer"](http://www.99-bottles-of-beer.net/lyrics.html) et renvoie une chaîne les contenant. Complétez pour cela la fonction `bottles(beers)` de `JS1.js`.

### Conseils pour l'exercice sur la comptine

- Utiliser les [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) plutôt que des chaînes concaténées avec l'opérateur `+`.

## Exercice 2 : fonction `range`

La fonction `range(stop, [start], [step])` inspirée de Python prend trois arguments en paramètre et renvoie le tableau des entiers compris entre `start` (inclus) et `stop` (exclu) avec un pas de `step` :

- si `start` n'est pas défini, sa valeur par défaut est 0;
- si `step` n'est pas défini, sa valeur par défaut est 1;
- si `stop` est inférieur ou égal à `start`, alors la liste vide est retournée.

Exemples :

- `range(10, 0)` renvoie la même chose que `range(10)`, c'est-à-dire `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`
- `range(10, 4, 2)` renvoie `[4, 6, 8]`
- `range(-2, 0)` renvoie `[]`

**Exercice** Complétez la fonction `range(stop, start, step)` de `JS1.js`.

**Exercice** Analyser la fonction `range(stop, start, step)` avec [ESLint](http://eslint.org/demo/).

## Exercice 3 : un petit peu de HTML et de CSS

**Exercice** modifier la page pour qu'elle intègre une en-tête, un pied de page, un menu à gauche avec la liste des exercices et un corps le contenu actuel de la page. Utiliser le fichier [`JS1.css`](content/JS1.css) pour positionner et colorier les éléments `header`, `nav`, `main` etc.

## Exercice 4 : calculatrice polonaise inverse

L'exercice consiste à écrire une calculatrice qui évalue des expressions arithmétiques en [notation polonaise inverse](https://en.wikipedia.org/wiki/Reverse_Polish_notation).
La principale fonction à réaliser est `evaluate(expr)` qui renvoie la valeur de l'expression `expr` passée en paramètre sous forme d'une chaîne de caractères.
L'expression est construite à partir d'entiers et des opérations `+`, `-`, `*` et `/`.

Par exemple l'expression `5 1 2 + 4 * + 3 -`, écrite `5 + ((1 + 2) * 4) - 3` dans la notation infixe usuelle, doit s'évaluer en `14`.
L'expression vide doit s'évaluer en `0`.

Pour simplifier l'exercice, on supposera que les entiers et les opérateurs sont toujours séparés par des espaces dans l'expression fournie en paramètre, ainsi, `1 3 +` est une expression valide mais `1 3+` ne l'est pas.
De même, on ne gérera pas les erreurs comme la division par zéro ou les chaînes invalides.

Un algorithme d'évaluation consiste à lire de gauche à droite les éléments qui composent l'expression :

- si c'est _un nombre_ qui est lu, alors on l'ajoute à une pile;
- si c'est _une opération_ qui est lue, alors on remplace les deux premiers nombres au sommet de la pile par le résultat de l'opération sur ces deux nombres.

**Exercice** Complétez la fonction `evaluate(expr)` de `JS1.js`.

### Conseils pour l'exercice sur la calculatrice

- la méthode [`split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) permet de transformer une chaîne en un tableau en décomposant les termes de la chaîne séparés par des espaces ;
- utiliser [`parseFloat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) pour transformer une chaîne en nombre ;
- utiliser [`isNaN`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/isNaN) pour tester si quelque chose est bien un nombre.

