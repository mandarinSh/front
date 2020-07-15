import React from "react";
import {connect} from "react-redux";
import {isEmpty, mapValues, keys, head} from "lodash";

import Spinner from "../common/Spinner";
import TasksTable from "./TasksTable.react";
import {Button, Form, Modal} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {runTask, loadTasks} from "../../redux/reducers/taskReducer";
// import "./tasksPage.css";

class TasksPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isTaskSelectedToRun: false,
            selectedTask: {},
            taskToRunParameters: [],
        };
    }

    componentDidMount() {
        const {mainTasks, dispatch} = this.props;
        if (!mainTasks) {
            dispatch(loadTasks())
                .then(() => {
                    // TODO add notification "tasks loaded"
                    // eslint-disable-next-line no-console
                    console.log(this.props);
                })
                .catch((error) => {
                    // eslint-disable-next-line no-alert
                    alert(`Loading tasks failed${error}`);
                });
        }
    }

    runTask = () => {
        const {dispatch} = this.props;
        const {selectedTask} = this.state;
        const taskToRunParameters = this.state.taskToRunParameters;
        let param = null;
        if (!isEmpty(taskToRunParameters)) {
            param = head(taskToRunParameters);
        }

        dispatch(runTask(selectedTask.id, param)).then(() => {
            const {result} = this.props;
            const wnd = window.open(`data:text/html;charset=utf-8,${result}`);
            wnd.document.write(result);
            this.hideTaskModal();
        });
    };

    openTaskModal = (task) => {
        this.setState({isTaskSelectedToRun: true});
        this.setState({selectedTask: task});
    };

    stopTask = (task) => {
        // eslint-disable-next-line no-console
        console.log(`stop task ${task.id}`);
    };

    getParameters = (e, key) => {
        const {taskToRunParameters} = this.state;
        taskToRunParameters[`${key}`] = e.target.value;
        this.setState({taskToRunParameters: taskToRunParameters});
    };

    getParameterInput = (parameters) => {
        const values = [];
        // ?????????????????
        // eslint-disable-next-line lodash/collection-method-value
        mapValues(parameters, function (value) {
            values.push(value);
            return value;
        });

        const paramKeys = keys(parameters);

        if (!isEmpty(paramKeys)) {
            return paramKeys.map((key) => {
                return (
                    <span key={key}>
                        <>
                            <Form.Group>
                                <Form.Label>
                                    {"Parameter"} {key}
                                </Form.Label>
                                <Form.Control className="parameter-input" onChange={(e) => this.getParameters(e, key)} />
                            </Form.Group>
                        </>
                    </span>
                );
            });
        }
    };

    getTaskModalWithNoParameters = () => {
        return (
            <span>
                <Form.Group>
                    <Form.Label>{"This task does not need  any parameters to run! Confirm running this task."}</Form.Label>
                </Form.Group>
            </span>
        );
    };

    hideTaskModal = () => {
        this.setState({
            isTaskSelectedToRun: false,
            taskToRunParameters: [],
            selectedTask: {},
        });
    };

    render() {
        const {selectedTask, isTaskSelectedToRun} = this.state;
        // eslint-disable-next-line no-unused-vars
        const {loading, mainTasks, utilityTasks} = this.props;

        return (
            <div>
                {loading ? (
                    <Spinner />
                ) : (
                    <div className="">
                        <h2>{"Analyzer"}</h2>
                        <div className="tasks-tables">
                            <div className="available-tasks-table">
                                <h5>{"Main Tasks"}</h5>
                                <TasksTable runTask={this.openTaskModal} stopTask={this.stopTask} tasks={mainTasks} />
                            </div>
                            <div className="available-tasks-table utility-tasks">
                                <h5>{"Utility Tasks"}</h5>
                                <TasksTable runTask={this.openTaskModal} stopTask={this.stopTask} tasks={utilityTasks} />
                            </div>
                        </div>
                        <NavLink to="/results" activeStyle={{color: "#FFFFF"}}>
                            <Button>{"Results"}</Button>
                        </NavLink>
                        {this.state.isTaskSelectedToRun && (
                            <Modal aria-labelledby="contained-modal-title-vcenter" centered show={isTaskSelectedToRun} size="lg" onHide={this.hideTaskModal}>
                                <Modal.Header>
                                    <Modal.Title>{selectedTask.title}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="modal-body">
                                        <h5>{"Parameters"}</h5>
                                        {!isEmpty(selectedTask.parameters) && this.getParameterInput(selectedTask.parameters)}
                                        {isEmpty(selectedTask.parameters) && this.getTaskModalWithNoParameters()}
                                    </div>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={this.hideTaskModal}>
                                        {"Cancel"}
                                    </Button>
                                    <Button variant="primary" onClick={this.runTask}>
                                        {"Run"}
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {taskreduce, resultreduce} = state;
    const {mainTasks: mainTasks} = taskreduce || {mainTasks: []};
    const {utilityTasks: utilityTasks} = taskreduce || {utilityTasks: []};
    const {result: result} = resultreduce || {result: []};

    return {
        mainTasks,
        utilityTasks,
        result,
        loading: state.apiCallsInProgress > 0,
    };
}

export default connect(mapStateToProps)(TasksPage);
