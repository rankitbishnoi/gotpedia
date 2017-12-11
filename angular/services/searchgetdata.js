myapp.service('searchgetdata', ['$http', function($http){
	var self = this;

	self.loadAllbooks = function() {        // function to load all the data of books from server to show in serach.html
		self.data = [];
		for (var i = 1; i <= 2; i++) {
			$http.get('https://www.anapioficeandfire.com/api/books?page='+i+'&pageSize=10').then(function successCallback(response){
          // this callback will be called asynchronously
          // when the response is available
          response.data.forEach(function(book){  // to only copy the url and name of the particular data for use of display purpose while performing typeahead functionality
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
		return self.data;
	};

	self.loadAllcharacters = function(query) {   // function to load all on the basis of filter provided the data of Characters from the server to show in search.html
		self.data = [];

		for(let i = 1; i <= 214; i++){
			$http.get('https://www.anapioficeandfire.com/api/characters?page='+i+'&pageSize=10'+query).then(function successCallback(response){
          // this callback will be called asynchronously
          // when the response is available
          if (response.data.name != "" || response.data.name != undefined || response.data.name != null) {  // to stop copying when the response is an empty array
          	response.data.forEach(function(character){    // to only copy the url and name of the particular data for use of display purpose while performing typeahead functionality
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
		}
		return self.data;
	};

	self.loadAllhouses = function(query) {        // function to load all the data of Houses  on the basis of filter provided from the server to show in search.html
		self.data = [];

		for(let i = 1; i <= 45; i++){
			$http.get('https://www.anapioficeandfire.com/api/houses?page='+i+'&pageSize=10'+query).then(function successCallback(response){
          // this callback will be called asynchronously
          // when the response is available
          if (response.data.name != "" || response.data.name != undefined || response.data.name != null){   // to stop copying when the response is an empty array
          	response.data.forEach(function(house){          	// to only copy the url and name of the particular data for use of display purpose while performing typeahead functionality
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
		}
		return self.data;
	};
}])