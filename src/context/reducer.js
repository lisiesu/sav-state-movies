import { SEARCH_SHOWS, SET_SHOW, CLEAR_SHOW, SET_SCHEDULE, SET_SEASON, SET_EPISODE } from "./types";

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
    case SET_SCHEDULE:
      return {
        ...state,
        schedule: action.payload,
      };
    case SET_SEASON:
      return {
        ...state,
        seasons: action.payload,
      };
      case SET_EPISODE:
        return {
          ...state,
          episode: action.payload,
        };

    default:
      return state;
  }
}

export default showsReducer;
