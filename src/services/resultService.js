import axios from 'axios';

const baseUrl = process.env.API_URL + "results/";

// export function getResults() {
//   return fetch(baseUrl)
//     .then(handleResponse)
//     .catch(handleError);
// }

export function getResult() {
  return axios({
    method: 'get',
    url: baseUrl,
    headers: {"Access-Control-Allow-Origin": "*"},
    crossdomain: true
  });
}