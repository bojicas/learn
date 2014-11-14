// RegExp Constructor Properties

var text = 'this has been a short summer';
var pattern = /(.)hort/g;

if (pattern.test(text)) {
  console.log(RegExp.$_);       // this has been a short summer
  console.log(RegExp["$`"]);    // this has been a
  console.log(RegExp["$'"]);    //  summer
  console.log(RegExp["$&"]);    // short
  console.log(RegExp["$+"]);    // s
  console.log(RegExp["$*"]);    // false
}
