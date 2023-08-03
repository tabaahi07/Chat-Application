import React, { useEffect, useState } from 'react';

const MessageBox = (props) => {
    const [messages , setMessages] = useState([]) ;

    useEffect(()=>{
       if(!props.socket) { return }
       props.socket.on('global-receive-message' , msg => {
          console.log("Message received is : " , msg ) ;
          setMessages((prev) => {
            return [...prev , msg ] ;
          })
       } )
    } , [props.socket] )
    return (
        <div>
            {messages.map(msg=>{
                return <div> {msg} </div> 
            })}
        </div>
    );
}

export default MessageBox;
