Nconnected.Views.SearchResults = Backbone.CompositeView.extend({
  template: JST['search/results'],
  className: 'results',
  events: {
    "submit form": "search"
  },
  initialize: function (options) {
    this.title = options.title;
    this.listenTo(this.collection, "add", this.addFeedView.bind(this))
    this.collection.each(this.addFeedView.bind(this));
  },
  render: function () {
    var content = this.template({title: this.title});
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
  addFeedView: function (feed) {
    var feedItemView = new Nconnected.Views.FeedItem({model: feed});
    this.addSubview('#search-results', feedItemView);
  },
  search: function (event) {
    event.preventDefault();
    var attr = $(event.currentTarget).serializeJSON();
    var term = attr['term'];
    Backbone.history.navigate('#search/'+term, true);
  }
});
