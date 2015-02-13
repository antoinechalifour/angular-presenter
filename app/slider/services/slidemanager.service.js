(function(){
  'use strict';

  var app = angular.module('slider')

  app.factory('SlideManager', ['$state', function($state){
    var current;

    var slides = [];

    var initSlides = function(provided){
      provided.forEach(function(slide){
        if(slide.name && (slide.templateUrl || slide.template)){
          var tmp = {};
          tmp.url = '/' + slide.name;
          if(slide.template) tmp.template = slide.template;
          else tmp.templateUrl = slide.templateUrl;

          if(slide.controller) tmp.controller = slide.controller;

          app.stateProvider.state(slide.name, tmp);
          slides.push(slide.name);
        }
      });

      current = 0;
      changeSlide(current);
    };

    var changeSlide = function(index){
      current = index;
      console.log('Going to slide %s', slides[index]);
      $state.go(slides[index]);
    };

    return {
      slides: initSlides,
      next: function(){
        var next = (current + 1 >= slides.length) ? 0 : current + 1;
        changeSlide(next);
        return next;
      },
      previous: function(){
        var previous = (current - 1 < 0) ? slides.length - 1 : current - 1;
        changeSlide(previous);
        return previous;
      },
      getProgress: function(){
        if(slides.length === 1) return 100;
        return (current / (slides.length - 1)) * 100;
      }
    };
  }]);
})();
