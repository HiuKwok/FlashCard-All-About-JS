/*
* Quick take-away:
*  - The mechanism of prototype make it capable to do wind up inheritance in run-time.
*
*  - This problem of this things is costy, by dynamic go up all the way to find
*  method || properties. Especially looking up non-exist element. It would force v8
*  check all the way to the root prototype then realize. Oh such properties is not exist
*  at all.
*
*  - Should be fine I guess? Inheritance is not the main course for JS after all.
* */

function Foo() {
    this.value = 42;
}
Foo.prototype = {
    method: function() {
        console.log("Hello from Foo prototype");
    }
};

function Bar() {}

// Set Bar's prototype to a new instance of Foo
// New instance need to be passed in to form the prototype chain
Bar.prototype = new Foo();
Bar.prototype.foo = 'Hello World';

// Make sure to list Bar as the actual constructor
Bar.prototype.constructor = Bar;
//As Bar prototype is linked to a brand new instance of Foo.
//It contain all the properties on Foo.
Bar.prototype.method();

var test = new Bar(); // create a new bar instance
let test_2 = new Bar();
console.log(test.value);
console.log(test_2.value);
//As you may see, even both instances pointed to the same prototype,
//But modify the base property of one dun affect other.
//In this case test_2 would still have 42 as it's value.
test.value = 40;
console.log(test.value);
console.log(test_2.value);


//Modify prototype for built-in type wouldn't be a good practice,
//unless certain situation like poly-fill.

// Poisoning Object.prototype
//Which shouldn't be done at all.
Object.prototype.bar = 1;

let foo = {goo: undefined};
//
foo.bar; // 1

//Look up property on obj (Lookup prototype chain)
'bar' in foo; // true

//Lookup property on current lv (Not prototype chain)
foo.hasOwnProperty('bar'); // false

//Cuz goo is defined on the foo level but not upper.
//This is the proper way of checking properties exist or not. rather than == undefined.
//As mentioned on Obj.js, property can be exist but declared as undefined.
foo.hasOwnProperty('goo'); // true

//Value == itself




// Poisoning Object.prototype
Object.prototype.bar = 1;

var foobar = {moo: 2};
//For in loop would traverse prototype to look up properties.
for(let i in foobar) {
    console.log(i); // prints both bar and moo
}
//Only current lv but not prototype chain
for(let i in foobar) {
    if (foobar.hasOwnProperty(i)) {
        console.log(i); // prints both bar and moo
    }
}
