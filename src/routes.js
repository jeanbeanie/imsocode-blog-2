/* src/components/routes.js */
/* @flow */

import HomeContainer from './components/HomeContainer';
import NotFound from './components/NotFound';
import { metaData } from './config';

const loadInitialData = props =>
  // props should be an object
  ({
    ...metaData,
    ...props,
  });

// loadInitialData property is required and must return obj
const routes = [
  {
    path: '/',
    exact: true,
    component: HomeContainer,
    loadInitialData: () => loadInitialData(),
  },
  {
    component: NotFound,
    loadInitialData: () => loadInitialData({ metaTitle: '404 Status' }),
  },
];

export default routes;
