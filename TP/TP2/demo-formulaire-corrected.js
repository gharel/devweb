const $bookmarksGo = document.getElementById("bookmarks-go");
const $bookmarksList = document.getElementById("bookmarks-list");
$bookmarksGo.addEventListener("click", downloadBookmarks);

async function downloadBookmarks() {
  const url = "data/all-bookmarks-status.json";
  try {
    const response = await fetch(url);

    if(response.status < 200 || response.status >= 300) {
      throw new Error(response.statusText);
    } else {
      const data = await response.json();
      console.log(data);
      data.forEach((el) => {
        $bookmarksList.innerHTML += `<li ${el.status != 200 ? 'class="offline"' : ""}><a href="${el.uri}">${el.title}</a></li>`;
      });
      const $links =document.querySelectorAll('li a');
      $links.forEach((el) => {
        el.addEventListener('click', (evt) => {
          if(!confirm('Etes vous sur ?')) {
            evt.preventDefault();
          }
        });
      });
    }
  } catch (error) {
    console.error(error);
  }
}



function formDataToJSON(formElt) {
  // convertit un formulaire en objet JSON
  // https://developer.mozilla.org/en-US/docs/Web/API/FormData
  // https://stackoverflow.com/questions/41431322/how-to-convert-formdata-html5-object-to-json
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries

  const formData = new FormData(formElt);
  return Object.fromEntries(formData.entries());
}

document.querySelector("form").addEventListener("submit", function (ev) {
  ev.preventDefault();
  alert(`Vous avez cliqué sur un ${ev.target.tagName}, le contenu est ${JSON.stringify(formDataToJSON(ev.target))}`);
});

