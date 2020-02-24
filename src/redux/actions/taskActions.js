import * as types from "./actionTypes";
import * as taskApi from "../../api/taskApi";
import {apiCallError, beginApiCall} from "./apiStatusActions";

export function loadTasksSuccess(tasks) {
  return {type: types.LOAD_TASKS_SUCCESS, tasks};
}

export function runTaskSuccess(result) {
    return {type: types.RUN_TASK_SUCCESS, result};
}

export function loadTasks() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return taskApi
      .getTasks()
      .then(response => {
        dispatch(loadTasksSuccess(response.data.tasks));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  }
}

export function runTask(id) {
    return function (dispatch) {
        dispatch(beginApiCall());
        return taskApi
          .runTask(id)
          .then(response => {
              console.log(response.data);
              dispatch(runTaskSuccess(response.data));
          })
          .catch(error => {
              dispatch(apiCallError());
              throw error;
          })
    }
}
