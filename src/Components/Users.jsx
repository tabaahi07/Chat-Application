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
    <div>
      <button> users </button>
      <div>
        {users.map((user) => {
          return (
            <button onClick={() => {
              props.socket.emit('create-room' , {myId : props.socket.id , partnerId : user.id }) ;
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
