"use strict";

// reprise de l'exemple du TP JS2
const $anchors = document.querySelectorAll("ul#images-list > li > a");
const $display = document.getElementById("image-container");

function addImage(evt) {
  evt.preventDefault();
  // le div pour image + boutton
  const $div = document.createElement("div");

  // l'image
  const $img = document.createElement("img");
  $img.src = evt.target.href; // ici, on pourrait utiliser this ou autre
  $div.appendChild($img);

  // le boutton
  const $btn = document.createElement("button");
  $btn.innerHTML = "X";
  $div.appendChild($btn);

  // compléter ci-dessous, en notant : où la fonction est créée et où sont déclarées les variables qu'elle utilise
  // utilisez les déclaration de fonctions, les NFE et les arrows
  // TODO v1 : ici ajouter un handler pour que le boutton supprime $div, sans utiliser ni `this` ni `evt`
  // TODO v2 : idem, mais définir le handler hors de addImage, en utilisant this ou Event.target
  // TODO v3 : idem précédent, mais cette fois-ci sans utiliser ni `this` ni `Event`
  $display.appendChild($div);
}

// pour chaque lien
for (const $a of $anchors) {
  $a.addEventListener("click", addImage);
}
