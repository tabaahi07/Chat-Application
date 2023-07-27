import React from "react";
import styles from "../CSS/LoginPage.module.css";

export default function Loginpage() {
  return <div className={styles.LoginPage}>
       <div className={styles.Heading} >
           My Chat App
       </div>

       <div className={styles.nameInput}> 
            <p> Name : </p>
            <input type="text" placeholder="Enter your name to join" /> 
       </div>

       <div className={styles.joinBtn} >
           <button> Join Chat </button>
       </div>


  </div>;
}
