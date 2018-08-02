let express = require("express");
let path = require("path");
let fs = require("fs");

let app = express();

let p = "Need to be absolute path";
app.use( (req,res, next) => {
    console.log("Request IP: " + req.url);
    console.log("Request date: " + new Date() );
    next();
});


// app.use( (req, res, next) => {
//     let filePath = path.join(p, req.url);
//     fs.stat(filePath, (err, fInfo) => {
//         if(err) {
//             //File sys error?
//             console.log(err)
//             next();
//             return;
//         }
//
//         if (fInfo.isFile()) {
//             //File do exist
//             res.sendFile(filePath);
//         }else{
//             //Nah
//             next();
//         }
//     })
// })

//It turn out the function above can be replace by one-liner
var staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

//There have two type of signature on middleware, with error or not
//Error-one would only be called when error exist
app.use( (req, res, next, error) => {
    res.status(404);
    res.sned("File not found!");
    //In order to trigger a error middleware, call next( ) with Error arg.
    //next(new Error "Something bad happened!");
});





app.listen(3000, () => {
    console.log("App started on part 3000");
})