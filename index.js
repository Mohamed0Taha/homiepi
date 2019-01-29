var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);


server.listen(process.env.PORT || 3000);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    socket.on('on', function(){
      socket.emit("on");
        console.log('on');
      });
      socket.on('off', function(){
        socket.emit("off");
        console.log('off');
      });
});

