import "./App.css";
import Loginpage from "./Components/LoginPage";
import ChatPage from "./Components/ChatPage";
import { useState, useContext } from "react";
import PageContext from "./Context/PageContext";
import { UserState } from "./Context/UserContext";

function App() {
  const pageContext = useContext(PageContext);

  return (
    <div className="App">
      <UserState>
        {pageContext.page === "LoginPage" ? (
        {pageContext.page === "LoginPage" ? (
          <Loginpage> </Loginpage>
        ) : (
          <ChatPage></ChatPage>
        )}
        {/* <ChatPage> </ChatPage> */}
      </UserState>
    </div>
  );
}

export default App;
