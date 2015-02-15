'use strict';

module.exports = function(io){
  io.use(function(socket, next){
    var role = socket.handshake.query.role || 'presentation';
    socket.role = role;

    next();
  });

  io.on('connection', function(socket){
    console.log('Connected as %s', socket.role);
    if(socket.role === 'remote')
      require('../sockets/remote.socket')(socket);
    else
      require('../sockets/presentation.socket')(socket);

    socket.on('disconnect', function(){
      console.log('Disconnected');
    });
  });
}
