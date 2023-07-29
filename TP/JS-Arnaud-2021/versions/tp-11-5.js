"use strict";

//création des spans qui serviront à contenir les images ainsi que leurs boutons associés
let span1 = document.createElement("span");
span1.style.display = "block";
span1.id = "span1";
let span2 = document.createElement("span");
span2.style.display = "block";
span2.id = "span2";
let span3 = document.createElement("span");
span3.style.display = "block";
span3.id = "span3";

//création de variable contenu qui sera soit "vide" soit "full"
let ctn1 = "vide";
let ctn2 = "vide";
let ctn3 = "vide";

//création de variable de position des images/spans
let pos_img1 = 0;
let pos_img2 = 0;
let pos_img3 = 0;

//span 1 -> création de tous les boutons associés
let btn_suppr1 = document.createElement("button");
btn_suppr1.id = "btn_suppr1";
btn_suppr1.textContent = "X Supprimer";
let btn_haut1 = document.createElement("button");
btn_haut1.id = "btn_haut1";
btn_haut1.textContent = "↑ haut";
btn_haut1.disabled = true;
let btn_bas1 = document.createElement("button");
btn_bas1.id = "btn_bas1";
btn_bas1.textContent = "↓ bas";
btn_bas1.disabled = true;

//span 2 -> création de tous les boutons associés
let btn_suppr2 = document.createElement("button");
btn_suppr2.id = "btn_suppr2";
btn_suppr2.textContent = "X Supprimer";
let btn_haut2 = document.createElement("button");
btn_haut2.id = "btn_haut2";
btn_haut2.textContent = "↑ haut";
let btn_bas2 = document.createElement("button");
btn_bas2.id = "btn_bas2";
btn_bas2.textContent = "↓ bas";
btn_bas2.disabled = true;

//span 3 -> création de tous les boutons associés
let btn_suppr3 = document.createElement("button");
btn_suppr3.id = "btn_suppr3";
btn_suppr3.textContent = "X Supprimer";
let btn_haut3 = document.createElement("button");
btn_haut3.id = "btn_haut3";
btn_haut3.textContent = "↑ haut";
let btn_bas3 = document.createElement("button");
btn_bas3.id = "btn_bas3";
btn_bas3.textContent = "↓ bas";
btn_bas3.disabled = true;

