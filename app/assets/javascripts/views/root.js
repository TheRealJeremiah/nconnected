Nconnected.Views.Root = Backbone.View.extend({
  template: JST["root/root"],
  className: "main-page",
  events: {
    "submit form": "search"
  },
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this
  },
  search: function (event) {
    event.preventDefault();
    var attr = $(event.currentTarget).serializeJSON();
    var term = attr['term'];
    Backbone.history.navigate('#search/'+term, true);
  }
})
