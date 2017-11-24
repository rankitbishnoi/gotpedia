myapp.controller('TypeaheadCtrl',["getdata", function(getdata){
	var self = this;
	self.data = getdata.load();

	self.selected = undefined;
	self.search = self.data.characters;
}])