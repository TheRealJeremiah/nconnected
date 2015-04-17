Nconnected.Views.FeedFullDirect = Backbone.CompositeView.extend({
  template: JST['feeds/fullDirect'],
  className: 'feed-full-container',
  events: {
    "click .feed-full-subscribe": "subscribe",
    "click .feed-full-unsubscribe": "unsubscribe"
  },
  initialize: function () {
    this.collection = this.model.posts();
    this.collection.fetch();
    this.listenTo(this.collection, "add", this.addPostView.bind(this));
    this.listenTo(this.model, "sync change", this.render);
    this.collection.each(this.addPostView.bind(this));
  },
  render: function () {
    var content = this.template({feed: this.model});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
  addPostView: function (post) {
    var view = new Nconnected.Views.PostItem({model: post});
    this.addSubview('.feed-posts', view);
  },
  subscribe: function (event) {
    event.preventDefault();
    var subscription = new Nconnected.Models.Subscription()
    subscription.save({feed_id: this.model.id},{
      success: function (model) {
        this.model.set({
          subscribed: true,
          subscriptionId: model.id});
        // this.subscription = //TA: set it here? just a thought...
      }.bind(this),
      error: function () { // TA: check for 403 status code specifically
        console.log("please log in");
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
          subscriptionId: false}); // tA: null
      }.bind(this)
    });
  }
});
