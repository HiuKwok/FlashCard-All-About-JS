/*
* Show how to export a single method in a node module
* */

function double(v){
    return v*2;
}

//So outsider can access the method
module.exports = double;