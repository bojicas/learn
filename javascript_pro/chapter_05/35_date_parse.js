// Date Type - Date.parse()

var someDate = new Date(Date.parse("May 25, 2004"));

console.log(someDate);
// Tue May 25 2004 00:00:00 GMT+0400 (GST)

var anotherDate = new Date("May 25, 2004");

console.log(anotherDate);
// Tue May 25 2004 00:00:00 GMT+0400 (GST)
