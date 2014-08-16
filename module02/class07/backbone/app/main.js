require(['modelos/alumno',
  'colecciones/alumnos',
  'vistas/vista_alumno',
  'vistas/vista_nuevo_alumno',
  'sync'], function(Alumno, Alumnos, VistaAlumno, VistaNuevoAlumno) {
  var alumno1 = new Alumno({ nombre: 'Alumno 1' }),
      alumno2 = new Alumno({ nombre: 'Alumno 2' }),
      alumno3 = new Alumno({ nombre: 'Alumno 3' }),
      alumnos = new Alumnos();

  alumnos.on('add', function(model) {
    console.log('Elemento agregado a la colección: ', model);
  });

  alumnos.on('remove', function(model) {
    console.log('Elemento eliminado de la colección: ', model);
  });

  alumnos.on('reset', function(model) {
    console.log('La colección ha sido reiniciada');
  });

  alumnos.on('change', function(model) {
    console.log('Un modelo de la colección ha sido modificada', model);
  });

  alumnos.add([alumno1, alumno2]);
  alumnos.set([alumno1, alumno2, alumno3]);

  alumno1.set('nombre', 'Pepito');
  alumno2.set('nombre', 'Juanito');

  alumnos.reset([]);

  /*alumno1.on('change:nombre', function() {
    console.log('Cambiado a: ', this.get('nombre'));
  });

  alumno1.on('invalid', function() {
    console.log('Validación fallida', arguments);
  });

  console.log('¿Tiene nombre?', alumno1.has('nombre'));
  console.log('¿Es válido?', alumno1.isValid());

  alumno1.set('nombre', 'Pepito');

  console.log('¿Tiene nombre?', alumno1.has('nombre'));
  console.log('Nombre anterior', alumno1.previous('nombre'));
  console.log('¿Ha cambiado?', alumno1.hasChanged('nombre'));
  console.log('¿Es válido?', alumno1.isValid());

  alumno1.set('edad', 23);

  console.log('¿Es válido?', alumno1.isValid());

  alumno1.save();

  alumno1.set('nombre', 'Juanito');

  alumno1.save();*/
  var vistaAlumno = new VistaAlumno({
    model: alumno1
  });

  alumno1.set('nombre', 'Pepito');
  alumno1.set('apellido', 'Perez');
  alumno1.set('edad', 23);

  var vistaNuevoAlumno = new VistaNuevoAlumno();
});