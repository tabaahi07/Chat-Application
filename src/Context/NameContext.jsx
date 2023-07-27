import { createContext, useState } from "react";

const ListContext = createContext();

const ListState = (props) => {
  const [user1List, setUser1List] = useState([]);
  const [user2List, setUser2List] = useState([]);

  return (
    <ListContext.Provider
      value={{ user1List, user2List, setUser1List, setUser2List }}
    >
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContext;
export { ListState };
