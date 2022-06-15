import React, { useRef, useEffect } from "react";
import { H6Base } from "../../Atoms/Font/FontBase.js";
import * as Styles from './Tabs.styles';
import ButtonBase from '../../Atoms/Buttons/ButtonBase.js';
import NavLinkBase from '../../Atoms/Links/NavLinkBase.js';


function Tabs(props) {
  const { activeTab, setActiveTab } = props;

  const links = [
    'home',
    'people',
    'fronds',
    'shares',
  ]

  function handleClick(e) {
    setActiveTab(e.target.id)
  }

  return (
    <Styles.Nav>
      <Styles.Ul>
        {links.map((link, index) => (
          <Styles.Li key={index + 'li'}>
            <NavLinkBase
              width="fit-content"
              key={link.index + 'navlink'}
              id={link}
              link={'/protected/community/' + localStorage.activeCommunity}
              className={activeTab === link && 'active'}
              onClick={(e) => handleClick(e)}>
              {link[0].toUpperCase() + link.slice(1)}
            </NavLinkBase>
          </Styles.Li>

        ))}
      </Styles.Ul>
    </Styles.Nav>
  );
}

export default Tabs;