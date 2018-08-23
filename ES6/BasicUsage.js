{
    let a = 10;
    var b = 1;
}
// var a would be scope inside the bracket.

//Most popular usage would be in For loop.
//Two advantage, if i is defined before the loop.
//Then value of loop i would work on inside for loop.
//After the loop the definition of i would back to the i before the for loop.

let i = 100;
for (let i = 0; i < 10; i++) {
    // ...
}

console.log(i, " Stay unchange!");

//When let var is reference outside the scope, it would have new copy.
var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 6
//It work, cuz both i are in the different scope.
for (let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}


/*
* The other thing need to be noted is that if var is called before the declaration.
* It would return undefined. Which is alright but kind of ambiguous.
*
* In es6 for let variable, if it got call before declaration, ReferenceError would be
* throw. Which is more appropriate.
* */

// console.log(bar);
let bar = 2;

/*
* Temporal dead zone:
*
* It happen when a let \| const declared inside of a scope then the variable which sharing
* the name outside the scope would be ignore. However it any statement try to resolve the
* variable inside the scope but before the actual inscope let declare, Reference Error would be
* thrown.
* */

if (true) {
    /*
    * Thought, when run-time step into the if statement. Oh I saw a bar declared in scope.
    * So just disable the bar variable which declare outside of the If.
    *
    * Line1: -> bar = 'abc';
    * - Oh it ask for bar, but none of the bar is available
    *    - Outside declaration: Disabled till the end of the if statement.
    *    - Inside the if: Oh I know bar gonna be declare somewhere inside the if
    *    block, but it not yet happen.....
    *
    * - So it return ReferenceError as result
    * */


    /*
    * As other tricky case here, if type of bar. It would get back referenceError
    * The fact is bar does got declared, we just not yet reach the line. Which is
    * different from typeof with a non-exist variable which would have "undefined" as return.
    * */
    // bar = 'abc'; // -> ReferenceError
    let bar;
}


//Let only live within the bracket
{
    let insane = 'Hello World';
    {let insane = 'Hello World'}
}




