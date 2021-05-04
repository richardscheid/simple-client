import axios from 'axios';

export default class HttpClient {
  async request(data) {
    let response;

    const baseURL = `http://localhost:3030/${data.url}`;

    try {
      this.response = axios.request({
        url: baseURL,
        method: data.method,
        data: data.body,
        headers: data.headers,
      });
    } catch (error) {
      response = error.response;
    }

    return {
      statusCode: response.status,
      body: response.data,
    };
  }
}