//bouton ajout d'image
btn_ajout.addEventListener("click", function (evt) {
  if (ctn1 == "vide") {
    //image numéro 1, vérification si le span 1 est bien vide
    let saisie_url1 = document.getElementById("url").value, //ajout de l'image associée à l'URL à une variable img1
      img1 = document.createElement("img");
    img1.src = saisie_url1;
    img1.id = "img1";
    img1.style.height = 100 + "px"; //image dimensionnée sur 100 pixels de hauteur

    document.body.appendChild(span1); //ajout du span 1

    if (pos_img2 == 1) {
      //vérification des positions des autres spans (si ils sont sur la page) pour l'activation/désactivation des boutons haut/bas et mis à jour des variables pos_img
      if (pos_img3 == 2) {
        btn_bas3.disabled = false;
        btn_haut1.disabled = false;
        pos_img1 = 3;
      } else if (ctn3 == "vide") {
        btn_bas2.disabled = false;
        btn_haut1.disabled = false;
        pos_img1 = 2;
      }
    } else if (pos_img3 == 1) {
      if (pos_img2 == 2) {
        btn_bas2.disabled = false;
        btn_haut1.disabled = false;
        pos_img1 = 3;
      } else if (ctn2 == "vide") {
        btn_bas3.disabled = false;
        btn_haut1.disabled = false;
        pos_img1 = 2;
      }
    } else {
      pos_img1 = 1;
      btn_haut1.disabled = true;
    }

    span1.appendChild(img1); // ajout de l'image ainsi que des boutons dans le span
    span1.appendChild(btn_suppr1);
    span1.appendChild(btn_haut1);
    span1.appendChild(btn_bas1);

    ctn1 = "full"; //passage du contenu du span 1 à "full"
    btn_bas1.disabled = true; //par défaut, on met le bouton bas de la première image en désactivé car c'est la première image, il sera mis à jour par la suite si ajout d'un autre span (voir ci-dessous)
  } else if (ctn2 == "vide") {
    //image numéro 2 (de même que l'image 1)
    let saisie_url2 = document.getElementById("url").value,
      img2 = document.createElement("img");
    img2.src = saisie_url2;
    img2.id = "img2";
    img2.style.height = 100 + "px";

    document.body.appendChild(span2);

    if (pos_img1 == 1) {
      if (pos_img3 == 2) {
        btn_bas3.disabled = false;
        btn_haut2.disabled = false;
        pos_img2 = 3;
      } else if (ctn3 == "vide") {
        btn_bas2.disabled = false;
        btn_haut2.disabled = false;
        pos_img2 = 2;
      }
    } else if (pos_img3 == 1) {
      if (pos_img1 == 2) {
        btn_bas1.disabled = false;
        btn_haut2.disabled = false;
        pos_img2 = 3;
      } else if (ctn1 == "vide") {
        btn_bas3.disabled = false;
        btn_haut2.disabled = false;
        pos_img2 = 2;
      }
    } else {
      pos_img2 = 1;
      btn_haut2.disabled = true;
    }

    span2.appendChild(img2);
    span2.appendChild(btn_suppr2);
    span2.appendChild(btn_haut2);
    span2.appendChild(btn_bas2);

    ctn2 = "full";
    btn_bas1.disabled = false; //passage du bouton bas de la première image en activé car ajout d'une image deux
    btn_bas2.disabled = true; //bouton bas de la deuxième image désactivé car il passe dernier sur la page
  } else if (ctn3 == "vide") {
    //image numéro 3 (de même que pour les deux autres images
    let saisie_url3 = document.getElementById("url").value,
      img3 = document.createElement("img");
    img3.src = saisie_url3;
    img3.id = "img3";
    img3.style.height = 100 + "px";

    document.body.appendChild(span3);

    if (pos_img1 == 1) {
      if (pos_img2 == 2) {
        btn_bas2.disabled = false;
        btn_haut3.disabled = false;
        pos_img3 = 3;
      } else if (ctn2 == "vide") {
        btn_bas1.disabled = false;
        btn_haut3.disabled = false;
        pos_img3 = 2;
      }
    } else if (pos_img2 == 1) {
      if (pos_img1 == 2) {
        btn_bas1.disabled = false;
        btn_haut3.disabled = false;
        pos_img3 = 3;
      } else if (ctn1 == "vide") {
        btn_bas2.disabled = false;
        btn_haut3.disabled = false;
        pos_img3 = 2;
      }
    } else {
      pos_img3 = 1;
      btn_haut3.disabled = true;
    }

    span3.appendChild(img3);
    span3.appendChild(btn_suppr3);
    span3.appendChild(btn_haut3);
    span3.appendChild(btn_bas3);

    ctn3 = "full";
    btn_bas2.disabled = false;
    btn_bas3.disabled = true;
  }
});

//bouton supprimer de la première image
btn_suppr1.addEventListener("click", function (evt) {
  span1.removeChild(document.querySelector("#img1")); //suppression de tous les éléments liés à la première image : image + boutons + span
  span1.removeChild(document.querySelector("#btn_suppr1"));
  span1.removeChild(document.querySelector("#btn_haut1"));
  span1.removeChild(document.querySelector("#btn_bas1"));
  document.body.removeChild(document.querySelector("#span1"));

  if (pos_img1 == 1) {
    //mis à jour des positions et mis à jour des boutons haut/bas activés/désactivés en fonction des positions
    if (pos_img2 == 2) {
      pos_img2 = 1;
      btn_haut2.disabled = true;
      if (pos_img3 == 3) {
        pos_img3 = 2;
      }
    } else if (pos_img3 == 2) {
      pos_img3 = 1;
      btn_haut3.disabled = true;
      if (pos_img2 == 3) {
        pos_img2 = 2;
      }
    }
  } else if (pos_img1 == 2) {
    if (pos_img2 == 1) {
      btn_bas2.disabled = true;
      if (pos_img3 == 3) {
        pos_img3 = 2;
        btn_bas2.disabled = false;
      }
    } else if (pos_img3 == 1) {
      btn_bas3.disabled = true;
      if (pos_img2 == 3) {
        pos_img2 = 2;
        btn_bas3.disabled = false;
      }
    }
  } else if (pos_img1 == 3) {
    if (pos_img2 == 2) {
      btn_bas2.disabled = true;
    } else if (pos_img3 == 2) {
      btn_bas3.disabled = true;
    }
  }

  ctn1 = "vide"; //comme on supprime tous les éléments de l'image 1, on passe le contenu de l'image 1 à "vide"
  pos_img1 = 0; //la position passe à 0 car non existent
});

