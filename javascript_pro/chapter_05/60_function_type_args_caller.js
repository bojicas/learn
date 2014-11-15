// Function Type Arguments - caaler

function outer() {
  inner();
}

function inner() {
  console.log(inner.caller);
}

outer();
