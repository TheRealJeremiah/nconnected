Nconnected.Views.PostItemSmall = Backbone.CompositeView.extend({
  template: JST['posts/item_small'],
  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  }
});
