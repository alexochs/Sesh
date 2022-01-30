import {SET_USER} from '../constants';

import database from '@react-native-firebase/database';
import {Alert} from 'react-native';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
