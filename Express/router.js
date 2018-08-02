const express = require("express");
const http = require ("http");
const path = require ("path");



let app = express();


//Middleware to kick out IP
app.use ( (req, res, next) => {
    if (req.ip === "192.168.1.1"){
        res.status(401).send("Not allowed!");
    }else {
        next();
    }
})


//Fixed route
app.get("/", (req,res) => {
    res.end("Hello home page");
})

//Dynamic route
//Noted that all proceeding params would be parse and match into this route
//Path like: /hello/hiu/kwok would not be falled into this cate.
app.get("/hello/:who", (req, res) => {
    console.log("Incoming IP: " + req.ip);
    res.end("Hello " + req.params.who);
    //Loop query str
    // let q = req.query.baabba;
})

//Demo for redirect
app.get("/hello/:who/:who_2", (req, res) => {
    res.redirect("/hello/" + req.params.who);
    res.end();
})

//Also regex can be used
app.get(/^\/users\/(\d+)$/, function(req, res) {
    var userId = parseInt(req.params[0], 10);
    res.end();
});




http.createServer(app).listen(3000);