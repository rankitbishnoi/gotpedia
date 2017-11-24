myapp.controller('TypeaheadCtrl',['getdata', function(getdata){
	var _selected;
	var self = this;

	getdata.loadAllhouses();
	getdata.loadAllbooks();
	getdata.loadAllcharacters();

	self.selected = undefined;
	self.search = getdata.data.books;
}])