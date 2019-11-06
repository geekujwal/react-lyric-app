import React, { Component } from "react";
import { connect } from "react-redux";
import { get_input_text, search_songs } from "../../actions/songActions";

class Search extends Component {
  render() {
    const findTrack = e => {
      e.preventDefault();
      this.props.search_songs(this.props.input_text);
    };

    const onChange = e => {
      this.props.get_input_text(e.target.value);
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
              value={this.props.input_text}
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
  input_text: state.songs.input_text
});

export default connect(
  mapStateToProps,
  { get_input_text, search_songs }
)(Search);
