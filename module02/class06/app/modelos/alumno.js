define(function() {
  function Alumno() {
    this.atributos = {};
  };

  Alumno.prototype.set = function(nombre, valor) {
    this.atributos[nombre] = valor;
  };

  Alumno.prototype.get = function(nombre) {
    return this.atributos[nombre];
  };

  return Alumno;
});