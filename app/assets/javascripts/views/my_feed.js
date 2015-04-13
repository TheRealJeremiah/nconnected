Nconnected.Views.MyFeed = Backbone.CompositeView.extend({
  template: JST['user/feed'],
  initialize: function () {
    this.listenTo(this.collection, 'add', this.addPost.bind(this));
  },
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },
  addPost: function (post) {
    var view = new Nconnected.Views.PostSwitcher({model: post});
    this.addSubview('.user-feed-posts', view);
  }
});
