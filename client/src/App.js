import React, { useState, useEffect, useContext } from "react";
import { CommunityContext } from './contexts/CommunityContext.js';
import NavSide from './components/Molecules/Nav/Side/NavSide.js';
import NavTop from './components/Molecules/Nav/Top/NavTop.js';
import { useQuery } from 'react-query';
import GlobalStyle from './globalStyles/globalStyles.styles';
import { Outlet, Link } from "react-router-dom"


const axios = require('axios').default;

function App() {
  const { isLoading, isError, data, error } = useQuery('communityList', () => (
    axios.get('http://localhost:9000/')
      .then((res) => (
        res.data
      ))
  ))

  if (isLoading) {
    return "Loading..."
  }

  if (isError) {
    return "An error has occured: " + error.message
  }

  return (
    <div className="App">
      <GlobalStyle />
      <CommunityContext.Provider value={data}>
        <NavTop />
        <div className="Grid">
          <div className="Content">
            <Outlet />
          </div>
        </div>
      </CommunityContext.Provider>
    </div>
  );
}

export default App;
