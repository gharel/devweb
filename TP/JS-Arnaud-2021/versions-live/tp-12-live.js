"use script";

let body = document.querySelector("body");
let input = document.querySelector("input");
let span = document.createElement("span");
let ajouter_bouton = document.getElementById("bouton");

const adder = function (url) {
  console.debug(`adder(${url})`);
  if (input.value != "") {
    let div = document.createElement("div");

    // let url = document.getElementById("urlimage").value,
    if (typeof url !== "string") url = document.getElementById("urlimage").value;
    img = document.createElement("img");
    subdiv = document.createElement("div");

    img.style.height = "100px";
    img.src = url;
    div.appendChild(img);
    span.appendChild(div);
    div.appendChild(subdiv);
    


    let bouton_haut = document.createElement("button");
    let texte_bouton_haut = document.createTextNode("🡅 Haut");
    bouton_haut.appendChild(texte_bouton_haut);
    subdiv.appendChild(bouton_haut);
    bouton_haut.addEventListener("click", function (evt) {
      if (span.previousSibling != body.querySelector("script")) {
        span.insertBefore(div, div.previousSibling);
        desactiver();
      }
    });

    let bouton_top = document.createElement("button");
    let texte_bouton_top = document.createTextNode("🡅 TOP");
    bouton_top.appendChild(texte_bouton_top);
    subdiv.appendChild(bouton_top);
    bouton_top.addEventListener("click", function (evt) {
      // if (span.previousSibling != body.querySelector("script")) {
      //   span.insertBefore(div, div.previousSibling);
      //   desactiver();
      // }
      span.prepend(div);
      desactiver();
      // }
    });

    let bouton_bas = document.createElement("button");
    let texte_bouton_bas = document.createTextNode("🡇 Bas");
    bouton_bas.appendChild(texte_bouton_bas);
    subdiv.appendChild(bouton_bas);
    bouton_bas.addEventListener("click", function (evt) {
      if (div.nextSibling) {
        span.insertBefore(div, div.nextSibling.nextSibling);
        desactiver();
      }
    });

    let bouton_bot = document.createElement("button");
    let texte_bouton_bot = document.createTextNode("🡇 BOT");
    bouton_bot.appendChild(texte_bouton_bot);
    subdiv.appendChild(bouton_bot);
    bouton_bot.addEventListener("click", function (evt) {
      // if (span.previousSibling != body.querySelector("script")) {
      //   span.insertBefore(div, div.previousSibling);
      //   desactiver();
      // }
      span.append(div);
      desactiver();
      // }
    });

    let bouton_supprimer = document.createElement("button");
    let texte_bouton_supprimer = document.createTextNode("☓ Supprimer");
    bouton_supprimer.appendChild(texte_bouton_supprimer);
    subdiv.appendChild(bouton_supprimer);
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
        premier_div.getElementsByTagName("button")[1].setAttribute("disabled", "true");
        dernier_div.getElementsByTagName("button")[2].setAttribute("disabled", "true");
        dernier_div.getElementsByTagName("button")[3].setAttribute("disabled", "true");
      }
    }
    desactiver();
  }
};

ajouter_bouton.onclick = adder;

const JSON_FILE = "https://romulusfr.github.io/unc-s4-devweb/TP/TP_Arnaud/urls.json";
fetch(JSON_FILE)
  .then((resp) => {
    if (resp.ok) return resp.json();
    throw new Error(`[${resp.status}] ${resp.url} ${resp.statusText}`);
  })
  .then((urls) => {
    for (const url of urls) {
      adder(url);
    }
  })
  .catch(console.error);

//14:30
//14:44