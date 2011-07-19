var sio    = require('socket.io')
  , express= require('express')
  , app    = express.createServer();
  

// configure express server
app.configure(function(){
  app.use(express.logger());  // enables logging to stdout
  app.use(express.static(__dirname + '/public')); // configures static file serving from /public
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});  

// root, er, route
app.get('/', function(req, res){
  // maybe do something here - could be an API endpoint for comms with Rails?
});

// set http server listening on a nice port
app.listen(8080, function () {
  var addr = app.address();
  console.log('   app listening on http://' + addr.address + ':' + addr.port);
});


var io         = sio.listen(app);
io.sockets.on('connection', function (socket) {
  socket.on('update_location', function (touch) {
    //console.log(JSON.stringify(touch))
    socket.volatile.broadcast.emit('touch', touch);
  });
});
