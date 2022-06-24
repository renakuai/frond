import React from "react";
import { H3Base, PBase } from '../Font/FontBase';
import { Table, Th, Td, Tr } from './Table.styles'

function TableBase(props) {
  const {
    data,
    headers,
    values
  } = props;

  return (
    <Table
      data={data}
      headers={headers}
      values={values}>
      <Tr>
        {headers.map((item) => (
          <Th>{item}</Th>
        ))}
      </Tr>
      {data.map((item) => (
        <Tr>
          {values.map((val) => (
            <Td>{item[val] ? item[val] : '--'}</Td>
          ))}
        </Tr>
      ))}
    </Table>
  )
}

export default TableBase;