import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import logs from "./logsReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  logs,
  courses,
  authors,
  apiCallsInProgress
});

export default rootReducer;
