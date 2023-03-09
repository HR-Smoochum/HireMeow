import axios from 'axios';

// default values if not defined in .env
const PORT = process.env.PORT || 3000;
const SITE_URL = process.env.SITE_URL || 'localhost';

const authServerURL = `http://${SITE_URL}:${PORT}`;

/**
 * Make an Axios Get Request.
 *
 * It takes a string value to append to the endpoint,
 * which should match the server endpoint pattern.
 * @param {string} endpoint - Endpoint to be used
 * @returns an Axios Request Promise
* */
const get = (endpoint) => axios.get(`${authServerURL}${endpoint}`);

/**
 * Make an Axios Post Request.
 *
 * It takes a data json, and a string value to append to the endpoint,
 * which should match the server endpoint pattern.
 * @param {string} endpoint - Endpoint to be used
 * @param {json} json - Data to be posted
 * @returns an Axios Request Promise
 * */
const post = (endpoint, data) => axios.post(`${authServerURL}${endpoint}`, data);

/**
 * Fire an Axios Delete Request.
 *
 * It takes a data json, and a string value to append to the endpoint,
 * which should match the server endpoint pattern.
 * @param {string} endpoint - Endpoint to be used
 * @param {json} json - Data to be deleted
 * @returns an Axios Request Promise
 * */
const del = (endpoint, data) => axios.delete(`${authServerURL}${endpoint}`, data);

/**
 * Fire an Axios Put Request.
 *
 * It takes a data json, and a string value to append to the endpoint,
 * which should match the server endpoint pattern.
 * @param {string} endpoint - Endpoint to be used
 * @param {json} json - Data to be updated
 * @returns an Axios Request Promise
 * */

const put = (endpoint, data) => axios.put(`${authServerURL}${endpoint}`, data);

export {
  get,
  post,
  del,
  put,
};
