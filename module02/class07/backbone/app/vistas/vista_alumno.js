define(['backbone',
  'modelos/alumno'], function(Backbone, Alumno) {
  var plantilla = $('#plantilla_alumno').html();
  
  var VistaAlumno = Backbone.View.extend({
    tagName: 'div',
    template: _.template(plantilla),
    className: 'alumno',
    initialize: function(options) {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function() {
      this.$el.html('');

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
    }
  });

  return VistaAlumno;
});