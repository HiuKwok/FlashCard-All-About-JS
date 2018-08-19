// arr.length is not just a number, truncate is can apply by simply modify the number

let arr = [1,2,3,4,5,6];
arr.length = 3;
arr.length = 6;
arr.push(4);

console.log(arr);

//Multiple number pass it would treat it as element
new Array(1, 2, 3); // Result: [1, 2, 3]
//When single number pass in, it's the capacity
new Array(3);

