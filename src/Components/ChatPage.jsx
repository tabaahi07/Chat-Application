import React , {useContext} from "react";
import styles from "../CSS/ChatPage.module.css";
import MessageBox from "./MessageBox";
import InputBox from "./InputBox";
import Users from "./Users";
import NameContext from "../Context/NameContext";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ChatPage() {
  const context = useContext(NameContext) ;

  return <div className={styles.ChatPage}>
       <div className={styles.Header} >
           <button onClick={()=>{context.setPage("LoginPage")}} > {"<"} </button>
           <div> {context.name} </div>
       </div>
       
       <div className={styles.ChatContainer} >
            <MessageBox> </MessageBox>
            <InputBox> </InputBox>
            <Users> </Users>
       </div>

  </div>;
}
