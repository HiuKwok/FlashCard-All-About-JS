let path = require("path");
let express = require("express");
let zipdb = require("zippity-do-dah");
let ForecastIo = require("forecastio");
/*
* A simple single file to take user zipcode which is US-based and return the
* current temperature.
*
* */
let app = express();
let weather = new ForecastIo("You DarkSky key go here.");

//US zip code
app.get(/^\/(\d{5})$/, (req, res, next) => {

    let zipcode = req.params[0];
    let location = zipdb.zipcode(zipcode);
    console.log(location.zipcode);
    if (!location.zipcode) {
        next();
        return;
    }

    let lat = location.latitude;
    let long = location.longitude;
    console.log(lat , " ", long);
    weather.forecast( lat, long,  (err, data) => {

        if(err){
            console.log("Error: ", err);
            next();
            return;
        }
        console.log(data.currently.temperature);
        res.json( {
            zipcode : zipcode,
            temperature: data.currently.temperature
        });
    })
});

app.listen(3000);