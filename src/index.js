import angular from 'angular';
require('angular-route');
require('oclazyload');

var app = angular.module('app', ['ngRoute', 'oc.lazyLoad']);

require('./controllers/home/home.controller.js')

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: './partials/home/index.html',
            controller:  'homeCtrl'
        })
        .when("/lazy", {
            templateUrl: './partials/lazy/index.html',
            controller: 'lazyCtrl',
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('./lazy.bundle.min.js')
                }]
            }
        })
})

app.run(function ($rootScope) {
    $rootScope.$on('ocLazyLoad.moduleLoaded', function(e, module) {
        console.log('module name : ', module);
    });

    $("body").append("<p> Hello from Jquery </p>");

    console.log(window)
})