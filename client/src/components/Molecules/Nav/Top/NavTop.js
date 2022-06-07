import React, { useContext, useState, useEffect } from "react";
import { Nav, Grid } from './NavTop.styles';
import LinkBase from '../../../Atoms/Links/LinkBase.js'

function NavTop() {

  return (
    <Nav>
      <Grid>
        <img src="/Logo.svg"></img>
        <LinkBase
          size="medium"
          type="primary"
          link="signup"
          icon={false}>Sign up</LinkBase>
      </Grid>
    </Nav>
  );
}

export default NavTop;