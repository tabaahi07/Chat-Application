import React, { useContext, useEffect, useState } from "react";
import styles from "../CSS/ChatPage.module.css";
import MessageBox from "./MessageBox";
import InputBox from "./InputBox";
import Users from "./Users";
import UserContext from "../Context/UserContext";
import io from "socket.io-client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function ChatPage() {
  const userContext = useContext(UserContext); 
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const socket = io("http://localhost:5000"); // Replace with your Socket.IO server URL
    setSocket(() => {
      return socket;
    });

    console.log(socket);
    socket.emit("uname", userContext.name);

    return () => {
      socket.disconnect(); 
    };
  }, []);

  useEffect(()=>{
     if(!socket){
          return ;
     }
     socket.on('id' , id=>{
          console.log("user id :" , id) ;
          userContext.setId(id) ;

        }) 
  } , [socket])

  return (
    <div className={styles.ChatPage}>
      <div className={styles.Header}>
        <button
          onClick={() => {
            userContext.setPage("LoginPage");
          }}
        >
          {" "}
          {"<"}{" "}
        </button>
        <div> {userContext.name} </div>
      </div>

      <div className={styles.ChatContainer}>
        <MessageBox socket={socket}> </MessageBox>
        <InputBox socket={socket}> </InputBox>
        <Users socket={socket}> </Users>
      </div>
    </div>
  );
}
