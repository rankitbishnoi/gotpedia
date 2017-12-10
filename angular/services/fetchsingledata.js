myapp.service('fetchsingledata', ['$http', function($http){
	var self = this;

	self.loadData = function(baseurl,type) {
		var obj = {};

		$http.get(baseurl).then(function successCallback(response){
          // this callback will be called asynchronously
          // when the response is available
          if (type === "Houses") {
          	obj.Name = response.data.name;
          	obj.Region = response.data.region;
          	obj.CoatOfArms = response.data.coatOfArms;
          	obj.Words = response.data.words;
          	obj.Seats = response.data.seats;
          	if (response.data.currentLord === "") { obj.CurrentLord = ""; }else
          	{
          		$http.get(response.data.currentLord).then(function successCallback(response){
          			obj.CurrentLord = response.data.name;
          		});
          	}
          	if (response.data.heir === "") { obj.Heir = ""; }else
          	{
          		$http.get(response.data.heir).then(function successCallback(response){
          			obj.Heir = response.data.name;
          		});
          	}
          	if (response.data.overlord === "") { obj.Overlord = ""; }else
          	{
          		$http.get(response.data.overlord).then(function successCallback(response){
          			obj.Overlord = response.data.name;
          		});
          	}
          	obj.Founded = response.data.founded;
          	obj.Founder = response.data.founder;
          	obj.DiedOut = response.data.diedOut;
          	obj.AncestralWeapons = response.data.ancestralWeapons;
          	obj.SwornMembers = [];
          	response.data.swornMembers.forEach(function(memberurl){
          		$http.get(memberurl).then(function successCallback(response){
          			obj.SwornMembers.push(response.data.name);
          		})
          	})
          }else if(type === "Characters") {
          	obj.Name = response.data.name;
          	obj.Culture = response.data.culture;
          	obj.Born = response.data.born;
          	obj.Died = response.data.died;
          	obj.Titles = response.data.titles;
          	obj.Aliases = response.aliases;
          	if (response.data.father === "") { obj.Father = ""; }else
          	{
          		$http.get(response.data.father).then(function successCallback(response){
          			obj.Father = response.data.name;
          		});
          	}
          	if (response.data.mother === "") { obj.Mother = ""; }else
          	{
          		$http.get(response.data.mother).then(function successCallback(response){
          			obj.Mother = response.data.name;
          		});
          	}
          	if (response.data.spouse === "") { obj.Spouse = ""; }else
          	{
          		$http.get(response.data.spouse).then(function successCallback(response){
          			obj.Spouse = response.data.name;
          		});
          	}
          	obj.Allegiances = [];
          	response.data.allegiances.forEach(function(houseurl){
          		$http.get(houseurl).then(function successCallback(response){
          			obj.Allegiances.push(response.data.name);
          		})
          	});
          	obj.Books = [];
          	response.data.books.forEach(function(bookurl){
          		$http.get(bookurl).then(function successCallback(response){
          			obj.Books.push(response.data.name);
          		})
          	});
          	obj.TvSeries = response.data.tvSeries;
          	obj.PlayedBy = response.data.playedBy;
          }else if( type === "Books"){
          	obj.Name = response.data.name;
          	obj.ISBN = response.data.isbn;
          	obj.Authors = response.data.authors;
          	obj.No_Of_Pages = response.data.numberOfPages;
          	obj.Publisher = response.data.publisher;
          	obj.Country = response.data.country;
          	obj.MediaType = response.data.mediaType;
          	obj.Released = response.data.released;
          	obj.Characters = [];
          	response.data.characters.forEach(function(characurl){
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

return obj;

}

}])