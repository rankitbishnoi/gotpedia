myapp.service('fetchsingledata', ['$http', function($http){
	var self = this;
	self.dataset = {};       // variable used to exchange data between modal controllers

	self.loadData = function(baseurl,type) {     // function to load data on the basis of the search query and data type provided by the user 
		var obj = {};

		$http.get(baseurl).then(function successCallback(response){
          // this callback will be called asynchronously
          // when the response is available
          if (type === "Houses") {                  // condition to set the data in systematical way, ready to use, if the data type is "houses"
          	obj.Name = response.data.name;
          	obj.Region = response.data.region;
          	obj.CoatOfArms = response.data.coatOfArms;
          	obj.Words = response.data.words;
          	obj.Seats = response.data.seats;
          	if (response.data.currentLord === "") { obj.CurrentLord = ""; }else  //  condition to stop performing $http request if the particular responce entry have not provided an url
          	{
          		$http.get(response.data.currentLord).then(function successCallback(response){    // to convert the data provide y server in url form into the name
          			obj.CurrentLord = response.data.name;
          		});
          	}
          	if (response.data.heir === "") { obj.Heir = ""; }else        //  condition to stop performing $http request if the particular responce entry have not provided an url
          	{
          		$http.get(response.data.heir).then(function successCallback(response){      // to convert the data provide y server in url form into the name
          			obj.Heir = response.data.name;
          		});
          	}
          	if (response.data.overlord === "") { obj.Overlord = ""; }else       //  condition to stop performing $http request if the particular responce entry have not provided an url
          	{
          		$http.get(response.data.overlord).then(function successCallback(response){     // to convert the data provide y server in url form into the name
          			obj.Overlord = response.data.name;
          		});
          	}
          	obj.Founded = response.data.founded;
          	obj.Founder = response.data.founder;
          	obj.DiedOut = response.data.diedOut;
          	obj.AncestralWeapons = response.data.ancestralWeapons;
          	obj.SwornMembers = [];
          	response.data.swornMembers.forEach(function(memberurl){          // the data provided by server is in array of urls, this funcion to fetch the names on the basis of the url providers and convert them in array
          		$http.get(memberurl).then(function successCallback(response){    
          			obj.SwornMembers.push(response.data.name);
          		})
          	})
          }else if(type === "Characters") {   // condition to set the data in systematical way, ready to use, if the data type is "Characters"
          	obj.Name = response.data.name;
          	obj.Culture = response.data.culture;
          	obj.Born = response.data.born;
          	obj.Died = response.data.died;
          	obj.Titles = response.data.titles;
          	obj.Aliases = response.aliases;
          	if (response.data.father === "") { obj.Father = ""; }else       //  condition to stop performing $http request if the particular responce entry have not provided an url
          	{
          		$http.get(response.data.father).then(function successCallback(response){     // to convert the data provide y server in url form into the name
          			obj.Father = response.data.name;
          		});
          	}
          	if (response.data.mother === "") { obj.Mother = ""; }else      //  condition to stop performing $http request if the particular responce entry have not provided an url
          	{
          		$http.get(response.data.mother).then(function successCallback(response){     // to convert the data provide y server in url form into the name
          			obj.Mother = response.data.name;
          		});
          	}
          	if (response.data.spouse === "") { obj.Spouse = ""; }else      //  condition to stop performing $http request if the particular responce entry have not provided an url
          	{
          		$http.get(response.data.spouse).then(function successCallback(response){      // to convert the data provide y server in url form into the name
          			obj.Spouse = response.data.name;
          		});
          	}
          	obj.Allegiances = [];
          	response.data.allegiances.forEach(function(houseurl){      // the data provided by server is in array of urls, this funcion to fetch the names on the basis of the url providers and convert them in array
          		$http.get(houseurl).then(function successCallback(response){
          			obj.Allegiances.push(response.data.name);
          		})
          	});
          	obj.Books = [];
          	response.data.books.forEach(function(bookurl){             // the data provided by server is in array of urls, this funcion to fetch the names on the basis of the url providers and convert them in array
          		$http.get(bookurl).then(function successCallback(response){
          			obj.Books.push(response.data.name);
          		})
          	});
          	obj.TvSeries = response.data.tvSeries;
          	obj.PlayedBy = response.data.playedBy;
          }else if( type === "Books"){                         // condition to set the data in systematical way, ready to use, if the data type is "books"
          	obj.Name = response.data.name;
          	obj.ISBN = response.data.isbn;
          	obj.Authors = response.data.authors;
          	obj.No_Of_Pages = response.data.numberOfPages;
          	obj.Publisher = response.data.publisher;
          	obj.Country = response.data.country;
          	obj.MediaType = response.data.mediaType;
          	obj.Released = response.data.released;
          	obj.Characters = [];
          	response.data.characters.forEach(function(characurl){      // the data provided by server is in array of urls, this funcion to fetch the names on the basis of the url providers and convert them in array
          		$http.get(characurl).then(function successCallback(response){
          			obj.Characters.push(response.data.name);
          		})
          	});
          }


      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          alert("some error occurred. Check the console.");
          console.log(response);
      })

return obj;    // return the data fetched from server to the controller when requested by it to this service-function

}

self.setdata = function(dataset){  // to set the data fetched in self.dataset for inter controller transfer using this service
	self.dataset = dataset;
}

self.getdata = function() {   // to get the data set by other controller in self.dataset for inter controller transfer using this service
	return self.dataset;
}

}])