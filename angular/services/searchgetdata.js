myapp.service('searchgetdata', ['$http', function($http){
	var self = this;
	self.data = [];

	self.loadAllbooks = function() {
		for (var i = 1; i <= 2; i++) {
			$http.get('https://www.anapioficeandfire.com/api/books?page='+i+'&pageSize=10').then(function successCallback(response){
          // this callback will be called asynchronously
          // when the response is available
          response.data.forEach(function(book){
          	var obj = {
          		"url" : book.url,
          		"name" : book.name
          	};
          	self.data.push(obj); 
          });
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
      })
		}
	};

	self.loadAllcharacters = function(query) {

		var result;

		do{
			$http.get('https://www.anapioficeandfire.com/api/characters?page='+i+'&pageSize=10'+query).then(function successCallback(response){
          // this callback will be called asynchronously
          // when the response is available
          result = response;
          if (response != []) {
          	response.data.forEach(function(character){ 
          		var obj = {
          			"url" : character.url,
          			"name" : character.name
          		};
          		self.data.push(obj);
          	});
          }
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
      })
		} while( result != []);
	};

	self.loadAllhouses = function(query) {
		var result;

		do{
			$http.get('https://www.anapioficeandfire.com/api/houses?page='+i+'&pageSize=10'+query).then(function successCallback(response){
          // this callback will be called asynchronously
          // when the response is available
          result = response;
          if (response != []){
          	response.data.forEach(function(house){          	
          		var obj = {
          			"url" : house.url,
          			"name" : house.name
          		};
          		self.data.push(obj);
          	});
          }
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
      })
		} while ( result != []);
	};
}])