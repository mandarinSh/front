import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import TasksTable from "./TasksTable.react";
import {bindActionCreators} from "redux";
import * as taskActions from "../../redux/actions/taskActions";
import "./tasksPage.css";
import {Button, Form, Modal} from "react-bootstrap";
import {isEmpty, mapValues, keys} from "lodash";

class TasksPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isTaskSelectedToRun: false,
        selectedTask: {},
        taskToRunParameters: []
    };
  }

  componentDidMount() {
    const {tasks, actions} = this.props;
    if (tasks.length === 0) {
      actions.loadTasks().catch(error => {
        alert(`Loading tasks failed${error}`);
      })
    }
  }

  runTask = () => {
    console.log("run task");
  };

  openTaskModal = (task) => {
    console.log(`run task ${task.id}`);
    this.setState({isTaskSelectedToRun: true});
    this.setState({selectedTask: task});
  };

  stopTask = (task) => {
    console.log(`stop task ${task.id}`);
  };

  getParameters = (e, key) => {
    let {taskToRunParameters} = this.state;
    taskToRunParameters[`${key}`] = e.target.value;
    this.setState({taskToRunParameters: taskToRunParameters});
  };

  getParameterInput = (parameters) => {
      let values = [];
      mapValues(parameters, function(value) {
          
          values.push(value);
      });

      let paramKeys = keys(parameters);

      if (!isEmpty(paramKeys)) {
        return (
            paramKeys.map(key => {
                  return (
                        <span key={key}>
                            <>
                            <Form.Group>
                                <Form.Label>Parameter {key}</Form.Label>
                                <Form.Control className="parameter-input" onChange={(e) => this.getParameters(e, key)}/>
                            </Form.Group>  
                            </>
                        </span>                  
                  )
              })
          );
      }    
  };

  getTaskModalWithNoParameters = () => {
    return (
        <span>
            <Form.Group>
                 <Form.Label>This task does not need  any parameters to run!
                Confirm running this task.</Form.Label>
            </Form.Group>
           
        </span>
    );
  };

  hideTaskModal = () => {
      this.setState({
          isTaskSelectedToRun: false, 
          taskToRunParameters: [], 
          selectedTask: {}
        });
  };



  render() {
    const {selectedTask, isTaskSelectedToRun} = this.state;

    return (
      <div>
        {this.props.loading ? (
          <Spinner/>
        ) : (
          <div className="">
            <h2>Analyzer</h2>
            <div className="tasks-tables">
              <div className="available-tasks-table">
                <h5>Available Tasks</h5>
                <TasksTable
                  runTask={this.openTaskModal}
                  stopTask={this.stopTask}
                  tasks={this.props.tasks}/>
                  
              </div>
            </div>
            <Button>Results</Button>
            {this.state.isTaskSelectedToRun && 
            <Modal  
                aria-labelledby="contained-modal-title-vcenter" 
                centered 
                show={isTaskSelectedToRun} 
                size="lg"
                onHide={this.hideTaskModal}>
                <Modal.Header>
                    <Modal.Title>
                        {selectedTask.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body">
                    <h5>Parameters</h5>
                        {!isEmpty(selectedTask.parameters) && this.getParameterInput(selectedTask.parameters)}
                        {isEmpty(selectedTask.parameters) && this.getTaskModalWithNoParameters()}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.hideTaskModal}>Cancel</Button>
                    <Button variant="primary" onClick={this.runTask}>Run</Button>
                </Modal.Footer>
            </Modal>}
          </div>          
        )}        
      </div>
    );
  }
}

TasksPage.propTypes = {
  tasks: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
    loading: state.apiCallsInProgress > 0
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadTasks: bindActionCreators(taskActions.loadTasks, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksPage);
