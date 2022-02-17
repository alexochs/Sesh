import {createStore, combineReducers} from 'redux';

import countReducer from '../reducers/countReducer';
import eventsReducer from '../reducers/eventsReducer';
import userCreationDataReducer from '../reducers/userCreationDataReducer';
import userReducer from '../reducers/userReducer';

const rootReducer = combineReducers({
  count: countReducer,
  user: userReducer,
  userCreationData: userCreationDataReducer,
  events: eventsReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
