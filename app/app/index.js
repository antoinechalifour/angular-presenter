(function(){
  'use strict';

  angular.module('app', ['slider'])

  .controller('AppCtrl', ['$http', 'SlideManager', function($http, SlideManager){
    $http({
      url: 'resources/presentation.json'
    })
    .success(function(data){
      SlideManager.config({
        remote: true
      });
      SlideManager.slides(data);
    })
    .error(function(data){
      console.log('Error');
    });
  }]);
})();
