Nconnected.Views.PostSwitcher = Backbone.CompositeView.extend({
  tagName: 'li',
  className: 'post-item-small',
  events: {
    'click .favorited-star': 'handleStarClick',
    'click': 'handleClick'
  },
  initialize: function () {
    this.currentView = new Nconnected.Views.PostItemSmall({model: this.model});
    this.isSmall = true;
  },
  render: function () {
    this.$el.html(this.currentView.render().$el);
    return this;
  },
  handleClick: function (event) {
    if (this.isSmall) {
      this.isSmall = false;
      var newView = new Nconnected.Views.PostFull({model: this.model});
      this._swapView(newView);
    } else {
      this.isSmall = true;
      var newView = new Nconnected.Views.PostItemSmall({model: this.model});
      this._swapView(newView)
    }
  },
  handleStarClick: function (event) {
    event.stopPropagation();
    console.log('david rules');
  },
  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$el.html(view.render().$el);
  }
});
