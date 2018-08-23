


{
    let x = 99;

    //Default value x would be lookup upon every invoke.
    function foo(p = x + 1) {
        console.log(p);
    }

    foo() // 100

    x = 100;
    foo() // 101
}

{
    /*
    * This one is kind of confusing, by default the function would return
    * the number of argument which expected, a function would take var a
    * like the first line of return 1 as result.
    *
    * It work until the fault value mechanism kicks in. As you may see below,
    * the arguments which have default value actually dun count.
    *
    * Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length
    * */
    //Only count those which have no default value.
    (function (a) {}).length; // 1
    (function (a = 5) {}).length; // 0
    (function (a, b, c = 5) {}).length; // 2
}

{
    let foo = 'outer';

    //Default method, if no method passed it. It would be () => foo
    function bar(func = () => foo) {
        let foo = 'inner';
        console.log(func());
    }

    bar(); // outer


//    Application: Make a default method which is throw error if nothing passed in.
    function throwIfMissing() {
        // throw new Error('Missing parameter');
    }

    //Ref: http://es6.ruanyifeng.com/#docs/function
    function foo_2(mustBeProvided = throwIfMissing()) {
        return mustBeProvided;
    }

    foo_2()

}


{
    //Rest....
    function takeMultiple (...items) {
        items.forEach(v=> {
            console.log(v);
        })
    }



    console.log("I am: ", takeMultiple.name);
//    Anonymous
    console.log( (() => {}).name);


    /*
    * The other problem of arrow function is the scope. This definition
    * of arrow is fixed when it write. But the Norma one point straight to
    * global scope.
    * */

 /*   function Timer() {
        this.s1 = 0;
        this.s2 = 0;
        // 箭头函数
        setInterval(() => this.s1++, 1000);
        // 普通函数
        setInterval(function () {
            this.s2++;
        }, 1000);
    }

    var timer = new Timer();
*/
    // setTimeout(() => console.log('s1: ', timer.s1), 3100);
    // setTimeout(() => console.log('s2: ', timer.s2), 3100);

}

{
//    Tail optimization
    function Fibonacci (n) {
        if ( n <= 1 ) {return 1};

        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }

    function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
        if( n <= 1 ) {return ac2};

        return Fibonacci2 (n - 1, ac2, ac1 + ac2);
    }

    // Fibonacci2(100);
}


//TBC: Tail optimization in detail (http://es6.ruanyifeng.com/#docs/function)
//Only work on strict mode
//TBC: Currying
{
    function currying(fn, n) {
        return function (m) {
            return fn.call(this, m, n);
        };
    }

    function tailFactorial(n, total) {
        if (n === 1) return total;
        return tailFactorial(n - 1, n * total);
    }

    const factorial = currying(tailFactorial, 1);

    factorial(5) // 120
}

//TBC: trampoline
// function tco(f) {
//     var value;
//     var active = false;
//     var accumulated = [];
//
//     return function accumulator() {
//         accumulated.push(arguments);
//         if (!active) {
//             active = true;
//             while (accumulated.length) {
//                 value = f.apply(this, accumulated.shift());
//             }
//             active = false;
//             return value;
//         }
//     };
// }
//
// var sum = tco(function(x, y) {
//     if (y > 0) {
//         return sum(x + 1, y - 1)
//     }
//     else {
//         return x
//     }
// });
//
// sum(1, 100000)
// 100001

//Spread
{

    function add(x, y) {
        return x + y;
    }

    const numbers = [4, 38];
    //Spread [4, 38] -> 4, 38 Unbox?
    add(...numbers) // 42

//    Or work as clone
//    Still soft reference
    const a1 = [1, 2];
    const a2 = [...a1];
    console.log(a2);

//    Join multiple arr
    const arr1 = ['a', 'b'];
    const arr2 = ['c'];
    const arr3 = ['d', 'e'];
    //Identical
    arr1.concat(arr2, arr3);
    [...arr1, ...arr2, ...arr3];


//    Separate first element from the rest
//  The usage is not limited to array.
    const [first, ...rest] = [1, 2, 3, 4, 5];

//    It work for every item which implement iterator
    let m = new Map();
    m.set(1,1);
    m.set(2,1);
    const [f, ...r] = m;
//    Or just key || value
    const [x, ...y] = m.keys();
}

//Array from
{
    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };

    //Array from is more like a arr-like structure to arr
    //But Array.of( ) is more to multiple individual element to Arr.
    let arr2 = Array.from(arrayLike);
    //Popular usage.
    let arr3 = Array.from("hello");
//    Take second parameters for map operation.
    let arr4 = Array.from("Hello", v => v+"x");
    console.log(arr4);

}

//CopyWithin( )
{
    //Start from index to 3(Des), copy from 3 to end(src)
    [1, 2, 3, 4, 5].copyWithin(0, 3);
}

{
    //Find the first occurrence || undefined
    [1, 4, -5, 10].find((n) => n < 0)
    //Same thing but return index instead and -1 > undefined.
    // [1, 5, 10, 15].findIndex(function(value, index, arr) {
    // return value > 9;
    // }) // 2


//    Advanced usage:
    function f(v){
        return v > this.age;
    }
    let person = {name: 'John', age: 20};
    [10, 12, 26, 15].find(f, person);

//    It's soft reference
    let arr_4 = new Array(3).fill({name: "Mike"});
    arr_4[0].name = "Ben";
// [{name: "Ben"}, {name: "Ben"}, {name: "Ben"}]

//    Include
    [1,2,3].includes(2); //true


//   Flatten a given array, can pass it a infinity.
    [1, [2, [3]]].flat(Infinity);
    //Empty space would be skipped.
    [1, 2, , 4, 5].flat()

//    flatMap() is similar to map but making change to the original array instead .

}



