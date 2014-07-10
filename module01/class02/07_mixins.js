function Coleccion() {
}

Coleccion.prototype.agregar = function(elemento) {
  this.push(elemento);
  PubSub.publicar('coleccion:agregar', elemento, this);
}

Coleccion.prototype = Array.prototype;

var ColeccionMixin = {};

ColeccionMixin.ultimoElemento = function() {
  return this[this.length - 1];
}

ColeccionMixin.primerElemento = function() {
  return this[0];
}

ColeccionMixin.en = function(posicion) {
  return this[posicion];
}

ColeccionMixin.sumar = function() {
  var total = 0;

  for (var i = 0; i < this.length; i++) {
    total = total + this[i];
  }

  return total;
}

_.extend(Coleccion.prototype, ColeccionMixin);

for (var metodo in source) {
  destination[metodo] = source[metodo];
}