/* src/components/Layout.jsx */
/* @flow */

import * as React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: React.Node,
};

const imageSource = 'https://pbs.twimg.com/profile_images/424484505915621376/EOwsjaMZ.png';
const Layout = (props: Props) => (
  <div className="container" id="layout-container">
    <div className="row">

      <div className="jumbotron col-md-3" id="left-column">
        <div id="header">
          <Link to="/" className="nav-link">
            <h2>{'im{so}code'}</h2>
            <hr />
            <img src={imageSource} alt="" className="rounded-circle" id="logo-pic"/>
          </Link>

          <p><Link className="nav-link" to="/">Projects</Link></p>
          <p><Link className="nav-link" to="/">Blog</Link></p>
          <p><Link className="nav-link" to="/">Contact</Link></p>
        </div>
      </div>

      <div className="col-md-9" id="right-column">
        {props.children}
        <footer id="footer">
          <hr />
          <p>&copy; 2017 ImSoCode.com</p>
        </footer>
      </div>

    </div>
  </div>
);

export default Layout;
