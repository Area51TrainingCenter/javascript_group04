define([
  'jquery',
  'modelos/alumno',
  'vistas/vista_alumno'
], function($, Alumno, VistaAlumno) {
  function VistaNuevoAlumno(selector) {
    this.el = $(selector);
  }

  VistaNuevoAlumno.prototype.render = function() {
    this.el.on('submit', function(e) {
      e.preventDefault();

      var nombre = $(this).find('#nombre').val();
      var edad = $(this).find('#edad').val();

      var alumno = new Alumno();
      alumno.set('nombre', nombre);
      alumno.set('edad', edad);

      var vista = new VistaAlumno(alumno);
      $('#contenedor').append(vista.render().el);
    });

    return this;
  };

  return VistaNuevoAlumno;
});