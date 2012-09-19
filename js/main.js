require.config({
	baseUrl: 'js',
	paths: {
		"jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
		"mobile": "lib/jquery.mobile-1.1.1",
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
	'underscore',
	'backbone'
	], 
	function(App){
		//start the app
//		App.initialize();
});
