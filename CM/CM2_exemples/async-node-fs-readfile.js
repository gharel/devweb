const fs = require("fs");
const mypath = "async-node-fs-readfile.js";

console.log("Lancement lecture asynchrone file...");
fs.readFile(mypath, "utf8", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log(">>>");
  console.log(data);
  console.log("<<<");
});

console.log("...lecture lancée");
