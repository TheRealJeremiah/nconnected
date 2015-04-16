Nconnected.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.feeds = options.feeds;
  },
  routes: {
    "": "root",
    "search/:term": "search",
    "feeds/:id": "feed",
    "me": "myFeeds",
    "favorites": "myFavs"
  },

  root: function () {
    var view = new Nconnected.Views.Root({collection: this.feeds});
    this._swapView(view);
  },

  search: function (term) {
    var filtered = new Nconnected.Collections.Feeds();
    filtered.fetch({data: {title_search: term}});
    var view = new Nconnected.Views.SearchResults({title: term, collection: filtered});
    this._swapView(view);
  },

  feed: function(id) {
    var feed = this.feeds.getOrFetch(id)
    var view = new Nconnected.Views.FeedFullDirect({model: feed});
    this._swapView(view);
  },

  myFeeds: function () {
    var posts = new Nconnected.Collections.Posts([], {userPosts: true});
    var view = new Nconnected.Views.MyFeed({title: "My feeds", collection: posts});
    this._swapView(view);
  },

  myFavs: function () {
    var posts = new Nconnected.Collections.Posts([], {userPosts: true, onlyFavs: true});
    var view = new Nconnected.Views.MyFeed({title: "My favorite posts", collection: posts});
    this._swapView(view);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
