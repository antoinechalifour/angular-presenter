(function(){
  'use strict'

  var app = angular.module('slider', ['ngAnimate', 'ui.router', 'hmTouchEvents'])

  app.config(['$stateProvider', function($stateProvider){
    app.stateProvider = $stateProvider;
  }]);
})();
