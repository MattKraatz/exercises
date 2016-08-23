let Order = function() {
  this.pizza = null;
  this.beverage = null;
};

// Root function in a prototype chain
let Pizza = function() {
  this.crustThickness = 1;
};

Pizza.prototype.setCrustThickness = function(thickness) {
  this.crustThickness = thickness;
};

Pizza.prototype.setToppings = function (topping) {
  this.toppings = this.toppings || [];
  this.toppings.push(topping);
}

let DeepDish = function(toppings) {
  this.description = "Chewy and Greasy";
  // Calls setToppings from the context of DeepDish instead of Pizza
  this.setToppings.call(this,toppings);
  this.setCrustThickness.call(this,3);
};
DeepDish.prototype = new Pizza();

let ThinCrust = function() {
  this.description = "Crispy and Delicious";
};
ThinCrust.prototype = new Pizza();

let TraditionalHandTossed = function() {
  this.description = "Light and Fluffy";
};
TraditionalHandTossed.prototype = new Pizza();

// Root function in another prototype chain
let Topping = function() {
  this.price = 0;
};

let Pepperoni = function() {
  this.isSpicy = false;
};
Pepperoni.prototype = new Topping();
Pepperoni.prototype.makeSpicy = function() {
  this.isSpicy = true;
};

let Mushroom = function() {
  this.name = "shitaki";
};
Mushroom.prototype = new Topping();

// Root function in yet another prototype chain
let Beverage = function() {
  this.size = "large";
};

let Soda = function() {

};
Soda.prototype = new Beverage();

let FruitPunch = function() {

};
FruitPunch.prototype = new Beverage();

// Creating a new order
let myOrder = new Order();
let spicyPepperoni = new Pepperoni();
spicyPepperoni.makeSpicy();
let myPizza = new DeepDish(spicyPepperoni);
let HawaiianPunch = new FruitPunch();

myOrder.pizza = myPizza;
myOrder.beverage = HawaiianPunch;

// Creating another order

let myOrder2 = new Order();
let RC = new Soda();
let shitaki = new Mushroom();
let myPizza2 = new ThinCrust(shitaki);
myOrder2.pizza = myPizza2;
myOrder2.beverage = RC;

// Creating another Deep Dish order

let myOrder3 = new Order();
let myPizza3 = new DeepDish(shitaki);
myOrder3.pizza = myPizza3;
myOrder3.beverage = RC;
