import React from "react";
import styles from "../CSS/InputBox.module.css";

export default function InputBox() {
  return <div className={styles.InputBox}>
       <div className={styles.InputMessage} >
           <input type="text" placeholder="Enter a message" />
       </div>

       <div className={styles.SendBtn} >
          <button > Send </button>
       </div>

  </div>;
}
