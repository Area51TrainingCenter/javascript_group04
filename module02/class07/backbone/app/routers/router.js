define(['backbone'], function(Backbone) {
  var Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'alumnos/:id': 'showAlumno'
    },
    index: function() {
      $('.alumno').show();
    },
    showAlumno: function(id) {
      $('.alumno').hide();
      $('.alumno#alumno-' + id).show();
    }
  });

  return Router;
});