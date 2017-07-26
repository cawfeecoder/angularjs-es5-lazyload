webpackJsonp([1],{

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _angular = __webpack_require__(0);

var _angular2 = _interopRequireDefault(_angular);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lazy = _angular2.default.module('app');

function lazyCtrl($scope) {
    $scope.msg = "Lazy Component";
}

lazy.controller('lazyCtrl', lazyCtrl);

module.exports = lazy;

/***/ })

},[8]);
//# sourceMappingURL=lazy.bundle.js.map