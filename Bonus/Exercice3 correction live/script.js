// On déclare une nouvelle application angular qui s'appelle mailBox.
var mailBox = angular.module('mailBox', ['ngRoute']);
// $rootScope permet de déclarer les tableaux vides dans tout les controlleurs et
// donc de pouvoir utiliser les tableaux dans toutes les vues.
mailBox.run(['$rootScope', function($rootScope){
  // Ici nous créons 4 tableaux vides, un pour le stockage du nom, du sujet, de l'adresse mail et du texte.
    $rootScope.subjectMessageList = [];
    $rootScope.nameMessageList = [];
    $rootScope.mailMessageList = [];
    $rootScope.textAreaMessageList = [];
}]);
// Nous créons ici notre premier controlleur 'formController' qui nous servira à gérer le formulaire.
mailBox.controller('formController', ['$scope', '$rootScope', function($scope, $rootScope){
  // À-ÖØ-öø-ÿ est utilisé pour regrouper l'ensemble des accents existants.
  //le * signifie qu'il peut y avoir ou pas cr que
  $scope.nameRegex = /^[A-Z][a-zÀ-ÖØ-öø-ÿ]+([ \-][A-Z][a-zÀ-ÖØ-öø-ÿ]+)*$/;
  $scope.mailRegex = /^[A-Za-z]+@[a-z]+\.[a-z]+$/ ;
  // Ici nous injectons dans nos tableaux vides les variables name, mail, subject et textArea.
  // Pour cela nous utilisons la fonction 'sendMessage' que nous retrouvons dans le ng-click
  // de notre boutton dans le fichier form.html.
  $scope.sendMessage = function(){
    // Nous 'pushons' $scope.subject dans notre tableau subjectMessageList.
    // Nous retrouvons subject en tant que ng-model de l'input 'sujet' dans form.html.
    $rootScope.subjectMessageList.push($scope.subject);
    $rootScope.nameMessageList.push($scope.name);
    $rootScope.mailMessageList.push($scope.email);
    $rootScope.textAreaMessageList.push($scope.textArea);
  };
}]);
  // Ici nous configurons nos routes. Une pour afficher le contenu du fichier form.html et une seconde
  // pour le contenu de 'mailInfo.html'.
  mailBox.config(function($routeProvider) {
    $routeProvider
    // Pour notre première vue, nous spécifions qu'elle devra apparaitre à la racine ('/' equivalent à '/index.html')
    .when('/', {
      templateUrl: 'view/form.html', // Ici nous spécifions le chemin d'accés de notre fichier "form.html"
      controller: 'formController' // Nous indiquons que notre vue sera géré par le controlleur 'formController'
                                    // cela permet de ne pas indiquer le ng-controller dans notre 'form.html'.
    })
    .when('/mailInfo/:index', { // Cette vue aura une URL se terminant par un index. C'est à dire un chiffres
                                // allant de 0 au nombre de sujet affichés moins un (entre 0 et 5 si nous avons 6 sujets affiché par exemple.)
      templateUrl: 'view/mailInfo.html',
      controller: 'mailInfoController' // Nous indiquons que notre vue sera géré par le controlleur 'mailInfoController'.
    });
  });
  // Ici nous créons notre second controlleur qui permettra de gérer l'affichage du détail des mails.
  // Nous lui spécifions qu'il pourra "utiliser" $scope, $rootScope et $routeParams.
mailBox.controller('mailInfoController', ['$scope', '$rootScope', '$routeParams', function($scope, $rootScope, $routeParams){
  // Nous créons la variable selectSubject dans notre controlelur.
  // Nous définissons qu'elle sera égale au :
  // $routeParams.index de notre tableau subjectMessageList. (array[index])
  // Ainsi selectSubject sera utilisable dans notre fichier mailInfo.
  $scope.selectSubject = $rootScope.subjectMessageList[$routeParams.index];
  $scope.selectName = $rootScope.nameMessageList[$routeParams.index];
  $scope.selectMail = $rootScope.mailMessageList[$routeParams.index];
  $scope.selectTextArea = $rootScope.textAreaMessageList[$routeParams.index];
}]);
