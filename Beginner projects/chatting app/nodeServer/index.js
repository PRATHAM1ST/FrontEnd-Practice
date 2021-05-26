//nodeserver which wil handle socket

const io = require('socket.io')(8000)

const users = {}

io.on('connection', socket => {

    socket.on('new-user', name => {
        users[socket.id] = name;
        socket.broadcast.emit("new-user-joined", name)
    });

    socket.on('send-message', (message, color) => {
        socket.broadcast.emit('receive', {message:message , name:users[socket.id], color:color})
    });

    socket.on('disconnect', name => {
        socket.broadcast.emit('user-disconnected', users[socket.id])
        delete users[socket.id]
    });    
})