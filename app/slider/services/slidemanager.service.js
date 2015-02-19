(function(){
  'use strict';

  var app = angular.module('slider')

  app.factory('SlideManager', ['$state', function($state){
    var current;
    var slides = [];
    var remote = false;
    var socket = false;

    var config = function(options){
        if(options.remote) remote = true;
    };

    var next = function(){
      var next = (current + 1 >= slides.length) ? 0 : current + 1;
      changeSlide(next);
      return next;
    };

    var previous = function(){
      var previous = (current - 1 < 0) ? slides.length - 1 : current - 1;
      changeSlide(previous);
      return previous;
    };

    var initSlides = function(provided){
      provided.forEach(function(slide){
        if(slide.name && (slide.templateUrl || slide.template)){
          var tmp = {};
          tmp.url = '/' + slide.name;
          if(slide.template) tmp.template = slide.template;
          else tmp.templateUrl = slide.templateUrl;

          if(slide.controller) tmp.controller = slide.controller;

          app.stateProvider.state(slide.name, tmp);
          slides.push({
            name: slide.name,
            note: slide.note,
            noteMD: slide.noteMD
          });
        }
      });

      current = 0;

      if(remote){
        socket = io.connect(window.location.origin + '/presentation');
        socket.on('connect', function(){
          console.log('Connected');
          changeSlide(current);
        });
        socket.on('slide:next', function(){
          next();
        });
        socket.on('slide:previous', function(){
          previous();
        });
        socket.on('remote:new', function(){
          console.log('remote:new');
          socket.emit('slide:notif', {current: current+1, total: slides.length, note: slides[current].note, noteMD: slides[current].noteMD});
        });
      }
      else {
        changeSlide(current);
      }
    };

    var changeSlide = function(index){
      current = index;
      console.log('Going to slide %s', slides[index].name);
      $state.go(slides[index].name);
      if(socket){
        socket.emit('slide:notif', {current: current+1, total: slides.length, note: slides[index].note, noteMD: slides[current].noteMD});
      }
    };

    return {
      config: config,
      slides: initSlides,
      next: next,
      previous: previous,
      getProgress: function(){
        if(slides.length === 1) return 100;
        return (current / (slides.length - 1)) * 100;
      }
    };
  }]);
})();
