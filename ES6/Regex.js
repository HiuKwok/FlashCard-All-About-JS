{
//    RegExp(str, flag);
    let regex = new RegExp('xyz', 'i');
    console.log(regex);
//    Or all in one which is a more familiar pattern
    regex = new RegExp(/xyz/i);

//    However ES6 allow following RegExp construction
    new RegExp (/abc/ig, 'i').flags
//    In this case all symbol on first argu would be ignore and take 'i' instead.
}

// Place u at the end told user it's one unicode word.

// /^.$/u.test(s)


//y == sticky need to start from the last match +1 
