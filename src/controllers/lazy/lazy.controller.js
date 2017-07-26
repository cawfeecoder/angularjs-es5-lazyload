import angular from 'angular';

const lazy = angular.module('app')

function lazyCtrl($scope) {
    $scope.msg = "Lazy Component";
}

lazy.controller('lazyCtrl', lazyCtrl)

module.exports = lazy;