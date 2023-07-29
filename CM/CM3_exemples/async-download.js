"use strict";

const $input = document.getElementById("input");
const $fetchPromiseButton = document.getElementById("fetch-promise-btn");
const $fetchAwaitButton = document.getElementById("fetch-await-btn");
const $resetButton = document.getElementById("reset-btn");
const $output = document.getElementById("content");

// ici la fonction qui charge un contenu et l'affiche
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
function fetchPromise() {
  const url = new URL(`data/${$input.value.trim()}`, window.location);
  // TODO : ici le téléchargement du fichier et l'ajout de son contenu dans $output
  // TODO : traiter les erreurs réseaux, can le code HTTP est différent de 200-299
  fetch(url).then((resp) => console.info(resp));
}

async function fetchAwait() {}

// TODO : ensuite une version async/await de loadJSON()
/*********** EVENT HANDLERS ***********************/

$fetchPromiseButton.addEventListener("click", fetchPromise);
$fetchAwaitButton.addEventListener("click", fetchAwait);
$resetButton.addEventListener("click", () => ($output.innerHTML = ""));

