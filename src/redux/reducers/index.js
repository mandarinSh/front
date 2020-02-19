import { combineReducers } from "redux";
import logs from "./logsReducer";
import tasks from "./taskReducer";
import results from "./resultsReducer.react";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  results,
  tasks,
  logs,
  apiCallsInProgress
});

export default rootReducer;
