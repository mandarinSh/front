import React from "react";
import {map} from 'lodash';

import {Form, Table} from "react-bootstrap";

const AvailableLogsTable = ({logs, selectLog}) => (
  <Table bordered hover>
    <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Semester</th>
      <th>Size</th>
    </tr>
    </thead>
    <tbody>
    {map(logs, log => {
      return (
        <tr key={log.id}>
          <td>
            <Form.Control onChange={() => selectLog(log.id)} type="checkbox" id={log.id}/>
              {/*<Form.Check type="checkbox" id={log.id}/>*/}
            {/*</Form.Control>*/}

          </td>
          <td>
            {log.title}
          </td>
          <td>
            {log.semester}
          </td>
          <td>
            {log.size}
          </td>
        </tr>
      )
    })}
    </tbody>
  </Table>
);

export default AvailableLogsTable;
