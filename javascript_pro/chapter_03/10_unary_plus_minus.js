// Unary Plus and Minus

var num = 25;
num = -num;
console.log(num);

var s1= "01";
var s2 = "1.1";
var s3 = "z";
var b = false;
var f = 1.1;
var o = {
  valueOf: function () {
    return -1;
  }
};

s1 = -s1;
s2 = -s2;
s3 = -s3;
b = -b;
f = -f;
o = -o;

console.log(s1);
console.log(s2);
console.log(s3);
console.log(b);
console.log(f);
console.log(o);
