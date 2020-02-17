import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import TasksTable from "./TasksTable.react";
import {bindActionCreators} from "redux";
import * as taskActions from "../../redux/actions/taskActions";
import "./tasksPage.css";
import {Button} from "react-bootstrap";

class TasksPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.runTask = this.runTask.bind(this);
    this.stopTask = this.stopTask.bind(this);
  }

  componentDidMount() {
    const {tasks, actions} = this.props;
    if (tasks.length === 0) {
      actions.loadTasks().catch(error => {
        alert(`Loading tasks failed${error}`);
      })
    }
  }

  runTask(id) {
    console.log(`run task ${id}`);
  }

  stopTask(id) {
    console.log(`stop task ${id}`);
  }

  render() {
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
                  runTask={this.runTask}
                  stopTask={this.stopTask}
                  tasks={this.props.tasks}/>
              </div>
            </div>
            <Button>Results</Button>
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
