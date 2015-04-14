Nconnected.Views.LiveSearchResult = Backbone.CompositeView.extend({
  template: JST['search/live'],
  tagName: 'li',
  className: 'live-search-item',
  render: function () {
    var content = this.template({feed: this.model});
    this.$el.html(content);
    return this;
  }
});
