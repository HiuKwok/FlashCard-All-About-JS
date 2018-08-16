

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


//Filter
let apple = ['Iphone', 'Ipad', 'Iwatch', 'Mac'];
//Result a collection which match statement on filter clause.
const result = apple.filter( v => v.startsWith('I'));
console.log(result);


//Find is similar to filter but only result the first item which match the statment.
const rFind = apple.filter( v=>  v.startsWith('M'));
console.log("Find: " + rFind);

//Have option to return index instead.
const rIndex = apple.findIndex( e => e === 'Mac');
//0 base.
console.log("Nac is on:" + rIndex);

const rFindNotExist = apple.filter( v=>  v.startsWith('X'));
console.log("Find not exist", rFindNotExist);

//Join above
console.log("Join: " + rFind.concat(rFindNotExist));

const rWithLogo = apple.map(v => v.concat("@Apple"));
console.log(rWithLogo);



