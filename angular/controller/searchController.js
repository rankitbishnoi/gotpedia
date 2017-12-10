myapp.controller('searchController',["$stateParams", 'searchgetdata', function($stateParams, searchgetdata){
	var self = this;
	self.input = $stateParams.q;
	self.query = "&";


	self.action = "Books";
	self.data = searchgetdata.loadAllbooks();
	self.selected = self.input;
	self.typeahead = self.data;
	self.filterVisibility = true;
	self.filter = [];

	self.Filtersettings = { checkBoxes: true, };


	self.buttonName = function(name) {
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

	self.search = function() {
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



	self.status = {
		isopen: false
	};

	self.toggleDropdown = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		self.status.isopen = !self.status.isopen;
	};

}])