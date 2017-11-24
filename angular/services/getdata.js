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
          self.data.houses = response.data.map(function(house){ return house; });
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
      })
		}
	};

	self.loadAllbooks = function() {
		for (var i = 1; i <= 2; i++) {
			$http.get('https://www.anapioficeandfire.com/api/books?page='+i+'&pageSize=10').then(function successCallback(response){
          // this callback will be called asynchronously
          // when the response is available
          self.data.books = response.data.map(function(book){ return book; });console.log(response.data);
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
          self.data.characters = response.data.map(function(character){ return character;  console.log('hi')});
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
      })
		}
	};

	self.loadAllcharacters();
	self.loadAllbooks();
	self.loadAllhouses();
}])