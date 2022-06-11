import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { H2Base } from '../../../Atoms/Font/FontBase';
import Tabs from '../../../Molecules/Tabs/Tabs';
import CommunityContent from './CommunityContent'

function Community(props) {
  const { activeCommunity, setActiveCommunity, communitiesList, activeTab } = props;
  const nav = useNavigate();

  useEffect(() => {
    nav("/protected/community/" + localStorage.activeRoute + '/' + activeTab);
    setActiveCommunity(findCommunity());
  }, [])

  function findCommunity() {
    const item = communitiesList.filter(item => item._id === localStorage.activeRoute)
    return item[0];
  }

  return (
    < section >
      {activeCommunity && <H2Base>{activeCommunity.name}</H2Base>}
      <Tabs />
      <CommunityContent activeTab={activeTab} />
    </section >
  );
}

export default Community;