Nconnected.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
  },
  routes: {
    "": "root"
  },

  root: function () {
    var view = new Nconnected.Views.Root();
    this.$rootEl.html(view.render().$el);
  }
})
