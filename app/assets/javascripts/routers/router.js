Nconnected.Routers.Router = Backbone.Router.extend({
  initialize: function(options) {
    this.$rootEl = options.$rootEl;
    this.feeds = options.feeds;
  },
  routes: {
    "": "root",
    "search/:term": "search",
    "feeds/:id": "feed",
    "me": "myFeeds"
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
    this.feeds.fetch({data: {user_feed_only: true}});
    var posts = new Nconnected.Collections.Posts([], {userPosts: true});
    posts.fetch();
    var view = new Nconnected.Views.MyFeed({title: "my feeds", collection: posts});
    this._swapView(view);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
})
