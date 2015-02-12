(function(){
  'use strict';

  angular.module('app')

  .config(['$stateProvider', function($stateProvider){
    $stateProvider.state('about', {
      url: '/about',
      templateUrl: 'app/about/about.template.html'
    });
  }]);
})();
