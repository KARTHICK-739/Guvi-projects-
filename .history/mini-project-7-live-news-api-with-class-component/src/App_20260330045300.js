import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsFeed from "./components/NewsFeed";


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <NewsFeed />
      </div>
    );
  }
}

export default App;
