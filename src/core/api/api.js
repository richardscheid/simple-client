import axios from 'axios';

const secure = (token) => {
  return axios.create({
    baseURL: 'http://localhost:3030',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
};

const api = axios.create({
  baseURL: 'http://localhost:3030',
});

export { secure, api };
