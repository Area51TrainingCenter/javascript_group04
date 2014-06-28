var UserAge = function(age) {
  var obj = {};
  obj.adult = false;
  obj.isAdult = function() {
    console.log(age, this.adult);
  };

  return obj;
}

function funcion6(nombre) {
  this.nombre = nombre;
  console.log(this);
}

new funcion6('funcion')