/* src/components/posts/PostContainer.jsx */
/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  post: {},
}

const PostContainer = (props: Props) => {
  const { post } = props;
  return (
    <div>
      <h2 className="post-title">{post.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.subject }} />
      <p className="font-italic"> Published {post.publishedDate} under <label> category : {post.category}</label></p>
      <hr />
      <p><strong>Connect and send feedback about this article, <a href="">follow me on Twitter!</a></strong></p>
    </div>
  );
}

export default PostContainer;
