const $output = document.querySelector("#output");
const $fileSelector = document.querySelector("#file-selector");
const $goButton = document.querySelector("#go-button");

const options = {
  method: "GET",
  headers: {
    "User-Agent": "devweb-gh-crawler",
    "Authorization": "token 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",
  },
};

// see https://stackoverflow.com/questions/40263803/native-javascript-or-es6-way-to-encode-and-decode-html-entities
function escapeHTML(string) {
  const htmlEntities = new Map([
    ["&", "&amp;"],
    ["<", "&lt;"],
    [">", "&gt;"],
    ["'", "&#39;"],
    ['"', "&quot;"],
  ]);
  return string?.replace(/["&'<>]/g, (tag) => htmlEntities.get(tag));
}

function updateProgress(total) {
  const $progressBar = document.querySelector("#progress-bar");
  const $progressNb = document.querySelector("#progress-number");
  if (total) {
    $progressBar.max = total;
    $progressBar.value = 0;
  } else {
    $progressBar.value++;
  }
  $progressNb.textContent = `${$progressBar.value} / ${$progressBar.max}`;
}

// BEGIN CUT
async function checkLinkAlive(link) {
  const uri = new URL(link.url);
  console.debug(`checkLinkAlive(${uri})`);
  try {
    const response = await fetch(`https://api.github.com/repos${uri.pathname}`, options);
    if (!response.ok) throw new Error(`${response.status} (${response.statusText})`);
    const body = await response.json();
    // extension de l'objet lien d'origine avec les infos de api.github.com newstars et created_at
    return { ...link, ok: true, newstars: body.stargazers_count, created_at: body.created_at };
  } catch {
    // cas d'erreur réseaux où si !resp.ok
    return { ...link, ok: false, newstars: Number.NaN, created_at: Number.NaN };
  } finally {
    // dans tous les cas, on peut incrémenter la progress bar
    updateProgress();
  }
}

function displayLink(link) {
  // on fait attention aux balises HTML avec escapeHTML
  const content = link.ok
    ? `[OK] (+${link.newstars - link.stars}⭐): <a href="${link.url}">${escapeHTML(link.description)}</a><br>`
    : `[KO] : <span style="text-decoration:line-through">${link.url}</span><br>`;

  $output.innerHTML += content;
}

// END CUT

async function downloadAndCheck() {
  $output.innerHTML = "";

  const url = new URL(`data/${$fileSelector.value}`, window.location);
  // BEGIN CUT
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} (${response.statusText})`);
  const links = await response.json();

  // reset UI
  updateProgress(links.length);

  // avec Promise.all, les liens sont affichés **dans l'ordre** et on rempli une fois qu'on a tout
  const linksUpdated = await Promise.all(links.map((link) => checkLinkAlive(link)));
  for (const link of linksUpdated) displayLink(link);

  // si on accepte dans le désordre
  // for (const link of links) {
  //   checkLinkAlive(link).then(displayLink).catch(console.error);
  // }

  // END CUT
  /* BEGIN UNCOMMENT
    console.warn("Ici, faire progresser la barre", document.getElementById("progress-bar"))
    console.warn(`Ensuite, vérifier tous les liens de ${url}`)
    END UNCOMMENT */
}

$goButton.addEventListener("click", downloadAndCheck);

// BEGIN CUT
// function doProgressTimer(nbTotal = 10) {
//   let nbCurrent = 0;
//   updateProgress(0, nbTotal, 0);
//   const timerID = setInterval(() => {
//     if (nbCurrent < nbTotal) {
//       nbCurrent += 1;
//       console.debug(`${timerID}: ${nbCurrent}`);
//       updateProgress(nbCurrent, nbTotal, nbCurrent);
//     } else {
//       clearInterval(timerID);
//     }
//   }, 1000);
// }

// function doProgressTimer(nbTotal = 10) {
//   updateProgress(0, nbTotal, "0");
//   const timerID = setInterval(() => {
//     $progressBar.value++; // /!\ attention au cast implicite et au fait que value est limité à $progressBar.max !
//     if ($progressBar.value < nbTotal) {
//       updateProgress($progressBar.value, nbTotal, $progressBar.value);
//     } else {
//       updateProgress(nbTotal, nbTotal, `${nbTotal}, done !`);
//       clearInterval(timerID);
//     }
//   }, 200);
// }

// export { doProgressTimer };
// END CUT

