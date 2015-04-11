Nconnected.Collections.Posts = Backbone.Collection.extend({
  initialize: function (models, options) {
    this.feed = options.feed;
    this.userPosts = options.userPosts;
  },
  comparator: function (post) {
    post.get('published');
  },
  parse: function (response) {
    return response.posts;
  },
  model: Nconnected.Models.Post,
  url: function () {
    if (this.userPosts) {
      return '/api/posts'
    } else {
      return '/api/feeds/' + this.feed.id + '/posts';
    }
  }
});
