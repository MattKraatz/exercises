'use strict';

var products;
var productsList;
var categories;

loadFile('products.json',productSave);
loadFile('categories.json',categorySave);

season_selector.addEventListener("input", priceUpdate);

function priceUpdate(e) {
  // Resets all prices to original values
  for (var i = 0; i < products.length; i++) {
    products[i].price = productsList[i].price;
  }
  // Sets new prices according to category discount
  if (e.target.value === "Spring") {
    for (i = 0; i < products.length; i++) {
      if (products[i].category_id === 3) {
        products[i].price *= (1 - categories[2].discount);
      }
    }
  } else if (e.target.value === "Winter") {
    for (i = 0; i < products.length; i++) {
      if (products[i].category_id === 1) {
        products[i].price *= (1 - categories[0].discount);
      }
    }
  } else if (e.target.value === "Autumn") {
    for (i = 0; i < products.length; i++) {
      if (products[i].category_id === 2) {
        products[i].price *= (1 - categories[1].discount);
      }
    }
  }
  printer();
}

// Clears and prints to the DOM
function printer() {
  document.getElementById("outputContainer").innerHTML = "";
  for (var i = 0; i < products.length; i++) {
    document.getElementById("outputContainer").innerHTML += `
      <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
        <h2>${products[i].name}</h2>
        <h4>${products[i].category_name}</h4>
        <h4>${products[i].price}</h4>
      </div>
    `;
  }
}

// XMLHttp handler
function loadFile(filePath,cb) {
  var data = new XMLHttpRequest();
  data.addEventListener("load",function(){
    cb(JSON.parse(data.responseText));
  });
  data.open('GET',filePath);
  data.send();
}

// Commits JSON data to product and category variables
function productSave(results){
  products = results.products;
  productsList = Array.from(results.products);
}

function categorySave(results){
  categories = results.categories;
  for (var i = 0; i < products.length; i++) {
    for (var j = 0; j < categories.length; j++) {
      if (products[i].category_id === categories[j].id) {
        products[i].category_name = categories[j].season_discount;
      }
    }
  }
  printer();
}
