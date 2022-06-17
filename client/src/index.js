import React from 'react';
import ReactDOM from 'react-dom/client';
import './globalStyles/index.css';
import App from './App';
import Home from './components/Compounds/Home/Home';
import Signup from './components/Compounds/Auth/Signup/Signup';
import Signin from './components/Compounds/Auth/Signin/Signin';
import ProtectedApp from './components/Compounds/Protected/ProtectedApp';
import CommunityHome from './components/Compounds/Protected/Community/Home/CommunityHome';
import NoPage from './components/Compounds/Error/NoPage';
import CreateFrond from './components/Compounds/Protected/Community/Fronds/CreateFrond';


import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<Signin />} />
            <Route path="protected" element={<ProtectedApp />}>
              <Route path="community/:communityid" element={<CommunityHome />} />
              <Route path="community" element={<Navigate to=":communityid/home" replace />} />
            </Route>
            <Route path="protected/community/:communityid/createfrond" element={<CreateFrond />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

