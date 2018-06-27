var test_str = "I am a test Str!!!";

//Segment of task
console.log(test_str.substr(6,9) )
//Lower || Upper
console.log(test_str.toUpperCase())

//Remove all non ascii
test_str.replace(/[^\x00-\x7F]/g, "");
//Replace all non ascii
test_str.replace(/[\x00-\x1F]/g,"");
//Non-ascii without \n
input.replace(/[\x00-\x09\x0b-\x1F]/g,"");

