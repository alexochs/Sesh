import {USER_CREATION_MAIL, USER_CREATION_USERNAME, USER_CREATION_PHOTO, USER_CREATION_PASSWORD, CLEAR_USER_CREATION_DATA} from "../constants";

const initialState = {
  mail: "",
  username: "",
  photo: "",
  password: "",
};

const userCreationDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_CREATION_MAIL:
      return {
        ...state,
        mail: action.payload,
      };

    case USER_CREATION_USERNAME:
      return {
        ...state,
        username: action.payload,
      };

    case USER_CREATION_PHOTO:
      return {
        ...state,
        photo: action.payload,
      };

    case USER_CREATION_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    case CLEAR_USER_CREATION_DATA:
      return {
        ...state,
        mail: "",
        username: "",
        photo: "",
        password: "",
      };

    default:
      return state;
  }
};

export default userCreationDataReducer;
