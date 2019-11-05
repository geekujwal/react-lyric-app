import React, { Component } from "react";
import NavBar from "../layouts/NavBar";
import Search from "../tracks/Search";
import Tracks from "../tracks/Tracks";
export default class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Search />
        <Tracks />
      </div>
    );
  }
}
