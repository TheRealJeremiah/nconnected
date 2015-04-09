Nconnected.Collections.Feeds = Backbone.Collection.extend({
  url: "/api/feeds",
  model: Nconnected.Models.Feed,

  byTitle: function () {

  },

  byTag: function () {

  },

  getOrFetch: function (id) {
    var feeds = this;

    var feed;
    if (!(feed = feeds.get(id))) {
      feed = new feeds.model({id: id});
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
