
//Using express
var express = require('express');
var socket = require('socket.io');

//setting app variable for express
var app = express();

//listen on this port
var server = app.listen(3000, function(){
  console.log('Listening to port 3000');
});

//serving static file from public Dir
app.use(express.static('public'));

//initializing socket
var io = socket(server);

//making front-end connection
io.on('connection', function(socket){
  console.log('Hello World, socket connection established', socket.id);

//listening to message sent from the client
  socket.on('chat', function(data){
    io.sockets.emit('chat', data);
  });

  socket.on('typing', function(data){
    socket.broadcast.emit('typing', data);
    });
});
