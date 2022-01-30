import {COUNTER_CHANGE} from '../constants';

import database from '@react-native-firebase/database';
import {Alert} from 'react-native';

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_CHANGE:
      database().ref('/users/testuser/counter').set({
        counter: action.payload,
      });
      return {
        ...state,
        count: action.payload,
      };

    default:
      return state;
  }
};

export default countReducer;
