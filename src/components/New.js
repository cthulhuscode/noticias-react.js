import React from "react";
import PropTypes from "prop-types";

const New = ({ noticia }) => {
  // Get the data
  const { urlToImage, url, title, description, source } = noticia;

  // Check image
  const image = urlToImage ? (
    <div className="card-image">
      <img src={urlToImage} alt={title} />
      <span className="card-title amber-text darken-2">{source.name}</span>
    </div>
  ) : null;

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        {image}
        <div className="card-content">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>

        <div className="card-action">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="waves-effect waves-light btn amber darken-2"
          >
            Ver noticia completa
          </a>
        </div>
      </div>
    </div>
  );
};

New.propTypes = {
  noticia: PropTypes.object.isRequired,
};

export default New;
