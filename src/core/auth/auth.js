import { api } from '../api';

const login = async ({ email = '', password = '' }) => {
  const response = await api.post('login', { email, password });
  return response?.data;
};

export default { login };
