import * as types from "./actionTypes";
import * as resultApi from "../../api/resultApi.react";
import {apiCallError, beginApiCall} from "./apiStatusActions";

export function loadResultsSuccess(results) {
    return {type: types.LOAD_RESULTS_SUCCESS, results};
}

export function loadResults() {
    return function (dispatch) {
        dispatch(beginApiCall());
        return resultApi
            .getResults()
            .then(results => {
                dispatch(loadResultsSuccess(results));
            })
            .catch(error => {
                dispatch(apiCallError(error));
                throw error;
            });
    }
}
