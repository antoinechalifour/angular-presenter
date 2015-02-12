(function(){
  'use strict';

  angular.module('app')

  .factory('Slides', [function(){
    var slides = ['intro', 'slide1', 'about', 'conclusion'];

    return {
      getNumber: function(state){
        return slides.indexOf(state);
      },
      total: slides.length,
      getSlide: function(nb){
        if(nb<0) nb = -nb;
        return slides[nb % slides.length];
      }
    };
  }]);
})();
