if (Meteor.isClient) {
  // direct code here, uncomment code snippet to see how is working:

  // NaN (Not a Number)
  // ==================
  // alert(NaN == NaN);    // false, recommended isNaN(NaN) for correct answer
  // alert(isNaN(NaN));    // true
  // alert(isNaN(10));     // false - 10 is a number
  // alert(isNaN("10"));   // false - can be converted to number 10
  // alert(isNaN("true")); // true - cannot be converted to a number
  // alert(isNaN(true));   // false - can be converted to number 1
  // alert(isNaN(false));  // false - can be converted to number 0

  // Number Conversions
  // ==================
  // Number
  //-------
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
  // var num6 = Number(22.5);
  // console.log(num6); // 22.5
  // parseInt
  // --------
  // var num1 = parseInt("1234blue");
  // console.log(num1); // 1234
  // var num2 = parseInt("");
  // console.log(num2); // NaN
  // var num3 = parseInt("0xA");
  // console.log(num3); // 10 - hexadecimal
  // var num4 = parseInt(22.5);
  // console.log(num4); // 22
  // var num5 = parseInt("70");
  // console.log(num5); // 70 - decimal
  // var num6 = parseInt("0xf");
  // console.log(num6); // 15 - hexadecimal
  // var num7 = parseInt(011);
  // console.log(num7); // 9 - octal !!!
  // var num8 = parseInt("011");
  // console.log(num8); // 11 - decimal !!!
  // parseInt with radix as second parameter
  // ---------------------------------------
  // var num1 = parseInt("0xAF", 16);
  // console.log(num1); // 175
  // var num2 = parseInt("AF", 16);
  // console.log(num2); // 175
  // var num3 = parseInt("AF");
  // console.log(num3); // NaN
  // var num4 = parseInt("10", 2);
  // console.log(num4); // 2 - parsed as binary
  // var num5 = parseInt("10", 8);
  // console.log(num5); // 8 - parsed as octal
  // var num6 = parseInt("10", 10);
  // console.log(num6); // 10 - parsed as decimal
  // var num7 = parseInt("10", 16);
  // console.log(num7); // 16 - parsed as hexadecimal
  // parseFloat
  // ----------
  // var num1 = parseFloat("1234blue");
  // console.log(num1); // 1234 - integer
  // var num1a = parseFloat(true);
  // console.log(num1a); // NaN
  // var num2 = parseFloat("0xA");
  // console.log(num2); // 0
  // var num3 = parseFloat("22.5");
  // console.log(num3); // 22.5
  // var num4 = parseFloat("22.34.5");
  // console.log(num4); // 22.34
  // var num5 = parseFloat("0908.5");
  // console.log(num5); // 908.5
  // var num6 = parseFloat("3.125e7");
  // console.log(num6); // 31250000

  // The String Type
  // ===============
  // var firstName = "Nicholas";
  // console.log(firstName);
  // var lastName = 'Zakas';
  // console.log(lastName);
  // Character Literals
  // ------------------
  // var text = "This is the letter sigma: \u03a3.";
  // console.log(text);
  // console.log(text.length);
  // The Nature of Strings
  // ---------------------
  // var lang = "Java";
  // lang = lang + "Script";
  // console.log(lang);
  // Converting to a String
  // ----------------------
  // var age = 11;
  // var ageAsString = age.toString();
  // console.log(ageAsString); // the string "11""
  // var found = true;
  // var foundAsString = found.toString();
  // console.log(foundAsString); // the string "true"
  // var num = 10;
  // console.log(num.toString()); // "10"
  // console.log(num.toString(2)); // "1010"
  // console.log(num.toString(8)); // "12"
  // console.log(num.toString(10)); // "10"
  // console.log(num.toString(16)); // "a"
  // var value1 = 10;
  // var value2 = true;
  // var value3 = null;
  // var value4;
  // console.log(String(value1)); // "10"
  // console.log(String(value2)); // "true"
  // console.log(String(value3)); // "null"
  // console.log(String(value4)); // "undefined"
}