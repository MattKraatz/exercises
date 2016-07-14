var dividers = [1,2,3,4,5,6,7,8,9,10];
var i = 1;
var test = 0

for(i; test === 0; i++) {
  for(var j = 0; j < dividers.length; j++) {
    if (i % dividers[j] !== 0) {
      break;
    } else {
      if (j === 9) {
        console.log(i);
        test = 1;
      }
    }
  }
}