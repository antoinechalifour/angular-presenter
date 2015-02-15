'use strict';

module.exports = function(socket){
  console.log('> Nouvelle presentation');
  socket.join('presentation');

  socket.on('slide:changed', function(data){
    console.log('slide:changed %d / %d', data.current, data.total);
    if(!data.current || !data.total) return false;

    socket.to('remote').emit('slide:changed', data);
  });
};
