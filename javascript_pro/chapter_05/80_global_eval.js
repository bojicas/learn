// The eval method

var msg = 'hello world';

eval('console.log(msg)');		// hello world

eval("function sayHi() { console.log('hi'); }");

sayHi();	// hi

eval("var message = 'hello world';");
console.log(message);   // hello world