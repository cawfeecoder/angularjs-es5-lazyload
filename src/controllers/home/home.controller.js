import angular from 'angular';

const home = angular.module('app')

function homeCtrl($scope) {
    $scope.test = "Hello World";

    $("body").append("Jquery is now globally avaialble")
}

home.controller('homeCtrl', homeCtrl)

module.exports = home;