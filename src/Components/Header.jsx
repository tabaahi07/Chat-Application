import React, { useContext } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import UserContext from '../Context/UserContext';

const Header = () => {
    const userContext = useContext(UserContext) ;
    return (
        <div>
            <button> <ArrowBackIosIcon> </ArrowBackIosIcon> </button>
            <div> {userContext.name} </div>
        </div>
    );
}

export default Header;
