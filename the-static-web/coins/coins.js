var coinPurse = {
  total: parseFloat(prompt("Please enter a dollar amount")),
  quarters: 0,
  dimes: 0,
  nickels: 0,
  pennies: 0
};

var coinValue = {
  quarters: .25,
  dimes: .10,
  nickels: .05,
  pennies: .01
}

for (var i in coinValue) {
  coinPurse[i] = Math.floor(coinPurse.total / coinValue[i]);
  coinPurse.total -= Math.floor(coinPurse.total / coinValue[i]) * coinValue[i];
}

coinPurse.total = 0;
document.write("<p>Quarters: " + coinPurse.quarters + "</p>" + "<p>Dimes: " + coinPurse.dimes + "</p>" + "<p>Nickels: " + coinPurse.nickels + "</p>" + "<p>Pennies: " + coinPurse.pennies + "</p>")