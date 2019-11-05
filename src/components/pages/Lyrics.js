import React, { Component, Fragment } from "react";
import Spinner from "../layouts/Spinner";
import { connect } from "react-redux";
import { fetchLyric } from "../../actions/songActions";
import { Link } from "react-router-dom";
import Moment from "react-moment";

class Lyrics extends Component {
  componentDidMount() {
    this.props.fetchLyric(this.props.match.params.id);
  }
  render() {
    if (
      this.props.track === undefined ||
      this.props.lyrics === undefined ||
      Object.keys(this.props.track).length === 0 ||
      Object.keys(this.props.lyrics).length === 0
    ) {
      return <Spinner />;
    } else {
      return (
        <Fragment>
          <Link to="/" className="btn btn-dark btn-sm mb-4">
            Go Back
          </Link>
          <div className="card">
            <h5 className="card-header">
              {/* {this.props.track.track.track_name} by{" "} */}
              <span className="text-secondary">
                {this.props.track.artist_name}
              </span>
            </h5>
            <div className="card-body">
              <p className="card-text">{this.props.lyrics.lyrics_body}</p>
            </div>
          </div>

          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Album ID</strong>: {this.props.track.album_id}
            </li>
            <li className="list-group-item">
              <strong>Song Genre</strong>:{" "}
              {this.props.track.primary_genres.music_genre_list.length === 0
                ? "NO GENRE AVAILABLE"
                : this.props.track.primary_genres.music_genre_list[0]
                    .music_genre.music_genre_name}
            </li>
            <li className="list-group-item">
              <strong>Explicit Words</strong>:{" "}
              {this.props.track.explicit === 0 ? "No" : "Yes"}
            </li>
            <li className="list-group-item">
              <strong>Release Date</strong>:{" "}
              <Moment format="MM/DD/YYYY">
                {this.props.track.first_release_date}
              </Moment>
            </li>
          </ul>
        </Fragment>
      );
    }
  }
}
const mapStateToProps = state => ({
  lyrics: state.songs.lyrics,
  track: state.songs.track,
  loading: state.songs.loading
});

export default connect(
  mapStateToProps,
  { fetchLyric }
)(Lyrics);
