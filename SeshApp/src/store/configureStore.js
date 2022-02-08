import {createStore, combineReducers} from 'redux';

import countReducer from '../reducers/countReducer';
import userReducer from '../reducers/userReducer';

const rootReducer = combineReducers({count: countReducer, user: userReducer});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
