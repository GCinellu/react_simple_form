import React from 'react';
import store from '../reducers';

import { redirect }      from '../router'
import { isEmptyObject } from '../utils'

import PageComponent from '../components/PageComponent';

class ConfirmationStep extends PageComponent {
  constructor(props) {
    super(props);
  }

  goToHomePage() {
    return redirect('/')
  }

  render() {
    const subscriberData = store.getState().subscriber;

    if (isEmptyObject(subscriberData)) {
      redirect('/');
      return null;
    }

    return (
      <div>
        <div className="row">
          <div className="col-sm-12">
            <h3 className="text-center">Confirmation Step</h3>
            <ul>
              <li>First Name: { subscriberData.nameFirst }</li>
              <li>Last Name: { subscriberData.nameLast }</li>
              <li>Addition: { subscriberData.nameAddition }</li>
              <li>Initials: { subscriberData.nameInitials }</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-4 text-center">
            <button className="btn btn-warning" onClick={ this.goToHomePage }>Back</button>
          </div>
          <div className="col-xs-4 col-xs-offset-4 text-center">
            <button className="btn btn-success">Confirm</button>
          </div>
        </div>

      </div>
    )
  }
}

export default ConfirmationStep;