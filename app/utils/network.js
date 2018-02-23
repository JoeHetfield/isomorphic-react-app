import qs from 'qs';
import fetch from 'isomorphic-fetch';

const handleResponse = (response) => {
  if (response.ok) return response.json();
  return response.json().then(error => Promise.reject(error));
};

export const get = (url, query = {}) => fetch(url + qs.stringify(query, { addQueryPrefix: true }), {
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
  .then(handleResponse);

export const post = (url, params = {}) => fetch(url, {
  method: 'POST',
  body: JSON.stringify(params),
  credentials: 'same-origin',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
  .then(handleResponse);
