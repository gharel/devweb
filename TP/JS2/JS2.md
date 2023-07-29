# JS2 : manipulation du DOM en JavaScript

On donne les fichiers de départs suivants :

- [tp_js2.html](tp_js2.html)
- [tp_js2.js](tp_js2.js), chargé par le précédent, à compléter

Quand on indique _dynamiquement_, on entend en JS en manipulant le DOM, pas en éditant les sources des HTML ou CSS.

## Exercice : toggling de classe CSS

- dynamiquement, ajouter un nouvel élément `<style>` à l'en-tête HTML qui définit une classe CSS qui met la couleur de fond en rouge.
- ajouter un _handler_ sur le bouton _Exercice 1_ pour que chaque clic alterner la couleur du bouton avec la classe précédente
  - utiliser pour cela [DOMTokenList.toggle()](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle)
- faire en sorte qu'au 10ème clic le bouton soit désactivé

## Exercice : affichage d'images

L'élément `<ul id="images-list">` contient des liens vers des images de la société <https://insight.nc/>.

- Modifier la page pour qu'à chaque clic sur un lien on affiche l'image correspondante dans l'élément `<div id="image-container">`.
  - Il faut bloquer [le comportement par défaut](https://javascript.info/default-browser-action) des liens pour éviter d'être redirigé.
- Définir des classes CSS pour contrôler l'affichage de l'image afin qu'elle soit de taille 80% de la largeur d'affichage et centrée dans le `<div>`.
  - Utiliser les [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) pour le positionnement
  - Cela peut se faire entièrement en statique via le HTML et la CSS.

## Exercice : Konami Code

Le [Konami Code](https://en.wikipedia.org/wiki/Konami_Code) est la séquence de touches _haut, haut, bas, bas, gauche, droite, gauche, droite, B, A_.

Ajouter un [_easter egg_](<https://en.wikipedia.org/wiki/Easter_egg_(media)>) à la page : si l'utilisateur saisi le _Konami Code_, un message `alert()` se déclenche.
Pour cela, il faudra :

- écouter l'événement `document.onkeydown`
- accéder à l'attribut [`key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) de l'événement passé en paramètre du _handler_
- maintenir un compteur avec le nombre de frappes valides de la séquence, et le remettre à zéro si la touche n'est pas la bonne

On donne ci-dessous la séquence JS.

```js
const konamiCode = [
  "arrowup",
  "arrowup",
  "arrowdown",
  "arrowdown",
  "arrowleft",
  "arrowright",
  "arrowleft",
  "arrowright",
  "b",
  "a",
];
```
