/* src/components/pages/PageContainer.jsx */
/* @flow */

import * as React from 'react';

class PageContainer extends React.Component <{title?: string, children:React.Node}> {
  constructor(props: {title?: string}) {
    super(props);
    this.state = {
      title: this.props.title || '',
      children: this.props.children || <div />,
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
    }).catch(err => console.log('Error loading data in PageContainer', err));
  }

  render() {
    const { title, children } = this.state
    return (
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    );
  }
}

export default PageContainer;
