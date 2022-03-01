const initialState = {
  events: [],
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_EVENTS":
      return {
        ...state,
        events: [],
      };

    case "SET_EVENTS":
      return {
        ...state,
        events: action.payload,
      };
    
      case "ADD_EVENT":
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    default:
      return state;
  }
};

export default eventsReducer;
