import axios from "axios";
import {isNull} from "lodash";

const prefix = `${process.env.API_URL}/api/v1`;

export function getTasks() {
    return axios({
        method: "get",
        url: `${prefix}/getAllTasks`,
        headers: {"Access-Control-Allow-Origin": "*"},
        crossdomain: true,
    });
}

export function runTask(id, param = null) {
    let url;
    if (!isNull(param)) {
        url = `${prefix}/execute/${id}/${param}`;
    } else {
        url = `${prefix}/execute/${id}`;
    }

    return axios({
        method: "get",
        url: url,
        headers: {"Access-Control-Allow-Origin": "*"},
        crossdomain: true,
    });
}
