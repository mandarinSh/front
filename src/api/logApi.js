import {handleResponse, handleError} from "./apiUtils";
const baseUrl = process.env.API_URL + "/logs/";

export function getLogs() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
