var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000, () => console.log(
    'foi de novo'
));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {

    socket.on('my other event', function (data) {
        console.log('vindo do front', data);
        socket.broadcast.emit('news', data);
    });
});
