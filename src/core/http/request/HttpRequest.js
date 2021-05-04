import { useSelector } from 'react-redux';

const HttpRequest = ({ data }) => {
  const token = useSelector((state) => state.auth.token);

  data.headers = [{ Accept: 'application/json' }];

  if (token) data.headers.push({ Authorization: `Bearer ${token}` });

  return data;
};

export default HttpRequest;
