/* src/routes.js */
/* @flow */

import axios from 'axios';
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
    loadInitialData: () => {
      return axios.get('http://localhost:3000/api/posts')
        .then((result) => {
          return loadInitialData({ posts: result.data.reverse() });
        })
        .catch((error) => {
          console.log('Axios error fetching posts!', error);
        });
    },
  },
  {
    component: NotFound,
    loadInitialData: () => loadInitialData({ title: '404 Status' }),
  },
];

export default routes;
