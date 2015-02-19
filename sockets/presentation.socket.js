'use strict';

module.exports = function(socket, io){
  console.log('> Nouvelle presentation');

  socket.on('slide:notif', function(data){
    console.log('slide:notif %d / %d', data.current, data.total);
    if(!data.current || !data.total) return false;

    io.of('remote').emit('slide:notif', data);
  });
};
