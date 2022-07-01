import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './components/Compounds/Home/Home';
import Signup from './components/Compounds/Auth/Signup/Signup';
import Signin from './components/Compounds/Auth/Signin/Signin';
import ProtectedApp from './components/Compounds/Protected/ProtectedApp';
import CommunityHome from './components/Compounds/Protected/Home/CommunityHome';
import NoPage from './components/Compounds/Error/NoPage';
import CreateFrond from './components/Compounds/Protected/Fronds/CreateFrond';
import Fronds from './components/Compounds/Protected/Fronds/Fronds';
import CreateCommunity from './components/Compounds/Protected/Community/CreateCommunity';


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
            <Route path="app" element={<ProtectedApp />}>
              <Route path="community/:communityid/home" element={<CommunityHome />} />
              <Route path="community" element={<Navigate to=":communityid/home" replace />} />
              <Route path="community/:communityid" element={<Navigate to=":communityid/home" replace />} />
              <Route path="community/:communityid/fronds" element={<Fronds />} />
            </Route>
            <Route path="app" element={<Navigate to="app/community/:communityid/home" replace />} />
            <Route path="app/community/:communityid/createfrond" element={<CreateFrond />} />
            <Route path="app/community/:communityid/createcommunity" element={<CreateCommunity />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

