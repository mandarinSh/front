import React from "react";
import PropTypes from "prop-types";
import {FormCheck, Table} from "react-bootstrap";

const AvailableLogsTable = ({logs}) => (
  <Table striped bordered hover>
    <thead>
    <tr>
      <th>#</th>
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
            <FormCheck type="checkbox" id={log.id}/>
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

AvailableLogsTable.propTypes = {
  logs: PropTypes.array.isRequired
};

export default AvailableLogsTable;
