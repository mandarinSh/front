import * as types from "./actionTypes";
import * as logApi from "../../api/logApi";
import {apiCallError, beginApiCall} from "./apiStatusActions";

export function loadLogsSuccess(logs) {
  return {type: types.LOAD_LOGS_SUCCESS, logs};
}

export function loadLogs() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return logApi
      .getLogs()
      .then(logs => {
        dispatch(loadLogsSuccess(logs));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  }
}
