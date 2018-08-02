const express = require("express");
const http = require ("http");
const path = require ("path");


/*
* Can be used to serve static content as well.
* */
let app = express();
//Serve file(open specific path to public to access, like: FTP?
let publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

app.use(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Looks like you didn't find a static file.");
});
http.createServer(app).listen(3000);