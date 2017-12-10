myapp.controller('ModaldCtrl',["$stateParams",'fetchsingledata','$uibModal','$log','$document', function (fetchsingledata,$uibModal, $log, $document) {
  var $ctrl = this;
  self.inputurl = $stateParams.q;
  self.inputurltype = $stateParams.u; 


  $rootScope.$on("Callmodalopen", function(){
    $ctrl.fetchdata(self.inputurl, self.inputurltype);
    $ctrl.open();
  });


  $ctrl.animationsEnabled = true;

  $ctrl.fetchdata = function (baseurl,urltype) {
    $ctrl.item = fetchsingledata.loadData(baseurl,urltype); console.log($ctrl.item);
    fetchsingledata.setdata($ctrl.item);
  }

  $ctrl.open = function (size, parentSelector) {
    $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title-bottom',
      ariaDescribedBy: 'modal-body-bottom',
      templateUrl: 'myModalContent.html',
      size: 'lg',
      controller: function($scope,fetchsingledata,$uibModalInstance) {
        $scope.item = fetchsingledata.getdata();
        $scope.ok = function () {
          $uibModalInstance.close();
        };
        $scope.arrayhide = function(value){
          var x = Array.isArray(value);
          return x;
        }
        $scope.valuehide = function(value){
          var x = (value == null || value == undefined || value == "" || value == []);
          return x;
        }
      }
    });

  };

}]);
