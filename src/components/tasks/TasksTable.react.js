import React from "react";
import PropTypes from "prop-types";
import {Table, OverlayTrigger, Tooltip, Button} from "react-bootstrap";

const TasksTable = ({tasks, runTask, stopTask}) => (
  <Table bordered hover>
    <thead>
    <tr>
      <th>#</th>
      <th>Title</th>
      <th></th>
      <th></th>
    </tr>
    </thead>
    <tbody>
    {tasks.map(task => {
      return (
        <tr key={task.id}>
          <td>
              {task.id}
          </td>
          <td>
              <>
                   <OverlayTrigger placement="bottom" delay={{show: 250, hide: 400}} overlay={<Tooltip >{task.description}</Tooltip>}>
                       <span>
                            {task.title}
                       </span>
                   
                   </OverlayTrigger> 
              </>                    
          </td>
          <td>
            <Button variant="success" onClick={() => runTask(task.id)}>Run</Button>
          </td>
          <td>
            <Button variant="danger" onClick={() => stopTask(task.id)}>Stop</Button>
          </td>
        </tr>
      )
    })}
    </tbody>
  </Table>
);

TasksTable.propTypes = {
  tasks: PropTypes.array.isRequired,
  runTask: PropTypes.func.isRequired,
  stopTask: PropTypes.func.isRequired
};

export default TasksTable;
