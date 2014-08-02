define(['jquery'], function(jQuery) {
  function VistaAlumno(alumno) {
    this.modelo = alumno;
    this.el = null;
  };

  VistaAlumno.prototype.render = function() {
    this.el = $('<div class="alumno"></div>');

    for (var i in this.modelo.atributos) {
      this.el.append('<p>' + i + ': ' + this.modelo.get(i) + '</p>');
    }

    return this;
  }
  
  return VistaAlumno;
});