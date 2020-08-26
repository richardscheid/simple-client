import { api } from '../api';

const login = async ({ email = '', password = '' }) => {
  return await api.post('login', { email, password });
};

export default { login };
