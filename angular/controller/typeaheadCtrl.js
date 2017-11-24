myapp.controller('TypeaheadCtrl',['getdata', function(getdata){
	var _selected;
	var self = this;
	self.data = getdata.self.load()

	self.selected = undefined;
	self.search = self.data.books;
}])