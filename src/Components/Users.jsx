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
      <button> users </button>
      <div>
        {users.map((user) => {
          return (
            <button onClick={() => {
              props.socket.emit('create-room' , [props.socket.id , user.id ]) ;
            }}>
              <li>{user.name} </li>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
