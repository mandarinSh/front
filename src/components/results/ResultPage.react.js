import React from "react";
import {connect} from "react-redux";

import Spinner from "../common/Spinner";
import ResultTable from "./ResultTable.react";
import {loadResult} from "../../redux/reducers/resultsReducer";
import Iframe from '@trendmicro/react-iframe';
import Downloader from 'js-file-downloader';
// import "./resultPage.css";

class ResultPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentChartID: null,
            currentChart: null
        };
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
        Downloader({
            url: '../../../public/01_user_time_on_course.csv'
        });
    };

    showChart = (res) => {
        // TODO make request for getting chart
        this.setState({currentChartID: res.id});
        this.getIFrame(res.id);
        console.log(res.id);
    };

    getIFrame = (id) => {
        let newChart;
        if (id == 1) {
            newChart = <Iframe sandbox={true} src="../../../public/01_total_user_time_on_course.html" height="640px"/>;
        }
        if (id == 2) {
            newChart = <Iframe sandbox={true} src="../../../public/02_Enrolled_but_not_started.html" height="640px"/>;
        }
        if (id == 3) {
            newChart = <Iframe sandbox={true} src="../../../public/05_Couse_Activity.html" height="640px"/>;
        }
        if (id == 4) {
            newChart = <Iframe sandbox={true} src="../../../public/06_Page_Activity_On_Course.html" height="640px"/>;
        }
        this.setState({currentChart: newChart});
    };

    render() {
        const {loading, result} = this.props;

        return (
            <div>
                {loading ? (
                    <Spinner />
                ) : (
                    <div className="page">
                        <h2>{"Calculated Results"}</h2>
                        <div className="result-table">
                            <div className="available-tasks-table">
                                <ResultTable result={result} downloadResults={this.downloadResults} showChart={this.showChart} />
                            </div>
                        </div>
                        <h2>{'Chart'}</h2>
                        <div className="iframe-chart">
                            {this.state.currentChart}
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
