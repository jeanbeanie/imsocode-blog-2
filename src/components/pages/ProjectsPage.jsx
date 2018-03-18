/* src/components/ProjectsPage.jsx */
/* @flow */

import React from 'react';

const ProjectsPage = () => (
  <div id="left-aligned-page">
    <div className="project-item">
      <h5><a className="title-link" rel="noopener noreferrer" target="_blank" href="https://github.com/jeanbeanie/mern_starter_app">MERN Starter Seed</a></h5>
      <p>
        Simple app starter seed using Node, MongoDB and React
        that I use to create server-side rendered projects/apps (like this one!).
        Webpack, Babel, Flow and linters are set up for developement, 
        and Ava is set up for testing.
      </p>
      <a rel="noopener noreferrer" target="_blank" href="https://github.com/jeanbeanie/mern_starter_app"> (View on Github) </a>
    </div>


    <div className="project-item">
      <h5><a className="title-link" rel="noopener noreferrer" target="_blank" href="http://zootgamer.com">Zootgamer</a></h5>
      <p>A gamer magazine/blog I made with Wordpress. I update it occassionally.</p>
      <a rel="noopener noreferrer" target="_blank" href="http://zootgamer.com"> (Visit live site) </a>
    </div>

    <div className="project-item">
      <h5><a className="title-link" rel="noopener noreferrer" target="_blank" href="http://hxegamer.tv">Hxegamer.tv</a></h5>
      <p>
        Made using Ruby on Rails, I organized videos provided by Youtube&apos;s API
        to create a website you can use to watch gaming related content
        in a variety of "live TV style" channels.
      </p>
      <a target="_blank" rel="noopener noreferrer" href="http://hxegamer.tv"> (Visit live site) </a>
    </div>


    <div className="project-item">
      <h5><a className="title-link" rel="noopener noreferrer" target="_blank" href="https://github.com/jeanbeanie/node-react-blogging-app">Node-React-Blogging-App</a></h5>
      <p>A simple backend for managing a single blog. Powered with Node, with React on the frontend. Used to manage this blog&apos;s posts!</p>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/jeanbeanie/node-react-blogging-app"> (View on Github) </a>
    </div>

  </div>
);

export default ProjectsPage;
