var appValidForm = angular.module('appValidForm',[]);
appValidForm.controller('formCtrl', ['$scope',function($scope) {
  $scope.userMail = 'mail@example.com';
}]);
