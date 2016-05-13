import React from 'react';
import PageLayout from '../layouts/PageLayout';

export default class HomePage extends React.Component {
  render() {
    return (
      <PageLayout>
        <h1>Express-React-HMR-Boilerplate</h1>
        <p>
          This is the demo site for project
          <a
            href="https://github.com/gocreating/express-react-hmr-boilerplate">
            <span> </span>
            express-react-hmr-boilerplate
          </a>
        </p>
      </PageLayout>
    );
  }
};
