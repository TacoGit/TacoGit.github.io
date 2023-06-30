const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const users = {};
const rooms = new Set([]);
const banned = [];
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
server.listen(3000, () => {
  console.log('listening on *:3000');
});
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
  });
});
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    let username = users[socket.id]["username"];
    let room = users[socket.id]["room"];
    io.to(room).emit('chat message', msg);
  });
});
io.on("connection", socket => {
  socket.on("joined", (username, room) => {
    socket.join(room);
    io.to(room).emit("joined", username);
    users[socket.id] = { username: username, room: room };
    rooms.add(room)
    console.log("rooms currently inservice", rooms)
    console.log('people online:', users);
  });
  socket.on("disconnect", () => {
    let username = users[socket.id]["username"];
    let room = users[socket.id]["room"]
    io.to(room).emit("leave", username);
    delete users[socket.id];
    console.log(users);
  });
});
io.on('connection', (socket) => {
  let username = users[socket.id]
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log(username, 'disconnected');
  });
})