define(['jquery'], function(jQuery) {
  function VistaAlumno(alumno) {
    this.modelo = alumno;
    this.el = null;
  };

  VistaAlumno.prototype.render = function() {
    this.el = $('<div class="alumno"></div>');

    this.el.append('<p>email: ' + this.modelo.get('email') + '</p>');

    return this;
  }
  
  return VistaAlumno;
});