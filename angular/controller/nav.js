myapp.controller('CollapseCtrl',[function () {   // controller used to provide the collapse functionallity in the navbar. as of now there are no menu items in navbar. this is just for future prufing. if we come to add any new items in navbar
	var self = this;
	self.isNavCollapsed = true;
	self.isCollapsed = false;
	self.isCollapsedHorizontal = false;
}]);