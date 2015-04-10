Nconnected.Views.MyFeed = Backbone.CompositeView.extend({
  template: JST['user/feed'],
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
