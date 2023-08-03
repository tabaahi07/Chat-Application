import React , {useState , useEffect} from 'react';
import Header from './Header';
import MessageBox from './MessageBox';
import BottomPanel from './BottomPanel';
import { UserState } from '../Context/UserContext';
import io from "socket.io-client"

const ChatPage = () => {
    const [socket , setSocket] = useState("") ;
    useEffect( () => {
        const socket = io("http://localhost:5000") ;
        setSocket(socket) ;

        return ()=> {
            socket.disconnect() ;
        }
    } , []) ;
    

    return (
        <div>
            <Header> </Header>
            <MessageBox> </MessageBox>
            <BottomPanel> </BottomPanel>
        </div>
    );
}

export default ChatPage;
