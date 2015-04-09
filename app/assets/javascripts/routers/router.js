Nconnected.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.feeds = options.feeds;
  },
  routes: {
    "": "root",
    "search/:term": "search"
  },

  root: function () {
    var view = new Nconnected.Views.Root();
    this._swapView(view);
  },

  search: function (term) {
    this.feeds.fetch();
    var filtered = this.feeds
    var view = new Nconnected.Views.SearchResults({title: term, collection: filtered});
    this._swapView(view);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
