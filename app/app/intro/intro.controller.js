(function(){
  'use strict';

  angular.module('app')

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/intro');

    $stateProvider.state('intro', {
      url: '/intro',
      templateUrl: 'app/intro/intro.template.html'
    })
  }]);
})();
