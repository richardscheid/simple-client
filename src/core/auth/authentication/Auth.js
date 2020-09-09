import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authenticate, unauthenticate } from '../../../redux';
// import { validateToken } from '../validateToken';

const Auth = ({ children }) => {
  const mounted = useRef(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const token = useSelector((state) => state.auth.token);
  const authenticated = useSelector((state) => state.auth.authenticated);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  });

  useEffect(() => {
    const checkAuthentication = async () => {
      if (mounted.current && token) {
        const tokenValid = true;

        if (tokenValid) {
          dispatch(authenticate(token));
        } else {
          dispatch(unauthenticate());
        }
      }
    };

    checkAuthentication();
  });

  useEffect(() => {
    if (mounted.current && !authenticated) {
      history.push('/login');
    }
  }, [authenticated, history]);

  return <>{children}</>;
};

Auth.propTypes = {
  children: PropTypes.any.isRequired,
};

export { Auth };
