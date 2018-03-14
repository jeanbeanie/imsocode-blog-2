/* src/components/routes.js */
/* @flow */

import PostsContainer from './components/posts/PostsContainer';
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
    component: PostsContainer,
    loadInitialData: () => loadInitialData({ posts: []}),
  },
  {
    component: NotFound,
    loadInitialData: () => loadInitialData({ metaTitle: '404 Status' }),
  },
];

export default routes;
