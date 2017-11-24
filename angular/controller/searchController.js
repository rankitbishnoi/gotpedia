myapp.controller('searchController',["$stateParams",'getdata', function($stateParams,getdata){
	var self = this;
	self.query = $stateParams.query;
	self.action = "Books";
	self.filter = "FilterBy";
}])