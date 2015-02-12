(function(){
  'use strict';

  angular.module('app')

  .config(['$stateProvider', function($stateProvider){
    $stateProvider.state('slide1', {
      url: '/slide1',
      templateUrl: 'app/slide1/slide1.template.html',
      controller: 'Slide1Ctrl'
    });
  }])

  .controller('Slide1Ctrl', ['$scope', function($scope){

  }]);
})();
