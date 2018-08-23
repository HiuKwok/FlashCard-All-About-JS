
//It gonna stop on every yield statement
{

    function * helloWorldGenerator() {
        yield 'hello';
        yield 'world';
        return 'ending';
    }

    let hw = helloWorldGenerator();

    for (let i=0 ; i<4 ;i++){
        console.log(hw.next());
    }

}

//Lazy Evaluation
{
    function * gen () {
        yield 123 + 456;
    }

    function * f () {
        console.log('F');
    }

    console.log("Lazy Evaluation:", gen().next());
    console.log("Lazy 2:", f().next());

}



{
    function* f() {
        for(var i = 0; true; i++) {
            var reset = yield i;
            if(reset) { i = -1; }
        }
    }

    let g = f();

    console.log(g.next() );
    console.log(g.next() );
    console.log(g.next(true) );
    console.log(g.next() );
}


//Generator is work for for...loop
{
    function * foo () {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
        return 6;
    }

    //Not include the last return statement.
    for (let v of foo()) {
        console.log(v);
    }
}

{
    let g = function* () {
        try {
            //location of a.
            yield;
        } catch (e) {
            console.log('Internal catch', e);
        }
        console.log("Location of b");
    //    Location of b.
    };

    let i = g();
    i.next();

    try {
        i.throw('a');
        i.throw('b');
    } catch (e) {
        console.log('External catch', e);
    }
}


{
    function* foo() {
        yield 'a';
        yield 'b';
    }

    function* bar() {
        //RHS 'x' is the return value when .next() is called.
        yield 'x';
        foo();
        yield 'y';
    }

    for (let v of bar()){
        console.log(v);
    }
}



