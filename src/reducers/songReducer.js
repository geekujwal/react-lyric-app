import {
  SEARCH_SONGS,
  GET_INPUTED_TEXT,
  FETCH_SONGS,
  FETCH_LYRIC,
  FETCH_TRACK,
  LOADING,
  EMPTY_SONGS
} from "../actions/types";
const initialState = {
  input_text: "",
  heading: "",
  songList: [],
  lyrics: {},
  track: {},
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
    case SEARCH_SONGS:
      return {
        ...state,
        songList: action.payload.songList,
        heading: action.payload.heading,
        loading: false
      };
    case EMPTY_SONGS:
      return {
        ...state,
        songList: []
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case FETCH_LYRIC:
      return {
        ...state,
        lyrics: action.payload
      };
    case FETCH_TRACK:
      return {
        ...state,
        track: action.payload,
        loading: false
      };
    case GET_INPUTED_TEXT:
      return {
        ...state,
        input_text: action.payload
      };
    default:
      return state;
  }
}
