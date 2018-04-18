/* server/server.js */
/* @flow */

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';
import express from 'express';
import { StaticRouter as Router } from 'react-router';
import { matchPath } from 'react-router-dom';

import Html from '../src/components/Html';
import App from '../src/components/App';
import routes from '../src/routes';


const app = express();


/* API ROUTES */
const post = require('./api/post');

app.get('/api/posts', (req, res) => {
  post.getPosts((result) => {
    res.send(result);
  });
});

app.get('/api/posts/:slug', (req, res) => {
  // pull post slug from request
  const { slug } = req.params;

  post.getPostBySlug(slug, (result) => {
    res.send(result);
  });
});

/* PUBLIC ROUTES */
app.use(express.static('client'));

// Add 'Access-Control-Allow-Origin' header to Express routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('*', (req, res) => {
  const promises = [];
  const context = {};

  // use 'some' method to imitate <Switch> behavior of selecting only
  // the first route to match
  routes.some((route) => {
    const { url } = req;
    const match = matchPath(url, route);
    if (match) {
      promises.push(route.loadInitialData(url));
    }
    return match;
  });

  if (context.url) {
    // context.status was added if our custom Redirect or Status route component renders
    // redirect(context.status, context.url);

  } else {
    Promise.all(promises).then((data) => {
      // route specific initial data is either returned from promise or empty
      // TODO throw err on empty data!!
      const routeData = data[0] || [];

      // get the head data for use in your prerender.
      // Because this component keeps track of mounted instances,
      // you have to make sure to call renderStatic on server,
      // or you'll get a memory leak.
      const helmet = Helmet.renderStatic();

      // markup to be rendered by server with StaticRouter
      const markup = ReactDOMServer.renderToNodeStream(
        <Router location={req.url} context={context}>
          <Html helmet={helmet} initialData={routeData}>
            <App {...routeData} />
          </Html>
        </Router>);
      // render the application
      markup.pipe(res);
    });
  }
});

export default app;
