'use strict';

module.exports = function(socket, io){
  console.log('> Nouveau remote');

  socket.on('slide:next', function(){
    console.log('slide:next');
    io.of('presentation').emit('slide:next');
  });

  socket.on('slide:previous', function(){
    console.log('slide:previous');
    io.of('presentation').emit('slide:previous');
  });

  socket.on('remote:ready', function(){
    io.of('presentation').emit('remote:new');
  });
};
