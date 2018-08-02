let express = require("express");

let app = express();

app.get("/random/:min/:max", (req, res) => {
    console.log("Hello random");
    let min = parseInt(req.params.min);
    let max = parseInt(req.params.max);
    if (isNaN(min) || isNaN(max) || min>max ){
        res.status(400);
        res.json( { error: "Bad request."});
        return;
    }
    let r = Math.round((Math.random() * (max-min)) + min);
    res.json({ result: r});
});

app.listen(3000, () => {
    console.log("App is up on 3000");
})