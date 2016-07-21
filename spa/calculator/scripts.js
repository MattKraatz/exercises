var total = 0;

function opCheck() {
  var v1 = value1.value;
  var v2 = value2.value;
  switch (select.value.toString()) {
    case '+': add(v1,v2);
      break;
    case '-': subtract(v1,v2);
      break;
    case '*': multiply(v1,v2);
      break;
    case '/': divide(v1,v2);
      break;
}};

function add(v1,v2) {
  total = parseInt(v1) + parseInt(v2);
  printTotal(total);
}

function subtract(v1,v2) {
  total = v1 - v2;
  printTotal(total);
}

function multiply(v1,v2) {
  total = v1 * v2;
  printTotal(total);
}

function divide(v1,v2) {
  total = v1 / v2;
  printTotal(total);
}

function printTotal(t) {
  output.innerHTML = t;
}

submit.addEventListener("click",opCheck)
