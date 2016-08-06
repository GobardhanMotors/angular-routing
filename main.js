var app = angular.module("myapp",['ngRoute']);

app.controller("myRouteController", ['$scope', function (scope) {
	scope.titel = 'Angular Routing Example';
}]);

// create the controller and inject Angular's $scope
 

app.config(function($routeProvider, $locationProvider){
	//
	//$routeProvider.when('url', {templateUrl : '', controller : ''});
	$routeProvider.when('/', {
                templateUrl : 'views/home.html',
                controller  : 'homeController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'views/about.html',
                controller  : 'aboutController'
            })

            // route for the Profile page
            .when('/profile', {
                templateUrl : 'views/profile.html',
                controller  : 'profileController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'views/contact.html',
                controller  : 'contactController'
            })
            // route for the contact page
            .when('/terms', {
                templateUrl : 'views/terms.html',
                controller  : 'termsController'
            })
            // route for the contact page
            .when('/privacy', {
                templateUrl : 'views/privacy.html',
                controller  : 'privacyController'
            })
            .otherwise({redirectTo: '/'});
            //$locationProvider.html5Mode(true);


});