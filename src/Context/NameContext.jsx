import { createContext, useState } from "react";

const NameContext = createContext();

const NameState = (props) => {
  const [name , setName] = useState("") ;
  const [page, setPage] = useState("LoginPage");

  return (
    <NameContext.Provider
      value={{ name , setName , page , setPage }}
    >
      {props.children}
    </NameContext.Provider>
  );
};

export default NameContext;
export { NameState };
