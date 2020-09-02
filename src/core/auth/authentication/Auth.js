import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authenticate, unauthenticate } from '../../../redux';
// import { validateToken } from '../validateToken';

const TOKEN_KEY = 'token';
const { localStorage } = window;

const Auth = ({ children }) => {
  const mounted = useRef(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const accessToken = useSelector((state) => state.auth.accessToken);
  const authenticated = useSelector((state) => state.auth.authenticated);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  });

  // useEffect(() => {
  //   const checkAuthentication = async () => {
  //     const tokenValid = true;

  //     if (tokenValid) {
  //       localStorage.setItem(TOKEN_KEY, accessToken);
  //       mounted.current && dispatch(authenticate(accessToken));
  //     } else {
  //       localStorage.removeItem(TOKEN_KEY);
  //       mounted.current && dispatch(unauthenticate());
  //     }
  //   };

  //   checkAuthentication();
  // }, [accessToken, dispatch]);

  useEffect(() => {
    if (mounted.current && !!authenticated) {
      history.push('/');
    }
  }, [authenticated, history]);

  return <>{children}</>;
};

Auth.propTypes = {
  children: PropTypes.any.isRequired,
};

export { Auth };
