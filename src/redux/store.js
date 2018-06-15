import { createStore } from 'redux';
import rootReducer from './rootReducer';

//initialize store
const store = createStore(rootReducer, {});

export default store;