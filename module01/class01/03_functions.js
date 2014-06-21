function suma(a, b) {
  var total = 0;

  for (var i = 0; i < arguments.length; i++) {
    total = total + arguments[i];
  }

  return total;
}

suma(1, 2, 3, 4);

function promedio() {
  var total = 0;

  for (var i = 0; i < arguments.length; i++) {
    total = (total + arguments[i]);
  }

  total = total / arguments.length;

  return total;
}

promedio(15, 20);
promedio.apply(this, [15, 20]);

function sumarImpares() {
  var argumentsComoArreglo = [].slice.apply(arguments, [0]);

  var numeros = argumentsComoArreglo.filter(function(numero) {
    return numero % 2 === 1;
  });

  var total = 0;

  for (var i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }

  return total;
}