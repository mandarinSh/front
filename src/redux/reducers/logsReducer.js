import initialState from "./initialState";
import {beginApiCall} from "../actions/apiStatusActions";
import * as logService from "../../services/logService";

export const LOAD_LOGS_SUCCESS = "LOAD_LOGS_SUCCESS";
export const LOAD_LOGS_ERROR = "LOAD_LOGS_ERROR";

export default function logsReducer(state = initialState.logs, action) {
    switch (action.type) {
        case LOAD_LOGS_SUCCESS:
            return {
                ...state,
                logs: action.logs,
            };
        case LOAD_LOGS_ERROR:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}

function receiveLogs(logs) {
    return {
        type: LOAD_LOGS_SUCCESS,
        logs: logs,
    };
}

function receiveLogsError(error) {
    return {
        type: LOAD_LOGS_ERROR,
        error: error,
    };
}

export function loadLogs() {
    return function (dispatch) {
        dispatch(beginApiCall());
        return logService
            .getLogs()
            .then((response) => {
                dispatch(receiveLogs(response.data.logs));
            })
            .catch((error) => {
                dispatch(receiveLogsError(error));
                // throw error;
            });
    };
}
