import React, { useState } from "react";
import Header from "./components/Head";
import Main from "./components/Main";
import {userContext} from './context/userContext';

function App() {
  const [user, setUser] = useState("default@mail.com");
  
  const login = (email) => {
    setUser(email);
  }

  const logout = () => {
    setUser("");
  }

  const data = {
    user,
    login,
    logout
  }
  
  return (
    <div>
      <userContext.Provider value={data}>
        <Header/>
        <Main/>
      </userContext.Provider>
    </div>
  );
}

export default App;
