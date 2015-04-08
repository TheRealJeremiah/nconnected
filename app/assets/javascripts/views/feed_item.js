Nconnected.Views.FeedItem = Backbone.View.extend({
  template: JST['feeds/item'],
  events: {
    "click .feed-item-subscribe": "subscribe"
  },
  render: function () {
    var content = this.template({feed: this.model});
    this.$el.html(content);
    return this;
  },
  subscribe: function (event) {
    event.preventDefault();
    var subscription = new Nconnected.Models.Subscription()
    subscription.save({feed_id: this.model.id},{
      success: function () {
        console.log("success")
      }
    })
  }
});
