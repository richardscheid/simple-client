import { api } from '../../api';

const login = async ({ email = '', password = '' }) => {
  const response = await api.post('login', { email, password });
  const { data } = response;
  return data;
};

export default { login };
