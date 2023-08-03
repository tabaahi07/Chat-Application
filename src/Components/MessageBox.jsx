import React, { useEffect, useState } from 'react';
import styles from "../CSS/MessageBox.module.css"
import { useRef } from 'react';

const MessageBox = (props) => {
    const [messages , setMessages] = useState([]) ;
    const khaaliRef = useRef(null)

    useEffect(()=>{
       if(!props.socket) { return }
       props.socket.on('global-receive-message' , messageInfo => {
          console.log("Message received is : " , messageInfo.message ) ;
          setMessages((prev) => {
            return [...prev , messageInfo ] ;
          })
          khaaliRef.current.scrollIntoView({behavior: "smooth"});
       } )
    } , [props.socket] )
    return (
        <div className={styles.MessageBox}>
            {messages.map(msg=>{
                return <div className={`${(props.socket.id===msg.senderId) ? styles.SentMsg : styles.RecievedMsg}`}> {(props.socket.id===msg.senderId) ? "You" : msg.senderName} : {msg.message} </div> 
            })}
            <div style={{height: "0px", marginTop: "50px", backgroundColor: "transparent"}} ref={khaaliRef}></div>
        </div>
    );
}

export default MessageBox;
