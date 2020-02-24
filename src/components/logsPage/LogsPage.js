import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import AvailableLogsTable from "./AvailableLogsTable";
import LoadedLogsTable from "./LoadedLogsTable";
import {bindActionCreators} from "redux";
import * as logActions from "../../redux/actions/logActions";
import {includes, pull} from "lodash";
import "./logsPage.css";
import {Button} from "react-bootstrap";

// import axios from "axios";

// const prefix = process.env.API_URL + "/api/v1";

class LogsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLogs: []
    };

    this.selectLog = this.selectLog.bind(this);
    this.loadLogsToDB = this.loadLogsToDB.bind(this);
    this.clearLogsFromDB = this.clearLogsFromDB.bind(this);
  }

  componentDidMount() {
    const {logs, actions} = this.props;
    if (logs.length === 0) {
      actions.loadLogs().catch(error => {
        alert(`Loading logs failed${error}`);
      });
    }
  }

  selectLog(id) {
    const selectedLogs = this.state.selectedLogs;
    console.log(selectedLogs);
    if (!includes(selectedLogs, id)) {
      selectedLogs.push(id);
    } else {
      pull(selectedLogs, id);
    }
    this.setState({selectedLogs: selectedLogs});
  }

  loadLogsToDB() {
    console.log("load logs");
    // TODO create handler for loading logs
  }

  clearLogsFromDB() {
    // TODO create handler for clearing logs
  }

  render() {
    return (
      <div>
        {this.props.loading ? (
          <Spinner/>
        ) : (
          <div className="">
            <h2>Select Logs</h2>
            <div className="log-tables">
              <div className="available-logs-table">
                <h5>Available Logs</h5>
                <Button variant="primary" onClick={this.loadLogsToDB}>Load</Button>
                <AvailableLogsTable
                  selectLog={this.selectLog}
                  logs={this.props.logs}/>
              </div>
              <div className="loaded-logs-table">
                <h5>Loaded Logs</h5>
                <Button variant="danger" onClick={this.clearLogsFromDB}>Clear</Button>
                <LoadedLogsTable
                  logs={this.props.logs}/>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

LogsPage.propTypes = {
  logs: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    logs: state.logs,
    loading: state.apiCallsInProgress > 0
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadLogs: bindActionCreators(logActions.loadLogs, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogsPage);
