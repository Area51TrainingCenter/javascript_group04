define([
  'jquery',
  'modelos/alumno',
  'vistas/vista_alumno'
], function($, Alumno, VistaAlumno) {
  function VistaIndex(coleccion) {
    this.el = $('<div id="index"></div>');

    if (coleccion) {
      this.coleccion = coleccion;
    }
  };

  VistaIndex.prototype.render = function() {
    var self = this;
    this.el.append('<a href="#" id="nuevo_alumno">Nuevo alumno</a>');
    this.el.on('click', '#nuevo_alumno', function(e) {
      e.preventDefault();

      var email = prompt('Ingresar email:');

      if (email && email.length !== '') {
        var item = new Alumno();
        item.set('email', email);
        
        self.coleccion.add(item);
        // console.log(self.coleccion);
        var vista = new VistaAlumno(item);
        // console.log(vista.render().el);

        self.el.append(vista.render().el);
      }
    });

    return this;
  };

  return VistaIndex;
});