//this script defines the routes set up
(function() {
	define([
		'jquery/jquery',
		'underscore/underscore',
		'backbone/backbone',
		'mustache/mustache',
		'views/site.view',
		'text!tpl/footer.mustache',
	],function($, _, Backbone, Mustache, Views, tpl) {
		var Routes = Backbone.Router.extend({
			//routes setup
			routes : {
				'!/Demo2' : 'Demo2',
				'*actions' : 'defaultRoute',
			}
		});

		//depending on the routes condition 
		var init = function() {
			var selectTab = function(tab) {
				$(".nav li").each(function() {
					$(this).removeClass("active");
				});
				
				$(".nav li").each(function() {
					if($(this).children("a").attr("href").trim() == "#" && tab == "_default") 
						$(this).addClass("active");
					else if($(this).children("a").attr("href").toLowerCase().search(tab.toLowerCase()) > -1)
						$(this).addClass("active");
				});		
			};

			var route = new Routes;
			route.on('route:Demo2', function(lang) {
				if(!lang) 
					lang = "EN";
				selectTab("Demo2");
				var demo2View = new Views.Demo2;
				demo2View.render(lang);
			});	
			route.on('route:defaultRoute', function() {
				selectTab("_default");
				var defaultView = new Views.Default;
				defaultView.render("EN");
			});
			//start backbone history tracker
			Backbone.history.start();
		
			//loads the template for footer
			$("#footer").html(tpl);
		};

		return {
			init : init,
		}

	}); 
})();
