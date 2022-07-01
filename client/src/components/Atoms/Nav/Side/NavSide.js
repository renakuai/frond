import React, { useRef, useEffect, useState } from "react";
import { UserContext } from '../../../../contexts/UserContext.js';
import { H6Base } from "../../../Atoms/Font/FontBase.js";
import * as Styles from './NavSide.styles';
import ButtonBase from '../../../Atoms/Buttons/ButtonBase.js';
import LinkBase from '../../../Atoms/Links/LinkBase.js';
import NavLinkBase from '../../../Atoms/Links/NavLinkBase.js';
import CreateCommunity from '../../../Compounds/Protected/Community/CreateCommunity'

function NavSide(props) {
  const { communitiesList, setActiveCommunity, activeTab, setActiveTab } = props;

  const [open, setOpen] = useState(false);
  function handleActiveRoute(e) {
    localStorage.setItem('activeCommunity', e.target.id);
    setActiveCommunity(findCommunity());
    setActiveTab('home')
  }

  function findCommunity() {
    const item = communitiesList.filter(item => item._id === localStorage.activeCommunity)
    return item[0];
  }


  return (
    <Styles.Nav>
      <ButtonBase size="large" btnType="secondary" decoration="border" iconName="add" onClick={() => setOpen(true)} svgBox="0 0 16 17">Create a community</ButtonBase>
      {open && <CreateCommunity setOpen={setOpen} />}
      <H6Base color="grey" nav>My Communities</H6Base>
      {communitiesList && <Styles.Ul>
        {communitiesList.map((item, index) => (
          <Styles.Li key={item._id + 'li'} data-testid="test-li">
            <NavLinkBase
              key={item._id + 'navlink'}
              id={item._id}
              link={'/app/community/' + item._id + '/home'}
              className={localStorage.activeCommunity === item._id && 'active'}
              onClick={(e) => handleActiveRoute(e)}>
              {item.name}
            </NavLinkBase>
          </Styles.Li>

        ))}
      </Styles.Ul>}
    </Styles.Nav>
  );
}

export default NavSide;