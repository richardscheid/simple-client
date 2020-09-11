import { secure } from '../../api';

const validateToken = async (token) => {
  const instance = secure(token);

  try {
    await instance.post('/auth');
  } catch {
    return false;
  }
  return true;
};

export { validateToken };
