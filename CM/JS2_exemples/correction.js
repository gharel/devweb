"use strict";

console.log("script correction");

console.log(document.querySelectorAll("li").length);

const $outputCode = document.getElementById("output-code");
const $testBtn = document.createElement("button");

let nbClicks = 0;

$testBtn.textContent = "Test!";
$testBtn.onclick = (_evt) => {
  $outputCode.innerText = "";
  nbClicks = 0;
};

document.getElementById("demo-btn").insertAdjacentElement("afterend", $testBtn);
// document.body.appendChild($testBtn);

const $ul = document.querySelector("ul");
const $link = document.createElement("li");
const $a = document.createElement("a");
$a.href = "https://unc.nc";
$a.textContent = "UNC";
$link.appendChild($a);
$ul.appendChild($link);

const $demoBtn = document.getElementById("demo-btn");

function greet(_evt) {
  // console.log("greet:", args);
  nbClicks++;
  const $text = document.createTextNode(`nb clicks ${nbClicks}`);
  $outputCode.appendChild($text);
  $outputCode.appendChild(document.createElement("br"));
  
}

$demoBtn.addEventListener("click", greet);

const $evalBtn = document.getElementById("eval-btn");
function evalTerm(_evt) {
  const val = document.getElementById("input-int").value;
  alert(val ** 2);
}
$evalBtn.onclick = evalTerm;
// $evalBtn.addEventListener("click", evalTerm);