//bouton supprimer de la deuxième image
btn_suppr2.addEventListener("click", function (evt) {
  //de même
  span2.removeChild(document.querySelector("#img2"));
  span2.removeChild(document.querySelector("#btn_suppr2"));
  span2.removeChild(document.querySelector("#btn_haut2"));
  span2.removeChild(document.querySelector("#btn_bas2"));
  document.body.removeChild(document.querySelector("#span2"));

  if (pos_img2 == 1) {
    if (pos_img1 == 2) {
      pos_img1 = 1;
      btn_haut1.disabled = true;
      if (pos_img3 == 3) {
        pos_img3 = 2;
      }
    } else if (pos_img3 == 2) {
      pos_img3 = 1;
      btn_haut3.disabled = true;
      if (pos_img1 == 3) {
        pos_img1 = 2;
      }
    }
  } else if (pos_img2 == 2) {
    if (pos_img1 == 1) {
      btn_bas1.disabled = true;
      if (pos_img3 == 3) {
        pos_img3 = 2;
        btn_bas1.disabled = false;
      }
    } else if (pos_img3 == 1) {
      btn_bas3.disabled = true;
      if (pos_img1 == 3) {
        pos_img1 = 2;
        btn_bas3.disabled = false;
      }
    }
  } else if (pos_img2 == 3) {
    if (pos_img1 == 2) {
      btn_bas1.disabled = true;
    } else if (pos_img3 == 2) {
      btn_bas3.disabled = true;
    }
  }

  ctn2 = "vide";
  pos_img2 = 0;
});

//bouton supprimer de la troisième image
btn_suppr3.addEventListener("click", function (evt) {
  // de même
  span3.removeChild(document.querySelector("#img3"));
  span3.removeChild(document.querySelector("#btn_suppr3"));
  span3.removeChild(document.querySelector("#btn_haut3"));
  span3.removeChild(document.querySelector("#btn_bas3"));
  document.body.removeChild(document.querySelector("#span3"));

  if (pos_img3 == 1) {
    if (pos_img1 == 2) {
      pos_img1 = 1;
      btn_haut1.disabled = true;
      if (pos_img2 == 3) {
        pos_img2 = 2;
      }
    } else if (pos_img2 == 2) {
      pos_img2 = 1;
      btn_haut2.disabled = true;
      if (pos_img1 == 3) {
        pos_img1 = 2;
      }
    }
  } else if (pos_img3 == 2) {
    if (pos_img1 == 1) {
      btn_bas1.disabled = true;
      if (pos_img2 == 3) {
        pos_img2 = 2;
        btn_bas1.disabled = false;
      }
    } else if (pos_img2 == 1) {
      btn_bas2.disabled = true;
      if (pos_img1 == 3) {
        pos_img1 = 2;
        btn_bas2.disabled = false;
      }
    }
  } else if (pos_img3 == 3) {
    if (pos_img1 == 2) {
      btn_bas1.disabled = true;
    } else if (pos_img2 == 2) {
      btn_bas2.disabled = true;
    }
  }

  ctn3 = "vide";
  pos_img3 = 0;
});

