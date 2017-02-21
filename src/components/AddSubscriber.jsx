import React                         from 'react'
import { addSubscriber }             from '../actions'
import PageComponent                 from './PageComponent'
import store                         from '../reducers'
import { redirect }                  from '../router';
import { initialCapitalizedWithDot } from './../utils'

class AddSubscriber extends PageComponent {
  constructor(props) {
    super(props);

    let currentSubscriber = store.getState().subscriber;

    if (currentSubscriber) {
      this.state = currentSubscriber;
    } else {
      this.state = {
        nameFirst: '',
        nameLast: '',
        nameAddition: '',
        nameInitials: '',

        addressStreet: '',
        addressNumber: '',
        addressAddition: '',
        addressPostcode: '',
        addressCity: '',
      };
    }
  }

  submitForm(e) {
    e.preventDefault();

    store.dispatch(addSubscriber(this.state));
    redirect('/confirmation-step')
  }

  onChangeNameInput(inputKey, event) {
    let newState = {};
    newState[inputKey] = event.target.value;

    // in react this.setState() function in any component is asynchronous or is called
    // after the completion of the function that it was called in

    // You can call a function after the state value has updated:
    // this.setState({foo: 'bar'}, () => { // Do something here. });

    this.setState(newState, () => { this.initialsFromName() });
  }

  onChangeAddressInput(event) {
    event.preventDefault();

    let address  = this.state.addressStreet;
    let postcode = this.state.addressPostcode;

    console.log(address, postcode);
    console.log(this.state);
  }

  initialsFromName() {
    let info = {
      nameFirst: this.state.nameFirst,
      nameAddition: this.state.nameAddition,
      nameLast: this.state.nameLast
    };

    let text = initialCapitalizedWithDot(info.nameFirst) +
      initialCapitalizedWithDot(info.nameAddition) +
      initialCapitalizedWithDot(info.nameLast);

    this.setState({nameInitials: text});
  }

  render() {
    return (
      <div>
        <form onSubmit={ (e) => { this.submitForm(e) }}>
          <h3 className="text-center">Personal Data</h3>
          <hr/>

          <div className="form-group">
            <label htmlFor="name-first">First name</label>
            <input
              type="text"
              onChange={(e) => this.onChangeNameInput('nameFirst', e) }
              value={ this.state.nameFirst }
              id="name-first"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name-addition">Addition</label>
            <input
              type="text"
              onChange={(e) => this.onChangeNameInput('nameAddition', e) }
              value={ this.state.nameAddition }
              id="name-addition"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name-last">Last name</label>
            <input
              type="text"
              onChange={(e) => this.onChangeNameInput('nameLast', e) }
              value={ this.state.nameLast }
              id="name-last"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name-initials">Initials</label>
            <input
              type="text"
              value={ this.state.nameInitials }
              id="name-initials"
              className="form-control form-control-static"
              disabled="disabled"
            />
          </div>

          <h3 className="text-center">Address</h3>
          <hr/>

          <div className="row">
            <div className="col-xs-6">
              <div className="form-group">
                <label htmlFor="address-street">Street Name</label>
                <input
                  type="text"
                  value={ this.state.addressStreet }
                  id="address-street"
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-xs-3">
              <div className="form-group">
                <label htmlFor="address-number">Number</label>
                <input
                  type="text"
                  value={ this.state.addressNumber }
                  id="address-number"
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-xs-3">
              <div className="form-group">
                <label htmlFor="address-addition">Addition</label>
                <input
                  type="text"
                  value={ this.state.addressAddition }
                  id="address-addition"
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-xs-4">
              <div className="form-group">
                <label htmlFor="address-postcode">Postcode</label>
                <input
                  type="text"
                  value={ this.state.addressPostcode }
                  id="address-postcode"
                  className="form-control"
                />
              </div>
            </div>

            <div className="col-xs-8">
              <div className="form-group">
                <label htmlFor="address-city">City</label>
                <input
                  type="text"
                  value={ this.state.addressCity }
                  id="address-city"
                  className="form-control"
                />
              </div>
            </div>
          </div>


          <div className="text-right">
            <button type="submit" className="btn btn-success btn-lg text-right">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }

}

export default AddSubscriber;