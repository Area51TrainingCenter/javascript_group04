require([
  'modelos/alumno',
  'colecciones/alumnos'
], function(Alumno, Alumnos) {
  var alumno = new Alumno(),
      alumnos = new Alumnos();

  alumno.set('email', 'gustavo@xenda.pe');
  alumnos.add(alumno);
  console.log('main.js', alumno, alumnos);
});