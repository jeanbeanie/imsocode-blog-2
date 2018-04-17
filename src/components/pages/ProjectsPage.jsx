/* src/components/ProjectsPage.jsx */
/* @flow */

import React from 'react';

const ProjectsPage = () => (
  <div id="left-aligned-page">
    <div className="project-item">
      <h5><a className="title-link" href="http://life.imsocode.com">Conway&#39;s Game of Life</a></h5>
      <p>
        I created a version of Conway&#39;s game of life with my starter app (mentioned below).
      </p>
      <a href="http://life.imsocode.com"> (Visit live site) </a>
      |
      <a href="https://github.com/jeanbeanie/CGOL_node_react"> (View on Github) </a>
    </div>

    <div className="project-item">
      <h5><a className="title-link" href="https://github.com/jeanbeanie/mern_starter_app">MERN Starter Seed</a></h5>
      <p>
        Simple app starter seed using Node, MongoDB and React
        that I use to create server-side rendered projects/apps (like this one!).
        Webpack, Babel, Flow and linters are set up for developement, 
        and Ava is set up for testing.
      </p>
      <a href="https://github.com/jeanbeanie/mern_starter_app"> (View on Github) </a>
    </div>

    <div className="project-item">
      <h5><a className="title-link" href="http://zootgamer.com">Zootgamer</a></h5>
      <p>A gamer magazine/blog I made with Wordpress. I update it occassionally.</p>
      <a href="http://zootgamer.com"> (Visit live site) </a>
    </div>


    <div className="project-item">
      <h5><a className="title-link" href="https://github.com/jeanbeanie/node-react-blogging-app">Node-React-Blogging-App</a></h5>
      <p>A simple backend for managing a single blog. Powered with Node, with React on the frontend. Used to manage this blog&#39;s posts!</p>
      <a href="https://github.com/jeanbeanie/node-react-blogging-app"> (View on Github) </a>
    </div>

  </div>
);

export default ProjectsPage;
