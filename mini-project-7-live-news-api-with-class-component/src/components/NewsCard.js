import React, { Component } from 'react';

class NewsCard extends Component {
  render() {
    const { title, description, url, image, source, publishedAt } = this.props.article;

    const date = new Date(publishedAt).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    return (
      <div className="col-md-4 mb-4">
        <div className="card h-100 news-card shadow-sm">

          <div style={{ overflow: 'hidden', height: '200px' }}>
            <img
              src={image || 'https://placehold.co/400x200?text=No+Image'}
              className="card-img-top w-100 h-100"
              alt={title}
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="card-body d-flex flex-column p-3">

            <div className="d-flex justify-content-between align-items-center mb-2">
              <span className="badge bg-primary">{source.name}</span>
              <small className="text-muted">{date}</small>
            </div>

            <h6 className="card-title fw-bold mb-2" style={{ lineHeight: '1.4' }}>
              {title}
            </h6>

            <p className="card-text text-muted small mb-3">
              {description ? description.slice(0, 100) + '...' : 'No description available'}
            </p>

            <div className="mt-auto">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm w-100"
              >
                Read Full Article →
              </a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default NewsCard;