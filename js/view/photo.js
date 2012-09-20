define([
	'jquery',
	'underscore',
	'backbone',
	'component/camera'
	],
	function($, _, Backbone, Camera) {
		var Photo = Backbone.View.extend({
			el: $("#photoControl"),
			events: {
				'click #capture': 'capture',
				'click #browse': 'browse'
			},

			capture: function onCapture() {
				Camera.capture();
			},

			browse: function onBrowse() {
				Camera.browse();
			}
		});
		return new Photo;
	});
