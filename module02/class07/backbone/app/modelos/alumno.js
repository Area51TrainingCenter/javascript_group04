define(['backbone'], function(Backbone) {
  var Alumno = Backbone.Model.extend({
    urlRoot: '/',
    modelName: 'alumnos',
    guid: function() {
      if(!this.has('id')) {
        this.set('id', Date.now());
      }

      return this.get('id');
    },
    validate: function(attrs, options) {
      if (attrs.nombre === '') {
        return 'Nombre no debe ser vacío';
      }

      if (attrs.edad === 0) {
        return 'Edad no debe ser 0';
      }
    },
    defaults: {
      nombre: '',
      apellido: '',
      edad: 0
    }
  });

  return Alumno;
});