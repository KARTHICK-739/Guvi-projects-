import React, { Component } from "react";

class NewsCard extends Component {
  render() {
    const { title, description, url, image, source } = this.props.article;

    return (
      <div className="col-md-4 mb-4">
        <div className="card h-100 shadow-sm">
          <img
            src={image || "https://placehold.co/400x200?text=No+Image"}
            className="card-img-top"
            alt={title}
            style={{ height: "200px", objectFit: "cover" }}
          />

          <div className="card-body d-flex flex-column">
            <h6 className="card-title fw-bold">{title}</h6>
            <p className="card-text text-muted small">
              {description
                ? description.slice(0, 100) + "..."
                : "No description available"}
            </p>
            <div className="mt-auto">
              <span className="badge bg-primary mb-2">{source.name}</span>
              <br />
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-outline-primary"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsCard;
