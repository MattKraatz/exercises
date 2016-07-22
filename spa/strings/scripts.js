submitButton.addEventListener("click",main)

function main() {
  t = textInput.value;
  console.log(t);
  output.innerHTML = reversal(t);
  output.innerHTML += "<br>" + alphabits(t);
  output.innerHTML += "<br>" + palindrome(t);

  function reversal(t) {
    var output = [];
    for (var i = (t.length - 1); i >= 0; i--) {
      output.push(t[i]);
    };
    return output.join("");
  }

  function alphabits(t) {
    var output = t.split("");
    return output.sort().join("");
  }

  function palindrome(t) {
    x = reversal(t.toLowerCase());
    if (x === t) {
      return true;
    } else {
      return false;
    }
  }
}
