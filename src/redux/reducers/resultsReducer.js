import initialState from "./initialState";
import {beginApiCall} from "../actions/apiStatusActions";
import * as resultService from '../../services/resultService';

export const LOAD_RESULTS_SUCCESS = "LOAD_RESULTS_SUCCESS";
export const LOAD_RESULTS_ERROR = "LOAD_RESULTS_ERROR";

export default function result(state = initialState.results, action) {
  switch (action.type) {
    case LOAD_RESULTS_SUCCESS:
      return {
        ...state,
        result: action.results
      };
    case LOAD_RESULTS_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}

function receiveResult(result) {
  return {
    type: LOAD_RESULTS_SUCCESS,
    result: result
  };
}

function receiveResultError(error) {
  return {
    type: LOAD_RESULTS_ERROR,
    error: error
  }
}

export function loadResult() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return resultService
      .getResult()
      .then(result => {
        dispatch(receiveResult(result));
      })
      .catch(error => {
        dispatch(receiveResultError(error));
        // throw error;
      });
  }
}
