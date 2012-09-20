define([
	'jquery',
	'router',
	'component/camera',
	'view/photo'
	],
	function($, Router, Camera) {

		var initialize = function() {
			Router.initialize();
		}

		return {
			initialize: initialize
		};
	});
