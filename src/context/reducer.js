import { SEARCH_SHOWS, SET_SHOW, CLEAR_SHOW } from "./types";

function showsReducer(state, action) {
  switch (action.type) {
    case SEARCH_SHOWS:
      return {
        ...state,
        shows: action.payload, 
      };
      case SET_SHOW:
      return {
        ...state,
        singleShow: action.payload,
      };
      case CLEAR_SHOW:
      return {
        ...state,
        singleShow: {},
      };
    
    default:
      return state;
  }
}

export default showsReducer;
