(function(){
  'use strict';

  angular.module('remote', ['timer', 'hmTouchEvents', 'btford.markdown'])

  .controller('RemoteCtrl', ['$scope', function($scope){
    var socket = io.connect(window.location.origin + '/remote');
    $scope.note = false;
    $scope.noteMD = false;

    $scope.running = false;

    $scope.next = function(){
      socket.emit('slide:next');
    };

    $scope.previous = function(){
      socket.emit('slide:previous');
    };

    $scope.toggleTimer = function(){
      $scope.running = !$scope.running;
      if($scope.running) $scope.$broadcast('timer-start');
      else $scope.$broadcast('timer-stop');
    };

    socket.on('slide:notif', function(data){
      console.log(data);
      var content = false;
      var contentMD = false;
      if(data.note){
        content = data.note;
      }
      if(data.noteMD){
        contentMD = data.noteMD;
      }
      $scope.$apply(function(){
        $scope.note = content;
        $scope.noteMD = contentMD;
        $scope.current = data.current;
        $scope.total = data.total;
      });
    });

    socket.emit('remote:ready');
  }]);
})();
