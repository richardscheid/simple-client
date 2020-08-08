import api from '../../api';

const login = async ({ email = '', password = '' }) => {
  try {
    const result = await api.post('login', { email, password });

    return result;
  } catch (err) {
    console.log(err);
  }
};

export default { login };
