var VideoListEntryView = Backbone.View.extend({

  event: {
  	'click :video-list-entry-title': 'handleClick'//?????
  },

  handleClick: function() {
  	this.model.select();// ?????
  },

  render: function() {
	this.$el.html(this.template(this.model.attributes));
	return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
