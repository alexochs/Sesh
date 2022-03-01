import database from '@react-native-firebase/database';

const initialState = {
  userdata: []
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BLABLABAL":
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
