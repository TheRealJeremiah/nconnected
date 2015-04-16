Nconnected.Collections.Posts = Backbone.Collection.extend({
  initialize: function (models, options) {
    this.feed = options.feed;
    this.userPosts = options.userPosts;
    this.onlyFavs = options.onlyFavs;
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
      if (this.onlyFavs) {
        return '/api/posts?only_favs=true'
      } else {
        return '/api/posts'
      }
    } else {
      return '/api/feeds/' + this.feed.id + '/posts';
    }
  }
});
