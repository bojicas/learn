// Date Type - Date.UTC()

var y2k = new Date(Date.UTC(2000, 0));

console.log(y2k);

var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));

console.log(allFives);

// same as above, directly in Date() constructor

y2k = new Date(2000, 0);

console.log(y2k);

allFives = new Date(2005, 4, 5, 17, 55, 55);

console.log(allFives);
