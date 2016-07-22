var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var el = document.getElementById("planets");

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/

var planetsCap = planets.map(function(c){return c.slice(0,1).toUpperCase() + c.slice(1,c.length)})

// Use the map method to create a new array where the first letter of each planet is capitalized

planetsCap.forEach(function(c){el.innerHTML += c + "<br>"})

// Use the filter method to create a new array that contains planets with the letter 'e'

var planetsE = planets.filter(function(c){if (c.indexOf("e") > -1) {return true} else {return false}})

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function(p,c){return p += " " + c})
