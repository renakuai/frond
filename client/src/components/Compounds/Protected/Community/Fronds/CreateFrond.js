import React, { useState } from "react";
import { H3Base } from '../../../../Atoms/Font/FontBase';
import { FrondGrid, P } from './CreateFrond.styles';
import CreateFrondBase from './Forms/CreateFormBase';
import { useQuery } from 'react-query';
import axios from 'axios';
import ErrorBase from '../../../../Atoms/States/Error/ErrorBase';
import BannerBase from '../../../../Atoms/Notifications/Banners/BannerBase'


function CreateFrond() {

  const [communityMembers, setCommunityMembers] = useState();

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
    return "Loading..."
  }

  if (isError) {
    return <ErrorBase width="500px" children2={'An error has occured:' + error.message + '. Please refresh the page to try again.'} fullPage >
      Oh no! Something went wrong.
    </ErrorBase>
  }

  return (
    <section>
      <FrondGrid>
        <H3Base>Create a Frond</H3Base>
        <BannerBase
          title="🤔 What is a Frond?"
          type="informational"
          width="inherit"
        >
          Fronds are email newsletters that help your group develop deeper, more meaningful connections.
          <P>Fronds consist of a few curated questions for people to respond to and sections for: ✋ high fives, 🆕 life updates, and sharing of 💡 interesting findings and links. Every recipient will be able to submit their responses and a newsletter of these shares will be sent to everyone on the scheduled date.</P>
        </BannerBase>
        {communityMembers && <CreateFrondBase communityMembers={communityMembers} />}
      </FrondGrid>
    </section>
  );
}

export default CreateFrond;