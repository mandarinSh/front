import React from "react";
import PropTypes from "prop-types";
import {Form, Table} from "react-bootstrap";

const AvailableLogsTable = ({logs, selectLog}) => (
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

AvailableLogsTable.propTypes = {
  logs: PropTypes.array.isRequired,
  selectLog: PropTypes.func.isRequired
};

export default AvailableLogsTable;
