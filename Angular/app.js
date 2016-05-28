//var ngWaste = angular.module('ngWaste',['ngMessages', 'ngRoute']);
var ngWaste = angular.module('ngWaste',['ngMessages','ngRoute','ui.bootstrap','ng-fusioncharts']);

ngWaste.config(['$locationProvider', '$routeProvider',function($location, $routeProvider) {
        $routeProvider
// route for the home page
            .when('/', {
                templateUrl : 'pages/Schedule.html',
                controller  : 'wasteControllers'
            })

            // route for the about page
            .when('/register', {
                templateUrl : 'pages/register.html',
                controller  : 'wasteControllers'
            })

            // route for the contact page
            .when('/login', {
                templateUrl : 'pages/login.html',
                controller  : 'wasteControllers'
            })

            .when('/dashboard', {
                templateUrl : 'pages/dashboard.html',
                controller  : 'wasteControllers'
            })

            .when('/schedule', {
                templateUrl : 'pages/Schedule.html',
                controller  : 'wasteControllers'
            })

            .otherwise ({
                redirectTo: '/about'
            });
    }]);




