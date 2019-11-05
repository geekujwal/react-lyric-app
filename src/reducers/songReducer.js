import { FETCH_SONGS, LOADING } from "../actions/types";
const initialState = {
  heading: "",
  songList: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SONGS:
      return {
        ...state,
        songList: action.payload.songList,
        heading: action.payload.heading,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
