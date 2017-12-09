myapp.controller('searchController',["$stateParams",'getdata', function($stateParams,getdata){
	var self = this;
	self.query = $stateParams.q;


	self.action = "Books";
	self.data = getdata.load();
	self.selected = undefined;
	self.search = self.data.books;
	self.filterVisibility = true;
	self.filters = [];

	self.Filtersettings = { checkBoxes: true, };


	self.buttonName = function(name) {
		self.action = name;
		if (name === "Books") {		
			self.search = self.data.books;
			self.filterVisibility = true;
		}else if (name === "Characters") {		
			self.search = self.data.characters;			
			self.filterVisibility = false;
			self.filters = ["Gender", "Culture", "IsAlve"];
		}else if (name === "Houses") {		
			self.search = self.data.houses;
			self.filterVisibility = false;
			self.filters = ["Region", "HasWords", "HasTitles" , "HasAncestoralWeapons", "HasDiedOut"];
		} else {

		};
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