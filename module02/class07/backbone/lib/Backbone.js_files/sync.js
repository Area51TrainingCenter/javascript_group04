define(['backbone'], function(Backbone) {
  Backbone.sync = function(method, model, options) {
    if (method === 'create') {
      localStorage.setItem(model.cid, model.toJSON());
    }
    console.log(method, model, options);
  };
});