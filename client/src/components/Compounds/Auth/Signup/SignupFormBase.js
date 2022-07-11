import React, { useState } from "react";
import { InputBase, InputLabelBase } from '../../../Atoms/Inputs/InputBase'
import { InputDiv } from '../Form.styles.js'
import { AuthForm } from '../Form.styles.js'
import ButtonBase from '../../../Atoms/Buttons/ButtonBase.js';
import axios from 'axios';

function SignupFormBase(props) {

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: '',
  })

  const { setSignedup, setSuccessMsg, setErrMsg } = props;

  function handleSubmit(e) {
    e.preventDefault();
    const userObj = {
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      password: inputs.password,
      email: inputs.email
    }
    axios.post('http://localhost:9000/api/auth/register', userObj)
      .then(res => {
        setSignedup(true);
        setSuccessMsg(res.data.message);
        console.log(res);
      })
      .catch(function (error) {
        setErrMsg(error.response.data.message)
      })
  }

  return (
    <AuthForm
      width="400px"
      id="signup"
      onSubmit={(e) => handleSubmit(e)}
      alignment="end"
    >
      <InputDiv direction="vertical">
        <InputLabelBase forLabel="firstName">First name*</InputLabelBase>
        <InputBase
          type="text"
          id="firstName"
          name="firstName"
          direction="vertical"
          placeholder="First name"
          value={inputs.firstName}
          inputs={inputs}
          setInputs={setInputs}
          required
        />
      </InputDiv>
      <InputDiv direction="vertical">
        <InputLabelBase forLabel="lastName">Last name*</InputLabelBase>
        <InputBase
          type="text"
          id="lastName"
          name="lastName"
          direction="vertical"
          placeholder="Last name"
          value={inputs.lastName}
          inputs={inputs}
          setInputs={setInputs}
          required
        />
      </InputDiv>
      <InputDiv direction="vertical">
        <InputLabelBase forLabel="lastName">Email address*</InputLabelBase>
        <InputBase
          type="email"
          id="email"
          name="email"
          direction="vertical"
          placeholder="Email"
          value={inputs.email}
          inputs={inputs}
          setInputs={setInputs}
          required
        />
      </InputDiv>
      <InputDiv direction="vertical">
        <InputLabelBase forLabel="password">Create a password*</InputLabelBase>
        <InputBase
          type="password"
          id="password"
          name="password"
          direction="vertical"
          placeholder="Password"
          minLength="6"
          value={inputs.password}
          inputs={inputs}
          setInputs={setInputs}
          required
        />
      </InputDiv>
      <InputDiv direction="vertical">
        <InputLabelBase forLabel="confirm_password">Confirm password*</InputLabelBase>
        <InputBase
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          minlength="6"
          direction="vertical"
          placeholder="Confirm Password"
          value={inputs.confirmPassword}
          inputs={inputs}
          setInputs={setInputs}
          required
        />
      </InputDiv>
      <ButtonBase
        id="signup"
        size="medium"
        btnType="primary"
        width="200px"
        submit="true"
      >Create an account</ButtonBase>
    </AuthForm>
  );
}

export default SignupFormBase;