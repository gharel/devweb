let bouton_ajouter = document.getElementById("bouton");
let url_image = document.getElementById("URL_image");
let album = document.getElementById("album");

function checkURL(url) {
  if (typeof url !== "string") {
    return false;
  }
  if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
    //fonction  permettant de verifier qu'il y ait une valeur(input) et que c'est bien un URL
    return true;
  }
}

bouton_ajouter.addEventListener("click", function (evt) {
  if (checkURL(url_image.value) == true) {
    //si l'utilisateur ne renseigne pas d'url, alors rien n'est ajouté a la page
    let mon_div = document.createElement("div");
    album.appendChild(mon_div);
    let nvl_image = document.createElement("img");
    mon_div.appendChild(nvl_image);
    nvl_image.src = url_image.value;
    nvl_image.style.height = "100px";

    let div_suivant = mon_div.nextSibling;
    let div_precedent = mon_div.previousSibling;

    let bouton_supprimer = document.createElement("button");
    bouton_supprimer.innerHTML = "Suppimer image";
    mon_div.appendChild(bouton_supprimer);
    bouton_supprimer.addEventListener("click", function (evt) {
      album.removeChild(mon_div);
      if (album.firstChild != null) {
        album.firstChild.childNodes[2].disabled = true;
      } //conditions permettant de désactiver les boutons en fonction de leurs positions suivant la suppression
      if (album.lastChild != null) {
        album.lastChild.childNodes[3].disabled = true;
      }
    });

    let bouton_monter = document.createElement("button");
    bouton_monter.innerHTML = "Monter l'image";
    bouton_monter.id = "monter";
    mon_div.appendChild(bouton_monter);
    if (mon_div == album.firstChild) {
      bouton_monter.disabled = true; //si l'image est tout en haut, on désactive le bouton permettant de remonter
    } else {
      bouton_monter.disabled = false;
    }
    bouton_monter.addEventListener("click", function (evt) {
      //fonction du bouton permettant de monter une image
      if (mon_div.previousSibling != null) {
        album.insertBefore(mon_div, mon_div.previousSibling);
        bouton_descendre.disabled = false;
        if (mon_div.nextSibling.nextSibling == null) {
          mon_div.nextSibling.childNodes[3].disabled = true;
        }
        if (mon_div.previousSibling == null) {
          bouton_monter.disabled = true;
        }
        let div_suivant = mon_div.nextSibling; //on echange de place les images, celle se trouvant donc en dessous
        div_suivant.childNodes[2].disabled = false; //peut forcément remonter, on active le bouton
      }
    });

    let bouton_descendre = document.createElement("button");
    bouton_descendre.innerHTML = "Descendre l'image";
    bouton_descendre.id = "descendre";
    mon_div.appendChild(bouton_descendre);
    if (mon_div.nextSibling == null) {
      bouton_descendre.disabled = true;
    }
    if (div_precedent != null) {
      div_precedent.childNodes[3].disabled = false;
    }

    bouton_descendre.addEventListener("click", function (evt) {
      //fonction du bouton permettant de descendre une image
      if (mon_div.nextSibling != null) {
        album.insertBefore(mon_div.nextSibling, mon_div);
        bouton_monter.disabled = false;
        if (mon_div.nextSibling == null) {
          bouton_descendre.disabled = true;
        }
        if (mon_div.previousSibling.previousSibling == null) {
          mon_div.previousSibling.childNodes[2].disabled = true;
        }
        let div_precedent = mon_div.previousSibling; //on echange de place les images, celle se trouvant donc au dessus
        div_precedent.childNodes[3].disabled = false; //peut forcément redescendre, on active le bouton
      }
    });
  }
});
