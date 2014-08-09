define(['backbone', 'modelos/alumno'], function(Backbone, Alumno) {
  var Alumnos = Backbone.Collection.extend({
    model: Alumno
  });

  return Alumnos;
});