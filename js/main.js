require.config({
	baseUrl: 'js',
	paths: {
		"jquery": "lib/jquery-1.7.2.min",
		"mobile": "lib/jquery.mobile-1.1.1",
		"cordova": "lib/cordova-2.0.0",
		"underscore": "lib/underscore",
		"backbone": "lib/backbone",
	},
	shim: {
		backbone: {
			deps: ["underscore", "jquery"]
		}
	}
});
require([
	'app',
	'jquery',
	'mobile',
	'cordova',
	'underscore',
	'backbone'
	], 
	function(App){ 
		//start the app
		App.initialize();
});
