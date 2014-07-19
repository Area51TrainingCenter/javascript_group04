var Calc = {};

Calc.sumar = function() {
  var sumandos = arguments,
      suma = 0;

  if (sumandos.length < 2) {
    throw new Error("Solo se suman dos números a más");
  }

  for (var i = 0; i < sumandos.length; i++) {
    suma = suma + sumandos[i];
  }

  return suma;
};