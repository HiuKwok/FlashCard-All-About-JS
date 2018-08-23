

/*
* Es6 support detructuring.
*  - It would work as long as both side equal.
* */
//Run-time is smart enough to assign in order
{
    let [a, b, c] = [1, 2, 3];
//Go deeper
    let [foo, [[bar], baz]] = [1, [[2], 3]];
//Even some are absence
    let [, , third] = ["foo", "bar", "baz"];
//No exception for array
    let [head, ...tail] = [1, 2, 3, 4];
//Can setup standby value, once y can't be assign then y = b;
    let [x, y = 'b'] = ['a'];
}

//Work for object as well, but by attribute name
{
//Foobar would be undefined as foobar is not exist on RHS.
    let { bar, foobar } = { foo: "aaa", bar: "bbb" };

//Flow: RHS foo look for any foo on LHS.
//Oh it does then asign "aaa" to foo value which is bar
    let {foo: baz} = {foo: "aaa", baz: "bbb"}
    console.log(baz);


    //While destruct obj like this, need to list out all the layer and step on LHS.
    let obj = { p: ['Hello', { y: 'World' }] };
    let {p,p: [x, { y }] } = obj;
    console.log(p, x, y);

    //When working with structure like this, only the last lyer would be solved.
    const node = { loc: {start: {line:1, column: 5}}};
    let {loc, loc:{ start }, loc: { start: {line}} } = node;
    console.log(loc, start, line);

    let object = {};
    let arr = [];
    let src = { foo: 123, bar: true };

    ({ foo: object.prop, bar: arr[0] } = { foo: 123, bar: true });
    //Identical to
    // object.prop = src.foo;
    // arr[0] = src.bar;

    console.log(object, arr);
}

//Default value:
{
//Default value only be used when resolve to undefined.

//  There is not x, y would take default value as 3.
    let {x: y = 3} = {};
//  Identical
    let {z = 3} = {z: undefined};
//    But not for null, as null !== undefined
    let {x = 3} = {x: null};
}

//Lazy way (1 -> n):
{
    let obj = {
        len : 100,
        life: 20
    }

    let {len,life} = obj;
    console.log(len, life);


//    Str to char item (one short TO undefined)
    const [a,b,c,d,e] = 'hell';
    console.log(a,b,c,d,e);

//    Access method shortcut
//    Primitive type like number and bool would be converted into object first.
    let {toString: s} = 123;
    console.log(s === Number.prototype.toString);

}

//When applying to function call (default value)
{
    //If either x or y is absence, it turn to 0.
    function move({x = 0, y = 0} = {}) {
        return [x, y];
    }
}


//Usage
{
//    Swap value
    let x=3;
    let y=5;
    [x,y] = [y,x];
    console.log(x,y);


//    Work with Json
    let jsonData = {
        id: 42,
        status: "OK",
        data: [867, 5309]
    };

    let { id, status, data: number } = jsonData;

    console.log(id, status, number);
}