import React from 'react';
import Users from './Users';
import InputBox from './InputBox';

const BottomPanel = (props) => {
    return (
        <div>
            <Users socket={props.socket}> </Users>
            <InputBox socket={props.socket} > </InputBox>
        </div>
    );
}

export default BottomPanel;
