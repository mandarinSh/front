import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function logsReducer(state = initialState.logs, action) {
  switch (action.type) {
    case types.LOAD_LOGS_SUCCESS:
      return action.logs;
    default:
      return state;
  }
}
