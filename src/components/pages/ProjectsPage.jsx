/* src/components/ProjectsPage.jsx */
/* @flow */

import React from 'react';

const ProjectsPage = () => (
  <div id="left-aligned-page">
    <div className="project-item">
      <h5><a className="title-link" href="https://github.com/jeanbeanie/askman">AskMan [In Dev]</a></h5>
      <p>
        I am writing a small tool that I will use to manage and send automatic reminder texts to people I care about, familiar phrases and words of endearment should be randomized just enough to avoid them realizing the text was pre-scheduled. This project is built on top of my MERN starter app (mentioned below!)
        <br />
        <a href="https://github.com/jeanbeanie/askman"> (View on Github) </a>
      </p>
      <img alt="askman screenshot" className="img-fluid img-thumbnail max-width" src="/img/askman_screenshot.png" />
    </div>
    <hr />

    <div className="project-item">
      <h5><a className="title-link" href="http://life.imsocode.com">Conway&#39;s Game of Life</a></h5>
      <p>
        I created a version of Conway&#39;s game of life with my starter app (mentioned below).
        <br />
        <a href="http://life.imsocode.com"> (Visit live site) </a>
        |
        <a href="https://github.com/jeanbeanie/CGOL_node_react"> (View on Github) </a>
      </p>
      <img alt="game of life screenshot" className="img-fluid img-thumbnail max-width" src="/img/game_of_life_screenshot.png" />
    </div>
    <hr />

    <div className="project-item">
      <h5><a className="title-link" href="https://github.com/jeanbeanie/mern_starter_app">MERN Starter Seed</a></h5>
      <p>
        Simple app starter seed using Node, MongoDB and React
        that I use to create server-side rendered projects/apps (like this one!).
        Webpack, Babel, Flow and linters are set up for developement, 
        and Ava is set up for testing.
        <br />
        <a href="https://github.com/jeanbeanie/mern_starter_app"> (View on Github) </a>
      </p>
      <img alt="mern starter app screenshot" className="img-fluid img-thumbnail max-width" src="/img/mern_starter_app_screenshot.png" />
    </div>
    <hr />

    <div className="project-item">
      <h5><a className="title-link" href="http://zootgamer.com">Zootgamer</a></h5>
      <p>
        A gamer magazine/blog I made with Wordpress. I update it occassionally.
        <br />
        <a href="http://zootgamer.com"> (Visit live site) </a>
      </p>
      <img alt="zootgamer screenshot" className="img-fluid img-thumbnail max-width" src="/img/zootgamer_screenshot.png" />
    </div>
    <hr />

    <div className="project-item">
      <h5><a className="title-link" href="https://github.com/jeanbeanie/node-react-blogging-app">Node-React-Blogging-App</a></h5>
      <p>
        A simple backend for managing a single blog. Powered with Node, with React on the frontend. Used to manage this blog&#39;s posts!
        <br />
        <a href="https://github.com/jeanbeanie/node-react-blogging-app"> (View on Github) </a>
      </p>
      <img alt="node react blogging app screenshot" className="img-fluid img-thumbnail max-width" src="/img/node_react_blogging_app_screenshot.png" />
    </div>
    <hr />

    <div className="project-item">
      <h5><a className="title-link" href="http://cybericamedia.com">Cyberica Media Publishing</a></h5>
      <p>
        A site I created years ago with the purpose of selling blog and social media content packages to clients. I learned a lot about Woocommerce and Wordpress during this project.
        <br />
        <a href="http://cybericamedia.com"> (Visit live site) </a>
      </p>
      <img alt="cyberica media screenshot" className="img-fluid img-thumbnail max-width" src="/img/cybericamedia_screenshot.png" />
    </div>

  </div>
);

export default ProjectsPage;
