import React from "react";
import PropTypes from "prop-types";

import New from "./New";

const NewsList = ({ news }) => {
  return (
    <div className="row">
      {news.map((noticia) => (
        <New key={noticia.url} noticia={noticia} />
      ))}
    </div>
  );
};

NewsList.propTypes = {
  news: PropTypes.array.isRequired,
};

export default NewsList;
