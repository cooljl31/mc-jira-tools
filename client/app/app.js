'use strict';

angular.module('mcJiraToolsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngAnimate',
    'ui.router',
    'ui.bootstrap',
    'ab-base64'
])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider
            .otherwise('/');

        $locationProvider.html5Mode(true);
    })
    .run(function($rootScope, $cookieStore, $location){
        $rootScope.$on('$stateChangeStart', function(event, next){
            if(!$cookieStore.get('auth') && next.templateUrl !== 'app/main/main.html'){
                $location.path('/');
            }
        });
    });

