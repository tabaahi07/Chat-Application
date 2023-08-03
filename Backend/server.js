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

var messageInfo = {
    senderId : "" ,
    senderName : "" ,
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
    }) 

    socket.on('global-send-message' , msg => {
        console.log("Message is : " , msg ) ;
        io.emit('global-receive-message' , msg ) ;
    })

    socket.on('create-room' , ([myId , partnerId])=>{
        socket.join( 'room-1' ) ;
        io.emit(`${partnerId}` , {room: 'room-1' , partnerId : myId }) ;
    } )

    
})



server.listen(5000 , ()=>{
    console.log("server started on port 5000") ;
})