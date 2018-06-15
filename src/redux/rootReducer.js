import { combineReducers } from 'redux';
import counter from './reducers/counter';
import positions from './reducers/positions';

export default combineReducers({
  counter,
  positions
});
