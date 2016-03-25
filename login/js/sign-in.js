 var app = angular.module('app', []);
 app.controller('myCtrl', function($scope) {
     $scope.show = false;
     $scope.matching = function() {
         var name = localStorage.getItem('id');
         // var name = localStorage.getItem($scope.username); //本地
         if (!angular.equals(name, $scope.username)) {
             $scope.show = true;
         } else {
             $scope.show = false;
         }
     };
     $scope.login = function() {
         $scope.myForm.invalid = $scope.myForm.$invalid;
         if ($scope.myForm.$valid) {
             console.log('go');
             // if (angular.equals($scope.username, $scope.psd)) { //本地
             //     console.log('yes');
             // }
         }
         $scope.show = false;
     };
 });