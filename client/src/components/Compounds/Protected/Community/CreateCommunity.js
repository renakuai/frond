import React, { useState } from "react";
import { H3Base } from '../../../Atoms/Font/FontBase';
import { useQuery } from 'react-query';
import axios from 'axios';
import ErrorBase from '../../../Atoms/States/Error/ErrorBase';
import LinkBase from '../../../Atoms/Links/LinkBase'
import { LoadingBase } from '../../../Atoms/States/Loading/LoadingBase';
import { Form, InputDiv } from './CreateCommunity.styles';
import { InputLabelBase, InputBase } from '../../../Atoms/Inputs/InputBase';
import { InputErrorBase } from '../../../Atoms/Inputs/InputErrorBase';
import { PBase } from '../../../Atoms/Font/FontBase';
import ModalBase from '../../../Atoms/Modals/ModalBase';


function CreateCommunity(props) {

  const { setOpen } = props;
  const [err, setErr] = useState(0)
  const [loading, setLoading] = useState(false);
  const [dataSent, setDataSent] = useState(false);
  const [submitErr, setSubmitErr] = useState({
    state: false,
    message: ''
  });

  const [inputs, setInputs] = useState({
    name: '',
    members: []
  })

  const submitData = {
    loading,
    setLoading,
    dataSent,
    setDataSent,
    submitErr,
    setSubmitErr
  }

  // form submission loading
  if (loading) {
    return 'Loading'
  }

  if (dataSent) {
    return 'Data sent'
  }

  return (
    <ModalBase
      id="create_community"
      title="Create Community"
      setOpen={setOpen}>
      <Form>
        <InputDiv direction="vertical">
          <InputLabelBase forLabel="name">Name of new community*</InputLabelBase>
          <InputBase
            type="text"
            id="name"
            name="name"
            direction="vertical"
            placeholder="Name of your Community"
            value={inputs.name}
            inputs={inputs}
            setInputs={setInputs}
            required
            maxlength="50"
            err={err.name && true}
            ariaDescription="name-error"
          />
          {err.name && <InputErrorBase id="name-error">{err.name}</InputErrorBase>}
        </InputDiv>
        <InputDiv direction="vertical">
          <InputLabelBase forLabel="name">Invite members using email*</InputLabelBase>
          <InputBase
            type="text"
            id="name"
            name="name"
            direction="vertical"
            placeholder="Name of your Community"
            value={inputs.members}
            inputs={inputs}
            setInputs={setInputs}
            required
            maxlength="50"
            err={err.name && true}
            ariaDescription="name-error"
          />
          {err.name && <InputErrorBase>{err.name}</InputErrorBase>}
        </InputDiv>
      </Form>
    </ModalBase>
  );
}

export default CreateCommunity;