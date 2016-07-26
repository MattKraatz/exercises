var Sandwich = (function(sandwich){
  sandwich.maker = function() {
    var form = document.getElementsByTagName("form")[0]
    var total = 0;
    for (var i = 0; i < form.length; i++) {
      for (var j = 0; j < form[i].length; j++)
        if (form[i][j].selected) {
          total += Sandwich.getPrice(form[i].name,form[i][j].value)
        }
      }
    outputTarget.innerHTML = total;
  }
  return sandwich;
})(Sandwich || {})

