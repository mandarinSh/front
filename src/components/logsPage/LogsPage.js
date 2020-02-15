import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import AvailableLogsTable from "./AvailableLogsTable";
import {bindActionCreators} from "redux";
import * as logActions from "../../redux/actions/logActions";

class LogsPage extends React.Component {
  state = {

  };

  componentDidMount() {
    const {logs, actions} = this.props;
    if (logs.length === 0) {
      actions.loadLogs().catch(error => {
        alert(`Loading logs failed${error}`);
      })
    }
  }

  render() {
    return (
      <div>
        {this.props.loading ? (
          <Spinner/>
        ) : (
          <div>
            <AvailableLogsTable logs={this.props.logs}/>
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
