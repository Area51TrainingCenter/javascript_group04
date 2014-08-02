require([
  'modelos/alumno',
  'colecciones/alumnos',
  'vistas/vista_alumno',
  'vistas/vista_nuevo_alumno',
  'vistas/vista_index'
], function(Alumno, Alumnos, VistaAlumno, VistaNuevoAlumno, VistaIndex) {
  var alumno = new Alumno(),
      alumnos = new Alumnos(),
      vistaAlumno = new VistaAlumno(alumno),
      vistaIndex = new VistaIndex(alumnos),
      vistaNuevoAlumno = new VistaNuevoAlumno('#nuevo_alumno_formulario');

  alumno.set('email', 'gustavo@xenda.pe');
  alumnos.add(alumno);

  // var divIndex = vistaIndex.render().el[0];
  // document.body.appendChild(divIndex);

  //var divAlumno = vistaAlumno.render().el[0];
  //document.body.appendChild(divAlumno);
  //console.log('main.js', alumno, alumnos);

  var handleHashChange = function() {
    var hash = location.hash.replace('#', ''),
        contenedor = document.getElementById('contenedor');

    contenedor.innerHTML = '';

    if (hash === 'alumnos/1') {
      var divAlumno = vistaAlumno.render().el[0];
      contenedor.appendChild(divAlumno);
    }
    else if(hash === 'nuevo_alumno') {
      var divNuevoAlumno = vistaNuevoAlumno.render().el[0];
      divNuevoAlumno.style.display = 'block';
      contenedor.appendChild(divNuevoAlumno);
    }
    else {
      var divIndex = vistaIndex.render().el[0];
      contenedor.appendChild(divIndex);
    }
  };

  window.addEventListener('hashchange', handleHashChange);
  handleHashChange();
});