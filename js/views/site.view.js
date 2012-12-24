//the views template
(function() {
	define([
		'views/demo/demoView',	
		'views/demo2/demo2View',
	],function(demo, demo2) {
		return {
			Default : demo,
			Demo2 : demo2,
		};
	});
})();
