define(['backbone',
  'vistas/vista_alumno',
  'modelos/alumno'], function(Backbone, VistaAlumno, Alumno) {
  var VistaNuevoAlumno = Backbone.View.extend({
    el: 'body',
    events: {
      'click #nuevo_alumno': 'agregarAlumno'
    },
    agregarAlumno: function(e) {
      e.preventDefault();
      
      var alumno = new Alumno();

      alumno.set('nombre', prompt('Ingrese nombre:'));
      alumno.set('apellido', prompt('Ingrese apellido:'));
      alumno.set('edad', prompt('Ingrese edad:'));

      if (alumno.isValid()) {
        var vistaAlumno = new VistaAlumno({
          model: alumno
        });

        vistaAlumno.render();
      }
    }
  });

  return VistaNuevoAlumno;
});