{
    const foo = 'bar';
    //Inside the object got a attribute call foo, have value of bar
    const baz = {foo};
    console.log(baz);
}


{
    let birth = '2000/01/01';

    const Person = {
        name: 'Hiu',
        //It take the var name as key
        birth,
    }
    console.log(Person);
}