//bouton du bas de la première image
btn_bas1.addEventListener("click", function (evt) {
  //bouton pour déplacer le span 1 vers le bas
  if (pos_img1 == 1) {
    //vérification des positions pour une mis à jour
    if (pos_img2 == 2) {
      //mis à jour des boutons haut/bas activés/désactivés en fonction des positions
      document.body.insertBefore(span2, span1); //ex : si image 1 est en position 1 et image 2 est en position 2, on insère le span 2 devant le span 1
      pos_img1 = 2; //la position de l'image 1 devient 2
      pos_img2 = 1; //celle de l'image 2 devient 1
      btn_haut2.disabled = true; //le bouton haut de l'image 2 se désactive car il est tout en haut
      btn_haut1.disabled = false; //le bouton haut de l'image 1 se réactive car il passe en deuxième
      if (ctn3 == "vide") {
        //si il n'y a pas de span 3
        btn_bas1.disabled = true; //on désactive le bouton bas de l'image 1 car il est en dernier
        btn_bas2.disabled = false; //on réactive (car désactivé comme il était dernier) le bouton bas de l'image 2 car il y a l'image 1 derrière lui
      }
    } else if (pos_img3 == 2) {
      //de même pour la suite, on passe en revu tous les cas possibles
      document.body.insertBefore(span3, span1);
      pos_img1 = 2;
      pos_img3 = 1;
      btn_haut3.disabled = true;
      btn_haut1.disabled = false;
      if (ctn2 == "vide") {
        btn_bas1.disabled = true;
        btn_bas3.disabled = false;
      }
    }
  } else if (pos_img1 == 2) {
    if (pos_img2 == 3) {
      document.body.insertBefore(span2, span1);
      pos_img1 = 3;
      pos_img2 = 2;
      btn_bas1.disabled = true;
      btn_bas2.disabled = false;
    } else if (pos_img3 == 3) {
      document.body.insertBefore(span3, span1);
      pos_img1 = 3;
      pos_img3 = 2;
      btn_bas1.disabled = true;
      btn_bas3.disabled = false;
    }
  }
});

//bouton du bas de la deuxième image
btn_bas2.addEventListener("click", function (evt) {
  //bouton pour déplacer le span 2 vers le bas
  if (pos_img2 == 1) {
    if (pos_img1 == 2) {
      document.body.insertBefore(span1, span2);
      pos_img1 = 1;
      pos_img2 = 2;
      btn_haut1.disabled = true;
      btn_haut2.disabled = false;
      if (ctn3 == "vide") {
        btn_bas1.disabled = false;
        btn_bas2.disabled = true;
      }
    } else if (pos_img3 == 2) {
      document.body.insertBefore(span3, span2);
      pos_img2 = 2;
      pos_img3 = 1;
      btn_haut3.disabled = true;
      btn_haut2.disabled = false;
      if (ctn1 == "vide") {
        btn_bas2.disabled = true;
        btn_bas3.disabled = false;
      }
    }
  } else if (pos_img2 == 2) {
    if (pos_img1 == 3) {
      document.body.insertBefore(span1, span2);
      pos_img1 = 2;
      pos_img2 = 3;
      btn_bas1.disabled = false;
      btn_bas2.disabled = true;
    } else if (pos_img3 == 3) {
      document.body.insertBefore(span3, span2);
      pos_img2 = 3;
      pos_img3 = 2;
      btn_bas2.disabled = true;
      btn_bas3.disabled = false;
    }
  }
});

//bouton du bas de la troisème image
btn_bas3.addEventListener("click", function (evt) {
  //bouton pour déplacer le span 3 vers le bas
  if (pos_img3 == 1) {
    if (pos_img2 == 2) {
      document.body.insertBefore(span2, span3);
      pos_img3 = 2;
      pos_img2 = 1;
      btn_haut2.disabled = true;
      btn_haut3.disabled = false;
      if (ctn1 == "vide") {
        btn_bas3.disabled = true;
        btn_bas2.disabled = false;
      }
    } else if (pos_img1 == 2) {
      document.body.insertBefore(span1, span3);
      pos_img1 = 1;
      pos_img3 = 2;
      btn_haut1.disabled = true;
      btn_haut3.disabled = false;
      if (ctn2 == "vide") {
        btn_bas3.disabled = true;
        btn_bas1.disabled = false;
      }
    }
  } else if (pos_img3 == 2) {
    if (pos_img2 == 3) {
      document.body.insertBefore(span2, span3);
      pos_img3 = 3;
      pos_img2 = 2;
      btn_bas3.disabled = true;
      btn_bas2.disabled = false;
    } else if (pos_img1 == 3) {
      document.body.insertBefore(span1, span3);
      pos_img1 = 2;
      pos_img3 = 3;
      btn_bas3.disabled = true;
      btn_bas1.disabled = false;
    }
  }
});

