import React from "react";
import styles from "../CSS/Users.module.css"
import PeopleIcon from '@mui/icons-material/People';

const Users = () => {
  return (
    <div className={styles.Users}>
      <button>
        <PeopleIcon fontSize="small" />
      </button>
    </div>
  );
};

export default Users;
