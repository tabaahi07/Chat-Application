import React , {useState , useEffect} from "react";
import styles from "../CSS/Users.module.css"
import PeopleIcon from '@mui/icons-material/People';



  const Users = (props) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      if (!props.socket) {
        return;
      }
      props.socket.on("add-user", (userInfo) => {
        setUsers((prev) => {
          return [...prev, { id: userInfo.id, name: userInfo.name }];
        });
      });
    });

  return (
    <div className={styles.Users}>
      <button> <PeopleIcon /> </button>
    </div>
  );
};

export default Users;
