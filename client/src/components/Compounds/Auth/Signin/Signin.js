import React, { useState, useContext } from "react";
import SigninFormBase from './SigninFormBase.js';
import BannerBase from '../../../Atoms/Notifications/Banners/BannerBase.js';
import { UserContext } from '../../../../contexts/UserContext.js';
import { Navigate } from "react-router-dom";
import { H2Base } from '../../../Atoms/Font/FontBase';
import { Section } from '../Auth.styles'

function Signin() {
  const user = useContext(UserContext);
  const [signinErr, setSigninErr] = useState('');
  return (
    <Section>
      {!user.isLoggedIn && <H2Base>Sign in to your account</H2Base>}
      {(signinErr.length !== 0) && <BannerBase
        type="error"
        width="450px"
      >{signinErr}</BannerBase>}
      {!user.isLoggedIn && <SigninFormBase
        setSigninErr={setSigninErr}
        user={user}
      />}
      {user.isLoggedIn && <Navigate to="/app" />}
    </Section>
  );
}

export default Signin;