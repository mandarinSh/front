import axios from "axios";
// import {handleError, handleResponse} from "./apiUtils";

// const baseUrl = process.env.API_URL + "/results";
const prefix = `${process.env.API_URL}/api/v1`;

// export function getResults() {
//   return fetch(baseUrl)
//     .then(handleResponse)
//     .catch(handleError);
// }

export function getResult() {
    return axios({
        method: "get",
        url: `${prefix}/results`,
        headers: {"Access-Control-Allow-Origin": "*"},
        crossdomain: true,
    });
}

export function getChartByID(id) {
    return axios({
        method: "get",
        url: `${prefix}/${id}`,
        headers: {"Access-Control-Allow-Origin": "*"},
        crossdomain: true,
    });
}
