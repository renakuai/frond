import React, { useState } from "react";
import SignupFormBase from './SignupFormBase.js';
import { H2Base } from '../../../Atoms/Font/FontBase';
import { Section } from '../Auth.styles'

function Signup() {

  const [signedup, setSignedup] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errMsg, setErrMsg] = useState({
    passwordErr: '',
    firstNameErr: '',
    lastNameErr: '',
    emailErr: '',
    generalErr: '',
  });

  return (
    <Section>
      <H2Base>Create your account</H2Base>
      {!signedup && <SignupFormBase setSuccessMsg={setSuccessMsg} errMsg={errMsg} setErrMsg={setErrMsg} setSignedup={setSignedup} />}
      {successMsg.length > 0 && successMsg}
      {errMsg.length > 0 && errMsg}
    </Section>
  );
}

export default Signup;