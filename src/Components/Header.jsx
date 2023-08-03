import React, { useContext } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import UserContext from '../Context/UserContext';
import PageContext from '../Context/PageContext';

const Header = () => {
    const pageContext = useContext(PageContext) ;
    const userContext = useContext(UserContext) ;
    return (
        <div>
            <button onClick={()=>{
                pageContext.setPage("LoginPage") ;
            }}> <ArrowBackIosIcon> </ArrowBackIosIcon> </button>
            <div> {userContext.name} </div>
        </div>
    );
}

export default Header;
