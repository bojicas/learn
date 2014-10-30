// Date Type - date formatting

var now = new Date();

console.log(now.toDateString()); // Thu Oct 30 2014
console.log(now.toTimeString()); // 21:54:49 GMT+0000 (UTC)
console.log(now.toLocaleDateString()); // Thursday, October 30, 2014
console.log(now.toLocaleTimeString()); // 21:56:38
console.log(now.toUTCString()); // Thu, 30 Oct 2014 21:57:32 GMT
