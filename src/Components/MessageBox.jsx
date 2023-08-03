import React, { useEffect, useState } from "react";
import styles from "../CSS/MessageBox.module.css";

export default function MessageBox(props) {
  const [messages, setMessages] = useState([
    {
      content: "Hello",
      sender: {
        name: "Robin",
        id: "221445"
      }
    },
    {
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aspernatur accusamus debitis id itaque doloremque quae harum sint minima, velit, provident saepe placeat rerum sapiente nobis rem eligendi inventore facilis.",
      sender: {
        name: "Robin",
        id: "221445"
      }
    }
  ]);
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
      <div className={styles.MessageWrapper}>
        {messages.map((message) => {
          return <div className={styles.Message}> {message.content} <span className={styles.MessageSender}>{message.sender.name}</span> </div>;
        })} 
      </div>
    </div> 
  );
}
