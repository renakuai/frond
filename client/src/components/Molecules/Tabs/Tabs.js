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
    'shares'
  ]

  return (
    <Styles.Nav>
      <Styles.Ul>
        {links.map((link, index) => (
          <Styles.Li key={index + 'li'}>
            <NavLinkBase
              key={link.index + 'navlink'}
              id={link}
              link={'/protected/community/' + localStorage.activeRoute + '/' + link}
              className={({ isActive }) => ((link == 'home' || isActive) ? 'active' : 'inactive')}
            >
              {link[0].toUpperCase() + link.slice(1)}
            </NavLinkBase>
          </Styles.Li>

        ))}
      </Styles.Ul>
    </Styles.Nav>
  );
}

export default Tabs;