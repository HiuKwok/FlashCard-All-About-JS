/*
* Demonstrate how url module can be used to stripe out url into
* parts.
* */

//Good practice to have the var identical to the module name to avoid confusion.
let url = require("url");

let google = url.parse("https://www.google.com.hk?q=helloJS");
console.log(google.protocol);
console.log(google.host);
console.log(google.query);