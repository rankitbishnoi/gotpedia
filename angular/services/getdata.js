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
          response.data.forEach(function(house){          	
          	var obj = {
          		"url" : house.url,
          		"name" : house.name
          	};
          	self.data.houses.push(obj);
          });
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
      })
		};
	};

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
          	self.data.books.push(obj); 
          });
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response); break;
      })
		}
	};

	self.loadAllcharacters = function() {
		for (var i = 1; i <= 214; i++) {
			$http.get('https://www.anapioficeandfire.com/api/characters?page='+i+'&pageSize=10').then(function successCallback(response){
          // this callback will be called asynchronously
          // when the response is available
          response.data.forEach(function(character){ 
          	var obj = {
          		"url" : character.url,
          		"name" : character.name
          	};
          	self.data.characters.push(obj);
          });
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response); break;
      })
		}
	};

	self.loadAllhouses();
	self.loadAllcharacters();
	self.loadAllbooks();

	self.load = function(){
		return self.data;
	}

}])