import * as types from "./actionTypes";
import * as taskApi from "../../api/taskApi";
import {apiCallError, beginApiCall} from "./apiStatusActions";

export function loadTasksSuccess(tasks) {
  return {type: types.LOAD_TASKS_SUCCESS, tasks};
}

export function loadTasks() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return taskApi
      .getTasks()
      .then(tasks => {
        dispatch(loadTasksSuccess(tasks));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  }
}
