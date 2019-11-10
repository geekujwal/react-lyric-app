import {
  FETCH_SONGS,
  FETCH_LYRIC,
  FETCH_TRACK,
  LOADING,
  GET_INPUTED_TEXT,
  SEARCH_SONGS,
  EMPTY_SONGS
} from "./types";
import axios from "axios";

export const search_songs = text => dispatch => {
  dispatch({
    type: EMPTY_SONGS
  });
  dispatch({
    type: LOADING
  });
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${text}&page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
    )
    .then(res => {
      let track_list = res.data.message.body.track_list;
      dispatch({
        type: SEARCH_SONGS,
        payload: {
          songList: track_list,
          heading: "Search Results"
        }
      });
    });
};
export const get_input_text = text => dispatch => {
  dispatch({
    type: GET_INPUTED_TEXT,
    payload: text
  });
  console.log(text);
};
export const fetchSongs = () => dispatch => {
  dispatch({
    type: LOADING
  });
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
    )
    .then(res => {
      dispatch({
        type: FETCH_SONGS,
        payload: {
          songList: res.data.message.body.track_list,
          heading: "Top 10 Songs"
        }
        //   payload_heading: "Top 10 Tracks"
      });
    });
};
export const fetchLyric = song_id => dispatch => {
  dispatch({
    type: LOADING
  });
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${song_id}&apikey=${process.env.REACT_APP_MM_KEY}`
    )
    .then(res => {
      let lyrics = res.data.message.body.lyrics;
      dispatch({
        type: FETCH_LYRIC,
        payload: lyrics
      });
      return axios.get(
        `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${song_id}&apikey=${process.env.REACT_APP_MM_KEY}`
      );
    })
    .then(res => {
      let track = res.data.message.body.track;
      // setTrack({ track });
      dispatch({
        type: FETCH_TRACK,
        payload: track
      });
    })
    .catch(err => console.log(err));
};
