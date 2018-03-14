/* src/components/PostsContainer.jsx */
/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  posts: [],
}

const PostsContainer = (props: Props) => (
  <div>
    {
      props.posts.map((post, index) => (
        <div className="post-index-item" key={index}>
          <Link to={`/blog/${post.slug}`}><h4> {post.title} </h4></Link>
          <p> {post.summary} <Link to={`/blog/${post.slug}`}>+Read more</Link></p>
          <p className="post-published-date"> {post.publishedDate} </p>
        </div>
      ))
    }
  </div>
);

export default PostsContainer;
