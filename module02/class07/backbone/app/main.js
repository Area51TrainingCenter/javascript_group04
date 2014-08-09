require(['modelos/alumno', 'sync'], function(Alumno) {
  var alumno1 = new Alumno();

  alumno1.on('change:nombre', function() {
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

  alumno1.save();

  window.alumno1 = alumno1;
});