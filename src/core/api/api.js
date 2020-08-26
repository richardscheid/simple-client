import axios from 'axios';

const api = (accessToken) => {
  return axios.create({
    baseURL: 'http://localhost:3030',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export { api };
