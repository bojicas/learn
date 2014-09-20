if (Meteor.isClient) {
  // direct code here, uncomment code snippet to see how is working:

  // NaN (Not a Number)
  // alert(NaN == NaN);    // false, recommended isNaN(NaN) for correct answer
  // alert(isNaN(NaN));    // true
  // alert(isNaN(10));     // false - 10 is a number
  // alert(isNaN("10"));   // false - can be converted to number 10
  // alert(isNaN("true")); // true - cannot be converted to a number
  // alert(isNaN(true));   // false - can be converted to number 1
  // alert(isNaN(false));  // false - can be converted to number 0

  // Number Conversions
  // var num1 = Number("Hello world!");
  // console.log(num1); // NaN
  // var num2 = Number("");
  // console.log(num2); // 0
  // var num3 = Number("000011");
  // console.log(num3); // 11
  // var num4 = Number(true);
  // console.log(num4); // 1
  // var num5 = Number(false);
  // console.log(num5); // 0
}