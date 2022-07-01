import React, { useState } from "react";
import { H3Base } from '../../../Atoms/Font/FontBase';
import { useQuery } from 'react-query';
import axios from 'axios';
import ErrorBase from '../../../Atoms/States/Error/ErrorBase';
import LinkBase from '../../../Atoms/Links/LinkBase'
import { LoadingBase } from '../../../Atoms/States/Loading/LoadingBase';
import { Grid, P } from './CreateCommunity.styles';
import ModalBase from '../../../Atoms/Modals/ModalBase';


function CreateCommunity(props) {

  const { setOpen } = props;
  const [loading, setLoading] = useState(false);
  const [dataSent, setDataSent] = useState(false);
  const [submitErr, setSubmitErr] = useState({
    state: false,
    message: ''
  });

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
      Create a Community
    </ModalBase>
  );
}

export default CreateCommunity;