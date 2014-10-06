var s1 = "2";
var s2 = "z";
var b = false;
var f = 1.1;
var o = {
  valueOf: function () {
    return -1;
  }
};

s1++;
s2++;
b++;
f--;
o--;

console.log(s1);
console.log(s2);
console.log(b);
console.log(f);
console.log(o);
