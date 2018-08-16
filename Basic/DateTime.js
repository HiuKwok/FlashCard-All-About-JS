const moment = require('moment');

var date = new Date();


console.log(date)

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(date.toLocaleDateString('ko-KR', options));


//It would auto handle the timezone as it unixTime is tz-insensitive
const m = moment("2018-08-16 17:55:53", "YYYY-MM-DD HH:mm:ss");
const unixTime = m.unix();
//Re Parse
const after = moment( unixTime, 'X' );
console.log(after);
