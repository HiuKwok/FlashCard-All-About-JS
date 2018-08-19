// Clase !== Type

//Typeof is compleely broken

//Instance only be used on Custom made objects

function Foo() {}
function Bar() {}
Bar.prototype = new Foo();
//Inheritance
console.log(new Bar() instanceof Bar );
console.log(new Bar() instanceof Foo );

//Instance-of Object always return true.
new String('foo') instanceof String; // true
new String('foo') instanceof Object; // true
//Not gonna work
'foo' instanceof String; // false
'foo' instanceof Object; // false


new Number(10) === 10;     // False, Object and Number
Number(10) === 10;         // True, Number and Number
new Number(10) + 0 === 10; // True, due to implicit conversion


//About undefined
//Undefined refer a variable on global scope which have undefeined as value.
//So undifined is not garantee to be undefinied in run-time.
//console.log(undefined);
let undefined = "Deeeeefine";
console.log(undefined);


// Semi-colon is always needed
//Ref: https://stackoverflow.com/questions/444080/do-you-recommend-using-semicolons-after-every-statement-in-javascript
var f = function (v) {
    v();
} // semicolon missing at this line

// Actually is two function by design but semi-colon is absense.

// then execute some code inside a closure
(function () {
  console.log("I shouldn't be exist");
  return 0;
});

f;

//Any value on global scope can't be deleted.
console.log(delete f);


//The problem of setInterval is it place the call blindly, let say each
//schedule call take 5s, for setting interval with 2s. Every 5s pass, one call
//got consumer but 2 more are queued. It gonna flood the stack at teh end of the day.
