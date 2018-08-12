/*
* Demonstrate the use of promise.race
* */

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('p1'), 2000, )
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('p2'), 1000, 'p2')
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('p3'), 500, 'p3')
});

//Third one always come first
Promise.race([p1,p2,p3])
    .then( v => console.log(v) )
    .catch( err => console.log(err.message));
//TBC: Does result remain the same order as incoming promise array?
Promise.all([p1,p2,p3])
    .then( v => console.log("All completed"));