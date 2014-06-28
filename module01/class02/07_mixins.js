function Coleccion() {
}

Coleccion.prototype = Array.prototype;

var ColeccionPrototype = {};

ColeccionPrototype.ultimoElemento = function() {
  return this[this.length - 1];
}

ColeccionPrototype.primerElemento = function() {
  return this[0];
}

ColeccionPrototype.en = function(posicion) {
  return this[posicion];
}

ColeccionPrototype.sumar = function() {
  var total = 0;

  for (var i = 0; i < this.length; i++) {
    total = total + this[i];
  }

  return total;
}

for (var metodo in ColeccionPrototype) {
  Coleccion.prototype[metodo] = ColeccionPrototype[metodo];
}