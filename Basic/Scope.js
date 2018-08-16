/*
* x = 5; is allowed on browser which would auto declare on global scope.
* */

//No matter defined as let or var, it would still visible on function test.
let x = 5;
var y = 10;
function t () {
    /*
    * If variable defined ouside of the function always would be still fine.
    * */
    var x = 1;
    let y= 1;
    var z = 0;
    //Not visible to outside world.
    x = x*2;
    y = y*2;
    console.log("Let: " + x);
    console.log("Var: " + y);

}
t();
t();
console.log("Let: " + x);
console.log("Var: " + y);
//z is not visible outside of the method
// console.log("Z: " + z);

var test = {
    prop: 42,
    func: function() {
        return this.prop;
    },
    //Arrow scope can't access "this" level scope, would be treat as static mehtod
    //in Java world.
    func_arrow: ()=> {
        return this.prop;
    },
};

console.log(test.func());
console.log(test.func_arrow());

