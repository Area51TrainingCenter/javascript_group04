var PubSub = (function() {
  var canales = {};

  function publicar(canal) {
    var data = [].slice.call(arguments, 1);

    if (canales[canal] !== undefined) {
      for(var i = 0 ; i < canales[canal].length; i++) {
        canales[canal][i].apply(null, data);
      }
    }
  };
  function suscribir(canal, callback) {
    if (canales[canal] === undefined) {
      canales[canal] = [];
    }

    canales[canal].push(callback);
  };
  function desuscribir(canal) {
    canales[canal] = [];
  };

  return {
    publicar: publicar,
    suscribir: suscribir,
    desuscribir: desuscribir
  };
})();