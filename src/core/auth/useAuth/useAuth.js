import { api } from '../../api';

const login = async ({ email = '', password = '' }) => {
  try {
    const response = await api.post('auth/login', { email, password });
    return response?.data;
  } catch (err) {
    return err.response;
  }
};

export default { login };
