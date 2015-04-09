Nconnected.Collections.Posts = Backbone.Collection.extend({
  initialize: function (models, options) {
    this.feed = options.feed;
  },
  parse: function (response) {
    return response.posts
  },
  model: Nconnected.Models.Post,
  url: function () {
    return '/api/feeds/' + this.feed.id + '/posts'
  }
});
