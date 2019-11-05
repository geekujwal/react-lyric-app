import React, { Component } from "react";

import Search from "../tracks/Search";
import Tracks from "../tracks/Tracks";
export default class Home extends Component {
  render() {
    return (
      <div>
        <Search />
        <Tracks />
      </div>
    );
  }
}
