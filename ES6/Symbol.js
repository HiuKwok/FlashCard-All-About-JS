

// New type symbol got introduced
{
    //Primitive type so no new.
    let s = Symbol();
    console.log("Symbol type:", typeof s);
//    Construct it with str
    let s1 =Symbol('foo');
    console.log("Symbol toString():", s1.toString());


//    Symbol can turn to boolean which have true as default value.
    console.log("Symbol on bool:", Boolean(s1));

//    The best use of this would serve as a uni identifier per object
    let a= {};
    a[s1] = 'Hello!';
    //Need to call by name


//    So the proper way of define symbol would be:
    let obj = {
        [s](arg){
            console.log('Bababab');
        }
    }

//    Other practical use
    let levels = {
        DEBUG: Symbol('debug'),
        INFO: Symbol('info'),
        WARN: Symbol('warn')
    };

    console.log(levels.DEBUG, 'Hello debug');

//    One more example, to make it work like enum, which keep all the magic word.
    let shapeType = {
        triangle: 'Triangle',
        square: 'Square',
        circle: 'Circle',
    }

    console.log(shapeType.circle);

/*
* If you really think about it, the value of shapeType is not that important
* at all. Just need a value to represent triangle, not necessary to be a string. It can be any.
* As long as it's unique.
* */
    //Improved version
    //Noted that all symbol var won't appear on for...in for...of
    let shapeType_new = {
        triangle: Symbol('triangle'),
        square: Symbol('square'),
    }

 /*
 *  Another way of getting a symbol would be calling Symbol.for('str')
 *
 *  In this way the Symbol instance is reg under the global scope.
 *  Which mean for two Symbol which having the same string as arug would
 *  indeed pointing to the same instance.
 * */

// Compare by address
    console.log("Same symbol:", Symbol.for("hello")===Symbol.for("hello"));
//    Search for a Symbol and return its key (Global scope).
    Symbol.keyFor(s1); //Undefined



/*
* More advanced usage can be found on module development.
* */
function A() {
    this.foo = 'hello';
}

    const FOO_KEY = Symbol.for('foo');
//    Register instance on global scope.
//    Since symbol is unified, so no one can touch it.
//     global[FOO_KEY] = new A();


//    TBC: Symbol advanced usage.
    
}