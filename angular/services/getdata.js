myapp.service('getdata', ['$http', function($http){
	var self = this;
	self.data = {
		houses : [],
		characters : [],
		books : []
	}
	self.loadAllhouses = function() {
		for (var i = 1; i <= 45; i++) {
			$http.get('https://www.anapioficeandfire.com/api/houses?page='+i+'&pageSize=10').then(function successCallback(response){
          // this callback will be called asynchronously
          // when the response is available
          response.data.forEach(function(house){ self.data.push(house); });
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
      })
		};console.log(self.data);
	};

	self.loadAllbooks = function() {
		for (var i = 1; i <= 2; i++) {
			$http.get('https://www.anapioficeandfire.com/api/books?page='+i+'&pageSize=10').then(function successCallback(response){
          // this callback will be called asynchronously
          // when the response is available
          self.data.books = response.data.forEach(function(book){ self.data.push(book); });
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
      })
		}
	};

	self.loadAllcharacters = function() {
		for (var i = 1; i <= 214; i++) {
			$http.get('https://www.anapioficeandfire.com/api/characters?page='+i+'&pageSize=10').then(function successCallback(response){
          // this callback will be called asynchronously
          // when the response is available
          self.data.characters = response.data.forEach(function(character){ self.data.push(character); });
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
      })
		}
	};

}])