import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function tasksReducer(state = initialState.tasks, action) {
  switch (action.type) {
    case types.LOAD_TASKS_SUCCESS:
      return action.tasks;
    case types.RUN_TASK_SUCCESS:
        return action.result;
    default:
      return state;
  }
}
