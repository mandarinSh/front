import initialState from "./initialState";
import {beginApiCall} from "../actions/apiStatusActions";
import * as logService from "../../services/logService";

export const LOAD_RESULTS_SUCCESS = "LOAD_RESULTS_SUCCESS";
export const LOAD_RESULTS_ERROR = "LOAD_RESULTS_ERROR";

export default function result(state = initialState, action) {
    switch (action.type) {
        case LOAD_RESULTS_SUCCESS:
            return {
                ...state,
                result: action.result,
            };
        case LOAD_RESULTS_ERROR:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}

function receiveResult(result) {
    return {
        type: LOAD_RESULTS_SUCCESS,
        result: result,
    };
}

function receiveResultError(error) {
    return {
        type: LOAD_RESULTS_ERROR,
        error: error,
    };
}

export function loadResult() {
    return function (dispatch) {
        dispatch(beginApiCall());
        // logService here is a stub. Need to use resultService and pass result
        return (
            logService
                .getLogs()
                // .getResult() and pass result: (result) => {dispatch(receiveResult(result)}
                .then(() => {
                    const res = [
                        {
                            id: 1,
                            title: "Result for task «User time on course»",
                        },
                        {
                            id: 2,
                            title: "Result for task «Users who enrolled but not started»",
                        },
                        {
                            id: 3,
                            title: "Result for task «Course activity»",
                        },
                        {
                            id: 4,
                            title: "Result for task «Page activity on course»",
                        }
                    ];

                    dispatch(receiveResult(res));
                })
                .catch((error) => {
                    dispatch(receiveResultError(error));
                    // throw error;
                })
        );
    };
}
