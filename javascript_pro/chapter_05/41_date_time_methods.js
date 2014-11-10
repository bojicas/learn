// Date/Time Component Methods

var now = new Date();

console.log(now); // Mon Nov 10 2014 09:16:59 GMT+0400 (GST)
console.log(now.getTime()); // 1415596658688

now.setTime(1415996658688);
console.log(now); // Sat Nov 15 2014 00:24:18 GMT+0400 (GST)

console.log(now.getFullYear()); // 2014
console.log(now.getUTCFullYear()); // 2014

now.setFullYear(2015);
console.log(now); // Sun Nov 15 2015 00:24:18 GMT+0400 (GST)
now.setFullYear(2015);
console.log(now); // Sun Nov 15 2015 00:24:18 GMT+0400 (GST)

console.log(now.getMonth()); // 10 (0 = Jan, 11 = Dec)
console.log(now.getUTCMonth()); // 10

now.setMonth(11); // set month as December
console.log(now); // Tue Dec 15 2015 00:24:18 GMT+0400 (GST)

now.setMonth(11); // set month as December
console.log(now); // Tue Dec 15 2015 00:24:18 GMT+0400 (GST)

console.log(now.getDate()); // 15
console.log(now.getUTCDate()); // 14

now.setDate(25); // it is Christmas
console.log(now); // Fri Dec 25 2015 00:24:18 GMT+0400 (GST)
now.setUTCDate(25); // still Christams UTC, but Dubai time is 26th
console.log(now); // Sat Dec 26 2015 00:24:18 GMT+0400 (GST)

console.log(now.getDay()); // 6 (0 = Sun, 6 = Sat)
console.log(now.getUTCDay()); // 5

console.log(now.getHours()); // 0
console.log(now.getUTCHours()); // 20

now.setHours(16);
console.log(now); // Sat Dec 26 2015 16:24:18 GMT+0400 (GST)
now.setUTCHours(16);
console.log(now); // Sat Dec 26 2015 20:24:18 GMT+0400 (GST)

console.log(now.getMinutes()); // 24
console.log(now.getUTCMinutes()); // 24

now.setMinutes(30);
console.log(now); // Sat Dec 26 2015 20:30:18 GMT+0400 (GST)
now.setUTCMinutes(30);
console.log(now); // Sat Dec 26 2015 20:30:18 GMT+0400 (GST)

console.log(now.getMilliseconds()); // 688
console.log(now.getUTCMilliseconds()); // 688

now.setMilliseconds(0);
console.log(now); // Sat Dec 26 2015 20:30:18 GMT+0400 (GST)
now.setUTCMilliseconds(500);
console.log(now); // Sat Dec 26 2015 20:30:18 GMT+0400 (GST)
console.log(now.getUTCMilliseconds()); // 500

console.log(now.getTimezoneOffset()); // -240 (in minutes)
