require([
  'modelos/alumno',
  'colecciones/alumnos',
  'vistas/vista_alumno'
], function(Alumno, Alumnos, VistaAlumno) {
  var alumno = new Alumno(),
      alumnos = new Alumnos(),
      vistaAlumno = new VistaAlumno(alumno);

  alumno.set('email', 'gustavo@xenda.pe');
  alumnos.add(alumno);

  var divAlumno = vistaAlumno.render().el[0];

  document.body.appendChild(divAlumno);

  console.log('main.js', alumno, alumnos);
});