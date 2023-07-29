"use script";

let body = document.querySelector("body");
let input = document.querySelector("input");
let span = document.createElement("span");
let ajouter_bouton = document.getElementById("bouton");
ajouter_bouton.onclick = function () {
  if (input.value != "") {
    let div = document.createElement("div");

    let url = document.getElementById("urlimage").value,
      img = document.createElement("img");
    img.style.height = "100px";
    img.src = url;
    div.appendChild(img);
    span.appendChild(div);

    let bouton_haut = document.createElement("button");
    let texte_bouton_haut = document.createTextNode("🡅 Haut");
    bouton_haut.appendChild(texte_bouton_haut);
    div.appendChild(bouton_haut);
    bouton_haut.addEventListener("click", function (evt) {
      if (span.previousSibling != body.querySelector("script")) {
        span.insertBefore(div, div.previousSibling);
        desactiver();
      }
    });

    let bouton_bas = document.createElement("button");
    let texte_bouton_bas = document.createTextNode("🡇 Bas");
    bouton_bas.appendChild(texte_bouton_bas);
    div.appendChild(bouton_bas);
    bouton_bas.addEventListener("click", function (evt) {
      if (div.nextSibling) {
        span.insertBefore(div, div.nextSibling.nextSibling);
        desactiver();
      }
    });

    let bouton_supprimer = document.createElement("button");
    let texte_bouton_supprimer = document.createTextNode("☓ Supprimer");
    bouton_supprimer.appendChild(texte_bouton_supprimer);
    div.appendChild(bouton_supprimer);
    bouton_supprimer.addEventListener("click", function (evt) {
      span.removeChild(div);
      desactiver();
    });

    document.body.appendChild(span);

    function desactiver() {
      if (span.firstChild) {
        let premier_div = span.firstChild;
        let dernier_div = span.lastChild;
        for (let bouton of span.getElementsByTagName("button")) {
          bouton.disabled = false;
        }

        premier_div.getElementsByTagName("button")[0].setAttribute("disabled", "true");
        dernier_div.getElementsByTagName("button")[1].setAttribute("disabled", "true");
      }
    }
    desactiver();
  }
};
