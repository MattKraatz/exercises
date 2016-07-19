console.log("hello")
var i = 0;
var j = 0;
var fib = [];


for (j; i < 500; j++) {
  if (i === 0) {
    fib.push(i);
    i += 1;
    fib.push(i);
  } else {
    fib.push(i);
    i += fib[j];
  };
}

console.log(fib);
