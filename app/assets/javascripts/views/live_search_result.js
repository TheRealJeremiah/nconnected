Nconnected.Views.LiveSearchResult = Backbone.CompositeView.extend({
  template: JST['search/live'],
  tagName: 'li',
  className: 'live-search-item',
  events: {
    'click': 'redirect'
  },
  render: function () {
    var content = this.template({feed: this.model});
    this.$el.html(content);
    return this;
  },
  redirect: function () {
    $('body').off();
    Backbone.history.navigate('/feeds/' + this.model.id, true);
  }
});
