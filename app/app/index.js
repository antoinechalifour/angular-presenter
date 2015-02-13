(function(){
  'use strict';

  angular.module('app', ['slider'])

  .controller('AppCtrl', ['SlideManager', function(SlideManager){
    SlideManager.slides([
      {
        name: 'hello',
        templateUrl: 'app/slides/hello/hello.template.html'
      },
      {
        name: 'introducing',
        templateUrl: 'app/slides/introducing/introducing.template.html',
        controller: 'IntroducingCtrl'
      },
      {
        name: 'gettingstarted',
        templateUrl: 'app/slides/gettingstarted/gettingstarted.template.html'
      },
      {
        name: 'templating',
        templateUrl: 'app/slides/templating/templating.template.html'
      },
      {
        name: 'themes',
        templateUrl: 'app/slides/themes/themes.template.html'
      },
      {
        name: 'controllers',
        templateUrl: 'app/slides/controllers/controllers.template.html',
        controller: 'ControllersCtrl'
      },
      {
        name: 'todo',
        templateUrl: 'app/slides/todo/todo.template.html',
        controller: 'TodoCtrl'
      }
    ]);
  }]);
})();
