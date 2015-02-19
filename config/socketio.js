'use strict';

module.exports = function(io){
  io.of('/presentation').on('connection', function(socket){
    require('../sockets/presentation.socket')(socket, io);
  });

  io.of('/remote').on('connection', function(socket){
    require('../sockets/remote.socket')(socket, io);
  });
}
