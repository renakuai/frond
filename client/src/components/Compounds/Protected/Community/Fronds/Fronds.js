import React, { useState, useRef, useEffect } from "react";
import LinkBase from '../../../../Atoms/Links/LinkBase.js';
import { SectionDiv } from '../../Protected.styles';
import { TableLoadingBase } from '../../../../Atoms/States/Loading/LoadingBase'
import { H5Base, PBase } from '../../../../Atoms/Font/FontBase';
import { useQuery } from 'react-query';
import axios from 'axios';
import ErrorBase from '../../../../Atoms/States/Error/ErrorBase';
import TableBase from '../../../../Atoms/Tables/TableBase';
import { Title, Header } from './Frond.styles'

function Fronds() {

  const [fronds, setFronds] = useState([]);

  const { isLoading, isError, data, error } = useQuery('frondList', () => (
    axios.get('http://localhost:9000/api/communities/' + localStorage.activeCommunity + '/fronds', {
      withCredentials: true,
      credentials: 'include'
    })
      .then((res) => {
        setFronds(res.data);
      })
  ))

  const headers = [
    'Name',
    'Send Date',
    'Cadence'
  ]

  const values = [
    'name',
    'dateStart',
    'cadence'
  ]

  if (isLoading) {
    return <TableLoadingBase />
  }

  if (isError) {
    return <ErrorBase width="500px" children2={'An error has occured:' + error.message + '. Please refresh the page to try again.'} fullPage >
      Oh no! Something went wrong.
    </ErrorBase>
  }

  return (
    <SectionDiv>
      <Header>
        <Title>
          <H5Base>{fronds.length}</H5Base>
          <PBase size="regular">Total Fronds</PBase>
        </Title>
        <LinkBase
          width="fit-content"
          size="large"
          type="primary"
          icon="add"
          link={'/protected/community/' + localStorage.activeCommunity + '/createfrond'}
        >Create a Frond</LinkBase>
      </Header>
      <TableBase
        data={fronds}
        headers={headers}
        values={values}
      />
    </SectionDiv >
  );
}

export default Fronds;