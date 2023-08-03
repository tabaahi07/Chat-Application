import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

io.on('connection' , socket => {
    console.log("new user connected with socket id  : " , socket.id ) ;
    socket.on('disconnect' , () => {
        console.log("User disconnected") ;
    })
})



server.listen(5000 , ()=>{
    console.log("server started on port 5000") ;
})