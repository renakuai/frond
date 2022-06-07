import React, { useState } from "react";
import SignupFormBase from '../../Molecules/Forms/Auth/SignupFormBase.js'

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
    <div>
      {!signedup && <SignupFormBase setSuccessMsg={setSuccessMsg} errMsg={errMsg} setErrMsg={setErrMsg} setSignedup={setSignedup} />}
      {successMsg.length > 0 && successMsg}
      {errMsg.length > 0 && errMsg}
    </div>
  );
}

export default Signup;