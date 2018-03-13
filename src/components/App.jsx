/* src/components/App.jsx */
/* @flow */

import React from 'react';
import HelmetContainer from './HelmetContainer';
import { Route, Switch } from 'react-router-dom';

import routes from '../routes';
import Layout from './Layout';

class App extends React.Component<{}> {
  renderRoute() {
    return (
      <Switch>
        {
          routes.map((route, i) => {
            const routeProps = { ...route, component: undefined };

            return (
              <Route
                key={i}
                {...routeProps}
                render={() => (
                  <div>
                    <HelmetContainer {...route.loadInitialData()} />
                    <route.component {...route.loadInitialData()} />
                  </div>
                )}
              />
            );
          })
        }
      </Switch>
    );
  }

  render() {
    return (
      <Layout>
        {this.renderRoute()}
      </Layout>
    );
  }
}

export default App;
