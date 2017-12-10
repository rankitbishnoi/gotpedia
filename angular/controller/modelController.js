myapp.controller('ModaldCtrl',['fetchsingledata','$uibModal','$log','$document', function (fetchsingledata,$uibModal, $log, $document) {
  var $ctrl = this;
  $ctrl.data = {};
  $ctrl.items = $ctrl.data;


  $ctrl.animationsEnabled = true;

  $ctrl.open = function (baseurl,urltype,size, parentSelector) {
    $ctrl.data = fetchsingledata.loadData(baseurl,urltype); console.log($ctrl.data);
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.modal-d ' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: parentElem,
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

}]);

// Please note that $uibModalInstance represents a modal window (instance) dependency.
// It is not the same as the $uibModal service used above.

myapp.controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});
