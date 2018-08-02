const express = require("express");
const http = require ("http");
const path = require ("path");



let app = express();
//Dun assume q is exist
app.get("/search", function(req, res) {
    //Dun always expect user would pass argu, in this case is q=?
    var s = req.query.q.replace(/\+/g, " ");

    //Even it exist dun assume certain type, always check

    //May be array?
    var t = search[0].split("+");
    //or Number?
});