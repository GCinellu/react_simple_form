import React from 'react';
import store from '../reducers';

import { redirect }      from '../router'
import { hasEmptyValues } from '../utils'

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

    if (hasEmptyValues(subscriberData)) {
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

              <li>Street: { subscriberData.addressStreet }</li>
              <li>Number: { subscriberData.addressNumber }</li>
              <li>Addition: { subscriberData.addressAddition }</li>
              <li>Postcode: { subscriberData.addressPostcode }</li>
              <li>City: { subscriberData.addressCity }</li>
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