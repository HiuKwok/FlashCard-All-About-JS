{
//    Start with 0b == binary, 0o octal
    0b111110111 === 503 // true
    0o767 === 503 // true
}


/*
* The thing here is both metho dn perform cast anymore.
* */
{
//  Number.isFinite(), make sure number is bounded.
    Number.isFinite(10); //true
    Number.isFinite(Infinity); //false
    Number.isFinite(-Infinity); //false
    Number.isFinite('foo'); // false

//    Nan
    Number.isNaN(NaN) // true
    Number.isNaN(15) // false
    Number.isNaN('15') // false
    Number.isNaN('true' / 0) // true
    Number.isNaN('true' / 'true') // true
}

{
    Number.isInteger(25);
    Number.isInteger(25.5);
    Number.isInteger(null);
    Number.isInteger(true);
    //When number is lower than Number.MIN_VALUE
    Number.isInteger(5E-325) // true
}

{
    //The most precise form.
    Number.EPSILON === Math.pow(2, -52);
    let pointThree = 0.1+0.2;
    console.log(pointThree.toFixed(10) == 0.3);

//    Always check with Number.MAX_SAFE_INTEGER && Number.MIN_SAFE_INTEGER
//    Before deal with horrible number. Number.isSafeInteger()

}

//Math static method
{
//  Cut off value after decimal point
    Math.trunc(4.1); // 4
    Math.trunc(-1.7); // -1

    // Noted that it perform cast beforeahnd
    Math.sign(-5); //-1
    Math.sign(5); // 1
    Math.sign(0); //0
    Math.sign(-0); //-0
    Math.sign("hello"); // NaN

//    Square root
    Math.cbrt(-1); //-1
    Math.cbrt(0); //0
    Math.cbrt(1); //1
    Math.cbrt(2); //1.25xxx
// Take String as well
    Math.cbrt('2');

//    Number is stored in unsigned 32 bits.
//    clz32 show how many bits is unused at the front of the representation.
    Math.clz32(0); //32
    Math.clz32(1 << 20); // 31-20 = 11
//    Work for floating point but perform floor first
    Math.clz32(2.324234);

//    imul, multiple but more precise result when dealing with huge number
    Math.imul(0x7fffffff, 0x7fffffff) // 1


//    Mat.fround() reutnr a 32 bits float. < 2^24
    Math.fround(0)   // 0
    Math.fround(1)   // 1
    Math.fround(2 ** 24 - 1)   // 16777215
    Math.fround(2 ** 24)       // 16777216
    Math.fround(2 ** 24 + 1)   // 16777216

//    TBC: Math.hypot() || Math.expm1() || Math.log1p() || Math.log10() || Math.log2()


//    New symbol
    console.log( 2**3 === 8);

    let a =2;
    a**=2; // a = a**2;
}


