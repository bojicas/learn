// RegExp Constructor Properties

var text = "this has been a short number";
var pattern = /(.)hort/g;

if (pattern.test(text)) {
  console.log(RegExp.input);        // this has been a short number
  console.log(RegExp.$_);           // this has been a short number
  console.log(RegExp.leftContext);  // this has been a
  console.log(RegExp.rightContext); //  number
  console.log(RegExp.lastMatch);    // short
  console.log(RegExp.lastParen);    // s
  console.log(RegExp.multiline);    // false
}
