import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
var users = [];

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("new user connected with id : ", socket.id);
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("uname", (name) => {
    console.log("user name :", name);
    users.push({
      id: socket.id,
      name: name,
    }); 

    socket.emit('id' , socket.id ) ;
  });

  socket.on('global-send-message' , message => {
    console.log(message) ;
    io.emit('global-recv-message' , message ) ;
  })

  
}); 

server.listen(5000, () => {
  console.log("server started on port 5000");
});
