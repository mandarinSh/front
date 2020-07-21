import React from "react";
import {map} from "lodash";

import {Table, Button} from "react-bootstrap";

const ResultTable = ({result, downloadResults, showChart}) => (
    <Table className="res-table" bordered hover>
        <thead>
            <tr>
                <th>{"#"}</th>
                <th>{"Title"}</th>
                <th>{"Action"}</th>
            </tr>
        </thead>
        <tbody>
            {/* eslint-disable-next-line no-console */}
            {console.log(result)}
            {map(result, (res) => {
                return (
                    <tr key={res.id}>
                        <td className="id-column">{res.id}</td>
                        <td>
                            <>
                                <span>{res.title}</span>
                            </>
                        </td>
                        <td className="actions-column">
                            {/*<Button className="action-btn" onClick={() => downloadResults(res)}>{"Download"}</Button>*/}
                            <Button className="action-btn" onClick={() => showChart(res)}>{"Show chart"}</Button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </Table>
);

export default ResultTable;
