import React, { useContext, useMemo } from "react";
import { Nav, Grid, Div } from './NavTop.styles';
import { Link } from "react-router-dom";
import LinkBase from '../../../Atoms/Links/LinkBase.js'
import { UserContext } from '../../../../contexts/UserContext.js';
import { Colors } from '../../../Atoms/Colors/Colors'
import axios from 'axios';
import { useNavigate } from "react-router-dom";



function NavTop() {
  const user = useContext(UserContext);
  const nav = useNavigate();

  function randomColor() {
    const colors = {
      0: Colors.green[20],
      1: Colors.jade[30],
      2: Colors.cyan[40],
      3: Colors.orange[30],
      4: Colors.lightBlue[40],
      5: Colors.purple[60],
      6: Colors.pink[40],
      7: Colors.red[40]
    }
    const length = Object.keys(colors).length
    const random = Math.floor(Math.random() * length);
    return colors[random]
  }

  const memoColor = useMemo(() =>
    randomColor(), [])

  function handleClick() {
    axios.get('http://localhost:9000/api/auth/logout', {
      withCredentials: true,
      credentials: 'include',
    })
      .then(res => {
        localStorage.clear();
        nav("/");
        window.location.reload();
      })
      .catch(function (error) {
        if (error !== undefined) {
          console.log(error)
        }
        console.log(error)
      })
  }

  return (
    <Nav>
      <Grid>
        <Link to="/"><img src="/Logo.svg"></img></Link>
        {(localStorage.isLoggedIn === 'false' || !localStorage.isLoggedIn) ? <Div>
          <LinkBase
            size="medium"
            type="tertiary"
            link="signin"
            icon={false}>Sign in</LinkBase>
          <LinkBase
            size="medium"
            type="primary"
            link="signup"
            icon={false}>Sign up</LinkBase>
        </Div>
          : <Div>
            <svg width="36" height="36">
              <circle r="16" cx='50%' cy='50%' fill={memoColor}>
                <text x="50%" y="50%" textAnchor="middle">{localStorage.userFirstName[0].toUpperCase()}</text>
              </circle>
            </svg>
            {localStorage.userFirstName}
            <div
              onClick={() => handleClick()}>Sign out
            </div>
          </Div>
        }
      </Grid>
    </Nav>
  );
}

export default NavTop;