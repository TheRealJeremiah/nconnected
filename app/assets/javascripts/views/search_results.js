Nconnected.Views.SearchResults = Backbone.View.extend({
  template: JST['search/results'],
  className: 'results',
  events: {
    "submit form": "search"
  },
  initialize: function (options) {
    this.title = options.title;
    this.listenTo(this.collection, "sync", this.render)
  },
  render: function () {
    var content = this.template({title: this.title});
    this.$el.html(content);
    var results = this.$el.find("#search-results")
    this.collection.each(function (feed) {
      var resultView = new Nconnected.Views.FeedItem({model: feed});
      results.append(resultView.render().$el);
    });
    return this;
  },
  search: function (event) {
    event.preventDefault();
    var attr = $(event.currentTarget).serializeJSON();
    var term = attr['term'];
    Backbone.history.navigate('#search/'+term, true);
  }
});
