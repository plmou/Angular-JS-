// On déclare une nouvelle application angular qui s'appelle mailBox.
var mailBox = angular.module('mailBox', ['ngRoute']);

mailBox.controller('formController', ['$scope', function($scope){
  // À-ÖØ-öø-ÿ est utilisé pour regrouper l'ensemble des accents existants.
  $scope.nameRegex = /^[A-Z][a-zÀ-ÖØ-öø-ÿ]+([ \-][A-Z][a-zÀ-ÖØ-öø-ÿ]+)*$/;
  $scope.mailRegex = /^[A-Za-z]+@[a-z]+\.[a-z]+$/ ;
  $scope.sendMessage = function(){
    alert('Bouh !');
    //la on stock, le sujet dans une variable on veut le stocker dans un tableau
    $scope.subjectMessage = $scope.Subject;
    $scope.subjectMessage.push($scope.subject);
  };
}]);
