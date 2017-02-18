import React             from 'react'
import { addSubscriber } from '../actions'
import PageComponent     from './PageComponent'
import store from '../reducers'
import {redirect} from '../router';
import {initialCapitalizedWithDot} from './../utils'

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
      };
    }
  }

  submitForm(e) {
    e.preventDefault();

    store.dispatch(addSubscriber(this.state));
    redirect('/confirmation-step')
  }

  onChangeInputField(inputKey, event) {
    let newState = {};
    newState[inputKey] = event.target.value;

    this.setState(newState);

    if (inputKey.match(/name/)) this.initialsFromName();
  }

  initialsFromName() {
    let info = {
      nameFirst: this.state.nameFirst,
      nameAddition: this.state.nameAddition,
      nameLast: this.state.nameLast
    };

    this.state.nameInitials = initialCapitalizedWithDot(info.nameFirst) +
      initialCapitalizedWithDot(info.nameAddition) +
      initialCapitalizedWithDot(info.nameLast);
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
              onChange={(e) => this.onChangeInputField('nameFirst', e) }
              value={ this.state.nameFirst }
              id="name-first"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name-last">Last name</label>
            <input
              type="text"
              onChange={(e) => this.onChangeInputField('nameLast', e) }
              value={ this.state.nameLast }
              id="name-last"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name-addition">Addition</label>
            <input
              type="text"
              onChange={(e) => this.onChangeInputField('nameAddition', e) }
              value={ this.state.nameAddition }
              id="name-addition"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="name-initials">Initials</label>
            <input
              type="text"
              onChange={(e) => this.onChangeInputField('nameInitials', e) }
              value={ this.state.nameInitials }
              id="name-initials"
              className="form-control-static"
            />
          </div>

          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    )
  }

}

export default AddSubscriber;