import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import logs from "./logsReducer";
import tasks from "./taskReducer";
import results from "./resultsReducer.react";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  results,
  tasks,
  logs,
  courses,
  authors,
  apiCallsInProgress
});

export default rootReducer;
