myapp.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES
        .state('home', {
            url: '/home',
            templateUrl: 'angular/view/home.html',
            controller: "homeController",
            controllerAs: "myhome"
        })
}]);