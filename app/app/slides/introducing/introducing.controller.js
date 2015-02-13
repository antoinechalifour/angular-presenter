(function(){
  'use strict';

  angular.module('app')

  // .config(['$stateProvider', function($stateProvider){
  //   $stateProvider.state('introducing', {
  //     url: '/introducing',
  //     templateUrl: 'app/introducing/introducing.template.html',
  //     controller: 'IntroducingCtrl'
  //   });
  // }])

  .controller('IntroducingCtrl', ['$scope', function($scope){
    $scope.advices = ['Don\'t read them', 'Dont\' write too much'];
  }]);
})();
