import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsFeed from "./components/NewsFeed";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <h1>News App</h1>
      </div>
    );
  }
}

export default App;
