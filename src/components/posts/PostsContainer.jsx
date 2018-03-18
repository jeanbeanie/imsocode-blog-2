/* src/components/PostsContainer.jsx */
/* @flow */

import React from 'react';
import { Link } from 'react-router-dom';

class PostsContainer extends React.Component <{posts?: []}, {posts?: []}> {
  constructor(props: {posts?: []}) {
    super(props);
    this.state = {
      posts: this.props.posts || [],
    };
  }

  componentDidMount() {
    this.loadInitialData();
  }

  loadInitialData() {
    const promises = [];
    promises.push(this.props.loadInitialData())
    Promise.all(promises).then((data) => {
      this.setState(data[0]);
    }).catch(err => console.log('Error loading data in PostsContainer', err));
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        {
          posts.map((post, index) => (
            <div className="post-index-item" key={index}>
              <Link to={`/blog/${post.slug}`}><h4> {post.title} </h4></Link>
              <p> {post.summary} <Link to={`/blog/${post.slug}`}>+Read more</Link></p>
              <p className="post-published-date"> {post.publishedDate} </p>
            </div>
          ))
        }
      </div>
    );
  }
}
PostsContainer.defaultProps = {
  posts: [],
};

export default PostsContainer;
