var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
var coloredReindeer = [];
var message = ""

function print(i) {
  var outputDiv = document.getElementById('Reindeer');
  outputDiv.innerHTML = i;
}

for (var i = 0; i < reindeer.length; i++) {
  coloredReindeer.push(colors[i] + " " + reindeer[i]);
  message += "<h2>" + coloredReindeer[i] + "</h2>";
};

print(message);