myapp.controller('ModaldCtrl',['fetchsingledata','$uibModal','$log','$document', function (fetchsingledata,$uibModal, $log, $document) {
  var $ctrl = this;
  $ctrl.item = {};


  $ctrl.animationsEnabled = true;

  $ctrl.fetchdata = function (baseurl,urltype) {
    $ctrl.item = fetchsingledata.loadData(baseurl,urltype); console.log($scope.item);
  }

  $ctrl.open = function (baseurl,urltype,size, parentSelector) {
    $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title-bottom',
      ariaDescribedBy: 'modal-body-bottom',
      templateUrl: 'myModalContent.html',
      size: 'sm',
      controller: function($scope) {
        $scope.item = $ctrl.item;  

      }
    });

  };

  $ctrl.ok = function () {
    $uibModalInstance.close();
  };

}]);
