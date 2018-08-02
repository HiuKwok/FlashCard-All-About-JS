
/*
* Sample router to only route traffic after prefix of .../api/....
* */

let express = require("express");

let api = express.Router();

api.use ( (req,res, next) => {
    //Middle ware bababaa
})

//Stuff like mount folder to the other place
let photoPath = path.resolve(__dirname, "of");
app.use("/forbidden", express.static(photoPath));

//Endpoint sample, all the logic would sit inside.
//More appropriate way would be have a separate file, to exports a rout object.
//Then all logic would be seated inside.
api.get("/users", (req, res) => { })
api.post("/user", (req, res) => { })

//Dun forget to export
module.exports = api;