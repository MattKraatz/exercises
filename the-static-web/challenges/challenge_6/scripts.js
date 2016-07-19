var num = [1,2,3,4,5,6,7,8,9,10];
var total = {
  SquareSum: 0,
  SumSquare: 0
};

num.reduce(sumSquarer);
num.reduce(squareSummer);
total.SumSquare *= total.SumSquare;
total.delta = total.SumSquare - total.SquareSum;

function sumSquarer(previous,current) {
  total.SquareSum += (previous * previous);
  return current;
}

function squareSummer(previous, current) {
  total.SumSquare += (previous + previous);
  return current;
};

console.log(total.delta);
