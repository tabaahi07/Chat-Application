import React, { useEffect, useState } from "react";
import styles from "../CSS/MessageBox.module.css";

export default function MessageBox(props) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (!props.socket) {
      return;
    }
    props.socket.on("global-recv-message", (message) => {
      console.log("Messsage received : ", message);
      setMessages((prev) => {
        return [...prev, message.message];
      });
    });
  }, [props.socket]);
  return (
    <div className={styles.MessageBox}>
      <ul>
        {messages.map((message) => {
          return <li> {message} </li>;
        })} 
      </ul>
    </div> 
  );
}
