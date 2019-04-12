//on crée une variable message pour déclarer notre module.
//il y'a deux façon de créer alerte

var message = angular.module('message', []);
message.controller('messController', function ($scope, $window) {
  $scope.displayAlert = function(message) {
    $window.alert(message);
  };
});
