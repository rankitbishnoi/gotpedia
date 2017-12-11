myapp.controller('homeController', ["getdata", function(getdata){
	var self = this;
	self.action = "Books";               // model to bind the data type seleted by the user, initially bound to "books"
	self.data = getdata.load();          // to load the data from server using the getdata service and use it to provide typeahead functionality
	self.selected = undefined;             // model to bind the data selected by user after searching
	self.search = self.data.books;           // to set the datatype for typeahead functionality

	self.buttonName = function(name) {     // to chnage the data type on the basis of user selection
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



	self.status = {                            // to provide the ui-bootstrap dropdown functionality in buttons
		isopen: false
	};

	self.toggleDropdown = function($event) {
		$event.preventDefault();
		$event.stopPropagation();
		self.status.isopen = !self.status.isopen;
	};

}]);