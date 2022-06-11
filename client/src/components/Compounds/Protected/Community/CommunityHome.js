import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { H2Base } from '../../../Atoms/Font/FontBase'


function CommunityHome(props) {
  const { activeCommunity, setActiveCommunity, communitiesList } = props;
  const nav = useNavigate();

  useEffect(() => {
    nav("/protected/community/" + localStorage.activeRoute);
    setActiveCommunity(findCommunity());
  }, [])

  function findCommunity() {
    const item = communitiesList.filter(item => item._id === localStorage.activeRoute)
    return item[0];
  }

  return (
    <section>
      <H2Base>{activeCommunity.name}</H2Base>
    </section>
  );
}

export default CommunityHome;