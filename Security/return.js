
//Always return when encounter error
let fs = require("fs");


//Read file that not exist at all
fs.readFile("myfile.txt", function(err, data) {
    if (err)  {
        console.error(err);
        //This way the execution would be halted and console.log(data) would never run. 
        throw err;
    }
    console.log(data);
});