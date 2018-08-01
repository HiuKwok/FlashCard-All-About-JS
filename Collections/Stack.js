

//How to construct
let arr = [1,2,3,4,5,6];
let arr_2 = new Array();



console.log("Size: " + arr.length);
//Subset
let arr_3 = arr.toString()

//Concat all element on array
console.log(arr_3)

//Fill number 3 from position 0->2
arr.slice().fill(3,0,2).forEach(x => console.log(x))
//Noted that JS obj is pass by ref, so anything do to element would affect all
//array which based on it.
arr.forEach(x => console.log(x))
arr.pop();
console.log(arr.join(",") );

//Shift && Unshift for Queue implementation
//It's slow, cuz reindexing for array
arr.unshift(-1);
console.log(arr.join(",") );
arr.shift();
console.log(arr.join(",") );



