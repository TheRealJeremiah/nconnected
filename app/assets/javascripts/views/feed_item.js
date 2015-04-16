Nconnected.Views.FeedItem = Backbone.CompositeView.extend({
  template: JST['feeds/item'],
  events: {
    "click .feed-item-subscribe": "subscribe",
    "click .feed-item-unsubscribe": "unsubscribe",
    "click .feed-item-title": "handleModal"
  },
  initialize: function () {
    this.listenTo(this.model, "change", this.render)
  },
  render: function () {
    var content = this.template({feed: this.model});
    this.$el.html(content);
    this.attachSubviews();
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
  },
  addModal: function (feed) {
    var modalView = new Nconnected.Views.FeedFull({model: feed});
    this.addSubview('.modal-container', modalView);
  },
  handleModal: function (event) {
    event.preventDefault();
    if (!this.$el.find('.modal').length) {
      this.addModal(this.model); // only do once
    }
    this.$el.find('.modal').prop('class', 'modal fade') // revert to default
    this.$el.find('.modal').modal('show');
  }
});
