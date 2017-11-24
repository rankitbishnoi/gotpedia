myapp.controller('CollapseCtrl', function () {
	var self = this;
	self.isNavCollapsed = true;
	self.isCollapsed = false;
	self.isCollapsedHorizontal = false;

	self.selectedNumber = null;

  // instantiate the bloodhound suggestion engine
  var numbers = new Bloodhound({
  	datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.num); },
  	queryTokenizer: Bloodhound.tokenizers.whitespace,
  	local: [
  	{ num: 'one' },
  	{ num: 'two' },
  	{ num: 'three' },
  	{ num: 'four' },
  	{ num: 'five' },
  	{ num: 'six' },
  	{ num: 'seven' },
  	{ num: 'eight' },
  	{ num: 'nine' },
  	{ num: 'ten' }
  	]
  });

  // initialize the bloodhound suggestion engine
  numbers.initialize();

  self.numbersDataset = {
  	displayKey: 'num',
  	source: numbers.ttAdapter(),
  	templates: {
  		empty: [
  		'<div class="tt-suggestion tt-empty-message">',
  		'No results were found ...',
  		'</div>'
  		].join('\n'),
  	}
  };
  
  self.setValue = function () {
  	self.selectedNumber = { num: 'seven' };
  };
  
  self.clearValue = function () {
  	self.selectedNumber = null;
  };
  
  // Typeahead options object
  self.exampleOptions = {
  	displayKey: 'title'
  };
});