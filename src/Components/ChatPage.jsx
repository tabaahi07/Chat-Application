import React, { useState, useEffect, useContext } from 'react';
import Header from './Header';
import MessageBox from './MessageBox';
import BottomPanel from './BottomPanel';
import UserContext from '../Context/UserContext';
import io from "socket.io-client"
import styles from "../CSS/ChatPage.module.css"

const ChatPage = () => {
    const userContext = useContext(UserContext);

    const [socket, setSocket] = useState(null);
    useEffect(() => {
        const socket = io("http://localhost:5000");
        setSocket(socket);

        return () => {
            socket.disconnect();
        }
    }, []);

    useEffect(() => {

        if (!socket) return

        socket.on('id', id => {
            console.log("user's id is :", id);
        })

        socket.on(`${socket.id}` , roomObj => {
            console.log("invitation accepted") ;
        }) ;

        socket.emit('uname', userContext.name);

        return () => {
            socket.off("id")
        }

    }, [socket])


    return (
        <div className={styles.ChatPage}>
            <div className={styles.ChatPageContainer}>
                <Header> </Header>
                <MessageBox socket={socket}> </MessageBox>
                <BottomPanel socket={socket}> </BottomPanel>
            </div>
        </div>
    );
}

export default ChatPage;
