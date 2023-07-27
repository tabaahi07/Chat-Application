import React from "react";
import styles from "../CSS/ChatPage.module.css";
import MessageBox from "./MessageBox";
import InputBox from "./InputBox";
import Users from "./Users";

export default function ChatPage() {
  return <div className={styles.ChatPage}>
       <div className={styles.Header} >
           Akku
       </div>

       <div className={styles.ChatContainer} >
            <MessageBox> </MessageBox>
            <InputBox> </InputBox>
            <Users> </Users>
       </div>

  </div>;
}
