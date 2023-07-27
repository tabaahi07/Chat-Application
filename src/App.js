import logo from './logo.svg';
import './App.css';
import Loginpage from './Components/LoginPage';
import ChatPage from './Components/ChatPage' ;
import { useState } from 'react';
function App() {
  const [page , setPage] = useState("LoginPage") ;
  
  return (
    <div className="App">
       {/* { page==="LoginPage" ? <Loginpage> </Loginpage> : <ChatPage></ChatPage> } */}
       <ChatPage> </ChatPage>
    </div>
  );
}

export default App;
