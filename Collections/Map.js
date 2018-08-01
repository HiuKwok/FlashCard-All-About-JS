//Basic operation
const map = new Map([
    ['laptop', 'mac'],
    ['price', 1234]
]);


//mac
console.log(map.get('laptop'));
console.log(map.has('laptop'));
console.log(map.set('desk', 'Ikea'));

map.forEach( (v,k) => console.log(k + " " + v));

//Would overwrite if present
map.set('price', 999);
console.log(map.get('price'));

//Better of to check first
if (!map.has('price')){
    //Only insert when absent
    map.set('price', 888);
}
console.log(map.get('price'));

//loop by key || values
for (let k of map.keys()) {
    console.log(k);
}
for (let v of map.values()) {
    console.log(v);
}


for (let item of map.entries()) {
    //[0] == key [1] ==value
    console.log(item[0], item[1]);
}

//Same as above
for (let [key, value] of map) {
    console.log(key, value);
}

//Map to set
let set = [...map.keys()]
set = [...map.entries()]
