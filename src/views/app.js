var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.listenTo(this.videos, 'sync', this.selectThat);
    this.render(); // why this.videos instead of collection???
                    // why using 'sync?????'
  },

  selectThat: function() {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    }
  },

  render: function() {
    //render videolist
    this.$el.html(this.template());

    new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    }).render();
    // debugger;
    new VideoPlayerView({
      model: this.videos.at(0),
      collection: this.videos,
      el: this.$('.player')
    }).render();
    return this;
    // return this;
  },

  template: templateURL('src/templates/app.html')
    
});

 
