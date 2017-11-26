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
          var obj = {
          	"url" = "";
          	"name" = "";
          };
          response.data.forEach(function(house){
          	obj.url = house.url;
          	obj.name = house.name;
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
          var obj = {
          	"url" = "";
          	"name" = "";
          };
          response.data.forEach(function(book){
          	obj.url = house.url;
          	obj.name = house.name;
          	self.data.books.push(obj); 
          });
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
          var obj = {
          	"url" = "";
          	"name" = "";
          };
          response.data.forEach(function(character){ 
          	obj.url = house.url;
          	obj.name = house.name;
          	self.data.characters.push(obj);
          });
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
      })
		}
	};

	self.load = function(){
		self.loadAllhouses();
		self.loadAllcharacters();
		self.loadAllbooks();
		return self.data;
	}

	console.log(self.data);

}])