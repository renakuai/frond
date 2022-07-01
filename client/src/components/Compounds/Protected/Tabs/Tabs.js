import React, { useRef, useEffect } from "react";
import { H6Base } from "../../../Atoms/Font/FontBase.js";
import * as Styles from './Tabs.styles';
import Tab from '../../../Atoms/Tabs/Tab.js';

function Tabs(props) {
  const { activeTab, setActiveTab } = props;

  const links = [
    'home',
    'fronds',
  ]

  function handleClick(e) {
    setActiveTab(e.target.id)
  }

  return (
    <Styles.Nav>
      <Styles.Ul>
        {links.map((link, index) => (
          <Styles.Li key={index + 'li'}>
            <Tab
              width="fit-content"
              key={link.index + 'navlink'}
              id={link}
              link={'/app/community/' + localStorage.activeCommunity + '/' + link}
              className={activeTab === link && 'active'}
              onClick={(e) => handleClick(e)}>
              {link[0].toUpperCase() + link.slice(1)}
            </Tab>
          </Styles.Li>

        ))}
      </Styles.Ul>
    </Styles.Nav>
  );
}

export default Tabs;