import React from "react";
import {connect} from "react-redux";

import Spinner from "../common/Spinner";
import ResultTable from "./ResultTable.react";
import {loadResult} from "../../redux/reducers/resultsReducer";
// import "./resultPage.css";

class ResultPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {result, dispatch} = this.props;
        if (!result) {
            dispatch(loadResult())
                .then(() => {
                    // TODO add notification
                })
                .catch((error) => {
                    // TODO replace alert with notification
                    // eslint-disable-next-line no-alert
                    alert(`Loading results failed${error}`);
                });
        }
    }

    downloadResults = (result) => {
        // eslint-disable-next-line no-console
        console.log(result);
    };

    render() {
        const {loading, result} = this.props;

        return (
            <div>
                {loading ? (
                    <Spinner />
                ) : (
                    <div className="">
                        <h2>{"Results"}</h2>
                        <div className="result-table">
                            <div className="available-tasks-table">
                                <ResultTable result={result} downloadResults={this.downloadResults} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {resultreduce} = state;
    const {result: result} = resultreduce || {result: []};

    return {
        result,
        loading: state.apiCallsInProgress > 0,
    };
}

export default connect(mapStateToProps)(ResultPage);
