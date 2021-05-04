import { useSelector } from 'react-redux';

class RequestData {
  constructor(url, method, body, headers) {
    this.url = url;
    this.method = method;
    this.body = body;
    this.headers = headers;
  }
}

const HttpRequest = ({ data }) => {
  const token = useSelector((state) => state.auth.token);

  const request = new RequestData();
  request.url = data.url;
  request.method = data.method;
  request.body = data.body;
  request.headers = [{ Accept: 'application/json' }];
  if (token) request.headers.push({ Authorization: `Bearer ${token}` });

  return request;
};

export default HttpRequest;
