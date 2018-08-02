const express = require("express");
const http = require ("http");
const path = require ("path");

/*
* Function as ./Helper/http.js. But this time Express would do all the heavy letting for us.
* */
let app = express();

//Launch && config
app.use( (req, res, next) => {
    //Middleware, every request would pass thou this point before router?
    console.log("Incoming request: [" + req.method + "] "+ req.url);
    next();
});

//Only allow to access when it's on even seconds
app.use( (req,res,next) => {
    let s =(new Date()).getSeconds();
    if(s%2===0){
        next();
    } else {
        res.statusCode = 403;
        res.end("Not authorized.");
    }
})


//Third middleware
app.use( (req,res) => {
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.end("Hello Hiu");
})



http.createServer(app).listen(3000);