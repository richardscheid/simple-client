import api from '../api';

const login = async ({ email, password = '' }) => {
  try {
    console.log(email);
    const result = await api.get('login', { email, password });
    console.log(result);

    return result;
  } catch (err) {
    console.log(err);
  }
};

export default { login };
