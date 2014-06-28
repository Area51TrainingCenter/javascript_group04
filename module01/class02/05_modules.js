var moduloUsuarios = (function() {
  var usuarios = [];

  function agregarUsuario(usuario) {
    usuarios.push(usuario);
    PubSub.publicar('agregar', usuario);
  }

  return {
    agregar: agregarUsuario,
    listar: function() {
      return usuarios.slice(0);
    }
  };
})();