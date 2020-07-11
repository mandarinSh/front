import React from "react";
import {map} from 'lodash';

import {Table} from "react-bootstrap";

const LoadedLogsTable = ({logs}) => (
  <Table bordered hover>
    <thead>
    <tr>
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

export default LoadedLogsTable;
