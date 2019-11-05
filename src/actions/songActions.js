import { FETCH_SONGS, LOADING } from "./types";
import axios from "axios";
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
