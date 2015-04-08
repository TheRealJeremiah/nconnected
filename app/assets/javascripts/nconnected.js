window.Nconnected = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Nconnected.Routers.Router({
      $rootEl: $("#content"),
      feeds: new Nconnected.Collections.Feeds()
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Nconnected.initialize();
});
