import React, { useState } from "react";
import SignupFormBase from './SignupFormBase.js';
import { H2Base } from '../../../Atoms/Font/FontBase';
import { Section } from '../Auth.styles';
import BannerBase from '../../../Atoms/Notifications/Banners/BannerBase.js';


function Signup() {

  const [signedup, setSignedup] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');

  return (
    <Section>
      {(errMsg.length !== 0) && <BannerBase
        type="error"
        width="450px"
      >{errMsg}</BannerBase>}
      <H2Base>Create your account</H2Base>
      {!signedup && <SignupFormBase setSuccessMsg={setSuccessMsg} errMsg={errMsg} setErrMsg={setErrMsg} setSignedup={setSignedup} />}
    </Section>
  );
}

export default Signup;