//bouton du haut de la première image
btn_haut1.addEventListener("click", function (evt) {
  //bouton pour déplacer le span 1 vers le haut
  if (pos_img1 == 2) {
    if (pos_img2 == 1) {
      document.body.insertBefore(span1, span2);
      pos_img1 = 1;
      pos_img2 = 2;
      btn_haut2.disabled = false;
      btn_haut1.disabled = true;
      if (ctn3 == "vide") {
        btn_bas1.disabled = false;
        btn_bas2.disabled = true;
      }
    } else if (pos_img3 == 1) {
      document.body.insertBefore(span1, span3);
      pos_img1 = 1;
      pos_img3 = 2;
      btn_haut1.disabled = true;
      btn_haut3.disabled = false;
      if (ctn2 == "vide") {
        btn_bas3.disabled = true;
        btn_bas1.disabled = false;
      }
    }
  } else if (pos_img1 == 3) {
    if (pos_img2 == 2) {
      document.body.insertBefore(span1, span2);
      pos_img1 = 2;
      pos_img2 = 3;
      btn_bas2.disabled = true;
      btn_bas1.disabled = false;
    } else if (pos_img3 == 2) {
      document.body.insertBefore(span1, span3);
      pos_img1 = 2;
      pos_img3 = 3;
      btn_bas3.disabled = true;
      btn_bas1.disabled = false;
    }
  }
});

//bouton du haut de la deuxième image
btn_haut2.addEventListener("click", function (evt) {
  //bouton pour déplacer le span 2 vers le haut
  if (pos_img2 == 2) {
    if (pos_img1 == 1) {
      document.body.insertBefore(span2, span1);
      pos_img1 = 2;
      pos_img2 = 1;
      btn_haut1.disabled = false;
      btn_haut2.disabled = true;
      if (ctn3 == "vide") {
        btn_bas2.disabled = false;
        btn_bas1.disabled = true;
      }
    } else if (pos_img3 == 1) {
      document.body.insertBefore(span2, span3);
      pos_img2 = 1;
      pos_img3 = 2;
      btn_haut2.disabled = true;
      btn_haut3.disabled = false;
      if (ctn1 == "vide") {
        btn_bas3.disabled = true;
        btn_bas2.disabled = false;
      }
    }
  } else if (pos_img2 == 3) {
    if (pos_img1 == 2) {
      document.body.insertBefore(span2, span1);
      pos_img1 = 3;
      pos_img2 = 2;
      btn_bas1.disabled = true;
      btn_bas2.disabled = false;
    } else if (pos_img3 == 2) {
      document.body.insertBefore(span2, span3);
      pos_img2 = 2;
      pos_img3 = 3;
      btn_bas3.disabled = true;
      btn_bas2.disabled = false;
    }
  }
});

//bouton du haut de la deuxième image
btn_haut3.addEventListener("click", function (evt) {
  //bouton pour déplacer le span 3 vers le haut
  if (pos_img3 == 2) {
    if (pos_img1 == 1) {
      document.body.insertBefore(span3, span1);
      pos_img1 = 2;
      pos_img3 = 1;
      btn_haut1.disabled = false;
      btn_haut3.disabled = true;
      if (ctn2 == "vide") {
        btn_bas3.disabled = false;
        btn_bas1.disabled = true;
      }
    } else if (pos_img2 == 1) {
      document.body.insertBefore(span3, span2);
      pos_img2 = 2;
      pos_img3 = 1;
      btn_haut3.disabled = true;
      btn_haut2.disabled = false;
      if (ctn1 == "vide") {
        btn_bas2.disabled = true;
        btn_bas3.disabled = false;
      }
    }
  } else if (pos_img3 == 3) {
    if (pos_img1 == 2) {
      document.body.insertBefore(span3, span1);
      pos_img1 = 3;
      pos_img3 = 2;
      btn_bas1.disabled = true;
      btn_bas3.disabled = false;
    } else if (pos_img2 == 2) {
      document.body.insertBefore(span3, span2);
      pos_img3 = 2;
      pos_img2 = 3;
      btn_bas2.disabled = true;
      btn_bas3.disabled = false;
    }
  }
});
