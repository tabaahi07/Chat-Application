import React, { useState } from 'react';
import styles from "../CSS/InputBox.module.css"
import SendIcon from '@mui/icons-material/Send';
import UserContext from '../Context/UserContext';
import { useContext } from 'react';

const InputBox = (props) => {
    const userContext = useContext(UserContext)
    const [message , setMessage] = useState("") ;
    return (
        <div className={styles.InputBox}>
            <input autoComplete={false} type='text' value={message} placeholder='Enter your message here' onChange={(event)=>{
                setMessage(event.target.value) ;
            }} /> 
            <button onClick={()=>{
                props.socket.emit('global-send-message' , {message: message, senderId: userContext.id, senderName: userContext.name}) ;
                setMessage("")
            }}>
                <SendIcon />
            </button>
        </div>
    );
}

export default InputBox ;
