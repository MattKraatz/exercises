console.log("Can you hear me now?");

var navLinks = document.querySelectorAll('li')
var pages = document.querySelectorAll('.page')

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click',function(e) {
  for (var j = 0; j < pages.length; j++) {
    pages[j].classList.add("hidden")
  }
  document.querySelector(e.target.hash).classList.toggle("hidden");
})}

