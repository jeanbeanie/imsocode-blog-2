/* src/components/Layout.jsx */
/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

type Props = {
  children: React.Node,
};

   // <nav className="navbar justify-content-end">
    //  <Link to="/" className="nav-link">HOME</Link>
   // </nav>
const imageSource = 'https://pbs.twimg.com/profile_images/424484505915621376/EOwsjaMZ.png';
const Layout = (props: Props) => (
  <div className="container" id="layout-container">
    <div className="row">

      <div className="jumbotron col-md-3">

        <div id="header">
          <Link to="/" className="nav-link">
            <h2>{'im{so}code'}</h2>
            <hr />
            <img src={imageSource} className="rounded-circle" />
          </Link>

          <p><Link className="nav-link" to="/">Projects</Link></p>
          <p><Link className="nav-link" to="/">Blog</Link></p>
          <p><Link className="nav-link" to="/">Contact</Link></p>
        </div>

      </div>

      <div className="col-md-9">
        {props.children}
      </div>
    </div>
  </div>
);

export default Layout;
