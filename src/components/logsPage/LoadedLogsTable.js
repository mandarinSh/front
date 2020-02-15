import React from "react";
import PropTypes from "prop-types";
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
    {logs.map(log => {
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

LoadedLogsTable.propTypes = {
  logs: PropTypes.array.isRequired
};

export default LoadedLogsTable;
