Nconnected.Views.FeedFull = Backbone.CompositeView.extend({
  template: JST['feeds/full'],
  className: 'feed-full-container modal fade',
  // events: {
  //   "click .feed-modal-subscribe": "subscribe",
  //   "click .feed-modal-unsubscribe": "unsubscribe",
  //   "click .close": "dismissModal"
  // },
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
  dismissModal: function (event) {
    event.preventDefault();
    this.$el.modal("toggle");
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
