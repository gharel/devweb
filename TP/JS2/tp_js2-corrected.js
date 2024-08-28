"use strict";
console.info("app.js loading...");

const $style = document.createElement("style");
$style.innerHTML = ".highlight { background-color: red; }";
document.head.appendChild($style);

const $demoBtn = document.getElementById('demo-btn');
let count = 0;
$demoBtn.addEventListener("click", function(){
    count++;
    document.body.classList.toggle("highlight");
    if(count>9){
        this.disabled = true;
    }
});

const $imageLinks = document.querySelectorAll("#images-list a")
const $imageContainer = document.querySelector("#image-container");

$imageLinks.forEach(function(imageLink) {
    imageLink.addEventListener("click", function(event) {
        event.preventDefault();
        const image = document.createElement("img");
        image.src = this.href;
        $imageContainer.replaceChildren(image);
    });
});

const konamiCode = [
    "arrowup",
    "arrowup",
    "arrowdown",
    "arrowdown",
    "arrowleft",
    "arrowright",
    "arrowleft",
    "arrowright",
    "b",
    "a",
];

let cpt = 0;

document.addEventListener("keydown", function(e) {
    console.log(e.key);
    if(e.key.toLowerCase() == konamiCode[cpt]) {
        cpt++;
        if(cpt == konamiCode.length) {
            alert("Konami");
            cpt = 0;
        }
    } else {
        cpt = 0;
    }
})

console.info("...app.js loaded");
