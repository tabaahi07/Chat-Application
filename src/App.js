import logo from "./logo.svg";
import "./App.css";
import Loginpage from "./Components/LoginPage";
import ChatPage from "./Components/ChatPage";
import { useState , useContext } from "react";
import NameContext from "./Context/NameContext";

function App() {
  const pageContext = useContext(NameContext) ;
 console.log(pageContext.page) ;
  return (
    <div className="App">
       { pageContext.page==="LoginPage" ? <Loginpage> </Loginpage> : <ChatPage></ChatPage> } 
    </div>
  );
}

export default App;
