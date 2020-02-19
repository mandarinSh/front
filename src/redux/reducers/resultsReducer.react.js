import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function resultsReducer(state = initialState.results, action) {
  switch (action.type) {
    case types.LOAD_RESULTS_SUCCESS:
      return action.results;
    default:
      return state;
  }
}
