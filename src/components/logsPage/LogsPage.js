import React from "react";
import {connect} from "react-redux";
import {includes, pull} from "lodash";

import Spinner from "../common/Spinner";
import AvailableLogsTable from "./AvailableLogsTable";
import LoadedLogsTable from "./LoadedLogsTable";
import {loadLogs} from "../../redux/reducers/logsReducer";
import {Button} from "react-bootstrap";
// import "./logsPage.css";

class LogsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLogs: [],
        };
    }

    selectLog = (id) => {
        const selectedLogs = this.state.selectedLogs;
        if (!includes(selectedLogs, id)) {
            selectedLogs.push(id);
        } else {
            pull(selectedLogs, id);
        }
        this.setState({selectedLogs: selectedLogs});
    };

    loadLogsToDB = () => {
        // TODO create handler for loading logs
    };

    clearLogsFromDB = () => {
        // TODO create handler for clearing logs
    };

    render() {
        const {logs, loading} = this.props;

        return (
            <div>
                {loading ? (
                    <Spinner />
                ) : (
                    <div className="">
                        <h2>{"Select Logs"}</h2>
                        <div className="log-tables">
                            <div className="available-logs-table">
                                <h5>{"Available Logs"}</h5>
                                <Button variant="primary" onClick={this.loadLogsToDB}>
                                    {"Load"}
                                </Button>
                                <AvailableLogsTable selectLog={this.selectLog} logs={logs} />
                            </div>
                            <div className="loaded-logs-table">
                                <h5>{"Loaded Logs"}</h5>
                                <Button variant="danger" onClick={this.clearLogsFromDB}>
                                    {"Clear"}
                                </Button>
                                <LoadedLogsTable logs={logs} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }

    componentDidMount() {
        const {logs, dispatch} = this.props;

        if (!logs) {
            dispatch(loadLogs())
                .then(() => {
                    // TODO add notif
                })
                .catch((error) => {
                    // TODO replace alert with notification
                    // eslint-disable-next-line no-alert
                    alert(`Loading logs failed${error}`);
                });
        }
    }
}

function mapStateToProps(state) {
    const {logsreduce} = state;
    const {logs: logs} = logsreduce || {logs: []};

    return {
        logs,
        loading: state.apiCallsInProgress > 0,
    };
}

export default connect(mapStateToProps)(LogsPage);
