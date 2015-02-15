(function(){
  'use strict';

  angular.module('remote', ['angular-chrono'])

  .controller('RemoteCtrl', ['$scope', 'chronoService', function($scope, chronoService){
    var socket = io.connect({query: 'role=remote'});
    $scope.note = false;

    $scope.time = false;
    $scope.hours = 0;
    $scope.minutes = 0;
    $scope.seconds = 0;
    chronoService.addTimer('myTimer', { interval: 500 });

    $scope.next = function(){
      socket.emit('slide:next');
    };

    $scope.previous = function(){
      socket.emit('slide:previous');
    };

    $scope.start = function(){
      if(!$scope.time) $scope.time = Date.now();
      chronoService.start();
    };

    $scope.stop = function(){
      chronoService.stop();
    };

    socket.on('slide:changed', function(data){
      var content = false;
      if(data.note){
        content = data.note;
      }
      $scope.$apply(function(){
        $scope.note = content;
      });
    });
  }]);
})();
