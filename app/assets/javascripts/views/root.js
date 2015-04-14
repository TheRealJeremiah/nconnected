Nconnected.Views.Root = Backbone.CompositeView.extend({
  template: JST["root/root"],
  className: "main-page clearfix",
  events: {
    "submit form": "search",
    "keyup form": "liveSearch",
    "blur form": "removeResults"
  },
  initialize: function () {
    this.listenTo(this.collection, "add", this.addResult);
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
  },
  liveSearch: function (event) {
    var term = $(event.currentTarget).serializeJSON()['term'];
    this.collection.reset()
    this.removeSubviews();
    $('.live-search-results').removeClass('hidden-search');
    this.collection.fetch({data: {title_search: term}})
  },
  addResult: function (model) {
    var resultView = new Nconnected.Views.LiveSearchResult({model: model});
    this.addSubview('.live-search-results', resultView)
  },
  removeResults: function (event) {
    this.removeSubviews();
    $('.live-search-results').addClass('hidden-search');
  }
})
