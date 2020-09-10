import { secure } from '../../api';

const validateToken = async (token) => {
  let response;
  const instance = secure(token);

  try {
    response = await instance.post('/auth');
  } catch {
    return false;
  }
  console.log(response);
  return response.data.auth;
};

export { validateToken };
