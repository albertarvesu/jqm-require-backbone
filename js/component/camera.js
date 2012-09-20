define([
	'jquery',
	'underscore',
	'backbone'
	],
	function($, _, Backbone) {
	
		var Camera = Backbone.View.extend({

			src: null, //the picture source
			destType: null, //format of the destination value

			initialize: function onInitialize() {
				_.bindAll(this);
				this.src = navigator.camera.PictureSourceType;
				this.destType = navigator.camera.DestinationType;
			},
			
			capture: function onCapture() {
				navigator.camera.getPicture(this.dataSuccess, this.fail, {
						quality: 50, allowEdit : true,
						destinationType: this.destType.DATA_URL 
				});
			},
			
			dataSuccess: function onDataSuccess(imageData) {
				$('#largeImage').show().attr("src", "data:image/jpeg;base64," + imageData);
			},

			browse: function onBrowse() {
				navigator.camera.getPicture(this.uriSucess, this.fail, { 
						quality: 50, 
						destinationType: this.destType.FILE_URI,
						sourceType: this.src.PHOTOLIBRARY 
				});
			},

			uriSucess: function onURISuccess(imageURI) {
				$('#largeImage').show().attr("src", imageURI);
			},

			fail: function onFail(message) {
				alert('Failed because: ' + message);
			}

		});

		return new Camera;
		
	});
