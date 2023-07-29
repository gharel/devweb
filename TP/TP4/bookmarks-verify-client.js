"use strict";
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-restricted-syntax */

const $output = document.getElementById("output");
const $fileSelector = document.getElementById("file-selector");
const $goButton = document.getElementById("go-button");
const $progressBar = document.getElementById("progress-bar");
const $progressNb = document.getElementById("progress-number");

function checkResponseStatus(response) {
  if (response.ok) return response;
  throw new Error(`${response.status} (${response.statusText})`);
}

function updateProgress(current, total, text) {
  $progressBar.value = current;
  $progressBar.max = total;
  $progressNb.textContent = `${current} / ${total}`;
  if (text == null) $output.innerHTML += `${text}<br/>`;
}


async function downloadAndCheck() {
  $output.innerHTML = "";
  try {
    const url = new URL(`data/${$fileSelector.value}`, window.location);
    console.debug(url);
    console.warn("Ici, faire progresser la barre", document.getElementById("progress-bar"))
    console.warn(`Ensuite, vérifier tous les liens de ${url}`)
  } catch (error) {
    $output.innerHTML = error;
    console.error(error);
  }
}

$goButton.addEventListener("click", downloadAndCheck);


