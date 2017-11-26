myapp.controller('homeController', ["getdata", function(getdata){
	var self = this;
	self.action = "Books";
	self.data = getdata.load();
	self.selected = undefined;

	self.buttonName = function(name) {
		self.action = name;
		if (name === "Books") {		
			self.search = self.data.books;
		}else if (name === "Characters") {		
			self.search = self.data.characters;
		}else if (name === "Houses") {		
			self.search = self.data.houses;
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

}]);