webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(4);
__webpack_require__(6);

var app = _angular2.default.module('app', ['ngRoute', 'oc.lazyLoad']);

__webpack_require__(7);

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when("/home", {
        templateUrl: './partials/home/index.html',
        controller: 'homeCtrl'
    }).when("/lazy", {
        templateUrl: './partials/lazy/index.html',
        controller: 'lazyCtrl',
        resolve: {
            deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load('./lazy.bundle.js');
            }]
        }
    });
});

app.run(function ($rootScope) {
    $rootScope.$on('ocLazyLoad.moduleLoaded', function (e, module) {
        console.log('module name : ', module);
    });
});

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var home = _angular2.default.module('app');

function homeCtrl($scope) {
    $scope.test = "Hello World";
}

home.controller('homeCtrl', homeCtrl);

module.exports = home;

/***/ })
],[1]);
//# sourceMappingURL=app.bundle.js.map