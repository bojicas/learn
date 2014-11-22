// Global Object - URI Decoding Example

var uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.htm%23start";

console.log(decodeURI(uri));
// http%3A%2F%2Fwww.wrox.com%2Fillegal value.htm%23start

console.log(decodeURIComponent(uri));
// http://www.wrox.com/illegal value.htm#start
