var inputTemp;
var convertedTemp;
document.getElementById("submit").addEventListener("click",convert);

function convert() {
  inputTemp = document.getElementById("inputTemp").value;
  console.log(inputTemp);
  if (document.getElementById("fahrenheit").checked) {convertToCelsius()}
    else {convertToFahrenheit()};
};

function convertToCelsius() {
  convertedTemp = (inputTemp - 32) * (5/9);
  console.log(convertedTemp);
  document.getElementById("convertedDiv").innerHTML = "<p>That converts to " + convertedTemp + " degrees Celsius.</p>";
};

function convertToFahrenheit() {
  convertedTemp = Math.round((inputTemp * (9/5)) + 32);
  console.log(convertedTemp);
  document.getElementById("convertedDiv").innerHTML = "<p>That converts to " + convertedTemp + " degrees Fahrenheit.</p>";
};