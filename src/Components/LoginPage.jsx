import React, { useContext } from "react";
import styles from "../CSS/LoginPage.module.css";
import NameContext from "../Context/NameContext";

export default function Loginpage() {
    const context = useContext(NameContext) ;
      return <div className={styles.LoginPage}>
       <div className={styles.Heading} >
           My Chat App
       </div>

       <div className={styles.nameInput}> 
            <p> Name : </p>
            <input type="text" placeholder="Enter your name to join" onChange={(event) => {
                context.setName(event.target.value) ;
            }} /> 
       </div>

       <div className={styles.joinBtn} >
           <button onClick={()=>{
            context.setPage("ChatPage") 
           }}> Join Chat </button>
       </div>


  </div>;
}
