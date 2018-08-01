/*
* Ref: http://es6.ruanyifeng.com/#docs/set-map
* */
let colors = new Set(['White', 'Black', 'Red', 'Blue', 'Green'])

//Business logic
//Check wether exist or not?
if (colors.has('White')){
    console.log("Got white");
}else{
    console.log("N/A");
}

//Remove item
colors.delete('White');

//To Array
console.log
(Array.from(colors).join(", ").toString() );

//Different from Map which value is absense,
//so calling .values( ) would get the identical result as .key( ).

//Loop all key
for (let item of colors.keys()) {
    console.log(item);
}

//Entries
for (let item of colors.entries()) {
    console.log(item);
}

//Filter operation dun affect the original at all.
 let set = new Set([1, 2, 3, 4, 5]);
 let set_new = new Set([...set].filter(x => (x % 2) == 0));
set.forEach(x => console.log(x));
console.log();
set_new.forEach(x => console.log(x));


