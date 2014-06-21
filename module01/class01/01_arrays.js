function agregar(array, elemento) {
  array.push(elemento);

  return array;
}

function eliminar(array) {
  array.pop();

  return array;
}

function insertar(array, elemento, posicion) {
  array.splice(posicion, 0, elemento);

  return array;
}

var arreglo = [];
var elemento = 1;

agregar(arreglo, elemento);
eliminar(arreglo);
insertar(arreglo, elemento, posicion);