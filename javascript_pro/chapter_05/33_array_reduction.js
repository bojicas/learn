// Array Type - Array Reduction reduceRight() 

var values = [1, 2, 3, 4, 5];

var sum = values.reduceRight(function (prev, cur, index, array) {
  return prev + cur;
});

console.log(sum);
