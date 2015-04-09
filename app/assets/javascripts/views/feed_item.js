Nconnected.Views.FeedItem = Backbone.CompositeView.extend({
  template: JST['feeds/item'],
  events: {
    "click .feed-item-subscribe": "subscribe",
    "click .feed-item-unsubscribe": "unsubscribe"
  },
  initialize: function () {
    this.listenTo(this.model, "change", this.render)
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
      success: function (model) {
        this.model.set({
          subscribed: true,
          subscriptionId: model.id});
        this.model.trigger("change");
      }.bind(this),
      error: function () {
        console.log("please log in")
      }
    })
  },
  unsubscribe: function (event) {
    event.preventDefault();
    var subscription = new Nconnected.Models.Subscription({id: this.model.get('subscriptionId')});
    subscription.destroy({
      success: function () {
        this.model.set({
          subscribed: false,
          subscriptionId: false});
        this.model.trigger("change");
      }.bind(this)
    });
  }
});
