import React, { useState, useEffect } from "react";
import { UserContext } from './contexts/UserContext.js';
import NavSide from './components/Molecules/Nav/Side/NavSide.js';
import NavTop from './components/Molecules/Nav/Top/NavTop.js';
import GlobalStyle from './globalStyles/globalStyles.styles';
import { Outlet, Link } from "react-router-dom";
import useCheckToken from "./hooks/useCheckToken";


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
