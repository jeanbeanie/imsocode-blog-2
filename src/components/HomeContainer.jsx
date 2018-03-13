/* src/components/HomeContainer.jsx */
/* @flow */

import React from 'react';

const HomeContainer = (props: {metaTitle: string}) => (
  <div className="text-center">
    <h1>{props.metaTitle}</h1>
    <img id="homeImage" src="img/sprout.png" alt="MERN starter seed app" />
  </div>
);

export default HomeContainer;
