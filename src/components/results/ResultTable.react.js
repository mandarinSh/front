import React from "react";
import PropTypes from "prop-types";
import {Table} from "react-bootstrap";

const ResultTable = ({results}) => (
  <Table bordered hover>
    <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
    </tr>
    </thead>
    <tbody>
    {results.map(result => {
      return (
        <tr key={result.id}>
          <td>
              {result.id}
          </td>
          <td>
              <>
                <span>
                    {result.title}
                </span>
              </>                    
          </td>
        </tr>
      )
    })}
    </tbody>
  </Table>
);

ResultTable.propTypes = {
    results: PropTypes.array.isRequired
};

export default ResultTable;
