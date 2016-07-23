// Defining element variables for convenient use later

var output = document.getElementById("output-target");
var sectionTag = document.getElementsByTagName("section");
var headerTag = document.getElementsByTagName("h1");
var guineaPig = document.getElementById("guinea-pig");

// Adding event listeners to single ID variables

document.getElementById("keypress-input").addEventListener("input",keyPress)
document.getElementById("add-color").addEventListener("click", addColor)
document.getElementById("make-large").addEventListener("click", hulkify)
document.getElementById("add-border").addEventListener("click", capture)
document.getElementById("add-rounding").addEventListener("click", rounder)

// Adding event listeners to page elements

for (var i = 0; i < sectionTag.length; i++) {
  sectionTag[i].addEventListener("click", sectionClick);
}

for (var i = 0; i < headerTag.length; i++) {
  headerTag[i].addEventListener("mouseover", headerHover);
  headerTag[i].addEventListener("mouseleave", headerLeave);
}

// Event output functions

function sectionClick(e) {
  output.innerHTML = "You clicked on the " + e.target.innerText + " section<br>";
}

function headerHover() {
  output.innerHTML = "You moved your mouse over the header<br>"
}

function headerLeave() {
  output.innerHTML = "You left me!<br>"
}

function keyPress() {
  output.innerHTML = document.getElementById("keypress-input").value
}

function addColor() {
  guineaPig.classList.add("color");
}

function hulkify() {
  guineaPig.classList.add("hulk");
}

function capture() {
  guineaPig.classList.add("border")
}

function rounder() {
  guineaPig.classList.add("rounded")
}
