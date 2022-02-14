import {createStore, combineReducers} from 'redux';

import countReducer from '../reducers/countReducer';
import userCreationDataReducer from '../reducers/userCreationDataReducer';
import userReducer from '../reducers/userReducer';

const rootReducer = combineReducers({count: countReducer, user: userReducer, userCreationData: userCreationDataReducer});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
