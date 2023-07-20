import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket: Socket) => {
    console.log("user Conection logic");
    
    
  socket.on('chat message', (data: { username: string; message: string }) => {
    io.emit('chat message', data);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected <><><><><>><><>>>:)');
  });
});

server.listen(3000, () => {
  console.log('user disconection logic');
});
