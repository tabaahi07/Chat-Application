import React, { useContext } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import UserContext from '../Context/UserContext';
import styles from "../CSS/Header.module.css"

const Header = () => {
    const userContext = useContext(UserContext);
    return (
        <div className={styles.Header}>
            <div className={styles.BackButton}>
                <button>
                    <ArrowBackIosIcon />
                </button>
            </div>
            <div> {userContext.name} </div>
        </div>
    );
}

export default Header;
