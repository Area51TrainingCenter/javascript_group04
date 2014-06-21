function Usuario(atributos) {
  var nombresAtributos = Object.keys(atributos);

  for (var i = 0; i < nombresAtributos.length; i++) {
    var nombresAtributo = nombresAtributos[i];

    this[nombresAtributo] = atributos[nombresAtributo];
  }
}

Usuario.prototype.saludar = function () {
  return "hola, mi nombre es " + this.nombre;
};

var usuario1 = new Usuario({
  nombre: 'Gustavo',
  apellido: 'Leon',
  email: 'gustavo@xenda.pe'
});