myapp.controller('ModaldCtrl',['fetchsingledata','$uibModal','$log','$document', function (fetchsingledata,$uibModal, $log, $document) {
  var $ctrl = this;



  $ctrl.animationsEnabled = true; 

  $ctrl.fetchdata = function (baseurl,urltype) { 
    $ctrl.item = fetchsingledata.loadData(baseurl,urltype);  // to fetch the data from server on the basis of selected item by user for modal
    fetchsingledata.setdata($ctrl.item);                     // to set the data in service so that it can be accessed by modal controller
  }

  $ctrl.open = function (size, parentSelector) {             // function to open the modal
    $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title-bottom',
      ariaDescribedBy: 'modal-body-bottom',
      templateUrl: 'myModalContent.html',                    // a template defined in the Search view - search.html
      size: 'lg',
      controller: function($scope,fetchsingledata,$uibModalInstance) { // modal controller
        $scope.item = fetchsingledata.getdata();                       // getting the data from service, set by the above controller
        $scope.ok = function () {                                      // function to close the modal
          $uibModalInstance.close();
        };
        $scope.arrayhide = function(value){                            // function to provide the boolean value to ng-hide and ng-if to hide the data fetched that is in array from and than display it systematically
          var x = Array.isArray(value);
          return x;
        }
        $scope.valuehide = function(value){                            // function to provide the bollean value to ng-hide to hide he key with no value specified in fetched data
          var x = (value == null || value == undefined || value == "" || value == []);
          return x;
        }
      }
    });

  };

}]);
