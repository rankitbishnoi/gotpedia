myapp.controller('ModaldCtrl',['fetchsingledata','$uibModal','$log','$document', function (fetchsingledata,$uibModal, $log, $document) {
  var $ctrl = this;
  $ctrl.item = {};


  $ctrl.animationsEnabled = true;

  $ctrl.fetchdata = function (baseurl,urltype) {
    $ctrl.item = fetchsingledata.loadData(baseurl,urltype); console.log($ctrl.item);
    fetchsingledata.setdata($ctrl.item);
  }

  $ctrl.open = function (baseurl,urltype,size, parentSelector) {
    $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title-bottom',
      ariaDescribedBy: 'modal-body-bottom',
      templateUrl: 'myModalContent.html',
      size: 'sm',
      controller: function($scope,fetchsingledata) {
        $scope.item = fetchsingledata.getdata();  console.log($scope.item); console.log(fetchsingledata.getdata());
      }
    });

  };

  $ctrl.ok = function () {
    $uibModalInstance.close();
  };

}]);
