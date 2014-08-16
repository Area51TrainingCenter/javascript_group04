define(['backbone',
  'modelos/alumno'], function(Backbone, Alumno) {
  var plantilla = $('#plantilla_alumno').html();

  var VistaAlumno = Backbone.View.extend({
    tagName: 'div',
    template: _.template(plantilla),
    className: 'alumno',
    events: {
      'click': 'irADetalle',
      'click strong': 'editarPropiedad'
    },
    initialize: function(options) {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function() {
      this.$el.html('');

      this.$el.attr('id', 'alumno-' + Date.now());

      var attributes = this.model.toJSON(),
          elementContent = '';

      elementContent = this.template(attributes);

      /*for (var a in attributes) {
        var attributeName = a,
            attributeValue = attributes[a];
        
        elementContent += attributeName + ': ' + attributeValue + '<br/>';
      }*/

      this.$el.html(elementContent);
      $('body').append(this.$el);

      return this;
    },
    irADetalle: function(e) {
      location.hash = "alumnos/" + this.$el.attr('id').replace('alumno-', '');
    },
    editarPropiedad: function(e) {
      var attributeName = e.target.textContent.replace(':', '').trim().toLowerCase();
      this.model.set(attributeName, prompt('Editar ' + attributeName));
    }
  });

  return VistaAlumno;
});