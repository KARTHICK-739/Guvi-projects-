import React, { Component } from "react";
import NewsCard from "./NewsCard";

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=in&apiKey=9b030bf618a04aa49ceb5b0d354bb7b4`,
    )
      .then((response) => response.json())
      .then((data) => {
        
        this.setState({
          articles: data.articles,
          loading: false,
        });
      })
      .catch((error) => {
        console.log("Error fetching news:", error);
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Fetching latest news...</p>
        </div>
      );
    }

    return (
      <div className="container mt-4">
        <div className="row">
          {this.state.articles.map((article) => (
            <NewsCard key={article.url} article={article} />
          ))}
        </div>
      </div>
    );
  }
}
export default NewsFeed;
