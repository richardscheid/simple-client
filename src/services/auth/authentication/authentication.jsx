import api from '../../api';

class Authentication {
  async login({ email, password }) {
    try {
      const result = await api.post('login', { email, password });

      return result;
    } catch (err) {
      console.log(err);
    }
  }
}

export default Authentication;
