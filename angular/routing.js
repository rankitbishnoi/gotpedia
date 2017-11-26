myapp.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES
        .state('home', {
            url: '/home',
            templateUrl: 'angular/view/home.html',
            controller: "homeController",
            controllerAs: 'myHome'
        })

        .state('search', {
            url: '/search?q',
            templateUrl: 'angular/view/Search.html',
            controller: 'searchController',
            controllerAs: 'mySearch'
        })
}]);