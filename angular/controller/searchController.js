myapp.controller('searchController',["$stateParams", function($stateParams){
	var self = this;
	self.query = $stateParams.query;
}])