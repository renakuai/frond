import React, { useState } from "react";
import { InputBase, InputLabelBase } from '../../../Atoms/Inputs/InputBase'
import { InputDiv } from './Auth.styles.js'
import { Form } from '../Form.styles.js'

function SignupFormBase(props) {

  const [inputs, setInputs] = useState({
    first_name: '',
    last_name: '',
    password: '',
    confirm_password: '',
    email: '',
  })

  return (
    <Form width="400px">
      <InputDiv direction="vertical">
        <InputLabelBase for="first_name">First name*</InputLabelBase>
        <InputBase
          type="text"
          id="first_name"
          name="first_name"
          direction="vertical"
          placeholder="First name"
          value={inputs.first_name}
          inputs={inputs}
          setInputs={setInputs}
          required
        />
      </InputDiv>
      <InputDiv direction="vertical">
        <InputLabelBase for="last_name">Last name*</InputLabelBase>
        <InputBase
          type="text"
          id="last_name"
          name="last_name"
          direction="vertical"
          placeholder="Last name"
          value={inputs.last_name}
          inputs={inputs}
          setInputs={setInputs}
          required
        />
      </InputDiv>
      <InputDiv direction="vertical">
        <InputLabelBase for="last_name">Email address*</InputLabelBase>
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
        <InputLabelBase for="password">Create a password*</InputLabelBase>
        <InputBase
          type="password"
          id="password"
          name="password"
          direction="vertical"
          placeholder="Password"
          value={inputs.password}
          inputs={inputs}
          setInputs={setInputs}
          required
        />
      </InputDiv>
      <InputDiv direction="vertical">
        <InputLabelBase for="confirm_password">Confirm password*</InputLabelBase>
        <InputBase
          type="password"
          id="last_name"
          name="last_name"
          direction="vertical"
          placeholder="Password"
          value={inputs.confirm_password}
          inputs={inputs}
          setInputs={setInputs}
          required
        />
      </InputDiv>
    </Form>
  );
}

export default SignupFormBase;