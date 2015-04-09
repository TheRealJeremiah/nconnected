Nconnected.Models.Feed = Backbone.Model.extend({
  urlRoot: '/api/feeds',
  posts: function () {
    if (!this._posts) {
      this._posts = new Nconnected.Collections.Posts([], {feed: this});
    }
    return this._posts
  }
});
