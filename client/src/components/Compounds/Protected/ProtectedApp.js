import React, { useContext, useState } from "react";
import NavSide from '../../Atoms/Nav/Side/NavSide';
import { UserContext } from '../../../contexts/UserContext.js';
import { Grid, Div, ContentGrid } from './Protected.styles.js';
import { useQuery } from 'react-query';
import axios from 'axios';
import EmptyBase from '../../Atoms/States/Empty/EmptyBase'
import ErrorBase from '../../Atoms/States/Error/ErrorBase'
import ButtonBase from '../../Atoms/Buttons/ButtonBase';
//import { Outlet } from "react-router-dom";
import Community from './Community/Community'


function ProtectedApp() {
  const { user } = useContext(UserContext);
  const [communitiesList, setCommunitiesList] = useState(null);
  const [activeCommunity, setActiveCommunity] = useState('');
  const [activeTab, setActiveTab] = useState('home');

  const { isLoading, isError, data, error } = useQuery('communityList', () => (
    axios.get('http://localhost:9000/api/user/' + localStorage.userId + '/communities', {
      withCredentials: true,
      credentials: 'include'
    })
      .then((res) => {
        setCommunitiesList(res.data);
        if (!res.data[0]) {
          return;
        }
        if (!localStorage.activeCommunity) {
          localStorage.setItem('activeCommunity', res.data[0]._id);
          return;
        }
        return
      })
  ))

  if (isLoading) {
    return "Loading..."
  }

  if (isError) {
    return <ErrorBase width="500px" children2={'An error has occured:' + error.message + '. Please refresh the page to try again.'} fullPage >
      Oh no! Something went wrong.
    </ErrorBase>
  }


  return (
    <Grid>
      {(localStorage.activeCommunity && communitiesList) && < NavSide communitiesList={communitiesList} activeCommunity={activeCommunity} setActiveCommunity={setActiveCommunity} activeTab={activeTab} setActiveTab={setActiveTab} />}
      {!localStorage.activeCommunity &&
        <Div><EmptyBase width="500px" children2="Create a community or join an existing one through an invite to get started." fullPage>
          Looks like you're not part of any communities yet!
        </EmptyBase>
          <ButtonBase
            size="medium"
            type="primary"
            icon
            width="300px"
          >Create a community</ButtonBase></Div>}
      <ContentGrid>
        {(localStorage.activeCommunity && communitiesList) && <Community
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          communitiesList={communitiesList}
          activeCommunity={activeCommunity}
          setActiveCommunity={setActiveCommunity} />}
      </ContentGrid>
    </Grid>
  );
}

export default ProtectedApp;