import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import ResultTable from "./ResultTable.react";
import {bindActionCreators} from "redux";
import * as resultActions from "../../redux/actions/resultActions.react";
import "./resultPage.css";

class ResultPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const {results, actions} = this.props;
    if (results.length === 0) {
      actions.loadResults().catch(error => {
        alert(`Loading results failed${error}`);
      })
    }
  }

  render() {

    return (
      <div>
        {this.props.loading ? (
          <Spinner/>
        ) : (
          <div className="">
            <h2>Results</h2>
            <div className="result-table">
              <div className="available-tasks-table">
                <ResultTable results={this.props.results}/>
                  
              </div>
            </div>
            
          </div>          
        )}        
      </div>
    );
  }
}

ResultPage.propTypes = {
    results: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    results: state.results,
    loading: state.apiCallsInProgress > 0
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadResults: bindActionCreators(resultActions.loadResults, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultPage);
