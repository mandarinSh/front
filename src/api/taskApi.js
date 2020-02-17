import {handleResponse, handleError} from "./apiUtils";
const baseUrl = process.env.API_URL + "/tasks/";

export function getTasks() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
