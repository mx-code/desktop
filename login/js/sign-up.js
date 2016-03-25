var app = angular.module('myApp', ['ngResource']);
app.controller('myCtrl', ['$scope', '$resource', '$location', function($scope, $resource, $location) {
    $scope.show = function() {
        $scope.boo = !angular.equals($scope.form.psd1, $scope.form.psd2);
    };
    $scope.form = {
        sex: 'male'
    };
    $scope.formSubmit = function() {
        $scope.myForm.invalid = $scope.myForm.$invalid;
        if ($scope.myForm.$valid) {
            var User = $resource('sign-in.html', 'save');
            User.save($scope.form, function(data) {
                location.href = '../index/index.html';
                localStorage.setItem('id', $scope.form.name);
                // localStorage.setItem($scope.form.name, $scope.form.psd1);// 本地
            }, function(data) {
                console.log('失败')
            });
        }
    };
    $scope.regex = '[1][0-9]{10}';
    // app.config(['$resourceProvider', function($resourceProvider) {
    //     $resourceProvider.defaults.stripTrailingSlashes = false;
    // }]);
}]);