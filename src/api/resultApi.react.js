import {handleResponse, handleError} from "./apiUtils";
const baseUrl = process.env.API_URL + "/results/";

export function getResults() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
