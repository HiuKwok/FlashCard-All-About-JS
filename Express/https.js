let express = require("express");
let http = require("http");
let https = require("https");
let fs = require("fs");

let app = express();

//Take two file, secret key && cert
let httpsOptions = {
    key; fs.readFileSync("./.......key.pem"),
    cert: fs.readFileSync("./.........cert.pem")
};

//Open to both http || https client
http.createServer(app).listen(80);
https.createServer(httpsOptions, app).listen(443);
