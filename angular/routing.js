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
            url: '/search/:q/:u',
            templateUrl: 'angular/view/search.html',
            controller: 'searchController',
            controllerAs: 'mySearch',
            onEnter: function($rootScope){
                $rootScope.$broadcast("Callmodalopen", {});
            }
    })
    }]);