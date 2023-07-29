/* eslint-disable no-console */
// 8h10

const $imageContainer = document.querySelector("#image-container");
// fonction responsable de désactiver le ▲ du premier elt et le ▼ du dernier,
// tout le reste étant actif
function toggleFirstLastButtons() {
  // pour chaque image du conteneur
  for (const $div of $imageContainer.querySelectorAll("div")) {
    // on extrait les bouttons ▲ et ▼
    const [$upButton, $downButton] = $div.querySelectorAll("button");
    // si premier, on desactive ▲
    $upButton.disabled = $div === $imageContainer.firstElementChild;
    // si dernier on desactive ▼
    $downButton.disabled = $div === $imageContainer.lastElementChild;
  }
}

// supprime l'élément
const delButtonHandler = ($elt) => {
  $elt.remove();
};
// s'il y a un précédent on passe devant
const upButtonHandler = ($elt) => {
  if ($elt.previousSibling) $elt.previousSibling.before($elt);
};
// s'il y a un suivant on passe après
const downButtonHandler = ($elt) => {
  if ($elt.nextSibling) $elt.nextSibling.after($elt);
};

// la liste des boutons à construire
const buttonDefinitions = new Map([
  ["▲", upButtonHandler],
  ["▼", downButtonHandler],
  ["✖", delButtonHandler],
]);

// ajout d'une image et de ses trois bouttons ▲, ▼, ✖
function addImage(href) {
  // vérification de l'URL
  let url;
  try {
    url = new URL(href);
  } catch (error) {
    console.error(error);
    return;
  }
  // on crée un div avec l'image
  const $imgDiv = document.createElement("div");
  const $img = document.createElement("img");
  $img.setAttribute("src", url);
  $imgDiv.append($img);

  // on prépare un handler pour chaque bouton : l'action attendue
  // suivie de la màj de la liste de toute les images
  for (const [symbol, handler] of buttonDefinitions) {
    const $button = document.createElement("button");
    $button.innerHTML = symbol;
    $imgDiv.append($button);
    // avec le hander correspondant
    $button.addEventListener("click", () => handler($imgDiv));
  }
  // on ajoute le div créé au div conteneur
  $imageContainer.append($imgDiv);
}
const $addButton = document.querySelector("#add-button");
const $imageHref = document.querySelector("#image-href");
$addButton.addEventListener("click", () => {
  addImage($imageHref.value);
});

// observateur : si changement (des fils de $imageContainer), on repasse sur les boutons
const observer = new MutationObserver((mutationRecords) => {
  console.debug(mutationRecords);
  toggleFirstLastButtons();
});

// on observe les changements sur les fils du conteneur
observer.observe($imageContainer, { childList: true, subtree: false });

// non demandé mais facilite les tests : pour chaque url, on màj l'input lors d'un clic
const $examples = document.querySelectorAll("#examples li");
for (const $example of $examples)
  $example.addEventListener("click", () => {
    $imageHref.value = $example.textContent.trim();
  });


  // 08h38