var alumno = {
  nombre: 'Pepito',
  apellido: 'Pepito',
  telefono: 1234,
  notas: [15, 20]
};

alumno.notasComoObjeto = {
  taller1: 15,
  taller2 :20
};

alumno.edad = 23;

typeof alumno.edad;
alumno.edad instanceof Number;

alumno.notas instanceof Array;
alumno.notas instanceof Object;