/*
* Ref: https://bonsaiden.github.io/JavaScript-Garden/
*
* Quick take-away.
*  - Number literal have member function, but the dot would be interpret as
*  decimal point instead of member.properties.
* */

//This won't compiler would thinking oh toString(); is not a number at all
//How am I gonna parse it into double || float?
// 2.toString();

//Following would work, compiler would then notice .
//oh it's actually a int with member method > parse as doubt.

//Extra dot
2..toString();

//Left a space
2 .toString();

//Bracket
(2).toString();




//Object in Js is think of a hashmap.
let foo = {};
//By the time foo got created, it inherits from Object.prototype
//Add property
let bar = {test:12};

//As mention obj is basically a hash in JS, of course it can accessed like hash.
//Both legit
//Always in String with lookup via bracket lotation.
foo['test'];
foo.test;



//delete operator is fundamental different from set it to null || undefined
let obj = {bar: 1, foo:2, baz:3}

//Set null || undefined wouldn't help
obj.bar = null;
obj.foo = undefined;
//Only delete are truly remove property from obj
delete obj.baz;

for(let i in obj) {
    if (obj.hasOwnProperty(i)) {
        console.log(i, '' + obj[i]);
    }
}



//If keyboard need to be used as key, wrap it with quote.
//Cuz interpreter is not support following notation until ES 5.
var test = {
    'case': 'I am a keyword, so I must be notated as a string',
    delete: 'I am a keyword, so me too' // raises SyntaxError
};

