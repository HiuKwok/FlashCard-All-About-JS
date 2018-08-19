//It's ok to have definition later cuz Js would always lookup first.
foo();
function foo() {}

//However it's not the for variable, assginment on happen on run-time.
//Following would raise error
// fooBar;
// fooBar();
var fooBar = function() {};

//Hope it make sense, bar is defined under the scope of its self (bar).
var foo = function bar() {
    bar(); // Works
}

// bar(); // ReferenceError




this.a = 50;
//Calling this straight would resolve as global scope
console.log(this);

function foo_2(a, b, c) {
    console.log(a,b,c);
}

let bar = {};
//Apply && call is kind of similar for constructor calling
foo_2.apply(bar, [1, 2, 3]); // array will expand to the below
foo_2.call(bar, 1, 2, 3); // results in a = 1, b = 2, c = 3
foo_2.call(bar, 1, 2);

let foo_3 = {};

foo_3.method = function() {
    let self = this;
    function test() {
         //The method itself.
        console.log("Self === This:", self === this);
    }
    test();
}

 foo_3.method();

let Foo_4 = {};
//Bind this to overwrite the inner this
Foo_4.method = function() {
    let self = this;
    var test = function() {
        // this now refers to Foo
        console.log("Self === This:", self === this);
    }.bind(this);
    test();
}

Foo_4.method();

var test = Foo_4.method;
Foo_4.method = () => {console.log("Hello")};
//It bind to the born time. So even the method definition got change
//on the stage, it won't affect.
test();


//Emulating private variables
function Counter(start) {
    //In this way count can be treat as private variable
    let count = start;
    return {
        increment: function() {
            count++;
        },

        get: function() {
            return count;
        }
    }
}

let foo_10 = Counter(4);
foo_10.increment();
console.log("After increment: ", foo_10.get() );

//The count here is distinct from the one defined on born, even sharing the same name.
foo_10.hack = function() {
    count = 1337;
};

foo_10.hack();
console.log("After hack: ", foo_10.get() );

//Closures inside Loops
//All 10 method pointing to the same var, after 1s the value turn to 10.
// for(var i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 1000);
// }
//
// //Different from above loop, var i passed into func everytime instead of ref the same value.
// for(var i = 0; i < 10; i++) {
//     (function(e) {
//         setTimeout(function() {
//             console.log(e);
//         }, 1000);
//     })(i);
// }
//


console.log("Person: ");

function Person(name) {
    this.name = name;

}

Person.prototype.logName = function() {
    console.log(this.name);
};

var sean = new Person();
sean.logName();

//Factories

function Robot() {
    var color = 'gray';
    return {
        getColor: function() {
            return color;
        }
    }
}

console.log(new Robot().getColor() );

//After the construction of CarFactory, the returning object is the only one keep reference
//car.owner properties
function CarFactory() {

    //The problem here is new methods are created for every instance,
    //Better to set as prototype.
    var car = {};
    car.owner = 'nobody';

    var milesPerGallon = 2;

    car.setOwner = function(newOwner) {
        this.owner = newOwner;
    }

    car.getMPG = function() {
        return milesPerGallon;
    }

    return car;
}
carfac_1 = CarFactory();
carfac_2 = CarFactory();
//Modify carfac_2 dun affect carfac_1 at all.
carfac_2.owner = "Honda";
console.log(carfac_1.owner, carfac_2.owner);


//Scope problem
function test_scope() { // a scope
    //If let is used, i wouldn't be access outside of for loop.
    for(var i = 0; i < 10; i++) { // not a scope
        // count
    }
    //Shouldn't be
    console.log(i); // 10
}




test_scope();


var foo_99 = 42;
//That's why always encourage to use let for more precise scope definition.
function test_99() {
    // local scope
    let foo_99 = 21;
}
test_99();
console.log(foo_99);
