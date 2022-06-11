import React, { useState } from "react";
import { UserContext } from './contexts/UserContext.js';
import NavTop from './components/Molecules/Nav/Top/NavTop.js';
import GlobalStyle from './globalStyles/globalStyles.styles';
import { Outlet } from "react-router-dom";


function App() {
  const [user, setUser] = useState({
    isLoggedIn: false,
    firstName: '',
    lastName: '',
    email: '',
    _id: '',
  });

  return (
    <div className="App">
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <NavTop />
        <div className="Grid">
          <div className="Content">
            <Outlet />
          </div>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
