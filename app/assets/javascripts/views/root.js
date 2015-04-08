Nconnected.Views.Root = Backbone.View.extend({
  template: JST["root/root"],
  className: "main-page",
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this
  }
})
