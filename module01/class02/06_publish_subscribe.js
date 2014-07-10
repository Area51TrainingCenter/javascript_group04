
var PubSub = (function() {
  var canales = {};

  function publicar(canal) {
    // if (arguments.length < 1) {
    //   throw new Error('deben pasarse al menos un parametro');
    // }
    var data = [].slice.call(arguments, 1);

    // if (canal in canales) {}

    if (canales[canal] !== undefined) {
      for(var i = 0 ; i < canales[canal].length; i++) {
        canales[canal][i].apply(null, data);
      }
    }
  }

  function suscribir(canal, callback) {
    if (canales[canal] === undefined) {
      canales[canal] = [];
    }

    // if (typeof callback === 'function') {}

    if (callback instanceof Function) {
      canales[canal].push(callback);
    }
  }

  function desuscribir(canal) {
    canales[canal] = [];
  }

  return {
    publicar: publicar,
    suscribir: suscribir,
    desuscribir: desuscribir
  };
})();