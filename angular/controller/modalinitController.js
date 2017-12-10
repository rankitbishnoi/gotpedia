myapp.controller('modalinit', ["$rootScope","$route", function($rootScope,$route){
	var self = this;
	self.$on('$viewContentLoaded', function(){
		if ($route.current.templateUrl != "angular/view/home.html") {
			$rootScope.$broadcast("Callmodalopen", {});
		}
	})
}])