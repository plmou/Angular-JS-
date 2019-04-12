var appVoiture = angular.module('app', []);
appVoiture.controller('voituresController', function($scope,$http){
  $http.get('voiture.json').then(function(res){
  $scope.voitures=res.data;
});
});
