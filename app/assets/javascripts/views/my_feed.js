Nconnected.Views.MyFeed = Backbone.CompositeView.extend({
  template: JST['user/feed'],
  initialize: function (options) {
    this.listenTo(this.collection, 'add', this.addPost.bind(this));
    this.collection.fetch({
      success: function (collection) {
        if (collection.length == 0) {
          $('.user-feed-posts').html('No subscribed feeds');
        }
      }
    })
    this.hasPosts = false;
    this.title = options.title;
  },
  render: function () {
    var content = this.template({title: this.title});
    this.$el.html(content);
    return this;
  },
  addPost: function (post) {
    var view = new Nconnected.Views.PostSwitcher({model: post});
    if (!this.hasPosts) {
      $('.user-feed-posts').empty();
      this.hasPosts = true;
    }
    this.addSubview('.user-feed-posts', view);
  }
});
