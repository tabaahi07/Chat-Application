import React, { useContext } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import UserContext from '../Context/UserContext';
import PageContext from '../Context/PageContext';
import styles from "../CSS/Header.module.css"

const Header = () => {
    const pageContext = useContext(PageContext);
    const userContext = useContext(UserContext);
    return (
        <div className={styles.Header}>
            <div className={styles.BackButton}>
                <button onClick={() => {
                    pageContext.setPage("LoginPage");
                }}>
                    <ArrowBackIosIcon />
                </button>
            </div>
            <div className={styles.UserName}> {userContext.name} </div>
        </div>
    );
}

export default Header;
