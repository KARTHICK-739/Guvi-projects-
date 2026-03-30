import React, { Component } from "react";
import NewsCard from "./NewsCard";

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=1c8b9e7a0c5d4e7b9f1c8e2f3a4b5c",
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          article: data.articles,
          loading: false,
        });
      })
      .catch((error) => {
        console.log("Error fetching news:", error);
      });
  }
}

render(){
    if (this.state.loading)
    return(
        <div className="text-center mt5">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-2">Fetching latest news...</p>
        </div>
    );
}

return (

)
