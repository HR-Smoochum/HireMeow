import axios from 'axios';

const authServerURL = `http://${process.env.SITE_URL}:${process.env.PORT}`;

/**
 * Make an Axios Get Request.
 *
 * It takes a string value to append to the endpoint,
 * which should match the server endpoint pattern.
 * @param {string} endpoint - Endpoint to be used
 * @returns an Axios Request Promise
* */
const get = function getByEndpoint(endpoint) {
  return axios.get(`${authServerURL}/${endpoint}`);
};

/**
 * Make an Axios Post Request.
 *
 * It takes a data json, and a string value to append to the endpoint,
 * which should match the server endpoint pattern.
 * @param {string} endpoint - Endpoint to be used
 * @param {json} json - Data to be posted
 * @returns an Axios Request Promise
 * */
const post = function postByEndpoint(endpoint, json) {
  const config = {
    data: json,
  };

  return axios.post(`${authServerURL}/${endpoint}`, config);
};

/**
 * Fire an Axios Delete Request.
 *
 * It takes a data json, and a string value to append to the endpoint,
 * which should match the server endpoint pattern.
 * @param {string} endpoint - Endpoint to be used
 * @param {json} json - Data to be deleted
 * @returns an Axios Request Promise
 * */
const del = function deleteByEndpoint(endpoint, json) {
  const config = {
    data: json,
  };

  return axios.delete(`${authServerURL}/${endpoint}`, config);
};

export {
  get,
  post,
  del,
};
