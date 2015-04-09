Nconnected.Views.FeedFull = Backbone.CompositeView.extend({
  template: JST['feeds/full'],
  className: 'feed-full-container clearfix',
  initialize: function () {
    this.collection = this.model.posts();
    this.collection.fetch();
    this.listenTo(this.collection, "add", this.addPostView.bind(this));
    this.listenTo(this.model, "sync", this.render);
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
  }
});
