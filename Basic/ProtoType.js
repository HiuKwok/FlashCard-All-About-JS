/*
* Several point to be noted:
*    - Js is a prototype-base-oriented language, so class is not exist at all in JS
*    perspective. All the inheritance is don via prototype.
*
*
* Ref: https://medium.com/@peterchang_82818/javascripter-必須知道的繼承因子-prototype-prototype-proto-object-class-inheritace-nodejs-物件-繼承-54102240a8b4
* */


let proto = {
    des : () => { return 'name: ' + this.name; },
    describe: function ()  {return 'name: '+this.name; }
}

let obj = {
    //Link to [[Prototype]] internally.
    __proto__: proto,
    name: 'Hiu'
};

console.log(obj.des);
//Not work for arrow expression
console.log(obj.des());
console.log(obj.describe());


{
//Base Type
    function Foo(name) {
        this.name = name;
    }

    let b = new Foo('b');
    let a = new Foo('a');
//Add extra method on b but not base type.
    b.say = function () {
        console.log('Hi from ' + this.whoAmI());
    }
//Both would be true since both a && b are born from the same base type, which is foo.
    console.log(a.__proto__ === Foo.prototype); // true
    console.log(a.__proto__ === b.__proto__); // true
}

{
//Create a base type first then added on extra functionality on later stage via prototype.
    function Foo_2(y) {
        this.y = y;
    }

    //Cuz prototype work like a pointer way, so event .cal and .x got added afterward,
    //b would still have both method. As JS engine would lookup in run-time. 
    let b = new Foo_2(20);

//Extra property x and cal
    Foo_2.prototype.x = 10;
    Foo_2.prototype.cal = function (z) {
        return this.x + this.y + z;
    };

//Then by the time .cal( ) got called, it would know exactly where to look for .x and .y.

    console.log("Result: ", b.cal(30));
    console.log(
        //Equal to parent
        b.__proto__ === Foo_2.prototype, // true
        b.__proto__.cal === Foo_2.prototype.cal, // true
        //Equal to itself
        b.__proto__.cal === b.cal, // true
        //Borrow constructor from parent
        b.constructor === Foo_2, // true

        Foo_2 === Foo_2.prototype.constructor);
}

