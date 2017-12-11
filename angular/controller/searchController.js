myapp.controller('searchController',["$stateParams", 'searchgetdata', function($stateParams, searchgetdata){
	var self = this;
	self.input = $stateParams.q; // to get the value passed on by the query parameter in url
	self.query = "&"; // variable used to add the additional filters in url while fetching the single data for modals


	self.action = "Books"; // model to define the type of data fetched from server, initially bound to books
	self.data = searchgetdata.loadAllbooks(); // fetching the data using service to perform typeahead function on the base of "self.action"
	self.selected = self.input; // model to bind the seleted value of search input, initially bound to the input came through query parameter in url
	self.typeahead = self.data; //variable to use in typeahead functionality of search bar
	self.filterVisibility = true; // variable used to show and hide the filter selector, as it is not used in books section
	self.filter = [];

	self.Filtersettings = { checkBoxes: true, }; // to select multiple filters , here the functionality of angularjs-dropdown-multiselect liberary is used


	self.buttonName = function(name) { // function to change the filters and loaded data on the basis of "self.action" specified by user.
		self.action = name;
		if (name === "Books") {					
			self.data = searchgetdata.loadAllbooks();
			self.typeahead = self.data;
			self.filterVisibility = true;
			self.filter = [];
		}else if (name === "Characters") {
			self.data = searchgetdata.loadAllcharacters(self.query);
			self.typeahead = self.data;			
			self.filterVisibility = false;
			self.filters = [{ id: 1 , label: "Male"}, { id: 2, label: "Female"}, { id: 3, label: "IsAlve"}];
			self.filter = [];
		}else if (name === "Houses") {		
			self.data = searchgetdata.loadAllhouses(self.query);	
			self.typeahead = self.data;
			self.filterVisibility = false;
			self.filters = [{ id: 1, label: "HasWords"}, { id: 2, label: "HasTitles"}, { id: 3, label: "HasAncestoralWeapons"}, { id: 4, label: "HasDiedOut"}];
			self.filter = [];
		} else {

		};
	}

	self.search = function() { // function to define the "self.query" on the basis of filter choosen by the user and than fetch the data from server.
		let counter = 0;
		if (self.action === "Characters") {
			self.filter.forEach(function(filter){
				if (filter.id === 1) {
					counter++;
					self.query = self.query + "gender=male";
				}else if (filter.id === 2) {
					if (counter > 0) { self.query = self.query + "&gender=female"; counter++;} else { self.query = self.query + "gender=female"; counter++;	}
				}else if (filter.id === 3) {
					if (counter > 0) { self.query = self.query + "&isAlive=true";} else { self.query = self.query + "isAlive=true"}
				}
			});

			self.data = searchgetdata.loadAllcharacters(self.query);
			self.typeahead = self.data;
		}

		if (self.action === "Houses") {
			self.filter.forEach(function(filter){
				if (filter.id === 1) {
					counter++;
					self.query = self.query + "hasWords=true";
				}else if (filter.id === 2) {
					if (counter > 0) { self.query = self.query + "&hasTitles=true"; counter++; } else { self.query = self.query + "hasTitles=true"; counter++; }
				}else if (filter.id === 3) {
					if (counter > 0) { self.query = self.query + "&hasAncestoralWeapons=true"; counter++;} else { self.query = self.query + "hasAncestoralWeapons=true"; counter++;}
				}else if (filter.id === 4) {
					if (counter > 0) { self.query = self.query + "&hasDiedOut=true"; counter++;} else { self.query = self.query + "hasDiedOut=true"; counter++;}
				}
			});

			self.data = searchgetdata.loadAllhouses(self.query);	
			self.typeahead = self.data;
		}


	}



	self.status = {   // ui-bootstrap is used to make the button dropdowns functional
		isopen: false
	};

	self.toggleDropdown = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		self.status.isopen = !self.status.isopen;
	};

}])