import React from "react";
import { H3Base, PBase } from '../Font/FontBase';
import { Table, Th, Td, Tr } from './Table.styles'

function TableBase(props) {
  const {
    children,
  } = props;

  return (
    <Table>
      <Tr>
        <Th>Name</Th>
        <Th>Age</Th>
        <Th>Gender</Th>
      </Tr>
      <Tr>
        <Td>Anom</Td>
        <Td>19</Td>
        <Td>Male</Td>
      </Tr>
    </Table>
  )
}

export default TableBase;