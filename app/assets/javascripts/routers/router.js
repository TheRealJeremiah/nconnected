Nconnected.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.feeds = options.feeds;
    this.feeds.fetch();
  },
  routes: {
    "": "root",
    "search/:term": "search"
  },

  root: function () {
    var view = new Nconnected.Views.Root();
    this.$rootEl.html(view.render().$el);
  },

  search: function (term) {
    var filtered = this.feeds
    var view = new Nconnected.Views.SearchResults({title: term, collection: filtered});
    this.$rootEl.html(view.render().$el);
  }
})
