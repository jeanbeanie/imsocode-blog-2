/* src/routes.js */
/* @flow */

import axios from 'axios';
import React from 'react';
import PostsContainer from './components/posts/PostsContainer';
import PostContainer from './components/posts/PostContainer';
import PageContainer from './components/pages/PageContainer';
import ProjectsPage from './components/pages/ProjectsPage';
import ContactPage from './components/pages/ContactPage';
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
    loadInitialData: () => axios.get(`${app.rootUrl}/api/posts`)
      .then(result => loadInitialData({ posts: result.data.reverse() }))
      .catch((err) => {
        console.log('Axios error fetching posts!', err);
      }),
  },
  { /* Post slug route */
    path: '/blog/:slug',
    component: PostContainer,
    loadInitialData: (url: string) => {
      const slug = url.substring('/blog/'.length);
      return axios.get(`${app.rootUrl}/api/posts/${slug}`)
        .then(result => loadInitialData({ post: result.data }))
        .catch((err) => {
          console.log('Axios error fetching post by slug!', err);
        });
    },
  },
  {/* Projects page route */
    path: '/projects',
    component: PageContainer,
    loadInitialData: () => loadInitialData({
      title: 'Projects',
      children: <ProjectsPage />,
    }),
  },
  { /* Contact page route */
    path: '/contact',
    component: PageContainer,
    loadInitialData: () => loadInitialData({
      title: 'Contact',
      children: <ContactPage />,
    }),
  },
  { /* 404 route */
    component: PageContainer,
    loadInitialData: () => loadInitialData({
      title: '<404> : Page Not Found!',
    }),
  },
];

export default routes;
