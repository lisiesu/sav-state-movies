import { useReducer } from "react";
import axios from 'axios';
import ShowsContext from "./context";
import ShowsReducer from "./reducer";
import { SEARCH_SHOWS, SET_SHOW, CLEAR_SHOW, SET_SCHEDULE, SET_SEASON, SET_EPISODE } from "./types";

function State(props) {
    const initialState = {
        shows:[],
        singleShow: {},
        schedule:[],
        seasons:[],
        episode:[],
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

async function getSchedule(date) {
    const{data} = await axios.get(`https://api.tvmaze.com/schedule?country=GB&date=${date}`)
    console.log('schedule', data)
    dispatch({
        type: SET_SCHEDULE,
        payload:data,
    })
}

async function getSeason(id){
    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}/seasons`);
    console.log('seasons',data)
      dispatch({
        type:SET_SEASON,
        payload:data,
    });
}

async function getEpisodes(season) {
    const {data} = await axios.get(`https://api.tvmaze.com/seasons/${season}/episodes`)
    console.log('episodes', data)
    dispatch({
        type: SET_EPISODE,
        payload:data,
    })
}

  return (
    <ShowsContext.Provider 
    value={{
        shows: state.shows,
        singleShow: state.singleShow,
        schedule: state.schedule,
        seasons: state.seasons,
        episode: state.episode,
        searchShows,
        getSingleShow,
        clearShow,
        getSchedule,
        getSeason,
        getEpisodes,
      
    }}>
    {props.children}
    </ShowsContext.Provider>
  );
}

export default State;