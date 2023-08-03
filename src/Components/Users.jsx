import React , {useState , useEffect} from "react";
import styles from "../CSS/Users.module.css"
import PeopleIcon from '@mui/icons-material/People';



  const Users = (props) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      if (!props.socket) {
        return;
      }
      props.socket.on("add-user", userList => {
        setUsers(userList) ;
      });
    });

  return (
    <div className={styles.Users}>
      <button> <PeopleIcon /> </button>
    </div>
  );
};

export default Users;
