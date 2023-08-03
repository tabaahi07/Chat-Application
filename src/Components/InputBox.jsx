import React, { useState } from 'react';
import styles from "../CSS/InputBox.module.css"
import SendIcon from '@mui/icons-material/Send';

const InputBox = (props) => {
    const [message , setMessage] = useState("") ;
    return (
        <div className={styles.InputBox}>
            <input type='text' placeholder='Enter your message here' onChange={(event)=>{
                setMessage(event.target.value) ;
            }} /> 
            <button onClick={()=>{
                props.socket.emit('global-send-message' , message) ;
            }}>
                <SendIcon />
            </button>
        </div>
    );
}

export default InputBox ;
