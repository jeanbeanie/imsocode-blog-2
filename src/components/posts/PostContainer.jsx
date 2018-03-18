/* src/components/posts/PostContainer.jsx */
/* @flow */

import React from 'react';

class PostContainer extends React.Component <{post?: {}}> {
  constructor(props: {post?: {}}) {
    super(props);
    this.state = {
      post: this.props.post || {},
    };
  }

  componentDidMount() {
    this.loadInitialData();
  }

  loadInitialData() {
    const promises = [];
    const url = window.document.location.pathname;
    promises.push(this.props.loadInitialData(url))
    Promise.all(promises).then((data) => {
      this.setState(data[0]);
    }).catch(err => console.log('Error loading data in PostContainer', err));
  }

  render() {
    const { post } = this.state;
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
};

PostContainer.defaultProps = {
  post: {},
};

export default PostContainer;
