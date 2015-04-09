Nconnected.Views.PostItem = Backbone.CompositeView.extend({
  template: JST['posts/item'],
  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  }
});
