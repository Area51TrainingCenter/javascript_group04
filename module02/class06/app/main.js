require([
  'modelos/alumno',
  'colecciones/alumnos',
  'vistas/vista_alumno',
  'vistas/vista_index'
], function(Alumno, Alumnos, VistaAlumno, VistaIndex) {
  var alumno = new Alumno(),
      alumnos = new Alumnos(),
      vistaAlumno = new VistaAlumno(alumno),
      vistaIndex = new VistaIndex(alumnos);

  alumno.set('email', 'gustavo@xenda.pe');
  alumnos.add(alumno);

  var divIndex = vistaIndex.render().el[0];
  document.body.appendChild(divIndex);

  //var divAlumno = vistaAlumno.render().el[0];
  //document.body.appendChild(divAlumno);
  //console.log('main.js', alumno, alumnos);
});