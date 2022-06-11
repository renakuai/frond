import React, { useState, useContext } from "react";
import { InputBase, InputLabelBase } from '../../../Atoms/Inputs/InputBase'
import { InputDiv } from './Auth.styles.js'
import { Form } from '../Form.styles.js'
import ButtonBase from '../../../Atoms/Buttons/ButtonBase.js';
import axios from 'axios';
import { UserContext } from '../../../../contexts/UserContext.js';
import { useNavigate } from "react-router-dom";


function SigninFormBase(props) {
  const nav = useNavigate();

  const { user, setUser } = useContext(UserContext);

  const [inputs, setInputs] = useState({
    password: '',
    email: '',
  })

  const {
    setSigninErr,
  } = props;

  function handleSubmit(e) {
    e.preventDefault();

    //empty error
    setSigninErr('');

    const userObj = {
      password: inputs.password,
      email: inputs.email,
    }

    //set user payload
    axios.post('http://localhost:9000/api/auth/login', userObj, {
      withCredentials: true,
      credentials: 'include',
    })
      .then(res => {
        window.localStorage.setItem('userId', res.data.user._id.toString());
        window.localStorage.setItem('userFirstName', res.data.user.firstName);
        window.localStorage.setItem('isLoggedIn', 'true');
        nav("/protected");
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error)
        if (error.response.data.error) {
          if (error.response.data.error.email) {
            setSigninErr(error.response.data.error.email)
          }
          if (error.response.data.error.password) {
            setSigninErr(error.response.data.error.password)
          }
        }
        if (error.response.data.message) {
          setSigninErr(error.response.data.message)
        }
        else {
          setSigninErr(error.message)
        }
      })
  }

  return (
    <Form
      width="400px"
      id="signup"
      onSubmit={(e) => handleSubmit(e)}
      alignment="end"
    >
      <InputDiv direction="vertical">
        <InputLabelBase for="lastName">Email address*</InputLabelBase>
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
        <InputLabelBase for="password">Password*</InputLabelBase>
        <InputBase
          type="password"
          id="password"
          name="password"
          direction="vertical"
          placeholder="Password"
          value={inputs.password}
          inputs={inputs}
          minlength="6"
          setInputs={setInputs}
          required
        />
      </InputDiv>
      <ButtonBase
        id="signup"
        size="medium"
        type="primary"
        width="200px"
      >Sign in</ButtonBase>
    </Form>
  );
}

export default SigninFormBase;