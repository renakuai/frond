import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { H3Base } from '../../../Atoms/Font/FontBase';
import Tabs from './Tabs';
import { Outlet } from "react-router-dom";
import Fronds from './Fronds/Fronds'


function Community(props) {
  const { activeCommunity, setActiveCommunity, communitiesList, activeTab, setActiveTab } = props;
  const nav = useNavigate();

  useEffect(() => {
    nav("/protected/community/" + localStorage.activeCommunity + '/home');
    setActiveCommunity(findCommunity());
  }, [])

  useEffect(() => {
  }, [activeCommunity])

  function findCommunity() {
    const item = communitiesList.filter(item => item._id === localStorage.activeCommunity)
    return item[0];
  }

  return (
    <section>
      {activeCommunity && <H3Base>{activeCommunity.name}</H3Base>}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'fronds' && <Fronds />}
    </section >
  );
}

export default Community;