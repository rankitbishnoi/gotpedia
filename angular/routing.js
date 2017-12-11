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
        // SEARCH STATE
        .state('search', {
            url: '/search/:q', // query perameter if defined in the url
            templateUrl: 'angular/view/search.html',
            controller: 'searchController',
            controllerAs: 'mySearch'
    })
    }]);