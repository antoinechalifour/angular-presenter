(function(){
  'use strict';

  angular.module('app')

  .config(['$stateProvider', function($stateProvider){
    $stateProvider.state('conclusion', {
      url: '/conclusion',
      templateUrl: 'app/conclusion/conclusion.template.html'
    });
  }]);
})();
