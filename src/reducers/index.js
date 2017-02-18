import { createStore, combineReducers } from 'redux'

import subscriber from './subscriber'

const reducers = combineReducers({
  subscriber
});

export default createStore(reducers);