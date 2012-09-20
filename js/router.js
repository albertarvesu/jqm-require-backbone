define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {
	var AppRouter = Backbone.Router.extend({
		routes: {
			'': 'start'
		},

		start: function onStart() {
			console.log("start");
		}
	});

	var initialize = function(){
		var app_router = new AppRouter;
		Backbone.history.start();
	};

	return {
		initialize: initialize
	};
});
