import React, { useEffect, useState } from 'react';

const MessageBox = (props) => {
    const [messages , setMessages] = useState([]) ;

    useEffect(()=>{
       if(!props.socket) { return }
       props.socket.on('global-receive-message' , messageInfo => {
          console.log("Message received is : " , messageInfo.message ) ;
          setMessages((prev) => {
            return [...prev , messageInfo ] ;
          })
       } )
    } , [props.socket] )
    return (
        <div>
            {messages.map(msg=>{
                return <div> {(props.socket.id===msg.senderId) ? "You" : msg.senderName} : {msg.message} </div> 
            })}
        </div>
    );
}

export default MessageBox;
