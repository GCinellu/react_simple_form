import React from 'react';
import store from '../reducers';

class PageComponent extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    // subscribe to changes in state
    this.unsubscribe = store.subscribe(() => {
      this.setStateFromStore();
    });

    // set initial state
    this.setStateFromStore();
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  setStateFromStore () {
    this.setState(store.getState());
  }
}

export default PageComponent;
