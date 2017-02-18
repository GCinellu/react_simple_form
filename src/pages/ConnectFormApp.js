import React from 'react';

import PageComponent from '../components/PageComponent';
import AddSubscriber from '../components/AddSubscriber'


class ConnectFormApp extends PageComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Connect Form Test Tool</h1>
        <div className="row">
          <div className="col-sm-8">
            <AddSubscriber />
          </div>
        </div>
      </div>
    )
  }
}

export default ConnectFormApp;