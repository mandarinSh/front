import React from "react";
import {map} from "lodash";

import {Table, OverlayTrigger, Tooltip, Button} from "react-bootstrap";

const TasksTable = ({tasks, runTask, stopTask}) => (
    <Table bordered hover>
        <thead>
            <tr>
                <th>{"#"}</th>
                <th>{"Title"}</th>
                <th />
                <th />
            </tr>
        </thead>
        <tbody>
            {map(tasks, (task) => {
                return (
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>
                            <>
                                <OverlayTrigger placement="bottom" delay={{show: 250, hide: 400}} overlay={<Tooltip id={1}>{task.description}</Tooltip>}>
                                    <span>{task.title}</span>
                                </OverlayTrigger>
                            </>
                        </td>
                        <td>
                            <Button variant="success" onClick={() => runTask(task)}>
                                {"Run"}
                            </Button>
                        </td>
                        <td>
                            <Button variant="danger" onClick={() => stopTask(task)}>
                                {"Stop"}
                            </Button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </Table>
);

export default TasksTable;
