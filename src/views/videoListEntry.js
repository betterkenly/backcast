var VideoListEntryView = Backbone.View.extend({
  initalize: function() {
    // this.render();
  }

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
