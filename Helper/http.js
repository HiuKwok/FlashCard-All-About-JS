let http = require("http");

/*
* Demonstration to build a simple server upon std lib, it's too low-lv.
* Why do so if Express JS handled for us alr?
* */

function reqHandler (req, res){
    console.log("Incoming request on:" + req.url);
    res.end("Hello, Hiu!");
}

//Launch server & bind handler
let server = http.createServer(reqHandler);
server.listen(3000);