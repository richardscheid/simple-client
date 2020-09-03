import axios from 'axios';

const secure = (accessToken) => {
  return axios.create({
    baseURL: 'http://localhost:3030',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

const api = axios.create({
  baseURL: 'http://localhost:3030',
});

export { secure, api };
