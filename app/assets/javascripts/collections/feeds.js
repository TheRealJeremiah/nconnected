Nconnected.Collections.Feeds = Backbone.Collection.extend({
  url: "/api/feeds",
  model: Nconnected.Models.Feed,

  byTitle: function (title) {
    filtered = this.filter(function(feed) {
      return feed.get("title").toLowerCase().indexOf(title.toLowerCase()) > -1;
      });
    return new Nconnected.Collections.Feeds(filtered);
  },

  byTag: function () {

  },

  getOrFetch: function (id) {
    var feeds = this;

    var feed;
    if (!(feed = feeds.get(id))) {
      feed = new Nconnected.Models.Feed({id: id});
      feed.fetch({
        success: function (model) {
          feeds.add(model);
          return model
        }
      })
    } else {
      feed.fetch();
    }

    return feed;
  }
})
