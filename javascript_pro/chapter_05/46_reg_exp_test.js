// RegExp test()

var text = '000-00-0000';
var pattern = /\d{3}-\d{2}-\d{4}/;

if (pattern.test(text)) {
  console.log('The pattern was matched');
} else {
  console.log('The pattern was not matched');
}
