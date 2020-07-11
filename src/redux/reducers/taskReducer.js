import initialState from "./initialState";
import {beginApiCall} from "../actions/apiStatusActions";
import * as taskService from '../../services/taskService';

export const LOAD_TASKS_SUCCESS = "LOAD_TASKS_SUCCESS";
export const LOAD_TASKS_ERROR = "LOAD_TASKS_ERROR";

export const RUN_TASK_SUCCESS = "RUN_TASK_SUCCESS";
export const RUN_TASK_ERROR = "RUN_TASK_ERROR";

export default function tasks(state = initialState.tasks, action) {
  switch (action.type) {
    case LOAD_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.tasks
      };
    case RUN_TASK_SUCCESS:
        return {
          ...state,
          result: action.result
        };
    case LOAD_TASKS_ERROR:
      return {
        ...state,
        loadTasksError: action.error
      };
    case RUN_TASK_ERROR:
      return {
        ...state,
        runTaskError: action.error
      };
    default:
      return state;
  }
}

function receiveTasksList(tasks) {
  return {
    type: LOAD_TASKS_SUCCESS,
    tasks
  };
}

function receiveTasksListError(error) {
  return {
    type: LOAD_TASKS_ERROR,
    error: error
  }
}

function receiveTaskResult(result) {
  return {
    type: RUN_TASK_SUCCESS,
    result
  };
}

function receiveTaskResultError(error) {
  return {
    type: RUN_TASK_ERROR,
    error: error
  };
}

export function loadTasks() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return taskService
      .getTasks()
      .then(response => {
        dispatch(receiveTasksList(response.data.tasks));
      })
      .catch(error => {
        dispatch(receiveTasksListError(error));
      });
  }
}

export function runTask(id, param) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return taskService
      .runTask(id, param)
      .then(response => {
        console.log(response.data);
        dispatch(receiveTaskResult(response.data));
      })
      .catch(error => {
        dispatch(receiveTaskResultError(error));
      })
  }
}

