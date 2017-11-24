myapp.service('getdata', ['$http', function($http){
	var self = this;
	var baseurl = ;
	self.loadAllData = function() {
		return $http.get(baseurl);
	}
}])