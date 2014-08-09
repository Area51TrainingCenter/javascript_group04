define(['backbone'], function(Backbone) {
  Backbone.sync = function(method, model, options) {
    if (method === 'create') {
      localStorage.setItem(model.modelName + ':' + model.guid(), JSON.stringify(model.toJSON()));
    }

    if (method === 'update') {
      localStorage.setItem(model.modelName + ':' + model.guid(), JSON.stringify(model.toJSON()));
    }

    if (method === 'delete') {
      localStorage.removeItem(model.modelName + ':' + model.guid());
    }

    console.log(method, model, options);
  };
});