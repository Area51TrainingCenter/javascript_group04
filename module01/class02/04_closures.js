// function suma() {
//   var resultadoSuma = 0;

//   for (var i = 0; i < arguments.length; i++) {
//     if (i == 0) {
//       arguments[i] = arguments[i] * 2;
//     }
//     resultadoSuma = resultadoSuma + arguments[i];
//   }

//   return resultadoSuma;
// };

// suma = function () { return 0; };

function promedio() {
  function suma() {
    var resultadoSuma = 0;

    for (var i = 0; i < arguments.length; i++) {
      if (i == 0) {
        arguments[i] = arguments[i] * 2;
      }|
      resultadoSuma = resultadoSuma + arguments[i];
    }

    return resultadoSuma;
  };

  var total = suma.apply(this, arguments);

  return total / arguments.length;
}