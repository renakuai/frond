import React, { useState } from "react";
import SignupFormBase from '../../Molecules/Forms/Auth/SignupFormBase.js';
import { useOutletContext } from "react-router-dom";
import { H2Base } from '../../Atoms/Font/FontBase';
import { Section } from './Auth.styles'

function Signup() {

  const [user, setUser] = useOutletContext();

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