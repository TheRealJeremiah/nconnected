Nconnected.Views.PostFull = Backbone.CompositeView.extend({
  template: JST['posts/full'],
  render: function () {
    var content = this.template({post: this.model});
    this.$el.html(content);
    return this;
  }
});
