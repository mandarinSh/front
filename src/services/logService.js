import axios from "axios";
import {toString} from 'lodash';

const prefix = `${process.env.API_URL}/api/v1`;

export function getLogs() {
    return axios({
        method: 'get',
        url: `${prefix}/getAllLogs`,
        headers: { "Access-Control-Allow-Origin": "*" },
        crossdomain: true
    });
}

export function loadLogsToDB(ids) {
    return axios({
        method: 'post',
        url: `${prefix}/load_logs`,
        params: {
            ids: toString(ids)
        }
    });
}
