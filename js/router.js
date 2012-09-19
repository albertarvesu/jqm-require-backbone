define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone) {
	console.log(arguments);
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
