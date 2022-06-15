import React, { useRef, useEffect } from "react";
import { UserContext } from '../../../../contexts/UserContext.js';
import { H6Base } from "../../../Atoms/Font/FontBase.js";
import * as Styles from './NavSide.styles';
import ButtonBase from '../../../Atoms/Buttons/ButtonBase.js';
import NavLinkBase from '../../../Atoms/Links/NavLinkBase.js';


function NavSide(props) {
  const { communitiesList, setActiveCommunity } = props;

  function handleActiveRoute(e) {
    localStorage.setItem('activeCommunity', e.target.id);
    setActiveCommunity(findCommunity());
  }

  function findCommunity() {
    const item = communitiesList.filter(item => item._id === localStorage.activeCommunity)
    return item[0];
  }

  return (
    <Styles.Nav>
      <ButtonBase size="medium" type="secondary" iconName="add">Create a community</ButtonBase>
      <H6Base color="grey" nav>My Communities</H6Base>
      <Styles.Ul>
        {communitiesList.map((item, index) => (
          <Styles.Li key={item._id + 'li'} data-testid="test-li">
            <NavLinkBase
              key={item._id + 'navlink'}
              id={item._id}
              link={'/protected/community/' + item._id}
              className={localStorage.activeCommunity === item._id && 'active'}
              onClick={(e) => handleActiveRoute(e)}>
              {item.name}
            </NavLinkBase>
          </Styles.Li>

        ))}
      </Styles.Ul>
    </Styles.Nav>
  );
}

export default NavSide;