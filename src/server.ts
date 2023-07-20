// src/server.ts
import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';
import path from 'path';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

io.on('connection', (socket: Socket) => {
  console.log('User connected:', socket.id);

  socket.on('message', (message: string) => {
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
