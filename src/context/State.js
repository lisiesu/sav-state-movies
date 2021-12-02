import { useReducer } from "react";
import axios from 'axios';
import ShowsContext from "./context";
import ShowsReducer from "./reducer";
import { SEARCH_SHOWS, SET_SHOW, CLEAR_SHOW } from "./types";

function State(props) {
    const initialState = {
        shows:[],
        singleShow: {},
  
    }

const [state, dispatch] = useReducer(ShowsReducer, initialState)

async function searchShows(query){
    const {data} = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
    console.log('shows',data)
    dispatch({
        type: SEARCH_SHOWS,
        payload:data
    });
}

async function getSingleShow(id){
    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    console.log('single',data)
      dispatch({
        type:SET_SHOW,
        payload:data,
    });
}


function clearShow(){
    dispatch({
        type: CLEAR_SHOW,
    });
}

  return (
    <ShowsContext.Provider 
    value={{
        shows: state.shows,
        singleShow: state.singleShow,
        searchShows,
        getSingleShow,
        clearShow,
      
    }}>
    {props.children}
    </ShowsContext.Provider>
  );
}

export default State;