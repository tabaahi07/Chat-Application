import React from 'react';
import Users from './Users';
import InputBox from './InputBox';
import styles from "../CSS/BottomPanel.module.css"

const BottomPanel = (props) => {
    return (
        <div className={styles.BottomPanel}>
            <Users socket={props.socket}> </Users>
            <InputBox socket={props.socket} > </InputBox>
        </div>
    );
}

export default BottomPanel;
