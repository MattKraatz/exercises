var Sandwich = (function(sandwich){
  var prices = {
    "bread": {
      "white": 1.00,
      "wheat": 1.25,
      "rye": 1.50,
      "sourdough": 1.75
    },
    "meat": {
      "turkey": 1.50,
      "ham": 1.75,
      "chicken": 1.50,
      "meatballs": 2.00
    },
    "cheese": {
      "chedder": 0.75,
      "swiss": 1.00,
      "provolone": 1.25,
      "american": 1.10
    },
    "condiments": {
      "mayo": 0.25,
      "mustard": 0.10,
      "aoli": 0.75,
      "ketchup": 0.15
    },
    "veggies": {
      "lettuce": 0.15,
      "onion": 0.25,
      "tomato": 0.20,
      "spinach": 0.10
    }
  };
  sandwich.getPrice = function(type,ingred) {
    return prices[type][ingred];
  }
  return sandwich;
})(Sandwich || {})

