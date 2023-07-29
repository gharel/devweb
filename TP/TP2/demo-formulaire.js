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

