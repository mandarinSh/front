import {combineReducers} from "redux";
import logsreduce from "./logsReducer";
import taskreduce from "./taskReducer";
import resultreduce from "./resultsReducer";
import apicallsinprogressreduce from "./apiStatusReducer";

const rootReducer = combineReducers({
    resultreduce,
    taskreduce,
    logsreduce,
    apicallsinprogressreduce,
});

export default rootReducer;
