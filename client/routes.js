angular.module("programmerPer").run(["$rootScope", "$location", function($rootScope, $location) {
    $rootScope.$on("$stateChangeError", function(event, next, previous, error) {
        // We can catch the error thrown when the $requireUser promise is rejected
        // and redirect the user back to the main page
        if (error === "AUTH_REQUIRED") {
            $location.path("/home");
        }
    });
}]);

angular.module("programmerPer").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'client/lib/app.ng.html',
                controller: 'MenuCtrl'
            })
            .state('parties', {
                url: '/parties',
                templateUrl: 'client/parties/views/parties-list.ng.html',
                controller: 'PartiesListCtrl'
            })
            .state('partyDetails', {
                url: '/parties/:partyId',
                templateUrl: 'client/parties/views/party-details.ng.html',
                controller: 'PartyDetailsCtrl',
                resolve: {
                    "currentUser": ["$meteor", function($meteor){
                        return $meteor.requireUser();
                    }]
                }
            })
            /*.state('admin', {
                url: '/admin',
                templateUrl: '',
                controller: 'l',
                resolve: {
                    "currentUser": ["$meteor", function($meteor){
                        return $meteor.requireUser();
                    }]
                }
            })*/
        ;

        $urlRouterProvider.otherwise("");
    }]);