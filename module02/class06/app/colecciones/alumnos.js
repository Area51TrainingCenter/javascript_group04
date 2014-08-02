define(['modelos/alumno'], function(Alumno) {
  function Alumnos() {
    this.coleccion = [];
  };

  Alumnos.prototype.add = function(item) {
    if (item instanceof Alumno) {
      this.coleccion.push(item);
    }
  };

  Alumnos.prototype.clear = function() {
    this.coleccion.length = 0;
  };

  return Alumnos;
 });