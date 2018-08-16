

//Double equal would perform type conversion
console.log('0'==0);

//But not the case with triple equal
console.log('0'===0);


//Static String vs String object
console.log(new String('Hello') == 'Hello');
//Cuz rhs 'Hello' actually seat on Stack Static String pool, but lhs is on Heap.
console.log(new String('Hello') === 'Hello');


//Same thing for bool
console.log(false == 0);
console.log(false === 0);

//Also for null and undefined
console.log(null == undefined);
console.log(null === undefined);