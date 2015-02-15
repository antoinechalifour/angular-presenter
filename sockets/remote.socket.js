'use strict';

module.exports = function(socket){
  console.log('> Nouveau remote');
  socket.join('remote');
  socket.on('slide:next', function(){
    console.log('slide:next');
    socket.to('presentation').emit('slide:next');
  });

  socket.on('slide:previous', function(){
    console.log('slide:previous');
    socket.to('presentation').emit('slide:previous');
  });
};
