var date = new Date();


console.log(date)

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(date.toLocaleDateString('ko-KR', options));