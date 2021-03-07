import React, { Suspense } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Layout } from '../../layout';

import { Dashboard } from '../../../pages';

const PrivateRoutes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99,
    },
    in: {
      opacity: 1,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 1.01,
    },
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4,
  };

  return (
    <AnimatePresence>
      <Suspense
        fallback={
          <div className="w-50 mx-auto">
            Please wait while we load the live preview examples
          </div>
        }
      >
        <Route path={['/dashboard', '/users', '/categories']}>
          <Layout>
            <Switch location={location} key={location.pathname}>
              <motion.div
                transition={pageTransition}
                variants={pageVariants}
                initial="initial"
                animate="in"
                exit="out"
              >
                <Route path="/dashboard">
                  <Dashboard />
                </Route>
              </motion.div>
            </Switch>
          </Layout>
        </Route>
      </Suspense>
    </AnimatePresence>
  );
};

export { PrivateRoutes };
