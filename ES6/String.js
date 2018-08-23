
// Six way of represent uni-code
{
    '\z' === 'z'  // true
    '\172' === 'z' // true
    '\x7A' === 'z' // true
    '\u007A' === 'z' // true
    '\u{7A}' === 'z' // true
}
//Word len
{
    //It take 4 bytes
    let s = "𠮷a";
    //.length always return 2 and of course .charAt would be borken in this way.
    s.length // 2
    s.charAt(0) // ''
    s.charAt(1) // ''

//    Use codePointAt instead
    s.codePointAt(0) // 134071 (Decimal)
    s.codePointAt(1) // 57271  (Decimal)
    s.codePointAt(2); // a


}

//Iterator
{
    let s = "𠮷a";
    //    For of loop support 4 bytes word
    for (let ch of s) {
        console.log(ch.codePointAt(0).toString(16));
    }

//    But not for normal for loop (2bytes by default)
    for (let i=0 ; i<s.length ; i++){
        console.log(s[i]);
    }
}

//As certain euro symbol can be represent in two ways, normalize help it
//all occurrence from way to the other.
{
    let w = '\u004F\u030C';
    console.log('\u01D1'.normalize() === w.normalize() );
    console.log("NFD always breakdown to multiple: ", w.normalize('NFD').length);
    console.log("NFC: ", w.normalize('NFC').length);
}

//Repeat
{
//Always floor when incoming double || float
    'na'.repeat(2.9);
//    Negative and Infinity of course throw error.
}

//pad start && End
console.log("Pad start:", 'x'.padStart(5, 'ab') );
console.log("Pad end:", 'x'.padEnd(5, 'ab') );

//Template String
{
    let count = "50";
    let max = 100;
    let min = 0;
    console.log(`Result: [${min}, ${max}, ${count}]`);

//    Actual code can be placed under the bracket and run.
    console.log(`Modified Result: [${min-100}, ${max+200}, ${count}]`);

    let multipleLine = "Line 1\n"+
        "Line 2\n" +
        "Line 3\n";

//    Can now be?
    let multiTemplate = `
        Line 1
        Line 2
        Line 3`;
    console.log(multiTemplate);
    console.log(multipleLine);

//    Advanced usage, which is kind of un practical by the way.
    let a = 5;
    let b = 10;

    //v1 = 5+10 && v2 = 5*10
    function tag(s, v1, v2) {
        console.log(s[0]);
        console.log(s[1]);
        console.log(s[2]);
        console.log(v1);
        console.log(v2);

        return "OK";
    }

    tag`Hello ${ a + b } world ${ a * b}`;
    //Noticed that the \n
    console.log(String.raw`Hi\n${2+3}!`);
}
