import React, { Component, Fragment } from "react";
import Spinner from "../layouts/Spinner";
import { connect } from "react-redux";
import { fetchSongs } from "../../actions/songActions";
import Track from "../tracks/Track";
class Tracks extends Component {
  componentDidMount() {
    this.props.fetchSongs();
  }

  render() {
    if (this.props.songList === undefined || this.props.songList.length === 0) {
      return <Spinner />;
    } else {
      return (
        <Fragment>
          <h3 className="text-center mb-4">{this.props.heading}</h3>
          <div className="row">
            {this.props.songList.map(item => (
              <Track key={item.track.track_id} track={item.track} />
            ))}
          </div>
        </Fragment>
      );
    }
  }
}

const mapStateToProps = state => ({
  heading: state.songs.heading,
  songList: state.songs.songList
});

export default connect(
  mapStateToProps,
  { fetchSongs }
)(Tracks);
