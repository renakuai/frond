import React, { useState } from "react";
import { H3Base } from '../../../../Atoms/Font/FontBase';
import { FrondGrid, P } from './CreateFrond.styles';
import CreateFrondBase from './Forms/CreateFormBase';
import { useQuery } from 'react-query';
import axios from 'axios';
import ErrorBase from '../../../../Atoms/States/Error/ErrorBase';
import BannerBase from '../../../../Atoms/Notifications/Banners/BannerBase'
import LinkBase from '../../../../Atoms/Links/LinkBase'
import { LoadingBase } from '../../../../Atoms/States/Loading/LoadingBase'

function CreateFrond() {

  const [communityMembers, setCommunityMembers] = useState();

  const [loading, setLoading] = useState(false);
  const [dataSent, setDataSent] = useState(false);
  const [submitErr, setSubmitErr] = useState({
    state: false,
    message: ''
  });

  const { isLoading, isError, data, error } = useQuery('communityMembers', () => (
    axios.get('http://localhost:9000/api/communities/' + localStorage.activeCommunity + '/users', {
      withCredentials: true,
      credentials: 'include'
    })
      .then((res) => {
        setCommunityMembers(res.data);
      })
  ))

  if (isLoading) {
    return <LoadingBase />
  }

  if (isError) {
    return <ErrorBase width="500px" children2={'An error has occured:' + error.message + '. Please refresh the page to try again.'} fullPage >
      Oh no! Something went wrong.
    </ErrorBase>
  }

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
    <section>
      <FrondGrid>
        <LinkBase
          size="medium"
          iconName="back"
          link={('/protected/community/' + localStorage.activeCommunity + '/home')}
          underline>Back to Home</LinkBase>
        <H3Base>Create a Frond</H3Base>
        <BannerBase
          title="🤔 What is a Frond?"
          type="informational"
          width="inherit"
        >
          Fronds are email newsletters that help your group develop deeper, more meaningful connections.
          <P>Fronds consist of a few curated questions for people to respond to and sections for: ✋ high fives, 🆕 life updates, and sharing of 💡 interesting findings and links. Every recipient will be able to submit their responses and a newsletter of these shares will be sent to everyone on the scheduled date.</P>
        </BannerBase>
        {communityMembers && <CreateFrondBase communityMembers={communityMembers} submitData={submitData} />}
      </FrondGrid>
    </section>
  );
}

export default CreateFrond;