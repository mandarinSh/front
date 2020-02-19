import React from "react";
import PropTypes from "prop-types";
import {Table, Button} from "react-bootstrap";

const ResultTable = ({results, downloadResults}) => (
  <Table bordered hover>
    <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th>Action</th>
    </tr>
    </thead>
    <tbody>
    {results.map(result => {
      return (
        <tr key={result.id}>
          <td className="id-column">
              {result.id}
          </td>
          <td>
              <>
                <span>
                    {result.title}
                </span>
              </>                    
          </td>
          <td className="actions-column">
              <Button onClick={() => downloadResults(result)}>Download</Button>
          </td>
        </tr>
      )
    })}
    </tbody>
  </Table>
);

ResultTable.propTypes = {
    results: PropTypes.array.isRequired,
    downloadResults: PropTypes.func.isRequired
};

export default ResultTable;
