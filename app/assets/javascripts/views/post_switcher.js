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
    this.listenTo(this.model, "change", this.render)
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
    if (!this.model.get('favorited')) {
      var favorite = new Nconnected.Models.Favorite();
      favorite.save({post_id: this.model.id}, {
        success: function (model) {
          this.model.set({favorited: true, favoritedId: model.id});
        }.bind(this)
      })
    } else {
      var favorite = new Nconnected.Models.Favorite({id: this.model.get('favoritedId')});
      favorite.destroy({
        success: function () {
          this.model.set({favorited: false, favoriteId: false});
        }.bind(this)
      });
    }
  },
  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$el.html(view.render().$el);
  }
});
