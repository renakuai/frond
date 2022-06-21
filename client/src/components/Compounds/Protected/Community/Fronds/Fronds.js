import React, { useEffect, useState } from "react";
import LinkBase from '../../../../Atoms/Links/LinkBase.js';
import { SectionDiv } from '../../Protected.styles'

function Fronds() {
  console.log('create')
  return (
    <SectionDiv>
      <LinkBase
        width="fit-content"
        size="large"
        type="primary"
        icon="add"
        link={'/protected/community/' + localStorage.activeCommunity + '/createfrond'}
      >Create a Frond</LinkBase>
    </SectionDiv>
  );
}

export default Fronds;