import React, { useEffect, useState } from "react";
import LinkBase from '../../../../Atoms/Links/LinkBase.js';


function Fronds() {
  console.log('create')
  return (
    <section>
      <LinkBase
        width="fit-content"
        size="medium"
        type="primary"
        icon="add"
        link={'/protected/community/' + localStorage.activeCommunity + '/createfrond'}
      >Create a Frond</LinkBase>
    </section>
  );
}

export default Fronds;