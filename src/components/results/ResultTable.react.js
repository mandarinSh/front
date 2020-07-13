import React from "react";
import {map} from 'lodash';

import {Table, Button} from "react-bootstrap";

const ResultTable = ({result, downloadResults}) => (
  <Table bordered hover>
    <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
    {console.log(result)}
    {
      map(result, res => {
      console.log(res);
      return (
        <tr key={res.id}>
          <td className="id-column">
              {res.id}
          </td>
          <td>
              <>
                <span>
                    {res.title}
                </span>
              </>                    
          </td>
          <td className="actions-column">
              <Button onClick={() => downloadResults(res)}>Download</Button>
          </td>
        </tr>
      )
    })}
    </tbody>
  </Table>
);

export default ResultTable;
