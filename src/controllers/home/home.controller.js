import angular from 'angular';

const home = angular.module('app')

function homeCtrl($scope) {
    $scope.test = "Hello World";
}

home.controller('homeCtrl', homeCtrl)

module.exports = home;