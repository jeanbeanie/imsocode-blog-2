/* src/routes.js */
/* @flow */

import axios from 'axios';
import PostsContainer from './components/posts/PostsContainer';
import NotFound from './components/NotFound';
import { app, metaData } from './config';

const loadInitialData = (props?: {}) =>
  // overwrite default meta data with passed in props
  ({
    ...metaData,
    ...props,
  });

// loadInitialData property is required and must return obj
const routes: Array<{loadInitialData: () => {}}> = [
  {
    path: '/',
    exact: true,
    component: PostsContainer,
    loadInitialData: () => axios.get(`http://localhost:${app.port}/api/posts`)
      .then(result => loadInitialData({ posts: result.data.reverse() }))
      .catch((err) => {
        console.log('Axios error fetching posts!', err);
      }),
  },
  {
    component: NotFound,
    loadInitialData: () => loadInitialData({ title: '404 Status' }),
  },
];

export default routes;
