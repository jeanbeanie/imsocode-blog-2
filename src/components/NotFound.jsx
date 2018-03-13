/* src/components/NotFound.jsx */
/* @flow */

import React from 'react';
import Status from './Status';

type Props = {
  metaTitle: string,
};

const NotFound = (props: Props) => (
  <Status code={404}>
    <div>
      <h1>{props.metaTitle}</h1>
    </div>
  </Status>
);

export default NotFound;
