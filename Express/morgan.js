
/*
* short Example of how morgan can be used on express
*
*  - As you may see, it provide a one-liner solution for logger.
* */
let express = require("express");
let logger = require("morgan");
let http = require("http");

let app = express();

app.use(logger("short"));
app.use( (req, resp) => {
    resp.writeHead(200, {"Content-Type" : "text/plain"});
    resp.end("Hello, Hiu!");
});

http.createServer(app).listen(3000);
