import React, { useState } from 'react';

const InputBox = (props) => {
    const [message , setMessage] = useState("") ;
    return (
        <div>
            <input type='text' placeholder='Enter your message here' onChange={(event)=>{
                setMessage(event.target.value) ;
            }} /> 
            <button onClick={()=>{
                props.socket.emit('global-send-message' , message) ;
            }}> send </button>
        </div>
    );
}

export default InputBox ;
