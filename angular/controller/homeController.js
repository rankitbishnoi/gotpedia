myapp.controller('homeController', ["getdata", function(getdata){
	var self = this;
	self.action = "Books";
	self.filter = "FilterBy";
	self.filters = [];
	self.actionDone = "Search By";
	self.data = getdata.load();
	self.selected = undefined;

	self.buttonName = function(name) {
		self.action = name;
		if (name === "Books") {
			self.filters = ["name","authors","isbn"];
			self.actionDone = "Search By";			
			self.search = self.data.books;
		}else if (name === "Characters") {
			self.filters = ["gender","culture","isAlive"];
			self.actionDone = "Filter By";			
			self.search = self.data.characters;
		}else if (name === "Houses") {
			self.filters = ["region"];
			self.actionDone = "Filter By";			
			self.search = self.data.houses;
		} else {

		};
	}



	self.filterName = function(index) {
		self.filter = self.filters[index];
	}


	self.status = {
		isopen: false
	};



	self.toggleDropdown = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		self.status.isopen = !self.status.isopen;
	};

}]);