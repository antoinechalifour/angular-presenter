'use strict';

var http = require('http');
var express = require('express');
var socketio = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketio(server);

require('./config/express')(app);
app.use(express.static(__dirname + '/app'));

require('./config/socketio')(io);
io.listen(server);

server.listen(app.get('port'), function(){
  console.log('> Presenter listening on port %d', app.get('port'));
});
