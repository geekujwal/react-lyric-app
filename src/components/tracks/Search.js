import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSongs } from "../../actions/songActions";

class Search extends Component {
  state = {
    userInput: ""
  };
  //   componentDidMount() {
  //     this.props.fetchSongs();
  //   }
  render() {
    const findTrack = e => {
      e.preventDefault();
      console.log(this.state.userInput);
    };

    const onChange = e => {
      this.setState({
        userInput: e.target.value
      });
    };
    return (
      <div className="card card-body mb-4 p-4">
        <h1 className="display-4 text-center">
          <i className="fas fa-music" /> Search For A Song
        </h1>
        <p className="lead text-center">Get the lyrics for any song</p>
        <form onSubmit={findTrack}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Song title..."
              name="userInput"
              value={this.state.userInput}
              onChange={onChange}
            />
          </div>
          <button
            className="btn btn-primary btn-lg btn-block mb-5"
            type="submit"
          >
            Get Track Lyrics
          </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  heading: state.songs.heading,
  songLists: state.songs.songLists
});

export default connect(
  mapStateToProps,
  { fetchSongs }
)(Search);
