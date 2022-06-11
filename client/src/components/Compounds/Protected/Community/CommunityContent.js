import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CommunityHome from './Home/CommunityHome';


function CommunityContent(props) {
  const { activeTab } = props;

  return (
    <section >
      {activeTab === 'home' && <CommunityHome />}
    </section >
  );
}

export default CommunityContent;