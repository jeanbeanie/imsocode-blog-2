/* src/routes.js */
/* @flow */

import axios from 'axios';
import PostsContainer from './components/posts/PostsContainer';
import PostContainer from './components/posts/PostContainer';
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
  { /* Root route */
    path: '/',
    exact: true,
    component: PostsContainer,
    loadInitialData: () => axios.get(`http://localhost:${app.port}/api/posts`)
      .then(result => loadInitialData({ posts: result.data.reverse() }))
      .catch((err) => {
        console.log('Axios error fetching posts!', err);
      }),
  },
  { /* Post slug route */
    path: '/blog/:slug',
    component: PostContainer,
    loadInitialData: (url) => {
      const slug = url.substring('/blog/'.length);
      return axios.get(`http://localhost:${app.port}/api/posts/${slug}`)
        .then(result => loadInitialData({ post: result.data }))
        .catch((err) => {
          console.log('Axios error fetching post by slug!', err);
        });
    },
  },
  /* Projects page route */
  /* Contact page route */
  { /* 404 Route */
    component: NotFound,
    loadInitialData: () => loadInitialData({ title: '404 Status' }),
  },
];

export default routes;
