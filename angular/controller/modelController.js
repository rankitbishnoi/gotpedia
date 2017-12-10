myapp.controller('ModaldCtrl',['fetchsingledata','$uibModal','$log','$document', function (fetchsingledata,$uibModal, $log, $document) {
  var $ctrl = this;
  $ctrl.items = {};


  $ctrl.animationsEnabled = true;

  $ctrl.open = function (baseurl,urltype,size, parentSelector) {
    $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title-bottom',
      ariaDescribedBy: 'modal-body-bottom',
      templateUrl: 'myModalContent.html',
      size: 'sm',
      controller: function($scope) {
        $scope.item = fetchsingledata.loadData(baseurl,urltype); console.log($scope.items);  
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

}]);
