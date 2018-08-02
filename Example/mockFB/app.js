let express = require("express");
let mongoose = require("mongoose");
let path = require("path");
let bodyParser = require("body-parser");
let cookieParser = require("cookie-parser");
let session = require("express-session");
let flash = require("connect-flash");
var passport = require("passport");


let routes = require("./routes");
let app = express();

mongoose.connect("mongodb://localhost:27017/Test");

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//False would make it more secure
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    //Allows each session to be encrypted from the clients
    secret: "TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX",
    //SEssion would be updated even it's not updated.
    resave: true,
    //It would resets sessions that are uninitialized. 
    saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);
app.listen(app.get("port"), function() {
    console.log("Server started on port " + app.get("port"));
});

