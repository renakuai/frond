import React, { useContext, useState, useEffect } from "react";
import { CommunityContext } from '../../../../contexts/CommunityContext.js';
import { H6Base } from "../../../Atoms/Font/FontBase.js";
import * as Styles from './NavSide.styles';
import ButtonBase from '../../../Atoms/Buttons/ButtonBase.js'


function NavSide() {
  const communities = useContext(CommunityContext);

  return (
    <Styles.Nav>
      <ButtonBase size="medium" type="secondary" icon={true}>Create a community</ButtonBase>
      <H6Base color="purple" text="My Personal Communities" nav={true} />
      <Styles.Ul>
        {communities.personal_family.map((group) => (
          <Styles.Li key={group._id}>{group.name}</Styles.Li>
        ))}
        {communities.personal_friendship.map((group) => (
          <Styles.Li key={group._id}>{group.name}</Styles.Li>
        ))}
      </Styles.Ul>
      <H6Base color="purple" text="My Professional Communities" nav={true} />
      <Styles.Ul>
        {communities.professional.map((group) => (
          <Styles.Li key={group._id}>{group.name}</Styles.Li>
        ))}
      </Styles.Ul>
    </Styles.Nav>
  );
}

export default NavSide;