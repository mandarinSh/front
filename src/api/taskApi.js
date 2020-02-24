import axios from "axios";

const prefix = `${process.env.API_URL}/api/v1`;

export function getTasks() {
    return axios({
        method: 'get',
        url: `${prefix}/getAllTasks`,
        headers: { "Access-Control-Allow-Origin": "*" },
        crossdomain: true
    });
}

export function runTask(id) {
    return axios({
        method: 'get',
        url: `${prefix}/execute/${id}`,
        headers: { "Access-Control-Allow-Origin": "*" },
        crossdomain: true
    });
}
