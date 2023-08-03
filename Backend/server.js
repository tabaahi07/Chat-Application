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

var userInfo = {
    id : "" ,
    name : "" ,
    message : ""
}

io.on('connection' , socket => {
    console.log("new user connected with socket id  : " , socket.id ) ;
    socket.on('disconnect' , () => {
        console.log("User disconnected") ;
    })

    socket.emit('id' , socket.id) ;
    socket.on('uname' , name => {
        console.log("user's name is : " , name) ;
        userInfo.id = socket.id ;
        userInfo.name = name ;
        io.emit('add-user' , userInfo) ;
    }) 

    socket.on('global-send-message' , msg => {
        console.log("Message is : " , msg ) ;
        userInfo.message = msg ;
        io.emit('global-receive-message' , userInfo ) ;
    })  

    
})



server.listen(5000 , ()=>{
    console.log("server started on port 5000") ;
})